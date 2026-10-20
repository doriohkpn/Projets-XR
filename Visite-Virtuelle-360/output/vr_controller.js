/**
 * CeGPA VR Controller & Interaction Engine v4.2
 * 
 * Correctif audio continu :
 * 1. SUPPRESSION DU PAUSE() QUI COUPE L'AUDIO À 3.5s :
 *    - L'ancien intervalle appelait pause() puis resume() à 3500ms, ce qui coupait net la voix.
 *    - Désormais, le keep-alive n'appelle QUE resume() de manière fluide et transparente.
 * 2. LECTURE COMPLÈTE EN UN SEUL BLOC (Single Utterance) :
 *    - La description complète est prononcée d'une seule traite pour éviter tout blocage
 *      de sécurité autoplay par le navigateur mobile entre deux phrases.
 * 3. PROTECTION GARBAGE COLLECTION :
 *    - Référencement permanent sur window._cegpa_current_utterance pour empêcher le ramasse-miettes
 *      de couper la synthèse vocale après quelques secondes.
 * 4. START / STOP PROPRE :
 *    - Première visée (1s) : démarre la lecture complète (qui continue même si l'utilisateur regarde ailleurs).
 *    - Deuxième visée (1s) : stoppe immédiatement la lecture.
 *    - Verrou (ud.zu = -2) : empêche de couper/redémarrer si l'utilisateur maintient son regard sur le bouton.
 * 5. BOUTON FERMER :
 *    - Ferme le cartel et stoppe l'audio.
 * 6. VIBRATIONS DÉSACTIVÉES.
 */
(function(window) {
  'use strict';

  // 0. DÉSACTIVATION COMPLÈTE DE L'API DE VIBRATION
  try {
    if (typeof navigator !== 'undefined') {
      try {
        Object.defineProperty(navigator, 'vibrate', {
          value: function() { return false; },
          writable: true,
          configurable: true
        });
      } catch(e) {
        navigator.vibrate = function() { return false; };
      }
    }
  } catch(e) {}

  function EM(t) {
    return t ? t.userData : {};
  }

  function decodeHtmlEntities(str) {
    return (str || '')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#xa;/gi, ' ')
      .replace(/&nbsp;/g, ' ');
  }

  const BTN_Y = 3.45;
  const BTN_Z = 0.250;
  const BTN_CLOSE_X = 3.55;
  const BTN_AUDIO_X = 2.70;

  // Paramètres de position et distance du cartel en VR
  const CARTEL_Z_OFFSET = 4.15;  // Rapproche davantage le cadre vers les yeux (~0.85m de distance)
  const CARTEL_Y_OFFSET = 1.95;  // Remonté haut (validé)
  const CARTEL_SCALE = 1.05;     // Échelle claire et lisible
  const CARTEL_TILT_RAD = -0.20; // Effet inverse de l'inclinaison orienté vers le spectateur (validé)

  let isSpeaking = false;
  let lastAudioToggleTime = 0;
  let speechResumeTimer = null;
  let audioBtnMesh = null;

  // Alignement précis de l'orientation du cartel pour TOUS les panoramas
  function alignCartelRotation(cartel) {
    if (!cartel) return;
    let tiltRad = 0;
    const parent = cartel.parent;
    if (parent) {
      const hs = (parent.userData && parent.userData.hotspot) || (cartel.userData && cartel.userData.hotspot);
      if (hs && typeof hs.tilt !== 'undefined') {
        tiltRad = (Number(hs.tilt) || 0) * Math.PI / 180;
      } else if (parent.position) {
        const pos = parent.position;
        const R = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
        if (R > 0.001) {
          tiltRad = Math.asin(-pos.y / R);
        }
      }
    }
    // Annulation exacte du pitch (tilt) du hotspot quel que soit le pan/panorama
    // + application de l'inclinaison désirée, avec roll et yaw rigoureusement à zéro
    cartel.rotation.x = -tiltRad + CARTEL_TILT_RAD;
    cartel.rotation.y = 0;
    cartel.rotation.z = 0;
  }

  // 1. POSITIONNEMENT DES BOUTONS ET RAPPROCHEMENT DU CARTEL
  function setupCartelButtons(popupCartel) {
    if (!popupCartel) return;
    popupCartel.userData.stopPropagation = true;

    // Rapprochement, élévation et inclinaison pupitre vers les yeux
    const pName = (popupCartel.name || '').toLowerCase();
    if (pName.includes('popup_cartel') && !pName.includes('subelement')) {
      popupCartel.position.z = CARTEL_Z_OFFSET;
      popupCartel.position.y = CARTEL_Y_OFFSET;
      popupCartel.scale.set(CARTEL_SCALE, CARTEL_SCALE, 1.0);

      alignCartelRotation(popupCartel);
    }

    popupCartel.traverse(function(child) {
      const id = ((child.userData && child.userData.ggId) || child.name || '').toLowerCase();

      if (!id.includes('btn_audio_vr') && !id.includes('btn_close_cartel')) {
        child.userData.stopPropagation = true;
      }

      if (id.includes('btn_audio_vr')) {
        audioBtnMesh = child;
        window._cegpa_audio_btn_mesh = child;
        child.position.set(BTN_AUDIO_X, BTN_Y, BTN_Z);
        child.renderOrder = 200000;
        child.userData.zIndex = 200;
        child.userData.zIndexCurrent = 200;
        child.userData.x = BTN_AUDIO_X;
        child.userData.y = BTN_Y;
        child.userData.z = BTN_Z;
        child.traverse(function(c) {
          c.renderOrder = 200000;
          if (c.material) {
            c.material.depthTest = false;
            c.material.depthWrite = false;
            c.material.transparent = true;
          }
        });
      }

      if (id.includes('btn_close_cartel')) {
        child.position.set(BTN_CLOSE_X, BTN_Y, BTN_Z);
        child.renderOrder = 200000;
        child.userData.zIndex = 200;
        child.userData.zIndexCurrent = 200;
        child.userData.x = BTN_CLOSE_X;
        child.userData.y = BTN_Y;
        child.userData.z = BTN_Z;
        child.traverse(function(c) {
          c.renderOrder = 200000;
          if (c.material) {
            c.material.depthTest = false;
            c.material.depthWrite = false;
            c.material.transparent = true;
          }
        });
      }
    });
  }

  // 2. FERMETURE DU CARTEL
  function closeActiveCartel(targetObj, player) {
    console.log("[CeGPA VR] Fermeture du cartel demandée");
    stopDescriptionAudio();

    let cur = targetObj;
    while (cur) {
      const id = ((cur.userData && cur.userData.ggId) || cur.name || '').toLowerCase();
      if (id.includes('popup_cartel')) {
        cur.visible = false;
        cur.userData.visible = false;
        cur.userData.opacity = 1.0;
        cur.traverse(function(c) {
          c.visible = false;
          if (c.userData) { c.userData.visible = false; }
        });
        break;
      }
      cur = cur.parent;
    }

    const p = player || window.pano;
    if (p && p.BE && p.BE.al) {
      p.BE.al.traverse(function(node) {
        const id = ((node.userData && node.userData.ggId) || node.name || '').toLowerCase();
        if (id.includes('popup_cartel')) {
          node.visible = false;
          node.userData.visible = false;
          node.userData.opacity = 1.0;
          node.traverse(function(c) {
            c.visible = false;
            if (c.userData) { c.userData.visible = false; }
          });
        }
      });
    }

    if (p && typeof p.repaint === 'function') p.repaint();
  }
  window._cegpa_closeCartel = closeActiveCartel;

  // 3. ARRÊT FORCÉ DE L'AUDIO
  function stopDescriptionAudio() {
    isSpeaking = false;
    window._cegpa_is_reading = false;

    if (speechResumeTimer) {
      clearInterval(speechResumeTimer);
      speechResumeTimer = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch(e) {}
    }

    window._cegpa_current_utterance = null;
    window._cegpa_utterance_holder = [];

    if (audioBtnMesh) audioBtnMesh.scale.set(1.0, 1.0, 1.0);
    if (window._cegpa_audio_btn_mesh) window._cegpa_audio_btn_mesh.scale.set(1.0, 1.0, 1.0);
  }
  window._cegpa_stopAudio = stopDescriptionAudio;

  // 4. BASCULE START / STOP AUDIO
  function toggleDescriptionAudio(targetObj, player) {
    if (!window.speechSynthesis) {
      console.warn("[CeGPA VR] SpeechSynthesis non supporté sur ce navigateur.");
      return;
    }

    const now = Date.now();
    if (now - lastAudioToggleTime < 800) return;
    lastAudioToggleTime = now;

    // Si la lecture est déjà active, on l'arrête (STOP)
    if (isSpeaking || window._cegpa_is_reading || window.speechSynthesis.speaking) {
      console.log("[CeGPA VR] Audio description : STOP demandé");
      stopDescriptionAudio();
      return;
    }

    // Sinon, on lance la lecture complète (START)
    console.log("[CeGPA VR] Audio description : START");
    let rawDesc = '';

    let cur = targetObj;
    while (cur) {
      if (cur.userData && cur.userData.description) { rawDesc = cur.userData.description; break; }
      if (cur.userData && cur.userData.hotspot && cur.userData.hotspot.description) {
        rawDesc = cur.userData.hotspot.description; break;
      }
      cur = cur.parent;
    }

    if (!rawDesc && window._cegpa_current_description) {
      rawDesc = window._cegpa_current_description;
    }

    const p = player || window.pano;
    if (!rawDesc && p && typeof p.getActiveHotspot === 'function') {
      const hs = p.getActiveHotspot();
      if (hs && hs.description) rawDesc = hs.description;
    }

    if (!rawDesc && p && p.getPointHotspotIds && p.getHotspotPropValue) {
      const ids = p.getPointHotspotIds();
      for (let j = 0; j < ids.length; j++) {
        const d = p.getHotspotPropValue(ids[j], 'description');
        if (d && d.trim()) { rawDesc = d; break; }
      }
    }

    let cleanText = decodeHtmlEntities(rawDesc || '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[\r\n]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) cleanText = "Cette œuvre ne comporte pas de description texte.";

    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    } catch(e) {}

    try {
      // Lecture complète d'un seul bloc (évite les coupures autoplay sur mobile)
      const utter = new SpeechSynthesisUtterance(cleanText);
      utter.lang = 'fr-FR';
      utter.rate = 0.95;
      utter.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const frVoice = voices.find(function(v) {
          return v.lang && (v.lang.startsWith('fr') || v.lang.startsWith('FR'));
        });
        if (frVoice) utter.voice = frVoice;
      }

      utter.onend = function() {
        console.log("[CeGPA VR] Fin de la lecture audio complète");
        stopDescriptionAudio();
      };

      utter.onerror = function(e) {
        if (e && e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn("[CeGPA VR] Notification SpeechSynthesis:", e.error);
        }
        stopDescriptionAudio();
      };

      // Ancrage anti-Garbage Collection (évite que Chrome ne détruise l'objet en cours de lecture)
      window._cegpa_current_utterance = utter;
      if (!window._cegpa_utterance_holder) window._cegpa_utterance_holder = [];
      window._cegpa_utterance_holder.push(utter);
      if (window._cegpa_utterance_holder.length > 10) window._cegpa_utterance_holder.shift();

      isSpeaking = true;
      window._cegpa_is_reading = true;

      window.speechSynthesis.speak(utter);

      // Keep-alive SANS pause() : appelle uniquement resume() si le navigateur s'endort
      if (speechResumeTimer) clearInterval(speechResumeTimer);
      speechResumeTimer = setInterval(function() {
        if (!isSpeaking || !window._cegpa_is_reading) {
          clearInterval(speechResumeTimer);
          speechResumeTimer = null;
          return;
        }
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        }
      }, 2000);

    } catch(err) {
      console.error("[CeGPA VR] Erreur démarrage audio:", err);
      stopDescriptionAudio();
    }
  }
  window._cegpa_playAudio = toggleDescriptionAudio;

  // 5. OUVERTURE DU CARTEL
  function checkAndSetupCartel(targetObj, player) {
    if (!targetObj) return;

    let root = targetObj;
    while (root.parent) {
      const rId = ((root.userData && root.userData.ggId) || root.name || '').toLowerCase();
      if (rId.includes('ht_info') || rId.includes('ht_image')) break;
      root = root.parent;
    }

    // Récupérer la description de l'œuvre
    let foundDesc = '';
    let cur = targetObj;
    while (cur) {
      if (cur.userData && cur.userData.hotspot && cur.userData.hotspot.description) {
        foundDesc = cur.userData.hotspot.description; break;
      }
      if (cur.userData && cur.userData.description) {
        foundDesc = cur.userData.description; break;
      }
      cur = cur.parent;
    }
    if (foundDesc) {
      window._cegpa_current_description = foundDesc;
    }

    root.traverse(function(child) {
      const id = ((child.userData && child.userData.ggId) || child.name || '').toLowerCase();
      if (id.includes('popup_cartel')) {
        child.visible = true;
        child.userData.visible = true;
        child.userData.opacity = 1.0;
        if (child.userData.setOpacity) child.userData.setOpacity(1.0);

        // Rapprochement, élévation et inclinaison pupitre vers les yeux
        if (!id.includes('subelement')) {
          child.position.z = CARTEL_Z_OFFSET;
          child.position.y = CARTEL_Y_OFFSET;
          child.scale.set(CARTEL_SCALE, CARTEL_SCALE, 1.0);

          alignCartelRotation(child);
        }

        child.traverse(function(sub) {
          sub.visible = true;
          if (sub.userData) {
            sub.userData.visible = true;
            sub.userData.opacity = 1.0;
          }
        });
        setupCartelButtons(child);
      }
    });

    const p = player || window.pano;
    if (p && typeof p.repaint === 'function') p.repaint();
  }

  // --- CRÉATION DU RÉTICULE "CIBLE / MUSÉE" BLANC ÉPAIS ---
  let reticleCanvas = null;
  let reticleTexture = null;

  function drawMuseumReticleCanvas() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.clearRect(0, 0, 256, 256);
    const cx = 128, cy = 128, r = 70;

    // Ombre portée / contour de contraste noir pour visibilité optimale sur décors clairs
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';

    // Contour anneau noir
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // 4 repères cardinaux noirs
    ctx.beginPath();
    ctx.moveTo(cx, 22); ctx.lineTo(cx, 52);
    ctx.moveTo(cx, 204); ctx.lineTo(cx, 234);
    ctx.moveTo(22, cy); ctx.lineTo(52, cy);
    ctx.moveTo(204, cy); ctx.lineTo(234, cy);
    ctx.stroke();

    // Point central noir
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Réticule principal BLANC ÉPAIS (Style Cible / Musée)
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';

    // Anneau blanc
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // 4 repères cardinaux blancs
    ctx.beginPath();
    ctx.moveTo(cx, 22); ctx.lineTo(cx, 52);
    ctx.moveTo(cx, 204); ctx.lineTo(cx, 234);
    ctx.moveTo(22, cy); ctx.lineTo(52, cy);
    ctx.moveTo(204, cy); ctx.lineTo(234, cy);
    ctx.stroke();

    // Point central plein blanc
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, 11, 0, Math.PI * 2);
    ctx.fill();

    return canvas;
  }

  function getReticleTexture() {
    const THREE = window.THREE;
    if (!reticleTexture && THREE && THREE.CanvasTexture) {
      reticleCanvas = drawMuseumReticleCanvas();
      if (reticleCanvas) {
        reticleTexture = new THREE.CanvasTexture(reticleCanvas);
        reticleTexture.needsUpdate = true;
      }
    }
    return reticleTexture;
  }

  // Positionnement de l'icône de cible sur le rayon du contrôleur
  function updateRayReticle(engine, controllerIndex) {
    const ctrl = engine.Qh && engine.Qh[controllerIndex];
    if (!ctrl || !ctrl.visible) return;

    // S'assurer que l'ancien tiret noir natif et le groupe central sont masqués
    if (engine.xh && engine.xh !== engine._cegpa_reticle) {
      engine.xh.visible = false;
      if (engine.xh.material) {
        engine.xh.material.visible = false;
        engine.xh.material.opacity = 0;
      }
    }
    if (engine.Sh) engine.Sh.visible = false;

    const THREE = window.THREE;
    if (!THREE) return;
    const texture = getReticleTexture();
    if (!texture) return;

    // Rendre prioritaire le groupe de contrôleur au premier plan
    ctrl.renderOrder = 1000000000;
    if (ctrl.parent) ctrl.parent.renderOrder = 1000000000;

    let rayReticle = ctrl.getObjectByName('cegpa_ray_reticle');
    if (!rayReticle) {
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        depthTest: false,
        depthWrite: false
      });
      rayReticle = new THREE.Sprite(mat);
      rayReticle.name = 'cegpa_ray_reticle';
      rayReticle.renderOrder = 1000000000;
      ctrl.add(rayReticle);
    }

    // RENDRE LE RAYON LASER INVISIBLE (laisser uniquement la cible)
    const line = ctrl.getObjectByName('line');
    if (line) {
      line.visible = false;
      if (line.material) {
        line.material.visible = false;
        line.material.opacity = 0;
        line.material.transparent = true;
      }
    }
    if (engine.Mh) {
      engine.Mh.visible = false;
      if (engine.Mh.material) {
        engine.Mh.material.visible = false;
        engine.Mh.material.opacity = 0;
      }
    }

    // Récupération de la distance du rayon
    let dist = 5.0;
    if (engine._n && engine._n.length > 0) {
      for (let i = 0; i < engine._n.length; i++) {
        const ud = EM(engine._n[i]);
        if (ud.Ql === controllerIndex && ud.distance) {
          dist = ud.distance;
          break;
        }
      }
    }
    if (dist === 5.0 && line && line.scale && line.scale.z) {
      dist = line.scale.z;
    }

    // Positionnement de la cible AU PREMIER PLAN (légèrement devant l'élément pour ne jamais passer derrière)
    const targetDist = Math.max(0.1, dist - 0.12);
    rayReticle.position.set(0, 0, -targetDist);
    rayReticle.renderOrder = 1000000000;

    // Échelle visuelle stable et lisible + retour de dwell (zoom pendant le focus)
    const dwell = engine._cegpa_dwellScale || 1.0;
    const sz = Math.max(0.08, 0.045 * targetDist) * dwell;
    rayReticle.scale.set(sz, sz, 1.0);
    rayReticle.visible = true;

    if (rayReticle.material) {
      rayReticle.material.opacity = 0.90 + 0.10 * (dwell > 1.0 ? Math.min(1.0, (dwell - 1.0) / 0.25) : 0);
      rayReticle.material.depthTest = false;
      rayReticle.material.depthWrite = false;
    }
  }

  // Positionnement du viseur cible de tête (mode regard / head tracking)
  function updateHeadReticle(engine) {
    if (!engine || !engine.jc) return;
    const THREE = window.THREE;
    if (!THREE) return;
    const texture = getReticleTexture();
    if (!texture) return;

    if (!engine._cegpa_reticle) {
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        depthTest: false,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(mat);
      sprite.name = 'cegpa_museum_reticle';
      sprite.renderOrder = 1000000000;
      engine._cegpa_reticle = sprite;
    }

    const sprite = engine._cegpa_reticle;
    if (sprite.parent !== engine.jc) {
      engine.jc.add(sprite);
    }

    // Calcul de l'origine et de la direction du regard dans la scène
    const origin = new THREE.Vector3();
    const direction = new THREE.Vector3();
    if (engine.sc) {
      try { engine.sc.updateMatrixWorld(true); } catch(err) {}
      origin.setFromMatrixPosition(engine.sc.matrixWorld);
      direction.set(0, 0, -1).transformDirection(engine.sc.matrixWorld);
    } else if (engine.Qe) {
      engine.Qe.updateProjectionMatrix();
      origin.setFromMatrixPosition(engine.Qe.matrixWorld);
      direction.set(0, 0, -1).transformDirection(engine.Qe.matrixWorld);
    } else {
      direction.set(0, 0, -1);
    }

    const rawDist = (engine._n && engine._n.length > 0 && EM(engine._n[0]).distance) ? EM(engine._n[0]).distance : 5.0;
    const targetDist = Math.max(0.1, rawDist - 0.12);

    sprite.position.copy(origin).addScaledVector(direction, targetDist);

    const dwell = engine._cegpa_dwellScale || 1.0;
    const sz = Math.max(0.08, 0.045 * targetDist) * dwell;
    sprite.scale.set(sz, sz, 1.0);
    sprite.visible = true;
    sprite.renderOrder = 1000000000;

    if (sprite.material) {
      sprite.material.opacity = 0.90 + 0.10 * (dwell > 1.0 ? Math.min(1.0, (dwell - 1.0) / 0.25) : 0);
      sprite.material.depthTest = false;
      sprite.material.depthWrite = false;
    }

    engine.xh = sprite;
    engine._cegpa_reticle_ready = true;
  }

  // 6. PATCH DU MOTEUR PANO2VR (fD prototype)
  function patchEngine(proto) {
    if (!proto || proto._cegpa_v4_patched) return;
    proto._cegpa_v4_patched = true;

    // Désactivation TOTALE de la vibration interne
    proto.Lu = function() {};

    // Hook de Cl pour bloquer définitivement l'affichage du trait/rayon par défaut
    proto.Cl = function(t) {
      if (!t || !t.getObjectByName) return;
      const line = t.getObjectByName('line');
      if (line) {
        line.visible = false;
        if (line.material) {
          line.material.visible = false;
          line.material.opacity = 0;
          line.material.transparent = true;
        }
      }
    };

    // Hook de Fu pour mettre à jour la cible sur le rayon
    const origFu = proto.Fu;
    proto.Fu = function(t) {
      if (typeof origFu === 'function') {
        origFu.apply(this, arguments);
      }
      updateRayReticle(this, t);
    };

    // ku : Raycasting WebXR orienté tête
    proto.ku = function() {
      const t = this;
      let e = t.Gs;
      if (t.sc) {
        try { t.sc.updateMatrixWorld(true); } catch(err) {}
        e.ray.origin.setFromMatrixPosition(t.sc.matrixWorld);
        e.ray.direction.set(0, 0, -1).transformDirection(t.sc.matrixWorld);
      } else {
        t.Qe.updateProjectionMatrix();
        e.setFromCamera(t.xc, t.Qe);
      }
      var n = t.Tu(e);
      if (n.length > 0) t.Kt(n);
    };

    // ju : Boucle continue de visée
    proto.ju = function() {
      const t = this;
      t.Ps;
      t.Dh = t._n.slice();
      t.jl();
      for (let e = 0; e < t.Qh.length; e++) t.Qh[e].visible && t.Fu(e);
      t.Ph || t.Nu();
      t.Yh && t.ku();
      t._n.length > 1 && t._n.sort((a, b) => (EM(a).distance || 0) - (EM(b).distance || 0));

      // S'assurer que le tiret noir natif et le groupe central sont masqués
      if (t.xh && t.xh !== t._cegpa_reticle) {
        t.xh.visible = false;
        if (t.xh.material) {
          t.xh.material.visible = false;
          t.xh.material.opacity = 0;
        }
      }
      if (t.Sh) {
        t.Sh.visible = false;
      }

      // Masquage continu de tous les rayons laser (laisser uniquement la cible)
      if (t.Qh) {
        for (let e = 0; e < t.Qh.length; e++) {
          const c = t.Qh[e];
          if (c) {
            const l = c.getObjectByName('line');
            if (l) {
              l.visible = false;
              if (l.material) {
                l.material.visible = false;
                l.material.opacity = 0;
                l.material.transparent = true;
              }
            }
          }
        }
      }
      if (t.Mh) {
        t.Mh.visible = false;
        if (t.Mh.material) {
          t.Mh.material.visible = false;
          t.Mh.material.opacity = 0;
        }
      }

      // Détection des contrôleurs actifs
      let hasActiveController = false;
      if (t.Qh && t.Qh.length > 0) {
        for (let e = 0; e < t.Qh.length; e++) {
          const c = t.Qh[e];
          if (c && c.visible) {
            hasActiveController = true;
            updateRayReticle(t, e);
          }
        }
      }

      // Affichage du viseur cible : tête ou contrôleur
      if (hasActiveController) {
        if (t._cegpa_reticle) t._cegpa_reticle.visible = false;
      } else {
        updateHeadReticle(t);
      }

      // Maintenir les boutons au premier plan quand le cartel est ouvert
      if (t.al) {
        t.al.traverse(function(node) {
          const nId = ((node.userData && node.userData.ggId) || node.name || '').toLowerCase();
          if (node.visible && nId.includes('popup_cartel')) {
            setupCartelButtons(node);
          }
        });
      }

      // Pulsation de l'icône audio pendant la lecture pour feedback visuel
      if (window._cegpa_is_reading && window._cegpa_audio_btn_mesh) {
        const pulse = 1.0 + 0.12 * Math.sin(Date.now() / 250);
        window._cegpa_audio_btn_mesh.scale.set(pulse, pulse, 1.0);
      } else if (window._cegpa_audio_btn_mesh && !window._cegpa_is_reading) {
        window._cegpa_audio_btn_mesh.scale.set(1.0, 1.0, 1.0);
      }

      const rawHit = t._n.length > 0 ? t._n[0] : null;

      // Résolution de l'élément cliquable
      let i = null;
      if (rawHit) {
        let check = rawHit;
        let fallback = null;
        while (check) {
          const ud = check.userData || {};
          if (ud.onmouseenter || ud.onmouseleave) { i = check; break; }
          if (!fallback && (typeof ud.onclick === 'function' || (ud.hotspot && !ud.fromSkin))) {
            fallback = check;
          }
          if (ud.stopPropagation) break;
          check = check.parent;
        }
        if (!i) i = fallback;
      }

      try { t.Hu(i, rawHit); } catch(err) {}

      const s = t.Nh;

      // Leave : le regard a quitté l'élément cible
      if (s) {
        if (!t.Ou(s, t._n)) {
          t.Uu(s, 'onmouseleave');
          t.qu(s, true); // Déverrouille le timer, mais NE COUPE PAS L'AUDIO
          t.Nh = null;
        }
      }

      const r = t.Nh;
      if (i && i !== r) {
        t._lastRawClosestOnEnter = rawHit;
        t.Uu(i, 'onmouseenter');
        t.qu(i, false);
        t.Nh = i;
      } else if (t.Nh) {
        t.qu(t.Nh, false);
      }
    };

    // qu : Validation temporelle (1 seconde de visée fixe / dwell)
    proto.qu = function(targetObj, isLeave) {
      const n = this;
      const reticle = n.xh;

      let i = targetObj;
      do {
        const ud = EM(i);

        if (ud.onclick || (ud.hotspot && !ud.fromSkin)) {
          if (isLeave) {
            // Le regard a quitté le bouton : réinitialisation pour la prochaine visée
            ud.zu = -1;
            n._cegpa_dwellScale = 1.0;
            if (reticle) {
              if (reticle.material) reticle.material.opacity = 0.85;
              reticle._dwellScale = 1.0;
            }
          } else if (ud.zu === -2) {
            // Verrou actif : l'action a déjà été exécutée pour cette visée continue.
            return;
          } else if (ud.zu && ud.zu !== -1) {
            const elapsed = (Date.now() - ud.zu) / 1000.0;

            if (elapsed >= 1.0) {
              ud.zu = -2; // Verrouille le bouton jusqu'au prochain regard ailleurs (anti-boucle)
              n._cegpa_dwellScale = 1.0;
              if (reticle) {
                if (reticle.material) reticle.material.opacity = 0.85;
                reticle._dwellScale = 1.0;
              }

              const objId = ((i.name || '') + ' ' + (ud.ggId || '')).toLowerCase();

              // 1. Bouton fermeture : ferme le cartel et stoppe l'audio
              if (objId.includes('btn_close_cartel')) {
                console.log("[CeGPA VR] Clic fermeture via visée");
                closeActiveCartel(i, n.Ps);
                return;
              }

              // 2. Bouton audio : bascule Start / Stop
              if (objId.includes('btn_audio_vr')) {
                console.log("[CeGPA VR] Clic audio via visée (toggle Start/Stop)");
                toggleDescriptionAudio(i, n.Ps);
                return;
              }

              // 3. Bouton / icône info : ouvre le cartel
              if (objId.includes('ht_info') || objId.includes('icon_info')) {
                console.log("[CeGPA VR] Clic ouverture info via visée");
                if (typeof ud.onclick === 'function') {
                  try { ud.onclick(); } catch(err) { console.error(err); }
                }
                checkAndSetupCartel(i, n.Ps);
                return;
              }

              // 4. Cas général : onclick ou navigation vers panorama suivant
              if (typeof ud.onclick === 'function') {
                try { ud.onclick(); } catch(err) { console.error(err); }
              } else if (ud.hotspot && ud.hotspot.url && n.Ps && n.Ps.Zi) {
                n.Ps.Zi(ud.hotspot.url, ud.hotspot.target);
              }
              return;

            } else {
              // Progression visuelle sur le réticule pendant la visée (zoom focus + surbrillance)
              n._cegpa_dwellScale = 1.0 + 0.20 * Math.min(1.0, elapsed);
              if (reticle) {
                if (reticle.material) {
                  reticle.material.opacity = 0.85 + 0.15 * Math.min(1.0, elapsed);
                }
                reticle._dwellScale = 1.0 + 0.20 * Math.min(1.0, elapsed);
              }
            }
          } else {
            // Début du compte à rebours de visée
            ud.zu = Date.now();
          }
          return;
        }

      } while (!EM(i).stopPropagation && (i = i.parent));
    };

    // yl : Déclenchement immédiat sur tap ou gâchette
    const origYl = proto.yl;
    proto.yl = function(e) {
      const n = this;
      const s = n.Ps;
      if (n._n.length > 0) {
        const hit = n._n[0];
        let clickNode = hit;
        while (clickNode) {
          const ud = clickNode.userData || {};
          const objId = ((clickNode.name || '') + ' ' + ((ud && ud.ggId) || '')).toLowerCase();

          if (objId.includes('btn_close_cartel')) {
            closeActiveCartel(clickNode, s);
            return;
          }
          if (objId.includes('btn_audio_vr')) {
            toggleDescriptionAudio(clickNode, s);
            return;
          }
          if (objId.includes('ht_info') || objId.includes('icon_info')) {
            if (typeof ud.onclick === 'function') { try { ud.onclick(); } catch(err) {} }
            checkAndSetupCartel(clickNode, s);
            return;
          }

          if (typeof ud.onclick === 'function') {
            ud.onclick();
            return;
          } else if (ud.hotspot && !ud.fromSkin && ud.hotspot.url && s && s.Zi) {
            s.Zi(ud.hotspot.url, ud.hotspot.target);
            return;
          }
          clickNode = clickNode.parent;
        }
      }
      if (typeof origYl === 'function') origYl.call(this, e);
    };
  }

  // 7. SURVEILLANCE CONTINUE ET HOOK DU PLAYER
  function hookPlayer() {
    const p = window.pano;
    if (p && p.BE) {
      patchEngine(Object.getPrototypeOf(p.BE));
      if (p.BE.al) {
        p.BE.al.traverse(function(n) {
          const nId = ((n.userData && n.userData.ggId) || n.name || '').toLowerCase();
          if (nId.includes('popup_cartel') && n.visible) {
            setupCartelButtons(n);
          }
        });
      }
    }
    if (window.pano2vrPlayer && window.pano2vrPlayer.prototype) {
      const origPl = window.pano2vrPlayer.prototype.Pl;
      if (origPl && !origPl._cegpa_hooked) {
        window.pano2vrPlayer.prototype.Pl = function(t) {
          const res = origPl.apply(this, arguments);
          if (this.BE) patchEngine(Object.getPrototypeOf(this.BE));
          return res;
        };
        window.pano2vrPlayer.prototype.Pl._cegpa_hooked = true;
      }
      const origOpenNext = window.pano2vrPlayer.prototype.openNext;
      if (origOpenNext && !origOpenNext._cegpa_audio_hooked) {
        window.pano2vrPlayer.prototype.openNext = function() {
          stopDescriptionAudio();
          return origOpenNext.apply(this, arguments);
        };
        window.pano2vrPlayer.prototype.openNext._cegpa_audio_hooked = true;
      }

      // Arrêt de l'autorotation dès que la souris bouge dans le panorama
      const origHw = window.pano2vrPlayer.prototype.hw;
      if (origHw && !origHw._cegpa_hw_hooked) {
        window.pano2vrPlayer.prototype.hw = function(e) {
          if (this.Ud && this.Ud.active) {
            this._f(true);
          }
          const now = Date.now();
          this.eI = now;
          if (this.Ud) this.Ud.lastactivity = now;
          return origHw.apply(this, arguments);
        };
        window.pano2vrPlayer.prototype.hw._cegpa_hw_hooked = true;
      }
    }
  }

  // 8. TAP ÉCRAN SUR SMARTPHONE EN VR
  function onTouchOrClick(e) {
    const p = window.pano;
    if (!p || !p.BE) return;
    const inVR = (typeof p.isInVR === 'function' && p.isInVR());
    if (!inVR) return;

    const be = p.BE;
    if (be._n && be._n.length > 0) {
      const hit = be._n[0];
      let clickNode = hit;
      while (clickNode) {
        const ud = clickNode.userData || {};
        const objId = ((clickNode.name || '') + ' ' + ((ud && ud.ggId) || '')).toLowerCase();

        if (objId.includes('btn_close_cartel')) { closeActiveCartel(clickNode, p); break; }
        if (objId.includes('btn_audio_vr')) { toggleDescriptionAudio(clickNode, p); break; }

        if (objId.includes('ht_info') || objId.includes('icon_info')) {
          if (typeof ud.onclick === 'function') { try { ud.onclick(); } catch(err) {} }
          checkAndSetupCartel(clickNode, p);
          break;
        }

        if (typeof ud.onclick === 'function') { ud.onclick(); break; }
        if (ud.hotspot && !ud.fromSkin && ud.hotspot.url && p.Zi) { p.Zi(ud.hotspot.url, ud.hotspot.target); break; }
        clickNode = clickNode.parent;
      }
    }
  }

  window.addEventListener('touchstart', onTouchOrClick, { passive: true });
  window.addEventListener('click', onTouchOrClick, { passive: true });

  // 9. ARRÊT DU DÉFILEMENT AUTOMATIQUE AU MOUVEMENT DE LA SOURIS
  function onUserMouseMove() {
    const p = window.player || window.pano;
    if (!p) return;
    if (p.Ud && p.Ud.active) {
      if (typeof p._f === 'function') {
        p._f(true);
      } else if (typeof p.pauseAutorotate === 'function') {
        p.pauseAutorotate();
      }
    }
    const now = Date.now();
    p.eI = now;
    if (p.Ud) p.Ud.lastactivity = now;
  }

  window.addEventListener('mousemove', onUserMouseMove, { passive: true });
  window.addEventListener('pointermove', onUserMouseMove, { passive: true });

  setInterval(hookPlayer, 250);
  hookPlayer();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookPlayer);
  }
  window.addEventListener('load', hookPlayer);

})(typeof window !== 'undefined' ? window : this);