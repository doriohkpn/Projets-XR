/**
 * CeGPA - Gestionnaire de Popup d'Information Enrichi (Image & Audio/TTS)
 * Centre de Gestion du Patrimoine Muséal et des Arts - UAC
 */
(function() {
    'use strict';

    // --- MOTEUR AUDIO & SYNTHÈSE VOCALE (TTS) ---
    class CeGPAAudioManager {
        constructor() {
            this.synth = window.speechSynthesis;
            this.audioEl = new Audio();
            this.isPlaying = false;
            this.isPaused = false;
            this.mode = 'none'; // 'tts' ou 'file'
            this.text = '';
            this.audioUrl = '';
            this.onStateChange = null;

            this.audioEl.addEventListener('ended', () => this.handleEnd());
            this.audioEl.addEventListener('pause', () => {
                if (this.isPlaying && !this.audioEl.ended) {
                    this.isPaused = true;
                    this.notify();
                }
            });
            this.audioEl.addEventListener('play', () => {
                this.isPlaying = true;
                this.isPaused = false;
                this.notify();
            });
        }

        notify() {
            if (typeof this.onStateChange === 'function') {
                this.onStateChange({
                    isPlaying: this.isPlaying,
                    isPaused: this.isPaused,
                    mode: this.mode
                });
            }
        }

        load(text, audioUrl) {
            this.stop();
            this.text = text || '';
            this.audioUrl = audioUrl || '';
            this.notify();
        }

        togglePlay() {
            if (this.isPlaying && !this.isPaused) {
                this.pause();
            } else if (this.isPaused) {
                this.resume();
            } else {
                this.play();
            }
        }

        play() {
            if (this.audioUrl) {
                this.mode = 'file';
                this.audioEl.src = this.audioUrl;
                this.audioEl.play().then(() => {
                    this.isPlaying = true;
                    this.isPaused = false;
                    this.notify();
                }).catch(err => {
                    console.warn('Erreur lecture audio fichier, bascule vers synthèse vocale:', err);
                    this.playTTS();
                });
                return;
            }
            this.playTTS();
        }

        playTTS() {
            if (!this.synth) {
                alert("La synthèse vocale n'est pas supportée par votre navigateur.");
                return;
            }
            const cleanText = this.text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            if (!cleanText) return;

            this.stop();
            this.mode = 'tts';

            const utter = new SpeechSynthesisUtterance(cleanText);
            utter.lang = 'fr-FR';
            utter.rate = 0.96; // Débit calme et posé adapté aux descriptions muséales

            // Sélection d'une voix française naturelle
            const voices = this.synth.getVoices();
            const frVoice = voices.find(v => v.lang.startsWith('fr') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Thomas') || v.name.includes('Audrey') || v.name.includes('Amelie'))) ||
                            voices.find(v => v.lang.startsWith('fr'));
            if (frVoice) {
                utter.voice = frVoice;
            }

            utter.onstart = () => {
                this.isPlaying = true;
                this.isPaused = false;
                this.notify();
            };

            utter.onend = () => {
                this.handleEnd();
            };

            utter.onerror = (e) => {
                console.error('Erreur synthèse vocale:', e);
                this.handleEnd();
            };

            this.synth.cancel();
            this.synth.speak(utter);
            this.isPlaying = true;
            this.isPaused = false;
            this.notify();
        }

        pause() {
            if (this.mode === 'tts' && this.synth) {
                this.synth.pause();
                this.isPaused = true;
                this.notify();
            } else if (this.mode === 'file' && this.audioEl) {
                this.audioEl.pause();
                this.isPaused = true;
                this.notify();
            }
        }

        resume() {
            if (this.mode === 'tts' && this.synth) {
                this.synth.resume();
                this.isPaused = false;
                this.notify();
            } else if (this.mode === 'file' && this.audioEl) {
                this.audioEl.play();
                this.isPaused = false;
                this.notify();
            }
        }

        stop() {
            if (this.synth) {
                this.synth.cancel();
            }
            if (this.audioEl) {
                this.audioEl.pause();
                this.audioEl.currentTime = 0;
            }
            this.isPlaying = false;
            this.isPaused = false;
            this.notify();
        }

        handleEnd() {
            this.isPlaying = false;
            this.isPaused = false;
            this.notify();
        }
    }

    // --- GESTIONNAIRE D'EXTRACTION DE CONTENU & MÉDIAS ---
    function parseHotspotContent(rawTitle, rawDesc, rawUrl) {
        let imageUrl = null;
        let audioUrl = null;
        let cleanDesc = rawDesc || '';
        let title = rawTitle || 'Information';

        // 1. Détection dans le champ URL du hotspot
        if (rawUrl && typeof rawUrl === 'string') {
            const u = rawUrl.trim();
            if (/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(u) || u.startsWith('images/')) {
                imageUrl = u;
            } else if (/\.(mp3|wav|ogg|m4a|aac)(\?.*)?$/i.test(u) || u.startsWith('media/')) {
                audioUrl = u;
            }
        }

        // 2. Détection d'une balise <img> dans la description
        const imgTag = cleanDesc.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
        if (imgTag) {
            if (!imageUrl) imageUrl = imgTag[1];
            cleanDesc = cleanDesc.replace(imgTag[0], '').trim();
        }

        // 3. Détection de syntaxe Markdown ![alt](url)
        const mdImg = cleanDesc.match(/!\[([^\]]*)\]\(([^)]+)\)/i);
        if (mdImg) {
            if (!imageUrl) imageUrl = mdImg[2];
            cleanDesc = cleanDesc.replace(mdImg[0], '').trim();
        }

        // 4. Détection d'une balise <audio> dans la description
        const audioTag = cleanDesc.match(/<audio[^>]+src=["']([^"']+)["'][^>]*>/i);
        if (audioTag) {
            if (!audioUrl) audioUrl = audioTag[1];
            cleanDesc = cleanDesc.replace(audioTag[0], '').trim();
        }

        // 5. Détection de préfixes "image: ..." ou "audio: ..."
        const prefixImg = cleanDesc.match(/(?:image|img|photo)\s*:\s*([^\s<]+)/i);
        if (prefixImg) {
            if (!imageUrl) imageUrl = prefixImg[1];
            cleanDesc = cleanDesc.replace(prefixImg[0], '').trim();
        }

        const prefixAudio = cleanDesc.match(/(?:audio|son|mp3)\s*:\s*([^\s<]+)/i);
        if (prefixAudio) {
            if (!audioUrl) audioUrl = prefixAudio[1];
            cleanDesc = cleanDesc.replace(prefixAudio[0], '').trim();
        }

        return {
            title: title,
            description: cleanDesc,
            imageUrl: imageUrl,
            audioUrl: audioUrl
        };
    }

    // --- CRÉATION DE L'INTERFACE MODALE CeGPA ---
    function createModalDOM() {
        if (document.getElementById('cegpa-info-modal-overlay')) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'cegpa-info-modal-overlay';
        overlay.className = 'cegpa-modal-overlay';
        overlay.setAttribute('aria-hidden', 'true');

        overlay.innerHTML = `
            <div class="cegpa-modal-card" role="dialog" aria-modal="true" aria-labelledby="cegpa-modal-title">
                <button id="cegpa-modal-close" class="cegpa-modal-close-btn" title="Fermer (Échap)">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="cegpa-modal-header">
                    <div class="cegpa-modal-badge">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <span>INFORMATION CeGPA</span>
                    </div>
                    <h2 id="cegpa-modal-title" class="cegpa-modal-title"></h2>
                </div>

                <div id="cegpa-modal-image-wrap" class="cegpa-modal-image-wrap" style="display: none;">
                    <img id="cegpa-modal-image" class="cegpa-modal-image" src="" alt="Illustration" />
                    <div class="cegpa-modal-image-hint">🔍 Agrandir l'image</div>
                </div>

                <div id="cegpa-audio-bar" class="cegpa-audio-bar">
                    <button id="cegpa-audio-btn-toggle" class="cegpa-audio-btn primary" title="Écouter la description">
                        <svg id="cegpa-audio-icon-play" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <svg id="cegpa-audio-icon-pause" style="display: none;" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                        <span id="cegpa-audio-label">Écouter</span>
                    </button>

                    <button id="cegpa-audio-btn-stop" class="cegpa-audio-btn secondary" title="Arrêter" style="display: none;">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                            <rect x="5" y="5" width="14" height="14"></rect>
                        </svg>
                    </button>

                    <div id="cegpa-audio-waveform" class="cegpa-audio-waveform" style="display: none;">
                        <span class="bar bar1"></span>
                        <span class="bar bar2"></span>
                        <span class="bar bar3"></span>
                        <span class="bar bar4"></span>
                        <span class="bar bar5"></span>
                    </div>

                    <span id="cegpa-audio-status" class="cegpa-audio-status">Audio disponible</span>
                </div>

                <div class="cegpa-modal-body">
                    <div id="cegpa-modal-desc" class="cegpa-modal-desc"></div>
                </div>
            </div>

            <div id="cegpa-lightbox" class="cegpa-lightbox" style="display: none;">
                <img id="cegpa-lightbox-img" src="" alt="Agrandissement" />
                <button id="cegpa-lightbox-close" class="cegpa-lightbox-close" title="Fermer (Échap)">&times;</button>
            </div>
        `;

        document.body.appendChild(overlay);
    }

    // --- LOGIQUE PRINCIPALE DU CONTRÔLEUR ---
    window.CeGPAInfoModal = {
        audioManager: null,
        isOpen: false,
        lastHotspotEvent: null,

        init: function(playerInstance, skinInstance) {
            createModalDOM();
            this.audioManager = new CeGPAAudioManager();
            this.setupUI();
            this.bindPano2VREvents(playerInstance, skinInstance);
        },

        setupUI: function() {
            const overlay = document.getElementById('cegpa-info-modal-overlay');
            const closeBtn = document.getElementById('cegpa-modal-close');
            const audioToggleBtn = document.getElementById('cegpa-audio-btn-toggle');
            const audioStopBtn = document.getElementById('cegpa-audio-btn-stop');
            const imageWrap = document.getElementById('cegpa-modal-image-wrap');
            const lightbox = document.getElementById('cegpa-lightbox');
            const lightboxClose = document.getElementById('cegpa-lightbox-close');

            // Fermeture au clic sur la croix
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.close();
            });

            // Fermeture au clic sur le fond flouté
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.close();
                }
            });

            // Fermeture avec la touche Échap
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    if (lightbox.style.display !== 'none') {
                        lightbox.style.display = 'none';
                    } else {
                        this.close();
                    }
                }
            });

            // Bouton lecture / pause audio
            audioToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.audioManager.togglePlay();
            });

            // Bouton arrêt audio
            audioStopBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.audioManager.stop();
            });

            // Clic sur l'image pour agrandir dans la Lightbox
            imageWrap.addEventListener('click', () => {
                const img = document.getElementById('cegpa-modal-image');
                const lightImg = document.getElementById('cegpa-lightbox-img');
                if (img.src) {
                    lightImg.src = img.src;
                    lightbox.style.display = 'flex';
                }
            });

            // Fermeture Lightbox
            lightbox.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
            lightboxClose.addEventListener('click', (e) => {
                e.stopPropagation();
                lightbox.style.display = 'none';
            });

            // Mise à jour de l'état audio dans l'interface
            this.audioManager.onStateChange = (state) => {
                const iconPlay = document.getElementById('cegpa-audio-icon-play');
                const iconPause = document.getElementById('cegpa-audio-icon-pause');
                const label = document.getElementById('cegpa-audio-label');
                const waveform = document.getElementById('cegpa-audio-waveform');
                const status = document.getElementById('cegpa-audio-status');
                const stopBtn = document.getElementById('cegpa-audio-btn-stop');

                if (state.isPlaying && !state.isPaused) {
                    iconPlay.style.display = 'none';
                    iconPause.style.display = 'inline-block';
                    label.textContent = 'Pause';
                    waveform.style.display = 'flex';
                    stopBtn.style.display = 'inline-flex';
                    status.textContent = state.mode === 'file' ? 'Lecture du fichier audio...' : 'Lecture vocale en cours...';
                } else if (state.isPaused) {
                    iconPlay.style.display = 'inline-block';
                    iconPause.style.display = 'none';
                    label.textContent = 'Reprendre';
                    waveform.style.display = 'none';
                    stopBtn.style.display = 'inline-flex';
                    status.textContent = 'En pause';
                } else {
                    iconPlay.style.display = 'inline-block';
                    iconPause.style.display = 'none';
                    label.textContent = 'Écouter';
                    waveform.style.display = 'none';
                    stopBtn.style.display = 'none';
                    status.textContent = 'Audio disponible';
                }
            };
        },

        bindPano2VREvents: function(player, skin) {
            if (!player) return;

            // Mémorisation du dernier hotspot cliqué
            player.addListener('hsproxyclick', (e) => {
                this.lastHotspotEvent = e;
            });

            // Écoute de la variable standard d'affichage du popup d'information (Bureau)
            player.addListener('varchanged_vis_info_popup', () => {
                const isVis = player.getVariableValue('vis_info_popup');
                if (isVis && !this.isOpen) {
                    this.openFromPano2VR(player, skin);
                } else if (!isVis && this.isOpen) {
                    this.close(false);
                }
            });

            // Écoute de la variable d'affichage pour mobile (Phone)
            player.addListener('varchanged_vis_phone_info', () => {
                const isVis = player.getVariableValue('vis_phone_info');
                if (isVis && !this.isOpen) {
                    this.openFromPano2VR(player, skin);
                } else if (!isVis && this.isOpen) {
                    this.close(false);
                }
            });

            // Coupure automatique de l'audio lors du changement de panorama
            player.addListener('changenode', () => {
                this.close();
            });
        },

        openFromPano2VR: function(player, skin) {
            let rawTitle = '';
            let rawDesc = '';
            let rawUrl = '';

            // 1. Récupération depuis les éléments du skin Pano2VR mis à jour
            if (skin) {
                if (skin._info_popup_title && skin._info_popup_title.ggTextDiv) {
                    rawTitle = skin._info_popup_title.ggTextDiv.innerHTML;
                }
                if (!rawTitle && skin._info_popup_title_phone && skin._info_popup_title_phone.ggTextDiv) {
                    rawTitle = skin._info_popup_title_phone.ggTextDiv.innerHTML;
                }

                if (skin._info_popup_text && skin._info_popup_text.ggTextDiv) {
                    rawDesc = skin._info_popup_text.ggTextDiv.innerHTML;
                }
                if (!rawDesc && skin._info_popup_text_phone && skin._info_popup_text_phone.ggTextDiv) {
                    rawDesc = skin._info_popup_text_phone.ggTextDiv.innerHTML;
                }
            }

            // 2. Récupération de l'URL du hotspot
            if (this.lastHotspotEvent && this.lastHotspotEvent.url) {
                rawUrl = this.lastHotspotEvent.url;
            } else if (player.getActiveHotspot && player.getActiveHotspot()) {
                const active = player.getActiveHotspot();
                if (!rawTitle) rawTitle = active.title;
                if (!rawDesc) rawDesc = active.description;
                if (!rawUrl) rawUrl = active.url;
            }

            this.show(rawTitle, rawDesc, rawUrl);
        },

        show: function(rawTitle, rawDesc, rawUrl) {
            const data = parseHotspotContent(rawTitle, rawDesc, rawUrl);
            const overlay = document.getElementById('cegpa-info-modal-overlay');
            const titleEl = document.getElementById('cegpa-modal-title');
            const descEl = document.getElementById('cegpa-modal-desc');
            const imageWrap = document.getElementById('cegpa-modal-image-wrap');
            const imageEl = document.getElementById('cegpa-modal-image');

            titleEl.innerHTML = data.title;
            descEl.innerHTML = data.description;

            // Gestion de l'image
            if (data.imageUrl) {
                imageEl.src = data.imageUrl;
                imageWrap.style.display = 'block';
            } else {
                imageEl.src = '';
                imageWrap.style.display = 'none';
            }

            // Préparation de l'audio
            const speechText = (data.title ? data.title + '. ' : '') + data.description;
            this.audioManager.load(speechText, data.audioUrl);

            overlay.classList.add('is-active');
            overlay.setAttribute('aria-hidden', 'false');
            this.isOpen = true;
        },

        close: function(notifyPlayer = true) {
            const overlay = document.getElementById('cegpa-info-modal-overlay');
            if (overlay) {
                overlay.classList.remove('is-active');
                overlay.setAttribute('aria-hidden', 'true');
            }

            if (this.audioManager) {
                this.audioManager.stop();
            }

            this.isOpen = false;

            // Synchronisation avec Pano2VR
            if (notifyPlayer && window.pano) {
                try {
                    window.pano.setVariableValue('vis_info_popup', false);
                    window.pano.setVariableValue('vis_phone_info', false);
                } catch(e) {}
            }
        }
    };

    // Initialisation automatique lorsque Pano2VR est prêt
    function tryInit() {
        if (window.pano && window.skin) {
            window.CeGPAInfoModal.init(window.pano, window.skin);
        } else {
            setTimeout(tryInit, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
    } else {
        tryInit();
    }
})();
