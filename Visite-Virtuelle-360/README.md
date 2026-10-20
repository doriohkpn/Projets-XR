# Visite Virtuelle Immersive (WebXR / 360°)

Expérience interactive et immersive à 360° conçue pour le web et les dispositifs de réalité virtuelle.

---

## Démo en Ligne

- **Lien direct vers la visite 360° :** [Explorer la visite virtuelle en direct](https://doriohkpn.github.io/Projets-XR/Visite-Virtuelle-360/index.html)

---

## Présentation du Projet

Ce projet propose une exploration spatiale fluide permettant de naviguer à distance dans un environnement architectural et d'interagir avec différents points d'intérêt. Conçu avec Pano2VR et compatible avec les standards WebXR, il s'adapte aussi bien aux écrans de bureau et mobiles qu'aux casques VR autonomes.

---

## Fonctionnalités Principales

- **Navigation Panoramique 360° :** Exploration fluide haute résolution entre différentes scènes et perspectives.
- **Support WebXR & Mode Casque VR :** Compatibilité native avec les casques de réalité virtuelle (Meta Quest, navigateurs compatibles WebXR) et dispositifs mobiles avec gyroscope.
- **Points d'Intérêt & Modales d'Information :** Hotspots interactifs permettant d'afficher des fiches de contenu détaillées.
- **Interface & Contrôles Immersifs :** Barre d'outils personnalisée (zoom, plein écran, mode VR, navigation panoramique).

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
