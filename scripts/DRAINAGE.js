// Extrait de DRAINAGE.html

const data = [

{
  title: "Routine rapide quotidienne", sub: "5 min · matin",
  icon: "⚡", type: ["rapide","all"], iconColor: "neutre",
  blocks: [
    { label: "Étapes", val: "Clavicules (pompage léger) · Cou (glisser vers bas) · Aisselles (pressions douces) · Ventre (cercles) · Aine (pompage)" },
    { label: "Rythme", val: "Mouvements lents · pression très légère · toujours vers les ganglions" }
  ],
  note: "À faire le matin pour relancer la circulation et réduire les gonflements."
},

{
  title: "Routine hebdomadaire profonde", sub: "20 min · récupération",
  icon: "💧", type: ["deep","all"], iconColor: "neutre",
  blocks: [
    { label: "Étapes", val: "Ouvrir clavicules · Cou complet · Bras entier · Ventre profond · Jambes complètes · Terminer par aine" },
    { label: "Technique", val: "Pression lente + relâchement · répétitions x5 par zone" }
  ],
  note: "Prendre son temps. Respirer profondément pour amplifier l'effet."
},

{
  title: "Drainage haut du corps", sub: "10 min",
  icon: "🫁", type: ["haut","all"], iconColor: "neutre",
  blocks: [
    { label: "Zones", val: "Clavicules · Cou · Aisselles · Bras · Poitrine" },
    { label: "Préparation", val: "Toujours commencer par ouvrir les clavicules avant de drainer" }
  ],
  note: "Idéal en cas de tensions ou sensation de lourdeur en haut du corps."
},

{
  title: "Drainage bas du corps", sub: "15 min",
  icon: "🦵", type: ["bas","all"], iconColor: "neutre",
  blocks: [
    { label: "Zones", val: "Ventre · Aine · Cuisses · Genoux · Mollets · Chevilles" },
    { label: "Sens", val: "Toujours remonter vers l’aine" }
  ],
  note: "Parfait pour jambes lourdes ou rétention d’eau."
}

];

function render(list){
  const app = document.getElementById("app");
  app.innerHTML = "";

  list.forEach(item => {
    app.innerHTML += `
      <div class="recipe">
        <div class="recipe-header">
          <div class="recipe-icon recipe-icon-${item.iconColor || 'neutre'}">${item.icon}</div>
          <div>
            <p class="recipe-title">${item.title}</p>
            <p class="recipe-sub">${item.sub}</p>
          </div>
        </div>

        ${item.blocks ? `
        <div class="row">
          ${item.blocks.map(b => `
            <div class="block">
              <div class="block-label">${b.label}</div>
              <div class="block-val">${b.val}</div>
            </div>
          `).join('')}
        </div>` : ''}

        ${item.note ? `<div class="note">${item.note}</div>` : ''}
      </div>
    `;
  });

  document.getElementById('count').textContent = 
  filtered.length + ' fiche' + (filtered.length > 1 ? 's' : '') + ' affichée' + (filtered.length > 1 ? 's' : '');
}


function filter(type, btn) {
  // --- PARTIE VISUELLE ---
  // 1. On cherche tous les boutons dans la barre de filtre
  const boutons = document.querySelectorAll('.filter-btn');
  
  // 2. On retire "active" de tout le monde
  boutons.forEach(b => b.classList.remove('active'));
  
  // 3. On ajoute "active" sur le bouton cliqué
  btn.classList.add('active');

  // --- PARTIE LOGIQUE (Ton code) ---
  if(type === "all") {
    return render(data);
  }
  render(data.filter(d => d.type.includes(type)));
}
  
// affichage initial
render(data);

