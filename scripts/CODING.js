// Extrait de CODING.html

const notes = [

    /* ======== HTML ======== */
    {
      cat: "html", type: "base",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Squelette HTML",
      desc: "La structure minimale de toute page web. À coller en tout début de fichier .html.",
      code: `&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;title&gt;Titre de la page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Ton contenu ici --&gt;
&lt;/body&gt;
&lt;/html&gt;`,
      tip: "Ne jamais mettre style.css deux fois dans le head — une seule ligne suffit !"
    },{
  cat: "css", type: "erreur",
  badge: "CSS", badgeClass: "badge-css",
  title: "Chemin des Assets (Fonts/Images)",
  desc: "L'erreur classique du chemin relatif. Le point de départ est toujours le fichier CSS, pas le fichier HTML.",
  code: `/* Si le CSS est dans un dossier /css/ */
src: url('../fonts/mafont.otf'); 

/* Si le CSS est à la racine */
src: url('./fonts/mafont.otf');`,
  tip: "Utilise l'inspecteur du navigateur (F12) > Onglet 'Console'. Si tu vois une erreur '404 Not Found' pour ta police, c'est que le chemin est faux."
},
    {
  cat: "css", type: "erreur",
  badge: "CSS", badgeClass: "badge-css",
  title: "Police personnalisée (@font-face)",
  desc: "Pour utiliser une police téléchargée, il faut obligatoirement la déclarer avant de l'appeler dans font-family.",
  code: `@font-face {
  font-family: 'MonNomDePolice';
  src: url('chemin/vers/police.otf') format('opentype');
}

.ma-classe {
  font-family: 'MonNomDePolice', sans-serif;
}`,
  tip: "Vérifie toujours que le chemin (URL) vers le fichier est correct par rapport à l'emplacement de ton fichier CSS."
},
    {
      cat: "html", type: "base",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Commentaires HTML",
      desc: "Les commentaires ne s'affichent pas dans le navigateur. Utiles pour s'organiser.",
      code: `&lt;!-- Ceci est un commentaire --&gt;

&lt;!-- ====== DÉBUT DU MENU ====== --&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;!-- ====== FIN DU MENU ====== --&gt;`,
      tip: null
    },
    {
      cat: "html", type: "base",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Titres et paragraphes",
      desc: "Les titres vont de h1 (plus grand) à h6 (plus petit). Un seul h1 par page.",
      code: `&lt;h1&gt;Titre principal&lt;/h1&gt;
&lt;h2&gt;Sous-titre&lt;/h2&gt;
&lt;h3&gt;Sous-sous-titre&lt;/h3&gt;
&lt;p&gt;Un paragraphe de texte.&lt;/p&gt;`,
      tip: null
    },
    {
  cat: "css", type: "base",
  badge: "CSS", badgeClass: "badge-css",
  title: "Flexbox : Centrage Parfait",
  desc: "La méthode la plus simple pour aligner des éléments horizontalement ou verticalement.",
  code: `.container {
  display: flex;
  justify-content: center; /* Aligne horizontalement */
  align-items: center;     /* Aligne verticalement */
  gap: 10px;               /* Espace entre les éléments */
}`,
  tip: "Idéal pour ta barre de navigation ou tes 'Quick Stats'."
},
{
  cat: "css", type: "astuce",
  badge: "CSS", badgeClass: "badge-css",
  title: "Utiliser les Variables (Root)",
  desc: "Centraliser les couleurs du projet pour les modifier en un clic.",
  code: `:root {
  --c-main: #20576C;
}

.mon-titre {
  color: var(--c-main);
}`,
  tip: "Toujours utiliser 'var()' pour garder une cohérence visuelle sur ICEOLIE."
},
    {
      cat: "html", type: "base",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Liens et images",
      desc: "Les liens (a) pointent vers une URL ou un fichier. Les images (img) n'ont pas de balise fermante.",
      code: `&lt;!-- Lien --&gt;
&lt;a href="TISANES.html"&gt;Voir les tisanes&lt;/a&gt;

&lt;!-- Image --&gt;
&lt;img src="Minljiva.png" alt="Logo Minljiva"&gt;`,
      tip: "Le alt décrit l'image pour l'accessibilité — toujours le remplir."
    },
    {
  cat: "css",
  type: "base",
  badge: "CSS",
  badgeClass: "badge-css", // À adapter selon tes classes existantes
  title: "Variables CSS (:root)",
  desc: "Permet de stocker des valeurs (couleurs, tailles) pour les réutiliser partout. Idéal pour la maintenance.",
  code: `:root {
  --accent-main: #20576C;
  --bg-body: #f8f9fa;
}

body {
  background-color: var(--bg-body);
  color: var(--accent-main);
}`,
  tip: "Utilise toujours des variables pour les couleurs, cela permet de changer de thème en une seule ligne."
},

{
  cat: "css",
  type: "layout",
  badge: "CSS",
  badgeClass: "badge-css",
  title: "Le Layout (Structure)",
  desc: "Séparez la structure globale (le squelette) du design visuel (la peau).",
  code: `/* layout.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid-dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}`,
  tip: "Le layout évite la répétition de code sur chaque page de ton site ICEOLIE."
},

{
  cat: "css",
  type: "pratique",
  badge: "CSS",
  badgeClass: "badge-css",
  title: "Classes vs Inline Style",
  desc: "Ne jamais utiliser l'attribut 'style' dans le HTML. Utilisez uniquement des classes pour une séparation propre.",
  code: `/* À ÉVITER */
<div style="color: blue;">...</div>

/* À PRIVILÉGIER */
<div class="text-primary">...</div>`,
  tip: "Cela permet de modifier l'apparence de 100 pages d'un seul coup via le fichier CSS."
},
    {
      cat: "html", type: "base",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Div et classes",
      desc: "Les div sont des boîtes invisibles pour grouper le contenu. La class relie une balise à un style CSS.",
      code: `&lt;div class="box"&gt;
  &lt;div class="card"&gt;
    &lt;p&gt;Contenu de la carte&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
      tip: "Plusieurs éléments peuvent partager la même class — c'est comme ça qu'on réutilise un style."
    },
    {
      cat: "html", type: "erreur",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Oublier de fermer une balise",
      desc: "Chaque balise ouvrante doit avoir sa balise fermante. Une div non fermée peut casser toute la mise en page.",
      code: `&lt;!-- ❌ Incorrect --&gt;
&lt;div class="card"&gt;
  &lt;p&gt;Texte

&lt;!-- ✅ Correct --&gt;
&lt;div class="card"&gt;
  &lt;p&gt;Texte&lt;/p&gt;
&lt;/div&gt;`,
      tip: "BBEdit colore les balises orphelines — repérer les zones sans couleur de fermeture."
    },

    /* ======== CSS ======== */
    {
      cat: "css", type: "base",
      badge: "CSS", badgeClass: "badge-med",
      title: "Comment ça marche",
      desc: "CSS = sélecteur + propriétés entre accolades. Le sélecteur cible qui on style, les propriétés disent comment.",
      code: `/* sélecteur { propriété: valeur; } */

h1 {
  font-size: 22px;
  color: #1a1a18;
}


.card {           /* classe = point devant */
  background: white;
  border-radius: 12px;
}`,
      tip: null
    },
    {
      cat: "css", type: "astuce",
      badge: "CSS", badgeClass: "badge-med",
      title: "Variables CSS",
      desc: "On définit des variables dans :root et on les réutilise partout. Changer une variable = changer tout le site.",
      code: `:root {
  --vert:   #1D9E75;
  --violet: #7F77DD;
  --orange: #EF9F27;
  --fond:   #f9f8f5;
}

.nav {
  background: var(--fond);
  color: var(--vert);
}`,
      tip: "C'est exactement comme ça que fonctionne le style.css de ce projet — les 3 couleurs en haut changent tout !"
    },
    {
      cat: "css", type: "base",
      badge: "CSS", badgeClass: "badge-med",
      title: "Box model",
      desc: "Chaque élément HTML est une boîte. Padding = espace intérieur. Margin = espace extérieur. Border = le bord.",
      code: `.box {
  padding: 1rem;         /* espace intérieur */
  margin: 1rem 0;        /* espace extérieur */
  border: 1px solid #ccc;/* bordure */
  border-radius: 12px;   /* coins arrondis */
}`,
      tip: null
    },
    {
      cat: "css", type: "base",
      badge: "CSS", badgeClass: "badge-med",
      title: "Flexbox",
      desc: "Flexbox permet d'aligner des éléments côte à côte ou de les centrer facilement.",
      code: `.nav {
  display: flex;
  gap: 12px;             /* espace entre éléments */
  align-items: center;   /* centrer verticalement */
  flex-wrap: wrap;       /* passer à la ligne si besoin */
}`,
      tip: null
    },
    {
      cat: "css", type: "base",
      badge: "CSS", badgeClass: "badge-med",
      title: "Grid",
      desc: "CSS Grid crée des mises en page en colonnes automatiquement.",
      code: `.grid {
  display: grid;
  /* colonnes auto, min 300px chacune */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
}`,
      tip: "C'est ce qui fait que les cartes HERBORISTE s'adaptent automatiquement à la taille de l'écran."
    },
    {
      cat: "css", type: "erreur",
      badge: "CSS", badgeClass: "badge-med",
      title: "Styles inline à éviter",
      desc: "Mettre du style directement dans le HTML avec style=\"...\" rend le code difficile à maintenir.",
      code: `&lt;!-- ❌ À éviter --&gt;
&lt;p style="color: red; font-size: 14px;"&gt;Texte&lt;/p&gt;

&lt;!-- ✅ Mieux : dans style.css --&gt;
.texte-note {
  color: red;
  font-size: 14px;
}`,
      tip: "Tout dans style.css = un seul endroit à modifier pour changer l'apparence de tout le site."
    },
{
  cat: "css", type: "base",
  badge: "CSS", badgeClass: "badge-cul",
  title: "Classes multiples vs classe unique",
  desc: "En HTML, un espace dans l’attribut class sépare plusieurs classes. Un tiret (-) permet de créer un seul nom de classe composé.",
  code: `&lt;!-- ❌ Mauvais : 2 classes différentes --&gt;
&lt;div class="vert clair"&gt;&lt;/div&gt;

&lt;!-- CSS associé (ne marchera pas) --&gt;
.vert-clair {
  background: #E1F5EE;
}

&lt;!-- ✅ Bon : 1 seule classe avec un tiret --&gt;
&lt;div class="vert-clair"&gt;&lt;/div&gt;

&lt;!-- CSS associé (fonctionne) --&gt;
.vert-clair {
  background: #E1F5EE;
}

&lt;!-- ✅ Combinaison de classes (volontaire) --&gt;
&lt;div class="blanc border"&gt;&lt;/div&gt;

.blanc {
  background: #ffffff;
}

.border {
  border: 1px solid #ddd;
}`,
  tip: "Utilise des tirets pour nommer une seule classe (ex: vert-clair). Utilise des espaces uniquement si tu veux combiner plusieurs classes."
},
    /* ======== JAVASCRIPT ======== */
    {
      cat: "js", type: "base",
      badge: "JavaScript", badgeClass: "badge-imm",
      title: "Variables",
      desc: "Les variables stockent des informations. const = valeur fixe. let = valeur qui peut changer.",
      code: `const nom = "Minljiva";   // texte (string)
const age = 3;            // nombre (number)
let actif = true;         // vrai/faux (boolean)
let compteur = 0;
compteur = compteur + 1;  // on peut modifier avec let`,
      tip: null
    },
    {
      cat: "js", type: "base",
      badge: "JavaScript", badgeClass: "badge-imm",
      title: "Fonctions",
      desc: "Une fonction est un bloc de code réutilisable. On la définit une fois, on l'appelle autant qu'on veut.",
      code: `// Définir une fonction
function show(id, btn) {
  document.getElementById(id).style.display = 'block';
  btn.classList.add('active');
}

// L'appeler depuis le HTML :
// onclick="show('html', this)"`,
      tip: "C'est exactement la fonction utilisée pour les onglets sur les pages TISANES et RECETTE !"
    },
    {
      cat: "js", type: "base",
      badge: "JavaScript", badgeClass: "badge-imm",
      title: "Manipuler le DOM",
      desc: "DOM = la page HTML vue par JavaScript. On peut cibler des éléments et les modifier en direct.",
      code: `// Trouver un élément par son id
const el = document.getElementById('html');

// Modifier son style
el.style.display = 'none';    // cacher
el.style.display = 'block';   // montrer

// Ajouter / enlever une classe CSS
el.classList.add('active');
el.classList.remove('active');

// Tous les éléments d'une classe
document.querySelectorAll('.tab');`,
      tip: null
    },
    {
      cat: "js", type: "base",
      badge: "JavaScript", badgeClass: "badge-imm",
      title: "Tableaux (arrays)",
      desc: "Un tableau stocke plusieurs valeurs. On peut les parcourir avec forEach ou les filtrer avec filter.",
      code: `const plantes = ['Menthe', 'Thym', 'Lavande'];

// Parcourir
plantes.forEach(p => {
  console.log(p);
});

// Filtrer
const med = plantes.filter(p => p === 'Lavande');

// Transformer en HTML
const html = plantes.map(p => \`&lt;li&gt;\${p}&lt;/li&gt;\`).join('');`,
      tip: "C'est comme ça que les cartes HERBORISTE et AVENIR sont générées depuis un tableau plants."
    },
    {
      cat: "js", type: "astuce",
      badge: "JavaScript", badgeClass: "badge-imm",
      title: "Générer des cartes dynamiquement",
      desc: "Plutôt que d'écrire le HTML de chaque carte à la main, on le génère depuis un tableau de données.",
      code: `const data = [
  { nom: "Thym", desc: "Antiseptique" },
  { nom: "Menthe", desc: "Digestive" }
];

document.getElementById('grid').innerHTML =
  data.map(p => \`
    &lt;div class="card"&gt;
      &lt;div class="plant-name"&gt;\${p.nom}&lt;/div&gt;
      &lt;div class="desc"&gt;\${p.desc}&lt;/div&gt;
    &lt;/div&gt;
  \`).join('');`,
      tip: "C'est exactement le principe de cette page CODING et de la page AVENIR !"
    },

    /* ======== GITHUB ======== */
    {
      cat: "github", type: "base",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Les concepts de base",
      desc: "Les mots importants à connaître pour naviguer dans GitHub.",
      code: null,
      liste: [
        "📁 <strong>Repository (repo)</strong> — Le dossier de ton projet en ligne.",
        "🌿 <strong>Branch</strong> — Une version du projet. Tu travailles sur <code>main</code>.",
        "💾 <strong>Commit</strong> — Une sauvegarde avec un message. Comme un point de restauration.",
        "⬆️ <strong>Push</strong> — Envoyer ses commits vers GitHub.",
        "⬇️ <strong>Pull</strong> — Récupérer les derniers changements depuis GitHub.",
        "🍴 <strong>Fork</strong> — Copier le projet de quelqu'un pour le modifier de son côté."
      ],
      tip: null
    },
    {
      cat: "github", type: "routine",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Mettre à jour son site",
      desc: "Tu modifies un fichier dans BBEdit → tu veux que le site en ligne se mette à jour.",
      code: null,
      liste: [
        "1. <strong>Modifier</strong> le fichier dans BBEdit et sauvegarder (⌘ + S).",
        "2. <strong>Aller sur github.com</strong> → ton repo → cliquer sur le fichier.",
        "3. <strong>Cliquer sur le crayon ✏️</strong> pour éditer, ou glisser-déposer le fichier modifié.",
        "4. <strong>Écrire un message de commit</strong> (ex : \"Ajout recette cookies\") → Commit changes.",
        "5. <strong>Attendre 1 à 3 min</strong> → le site sur github.io est mis à jour ✅"
      ],
      tip: "Dans l'onglet Actions de ton repo : cercle vert = en ligne, jaune = encore en cours."
    },
    {
      cat: "github", type: "routine",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Uploader plusieurs fichiers d'un coup",
      desc: "Quand tu as modifié plusieurs pages en même temps, inutile de les faire une par une.",
      code: null,
      liste: [
        "1. Dans ton repo → <strong>Add file</strong> → <strong>Upload files</strong>.",
        "2. <strong>Glisser-déposer</strong> tous les fichiers modifiés en même temps.",
        "3. Écrire un message de commit → <strong>Commit changes</strong>."
      ],
      tip: "Les fichiers uploadés remplacent automatiquement les anciens — pas besoin de supprimer avant."
    },
    {
      cat: "github", type: "base",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Structure du repo Minljiva",
      desc: "Tous ces fichiers doivent être à la racine du repo, pas dans un sous-dossier.",
      code: `index.html       ← ⚠️ minuscule — page d'accueil
style.css        ← la feuille de style commune
Minljiva.png     ← le logo
HERBORISTE.html
TISANES.html
RECETTE.html
AVENIR.html
CODING.html
fonts/
  Halimun.ttf`,
      tip: "Si index.html est en majuscules (INDEX.html), GitHub Pages affiche une erreur 404."
    },
    {
      cat: "github", type: "routine",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Activer GitHub Pages",
      desc: "La configuration à faire une seule fois pour mettre le site en ligne.",
      code: null,
      liste: [
        "1. Dans ton repo → onglet <strong>Settings</strong>.",
        "2. Menu gauche → <strong>Pages</strong>.",
        "3. Sous Branch → choisir <strong>main</strong> et <strong>/ (root)</strong> → Save.",
        "4. Ton URL apparaît : <code>ton-pseudo.github.io/nom-du-repo/</code>"
      ],
      tip: "Cette config ne se fait qu'une seule fois. Ensuite chaque commit met le site à jour automatiquement."
    },
    {
      cat: "github", type: "erreur",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Erreur 404",
      desc: "La page ne s'affiche pas — les causes les plus fréquentes.",
      code: null,
      liste: [
        "❌ <strong>index.html en majuscules</strong> → renommer en minuscules.",
        "❌ <strong>GitHub Pages pas activé</strong> → Settings → Pages → choisir main.",
        "❌ <strong>Déploiement pas terminé</strong> → attendre 2–3 min, vérifier l'onglet Actions.",
        "❌ <strong>Mauvaise URL</strong> → l'URL doit inclure le nom du repo à la fin."
      ],
      tip: "Vider le cache du navigateur avec ⌘ + Shift + R si les modifications n'apparaissent pas."
    },
    {
      cat: "github", type: "erreur",
      badge: "GitHub", badgeClass: "badge-adapt",
      title: "Le style ou le logo ne s'affiche pas",
      desc: "Le site est en ligne mais les fichiers CSS ou images sont manquants.",
      code: null,
      liste: [
        "❌ <strong>style.css absent du repo</strong> → l'uploader comme les autres fichiers.",
        "❌ <strong>Minljiva.png absent</strong> → l'uploader dans le repo.",
        "❌ <strong>Dossier fonts/ absent</strong> → uploader le dossier fonts/ avec Halimun.ttf.",
        "❌ <strong>Chemin incorrect</strong> → vérifier que c'est href=\"style.css\" sans slash ni chemin absolu."
      ],
      tip: null
    },

    /* ======== ASTUCES BBEDIT ======== */
    {
      cat: "html", type: "astuce",
      badge: "HTML", badgeClass: "badge-cul",
      title: "Raccourcis BBEdit",
      desc: "Les commandes qui font gagner du temps dans BBEdit.",
      code: null,
      liste: [
        "⌘ + S — <strong>Sauvegarder</strong>",
        "⌘ + Z — <strong>Annuler</strong>",
        "⌘ + F — <strong>Rechercher</strong> dans le fichier",
        "⌘ + Shift + F — <strong>Rechercher</strong> dans tout le projet",
        "⌘ + [ / ⌘ + ] — <strong>Indenter / désindenter</strong>",
        "⌘ + / — <strong>Commenter / décommenter</strong>",
        "⌘ + Shift + R — <strong>Vider le cache</strong> du navigateur"
      ],
      tip: null
    },

        /* ======== BASE DE DONNÉES ======== */
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"C'est quoi une base de données ?",
      desc:"Une base de données stocke des informations de façon structurée, comme un tableau Excel en ligne, accessible depuis n'importe où. Contrairement à un tableau JS dans le code, les données sont sauvegardées même si on ferme la page.",
      code:null,
      liste:[
        "🗄️ <strong>Table</strong> — Un tableau avec des lignes (entrées) et des colonnes (champs). Ex : la table <code>projets_crochet</code> a les colonnes id, titre, pattern, statut…",
        "📋 <strong>Ligne / enregistrement</strong> — Une donnée complète. Ex : un projet crochet = une ligne.",
        "🔑 <strong>id</strong> — Un identifiant unique généré automatiquement pour chaque ligne. Sert à retrouver ou modifier une entrée précise.",
        "🔌 <strong>API REST</strong> — La façon dont JavaScript parle à la base de données : on envoie des requêtes HTTP (GET, POST, PATCH, DELETE) et on reçoit des données en JSON.",
        "🟢 <strong>Supabase</strong> — Le service utilisé ici. Il fournit la base de données + une API REST prête à l'emploi sans avoir à coder un serveur."
      ], tip:"Supabase = base de données PostgreSQL + API REST + interface web pour voir et modifier les tables directement." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Les 4 opérations CRUD",
      desc:"Toute interaction avec une base de données se résume à 4 actions : Create, Read, Update, Delete. En REST, chacune correspond à une méthode HTTP.",
      code:null,
      liste:[
        "🟢 <strong>CREATE → POST</strong> — Ajouter une nouvelle ligne. Ex : créer un projet crochet.",
        "🔵 <strong>READ → GET</strong> — Lire / récupérer des données. Ex : charger la liste de tous les projets.",
        "🟡 <strong>UPDATE → PATCH</strong> — Modifier une ligne existante. Ex : changer le statut de 'todo' à 'wip'.",
        "🔴 <strong>DELETE → DELETE</strong> — Supprimer une ligne. Ex : supprimer un projet terminé."
      ], tip:"Astuce mémo : CRUD = Create Read Update Delete. Ces 4 mots couvrent 100% de ce qu'on fait avec une BDD." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Les headers Supabase — à mettre partout",
      desc:"Chaque requête vers Supabase doit inclure ces headers d'authentification. On les définit une seule fois en variable et on les réutilise.",
      code:`const SUPABASE_URL = 'https://xxx.supabase.co';  // ton URL de projet\nconst SUPABASE_KEY = 'ta-clé-publique';            // clé anon/public\n\n// Définir les headers une seule fois\nconst headers = {\n  'Content-Type':  'application/json',\n  'apikey':        SUPABASE_KEY,\n  'Authorization': 'Bearer ' + SUPABASE_KEY,\n  'Prefer':        'return=representation' // pour recevoir la ligne créée/modifiée\n};\n\n// Puis utiliser { headers } dans chaque fetch`,
      tip:"La clé 'anon/public' est faite pour être visible dans le code côté client — pas de secret à cacher." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Lire des données (GET)",
      desc:"On utilise fetch() pour récupérer toutes les lignes d'une table. La réponse est un tableau d'objets JSON.",
      code:`async function charger() {\n  const res = await fetch(\n    \`\${SUPABASE_URL}/rest/v1/projets_crochet?order=created_at.desc\`,\n    { headers }\n  );\n  if (!res.ok) throw new Error(await res.text());\n\n  const projets = await res.json();\n  // projets = [ { id: 1, titre: "Bonnet", statut: "wip" }, ... ]\n  render(projets);\n}`,
      tip:"async/await met en pause le code le temps que la réponse arrive. Sans lui il faudrait écrire .then().then() en chaîne — bien plus difficile à lire." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Ajouter une ligne (POST)",
      desc:"On envoie un objet JSON avec les données à insérer. Supabase crée la ligne et renvoie l'entrée créée avec son id généré automatiquement.",
      code:`async function ajouter(titre, pattern) {\n  const res = await fetch(\n    \`\${SUPABASE_URL}/rest/v1/projets_crochet\`,\n    {\n      method: 'POST',\n      headers,\n      body: JSON.stringify({\n        titre:   titre,\n        pattern: pattern,\n        statut:  'todo'\n        // id et created_at sont remplis automatiquement\n      })\n    }\n  );\n  if (!res.ok) throw new Error(await res.text());\n  await charger(); // recharger la liste\n}`,
      tip:"Toujours recharger les données après un ajout avec charger() — ça garantit que l'affichage est synchronisé avec la BDD." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Modifier une ligne (PATCH)",
      desc:"On cible la ligne par son id dans l'URL (?id=eq.XXX) et on envoie uniquement les champs à modifier. Les autres colonnes restent intactes.",
      code:`async function changerStatut(id, nouveauStatut) {\n  const res = await fetch(\n    \`\${SUPABASE_URL}/rest/v1/projets_crochet?id=eq.\${id}\`,\n    {\n      method: 'PATCH',\n      headers,\n      body: JSON.stringify({ statut: nouveauStatut })\n      // seul 'statut' est modifié — titre, pattern, etc. restent intacts\n    }\n  );\n  if (!res.ok) throw new Error(await res.text());\n  await charger();\n}`,
      tip:"?id=eq.42 signifie 'où id est égal à 42'. C'est la syntaxe de filtre Supabase — eq = equals (égal)." },
 
    { cat:"bdd", type:"base", badge:"Base de données", badgeClass:"badge-imm",
      title:"Supprimer une ligne (DELETE)",
      desc:"Même principe que PATCH — on cible la ligne par son id dans l'URL. Attention : c'est irréversible !",
      code:`async function supprimer(id) {\n  if (!confirm('Supprimer ce projet ?')) return; // toujours confirmer !\n\n  const res = await fetch(\n    \`\${SUPABASE_URL}/rest/v1/projets_crochet?id=eq.\${id}\`,\n    { method: 'DELETE', headers }\n  );\n  if (!res.ok) throw new Error(await res.text());\n  await charger();\n}`,
      tip:"Toujours demander confirmation avant de supprimer — une fois supprimée, la ligne est perdue." },
 
    { cat:"bdd", type:"astuce", badge:"Base de données", badgeClass:"badge-imm",
      title:"async / await expliqué",
      desc:"Les requêtes vers une base de données prennent du temps. async/await met en pause l'exécution le temps que la réponse arrive, sans bloquer le reste de la page.",
      code:`// Sans async/await (difficile à lire)\nfetch(url).then(res => res.json()).then(data => {\n  render(data);\n});\n\n// Avec async/await (bien plus lisible)\nasync function charger() {\n  const res  = await fetch(url);   // attend la réponse HTTP\n  const data = await res.json();   // attend la conversion en JSON\n  render(data);                    // maintenant on a les données\n}`,
      tip:"Une fonction async renvoie toujours une Promise. On met await devant chaque opération qui prend du temps (fetch, res.json, etc.)." },
 
    { cat:"bdd", type:"astuce", badge:"Base de données", badgeClass:"badge-imm",
      title:"Gérer les erreurs proprement",
      desc:"Les requêtes réseau peuvent échouer. On utilise try/catch + res.ok pour attraper les erreurs côté serveur ET côté réseau.",
      code:`async function charger() {\n  try {\n    const res = await fetch(\`\${SUPABASE_URL}/rest/v1/ma_table\`, { headers });\n\n    if (!res.ok) {\n      // Erreur HTTP (ex : 401 non autorisé, 404 table introuvable)\n      throw new Error(await res.text());\n    }\n\n    const data = await res.json();\n    render(data);\n\n  } catch(e) {\n    // Erreur réseau OU erreur HTTP ci-dessus\n    document.getElementById('grid').innerHTML =\n      \`&lt;div class="empty"&gt;Erreur : \${e.message}&lt;/div&gt;\`;\n  }\n}`,
      tip:"res.ok est true si le code HTTP est entre 200 et 299. En dehors, la requête a 'fonctionné' techniquement mais renvoyé une erreur — il faut le vérifier manuellement." },
 
    { cat:"bdd", type:"astuce", badge:"Base de données", badgeClass:"badge-imm",
      title:"Filtrer et trier les résultats",
      desc:"L'API Supabase accepte des paramètres dans l'URL pour filtrer, trier ou limiter les résultats — pas besoin de tout charger puis filtrer en JS.",
      code:`// Trier par date décroissante (plus récent en premier)\nfetch(\`\${URL}/rest/v1/projets_crochet?order=created_at.desc\`)\n\n// Filtrer : seulement les projets avec statut = 'wip'\nfetch(\`\${URL}/rest/v1/projets_crochet?statut=eq.wip\`)\n\n// Combiner filtre + tri\nfetch(\`\${URL}/rest/v1/projets_crochet?statut=eq.done&order=created_at.desc\`)\n\n// Les opérateurs disponibles :\n// eq  = égal          ?statut=eq.done\n// neq = différent     ?statut=neq.todo\n// gt  = supérieur     ?nb=gt.5\n// lt  = inférieur     ?nb=lt.10\n// is  = est null      ?duree=is.null`,
      tip:"Filtrer côté serveur = moins de données à télécharger = page plus rapide. À préférer quand la table devient grande." },
 
    { cat:"bdd", type:"routine", badge:"Base de données", badgeClass:"badge-imm",
      title:"Ajouter une nouvelle colonne à une table",
      desc:"Si on veut stocker un nouveau champ (ex : 'duree' sur les projets crochet), il faut d'abord l'ajouter dans Supabase, puis l'utiliser dans le code.",
      code:null,
      liste:[
        "1. Aller sur <strong>supabase.com</strong> → ton projet → <strong>Table Editor</strong>.",
        "2. Cliquer sur la table concernée → bouton <strong>+ Add column</strong>.",
        "3. Donner un nom (ex : <code>duree</code>), choisir le type <strong>text</strong>, cocher <strong>nullable</strong> (= optionnel, peut être vide).",
        "4. Sauvegarder. La colonne est immédiatement disponible via l'API.",
        "5. Dans le JS : inclure le champ dans les <code>body</code> de POST/PATCH pour l'écrire. Il apparaît dans les GET automatiquement."
      ], tip:"Choisir 'nullable' = le champ peut être vide (null). Si on ne le coche pas, toutes les insertions devront obligatoirement remplir ce champ." },
 
    { cat:"bdd", type:"erreur", badge:"Base de données", badgeClass:"badge-imm",
      title:"Erreurs fréquentes avec Supabase",
      desc:"Les problèmes les plus courants quand on démarre avec une base de données.",
      code:null,
      liste:[
        "❌ <strong>401 Unauthorized</strong> — La clé API est mauvaise ou absente des headers. Vérifier apikey et Authorization.",
        "❌ <strong>404 Not Found</strong> — Le nom de la table dans l'URL est incorrect. Vérifier le nom exact dans Supabase → Table Editor.",
        "❌ <strong>La colonne n'existe pas</strong> — On essaie d'écrire dans un champ pas encore créé. L'ajouter via Table Editor → Add column.",
        "❌ <strong>Les données ne se sauvegardent pas</strong> — Vérifier que la méthode est POST (ajout) ou PATCH (modif) et non GET.",
        "❌ <strong>res.json() plante</strong> — La réponse n'est pas du JSON valide. Utiliser <code>await res.text()</code> à la place pour voir le vrai message d'erreur.",
        "❌ <strong>RLS bloque les requêtes</strong> — Row Level Security actif sur la table. Dans Supabase → Authentication → Policies : désactiver RLS ou créer une policy permissive."
      ], tip:"Pour débugger : ouvrir la console du navigateur (⌘ + Option + J sur Mac) et lire les messages d'erreur — ils indiquent souvent exactement ce qui cloche." },
    {
  title: "Margin vs Padding",
  cat: "css",
  type: "concept",
  badge: "Design",
  badgeClass: "badge-med",
  desc: "Le Padding est l'espace **intérieur** (entre le texte et la bordure). Le Margin est l'espace **extérieur** (entre la bordure et les autres éléments).",
  code: `<span class=\"com\">/* Astuce : Trou de mémoire ? */</span>\n<span class=\"kw\">Padding</span> = <span class=\"str\">Rembourrage (dedans)</span>\n<span class=\"kw\">Margin</span> = <span class=\"str\">Marge de sécurité (dehors)</span>`,
  tip: [
    "Padding : agrandit la zone cliquable et le fond coloré.",
    "Margin : crée de l'air entre tes cartes.",
    "Raccourci : margin: 10px 5px (Haut/Bas Gauche/Droite)."
  ]
},

    {
  title: "Tableaux HTML",
  cat: "html",
  type: "code",
  badge: "Structure",
  badgeClass: "badge-adapt",
  desc: "La structure de base pour afficher des données tabulaires.",
  code: `<span class=\"tag\">&lt;table&gt;</span>\n  <span class=\"tag\">&lt;tr&gt;</span> <span class=\"com\"></span>\n    <span class=\"tag\">&lt;th&gt;</span>Titre<span class=\"tag\">&lt;/th&gt;</span>\n    <span class=\"tag\">&lt;td&gt;</span>Donnée<span class=\"tag\">&lt;/td&gt;</span>\n  <span class=\"tag\">&lt;/tr&gt;</span>\n<span class=\"tag\">&lt;/table&gt;</span>`,
  tip: "N'oublie pas 'border-collapse: collapse;' en CSS pour avoir des bordures simples."
},

    {
  title: "GitHub & Terminal (Mac)",
  cat: "tool",
  type: "list",
  badge: "Productivité",
  badgeClass: "badge-imm",
  desc: "Les indispensables pour gérer ton code sur Mac.",
  tip: [
    "<strong>Cmd + K</strong> : Nettoyer le terminal.",
    "<strong>Cmd + Click</strong> : Ouvrir un lien ou un fichier dans le code.",
    "<strong>git add .</strong> : Prépare tous les changements.",
    "<strong>git commit -m \"message\"</strong> : Valide les modifs.",
    "<strong>git push</strong> : Envoie tout sur le web."
  ]
},
    {
      cat: "coding", type: "supabase",
      badge: "BASE DE DONNÉES", badgeClass: "badge-imm",
      title: "Menu déroulant et Contraintes",
      desc: "Pour limiter les choix dans une colonne (ex: CROCHET ou AUTRE), on utilise une contrainte CHECK en SQL et un élément 'select' en HTML.",
      code: `-- 1. SQL : Ajouter une contrainte à la table
ALTER TABLE projets_crochet 
ADD CONSTRAINT check_categorie 
CHECK (categorie IN ('CROCHET', 'AUTRE'));

-- 2. HTML : Créer le menu déroulant
&lt;select id="inp-categorie"&gt;
  &lt;option value="CROCHET"&gt;Crochet&lt;/option&gt;
  &lt;option value="AUTRE"&gt;Autre&lt;/option&gt;
&lt;/select&gt;

-- 3. JS : Récupérer la valeur choisie
const cat = document.getElementById('inp-categorie').value;`,
      tip: "Vérifie bien que les 'value' de ton HTML sont identiques aux majuscules près à celles définies dans ton SQL."
    },
    {
      cat: "coding", type: "html",
      badge: "LOGIQUE", badgeClass: "badge-cul",
      title: "Lien dynamique vers Patron",
      desc: "Comment transformer un champ texte en lien cliquable s'il contient une URL ou un fichier .html dans la liste des projets.",
      code: `// Dans la fonction render()
const patternLink = p.pattern.endsWith('.html') 
  ? \`&lt;a href="\${p.pattern}" class="tip"&gt;📋 Voir le patron&lt;/a&gt;\`
  : \`&lt;div class="tip"&gt;📋 \${p.pattern}&lt;/div&gt;\`;`,
      tip: "Pratique pour ouvrir directement ton patron TILDASHRUG.html depuis ta base de données."
    }
 
  ];

  let activeCat  = 'all';
  let activeType = 'all';

  function filterCat(cat, btn) {
    activeCat = cat;
    document.querySelectorAll('.filter-btn:not([onclick*="filterType"])').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  function filterType(type, btn) {
    activeType = type;
    document.querySelectorAll('[onclick*="filterType"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  function render() {
    const grid = document.getElementById('grid');
    let filtered = notes;
    if (activeCat  !== 'all') filtered = filtered.filter(n => n.cat  === activeCat);
    if (activeType !== 'all') filtered = filtered.filter(n => n.type === activeType);

    document.getElementById('count').textContent =
      filtered.length + ' note' + (filtered.length > 1 ? 's' : '') + ' affichée' + (filtered.length > 1 ? 's' : '');

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty">Aucune note ne correspond à cette sélection.</div>';
      return;
    }

    grid.innerHTML = filtered.map(n => `
      <div class="card">
        <div class="card-header">
          <span class="badge ${n.badgeClass}">${n.badge}</span>
          <span class="badge badge-mel">${typeLabel(n.type)}</span>
        </div>
        <div class="plant-name">${n.title}</div>
        <div class="desc desc-coding">${n.desc}</div>
        ${n.code ? `<div class="code-block">${n.code}</div>` : ''}
        ${n.liste ? `<div class="how-box how-box-liste">${n.liste.map(l => `<div class="step"><div class="step-text">${l}</div></div>`).join('')}</div>` : ''}
        ${n.tip ? `<div class="tip">💡 ${n.tip}</div>` : ''}
      </div>
    `).join('');
  }

  function typeLabel(type) {
    const labels = { base: 'Base', astuce: 'Astuce', erreur: 'Erreur fréquente', routine: 'Routine' };
    return labels[type] || type;
  }

  render();

