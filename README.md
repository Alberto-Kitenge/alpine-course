# 🏔️ Alpine.js - Cours Intensif

![Alpine.js](https://img.shields.io/badge/Alpine.js-3.15.1-8BC0D0?style=for-the-badge&logo=alpinedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Description

Projet d'apprentissage d'Alpine.js, un framework JavaScript léger et réactif pour créer des interfaces utilisateur interactives avec une syntaxe simple directement dans le HTML.

## 🚀 Fonctionnalités

- ✅ Compteur interactif avec Alpine.js
- ✅ Gestion d'état réactif
- ✅ Manipulation du DOM simplifiée
- ✅ Configuration Vite pour le développement rapide

## 🛠️ Technologies Utilisées

- **Alpine.js** `v3.15.1` - Framework JavaScript réactif
- **Vite** `v7.1.12` - Build tool et dev server
- **HTML5** - Structure de la page
- **CSS3** - Stylisation
- **JavaScript (ES6+)** - Logique applicative

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/Alberto-Kitenge/alpine-course.git

# Accéder au dossier
cd alpine-course

# Installer les dépendances
npm install
```

## 🎯 Utilisation

### Développement

```bash
npm run dev
```

Ouvre le serveur de développement Vite (généralement sur `http://localhost:5173`)

### Build

```bash
npm run build
```

Crée une version optimisée pour la production dans le dossier `dist`

### Preview

```bash
npm run preview
```

Prévisualise la version de production localement

## 📂 Structure du Projet

```
alpine-course/
├── css/
│   └── styles.css      # Feuilles de style
├── js/
│   └── index.js        # Configuration Alpine.js
├── index.html          # Page principale
├── package.json        # Dépendances et scripts
└── README.md           # Documentation
```

## 💡 Exemple de Code

Le projet démontre l'utilisation d'Alpine.js avec un composant compteur :

```javascript
Alpine.data("counter", () => ({
  count: 0,
  name: "John Doe",

  logCount() {
    console.log(this.count);
  },
}));
```

## 📝 Scripts Disponibles

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Lance le serveur de développement    |
| `npm run build`   | Compile le projet pour la production |
| `npm run preview` | Prévisualise le build de production  |

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

[ISC](LICENSE)

## 👤 Auteur

**Alberto Kitenge**

- GitHub: [@Alberto-Kitenge](https://github.com/Alberto-Kitenge)
- Repository: [alpine-course](https://github.com/Alberto-Kitenge/alpine-course)

---

⭐ N'oubliez pas de mettre une étoile si ce projet vous a aidé !
