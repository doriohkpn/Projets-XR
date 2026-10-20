# Visite Virtuelle Immersive CeGPA (Pano2VR & WebXR)

Visite virtuelle interactive à 360° du Centre de Gestion du Patrimoine Muséal et des Arts (CeGPA - Université d'Abomey-Calavi).

---

## Démo en Ligne

- **Lien direct vers la visite 360° :** [Explorer la visite virtuelle en direct](https://doriohkpn.github.io/Projets-XR/CeGPA-Visite-Virtuelle/index.html)

---

## Présentation du Projet

Ce projet propose une expérience immersive complète permettant d'explorer à distance les salles et expositions du musée CeGPA. Conçu pour le web et les dispositifs immersifs, il permet aux visiteurs de naviguer dans l'espace muséal et d'interagir avec les œuvres exposées.

---

## Fonctionnalités Principales

- **Navigation Panoramique 360° :** Exploration fluide haute résolution des différents espaces du musée.
- **Support WebXR & Mode Casque VR :** Compatibilité native avec les casques de réalité virtuelle (Meta Quest, navigateurs WebXR) et dispositifs mobiles.
- **Points d'Intérêt & Modales d'Information :** Hotspots interactifs sur les œuvres affichant des fiches détaillées (historique, artiste, description).
- **Interface & Contrôles Immersifs :** Barre d'outils personnalisée (zoom, plein écran, vue plan, gyroscope sur mobile).

---

## Technologies et Outils Utilisés

- **Logiciel de création :** Garden Gnome Pano2VR
- **Technologies Web :** WebXR Device API, JavaScript ES6+, HTML5 Canvas, CSS3
- **Rendus :** Panoramas équirectangulaires haute résolution découpés en tuiles multi-résolutions (Multi-resolution tiles)

---

## Lancement en Local

Pour des raisons de sécurité liées aux navigateurs modernes (politique CORS sur les fichiers locaux `file://`), lancez un serveur HTTP local dans ce dossier :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js / npx
npx serve .
```
Puis ouvrez `http://localhost:8000/index.html` dans votre navigateur.
