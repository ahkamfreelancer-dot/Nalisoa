# 🦋 Mamboly Force

> **Ta force intérieure** - Une application de soutien personnel pour traverser les moments difficiles

## 💝 À Propos

Mamboly Force est une application web bienveillante conçue pour accompagner au quotidien. Elle offre un espace privé et sécurisé pour :
- 💪 Renforcer sa confiance en soi
- ✨ Prendre soin de soi
- 🏡 Organiser sa vie quotidienne
- 💼 Avancer professionnellement
- 🦋 Traverser une séparation en douceur

**100% privé** : Toutes les données sont stockées localement sur votre appareil. Personne d'autre n'y a accès.

## ✨ Fonctionnalités

### 🏠 Accueil
- Citation inspirante quotidienne
- Tracker d'humeur
- Petite victoire du jour
- Statistiques de progression

### 💪 Ma Force
- Citations qui donnent de la force (6 catégories)
- Journal privé
- Graphique d'évolution émotionnelle
- Exercices bien-être (5 minutes)

### ✨ Prendre Soin de Moi
- Routine bien-être quotidienne
- Liste d'activités ressourçantes (personnalisable)
- Objectifs bien-être hebdomadaires
- Moments de fierté

### 🏡 Ma Maison
- To-do lists (Aujourd'hui / Cette semaine / Important)
- Planning hebdomadaire
- Aperçu budget mensuel
- Organisation famille (enfants + maman)

### 💼 Ma Carrière
- Checklist optimisation LinkedIn (10 étapes)
- Routine recherche d'emploi
- Suivi de candidatures avec statuts
- Préparation entretiens
- Compétences à développer

### 🦋 Mon Chemin
- Les 6 étapes émotionnelles (personnalisables)
- Aspects pratiques de la séparation
- Checklist reconstruction personnelle
- Vision de l'avenir
- Messages spéciaux débloquables

### ⚙️ Paramètres
- Mode sombre / clair
- Rappels quotidiens
- Export / Import de données
- Effacement des données

## 🚀 Installation

### Option 1 : Ouvrir directement (Plus simple)

1. Téléchargez tous les fichiers du projet
2. Ouvrez le fichier `index.html` dans votre navigateur
3. C'est prêt !

**Pour iOS (installer sur l'écran d'accueil) :**
1. Ouvrez le site dans Safari
2. Appuyez sur le bouton Partager
3. Sélectionnez "Sur l'écran d'accueil"

**Pour Android :**
1. Ouvrez le site dans Chrome
2. Menu (3 points) → "Installer l'application"

### Option 2 : Héberger en ligne (Pour y accéder de partout)

#### Via GitHub Pages (Gratuit)

1. **Créez un compte GitHub** (si vous n'en avez pas)
   - Allez sur https://github.com
   - Cliquez "Sign up"

2. **Créez un nouveau repository**
   - Cliquez sur "New repository"
   - Nom : `mamboly-force` (ou ce que vous voulez)
   - Cochez "Public"
   - Cliquez "Create repository"

3. **Uploadez les fichiers**
   - Cliquez "uploading an existing file"
   - Glissez tous les fichiers du projet
   - Cliquez "Commit changes"

4. **Activez GitHub Pages**
   - Settings → Pages
   - Source : "Deploy from a branch"
   - Branch : "main" → "/" → Save
   - Attendez 2-3 minutes

5. **Votre site est en ligne !**
   - URL : `https://votre-username.github.io/mamboly-force/`

#### Via Netlify (Gratuit, encore plus simple)

1. Allez sur https://www.netlify.com
2. Glissez le dossier du projet sur la page
3. C'est en ligne !

## 📱 Utilisation

### Première visite
- Lisez le message de bienvenue
- Cliquez "Commencer mon chemin"

### Navigation
- Utilisez le menu (☰) pour changer de section
- Chaque section offre des outils différents

### Saisie de données
- Tous les champs sont automatiquement sauvegardés
- Les données restent même si vous fermez l'application

### Conseils
- Utilisez l'app quotidiennement pour de meilleurs résultats
- Notez vos petites victoires chaque jour
- Le journal privé est fait pour tout écrire sans filtre
- Les étapes du chemin ne sont pas linéaires - c'est normal

## 🔒 Sécurité & Confidentialité

- **100% local** : Vos données ne quittent JAMAIS votre appareil
- **Aucun serveur** : Pas de compte, pas de connexion
- **Pas de tracking** : Aucune statistique collectée
- **Open source** : Le code est transparent

### Sauvegarde de vos données

**Important** : Exportez régulièrement vos données !

1. Allez dans Paramètres
2. Cliquez "📥 Exporter mes données"
3. Sauvegardez le fichier JSON dans un lieu sûr (Drive, email à vous-même)

Pour restaurer :
1. Paramètres → "📤 Importer des données"
2. Sélectionnez votre fichier JSON

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `styles.css` (lignes 7-17) :
```css
:root {
    --primary: #E8D5F2;      /* Lavande douce */
    --secondary: #FFE5EC;     /* Rose poudré */
    /* ... */
}
```

### Citations
Ajoutez vos propres citations dans `app.js` (lignes 8-60) :
```javascript
const QUOTES = {
    force: [
        { text: "Votre citation", author: "Auteur" },
        // ...
    ]
}
```

### Messages spéciaux
Personnalisez les messages dans `app.js` (lignes 62-82)

## 🛠️ Technologies

- **HTML5** : Structure
- **CSS3** : Design (Variables CSS, Animations, Grid/Flexbox)
- **JavaScript (Vanilla)** : Logique
- **LocalStorage** : Sauvegarde des données
- **PWA** : Installation sur téléphone

**Aucune dépendance externe** - Fonctionne offline !

## 📊 Compatibilité

- ✅ Chrome / Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Samsung Internet

Testé sur :
- iOS 14+
- Android 10+
- Windows 10/11
- macOS

## 🐛 Dépannage

### "Mes données ont disparu !"
- Vérifiez que vous n'avez pas vidé le cache du navigateur
- Restaurez depuis votre dernier export (Paramètres → Importer)

### "L'application ne se charge pas"
- Vérifiez que JavaScript est activé
- Essayez un autre navigateur
- Effacez le cache et rechargez

### "Je ne peux pas installer l'app"
- Sur iOS : Utilisez Safari (pas Chrome)
- Sur Android : Utilisez Chrome ou Edge
- Vérifiez que le fichier `manifest.json` est présent

## 💝 Utilisation personnelle

Cette application est créée avec amour comme cadeau personnel. Vous êtes libre de l'utiliser, la modifier, et l'adapter à vos besoins.

**Si vous la partagez** : Gardez le message de bienveillance et d'espoir. C'est ce qui la rend spéciale. 💜

## 🌟 Améliorations futures

Idées pour étendre l'application :
- [ ] Rappels quotidiens natifs (notifications)
- [ ] Export PDF des entrées de journal
- [ ] Thèmes de couleurs multiples
- [ ] Graphiques de progression plus détaillés
- [ ] Mode "urgence" pour tout effacer rapidement
- [ ] Partage anonyme de victoires (optionnel)

## 📞 Support

Pour toute question ou problème :
1. Vérifiez d'abord la section Dépannage ci-dessus
2. Consultez le fichier `GUIDE.pdf` inclus
3. Ouvrez une "Issue" sur GitHub

## 📜 Licence

MIT License - Libre d'utilisation, modification et distribution.

## 💌 Message final

Cette application est un outil, pas une solution magique. Les vrais changements viennent de toi, de ta force, de ta résilience.

Tu es plus forte que tu ne le penses. 💜

---

**Créée avec 💜 en 2026**

🦋 *Mamboly Force - Ta force intérieure*
