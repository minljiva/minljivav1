// Extrait de ATELIER.html

// CONFIGURATION
    const SUPABASE_URL = 'https://wenkojnlclbyuzgmtyyw.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_Gs78kcFk41qbUpaIM3RhZw_ONgTzhuQ';
    const TABLE = 'projets_crochet';

    const headers = {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Prefer': 'return=representation'
    };

    let projets = [];
    let filtreStatut = 'all';
    let filtreCat = 'all';
    let projetEnCours = null;
    let detailId = null;

    // FONCTIONS CORE
    async function charger() {
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?order=created_at.desc`, { headers });
        projets = await res.json();
        render();
      } catch(e) { console.error("Erreur chargement:", e); }
    }

    function render() {
      const grid = document.getElementById('grid');
      const list = projets.filter(p => {
        const matchStatut = (filtreStatut === 'all')
          ? p.statut !== 'archive'          // "Tout" = jamais les archivés
          : p.statut === filtreStatut;
        const catP = (p.categorie || '').toLowerCase();
        const matchCat = (filtreCat === 'all' || catP === filtreCat.toLowerCase());
        return matchStatut && matchCat;
      });

      // compteur : exclut toujours les archivés
      const countElem = document.getElementById('count');
      const actifs = projets.filter(p => p.statut !== 'archive');
      if (countElem) countElem.textContent = filtreStatut === 'archive'
        ? `${list.length} projet${list.length > 1 ? 's' : ''} archivé${list.length > 1 ? 's' : ''}`
        : `${list.length} / ${actifs.length} projet${actifs.length > 1 ? 's' : ''}`;

      if (list.length === 0) {
        grid.innerHTML = '<div class="empty">Aucun projet trouvé. 🧶</div>';
        return;
      }

      const statutLabel = { todo: 'TO DO', wip: 'WIP', done: 'DONE', archive: '📦 Archivé' };

      grid.innerHTML = list.map(p => {
        const btnSuivant = p.statut === 'todo'
          ? `<button class="btn-next" onclick="event.stopPropagation(); changerStatut('${p.id}','wip')">▶ Démarrer</button>`
          : p.statut === 'wip'
          ? `<button class="btn-next" onclick="event.stopPropagation(); demanderDuree('${p.id}')">✓ Terminer</button>`
          : p.statut === 'done'
          ? `<button class="btn-next" onclick="event.stopPropagation(); changerStatut('${p.id}','archive')">📦 Archiver</button>`
          : '';

        let inspirationAffiche = p.inspiration || '';
        if (p.inspiration) {
          const estLien = p.inspiration.includes('http') || p.inspiration.endsWith('.html');
          if (estLien) {
            inspirationAffiche = `<a href="${p.inspiration}" target="_blank" style="color: inherit; text-decoration: underline; font-weight: bold;">Voir l'inspiration</a>`;
          }
        }

        return `
          <div class="crochet-card ${p.statut}">
            <div class="card-top">
              <span class="badge statut-${p.statut}">${statutLabel[p.statut] || p.statut}</span>
              <div class="plant-name clickable-title card-top-title" onclick="ouvrirDetail('${p.id}')">
                 ${p.titre}
              </div>
            </div>
            <div class="tip" style="font-size: 0.8em; opacity: 0.8;">📁 ${p.categorie || 'AUTRE'}</div>
            ${p.inspiration ? `<div class="tip">📋 ${inspirationAffiche}</div>` : ''}
            ${p.duree ? `<div class="pot-info">⏱ ${p.duree}</div>` : ''}
            <div class="card-actions">
              ${btnSuivant}
              <button class="btn-delete" onclick="event.stopPropagation(); supprimerProjet('${p.id}')">✕</button>
            </div>
          </div>`;
      }).join('');
    }

    // FILTRES
    function setFiltre(s, btn) {
      filtreStatut = s;
      btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    }
    function filterProjet(c, btn) {
      filtreCat = c;
      btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    }

    // MODALS
    function ouvrirModal() {
      document.getElementById('inp-titre').value = '';
      document.getElementById('inp-inspiration').value = '';
      document.getElementById('inp-explication').value = '';
      document.getElementById('overlay').classList.add('open');
    }
    function fermerModal() { document.getElementById('overlay').classList.remove('open'); }
    function fermerModalSiDehors(e) { if (e.target.id === 'overlay') fermerModal(); }

    async function ajouterProjet() {
      const titre = document.getElementById('inp-titre').value.trim();
      const inspiration = document.getElementById('inp-inspiration').value.trim();
      const explication = document.getElementById('inp-explication').value.trim();
      const categorie = document.getElementById('inp-categorie').value;
      if (!titre) return;
      await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
        method: 'POST', headers,
        body: JSON.stringify({ titre, inspiration: inspiration || null, explication: explication || null, statut: 'todo', categorie })
      });
      fermerModal();
      charger();
    }

    function demanderDuree(id) {
      projetEnCours = id;
      document.getElementById('inp-duree').value = '';
      document.getElementById('overlay-duree').classList.add('open');
    }
    function fermerDureeSiDehors(e) { if (e.target.id === 'overlay-duree') validerDuree(false); }

async function validerDuree(sauver) {
      // On récupère la valeur seulement si on a cliqué sur Enregistrer
      const dureeSaisie = document.getElementById('inp-duree').value.trim();
      const duree = (sauver && dureeSaisie !== "") ? dureeSaisie : null;
      
      // On ferme la modal tout de suite pour le feedback visuel
      document.getElementById('overlay-duree').classList.remove('open');
      
      // On lance la mise à jour
      await changerStatut(projetEnCours, 'done', duree);
    }

   async function changerStatut(id, statut, duree = null) {
  const body = { statut: statut };
  if (duree !== null) body.duree = duree;

  try {
    // Optionnel : On peut ajouter un indicateur visuel ici
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${id}`, {
      method: 'PATCH', 
      headers: headers, 
      body: JSON.stringify(body)
    });

    if (!response.ok) throw new Error("Erreur");

    console.log("Mise à jour réussie pour l'ID:", id); // Pour vérifier dans ta console
    await charger(); 
  } catch (e) {
    console.error("Erreur détaillée:", e);
    alert("Souci de connexion avec la base de données.");
  }
}


    async function supprimerProjet(id) {
      if (!confirm('Supprimer ?')) return;
      await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${id}`, { method: 'DELETE', headers });
      charger();
    }

    // DETAILS
    function ouvrirDetail(id) {
      const p = projets.find(x => x.id === id);
      if (!p) return;
      detailId = id;
      document.getElementById('d-date').textContent = p.created_at ? new Date(p.created_at).toLocaleDateString() : '--';
      const badgeElem = document.getElementById('d-statut-badge');
      const statutLabel = { todo:'TO DO', wip:'WIP', done:'DONE' };
      badgeElem.innerHTML = `<span class="badge statut-${p.statut}">${statutLabel[p.statut]}</span>`;
      document.getElementById('d-titre-affiche').textContent = '🧶 ' + p.titre;
      document.getElementById('d-titre').value = p.titre || '';
      document.getElementById('d-categorie').value = p.categorie || 'CROCHET';
      document.getElementById('d-inspiration').value = p.inspiration || '';
      document.getElementById('d-explication-detail').value = p.explication || '';
      document.getElementById('d-duree').value = p.duree || '';
      document.getElementById('d-statut').value = p.statut;
      document.getElementById('detail-overlay').classList.add('open');
      document.getElementById('detail-panel').classList.add('open');
    }
    function fermerDetail() {
      document.getElementById('detail-overlay').classList.remove('open');
      document.getElementById('detail-panel').classList.remove('open');
    }
    async function sauvegarderDetail() {
      const btn = document.getElementById('btn-detail-save');
      btn.disabled = true;
      const body = {
        titre: document.getElementById('d-titre').value,
        categorie: document.getElementById('d-categorie').value,
        inspiration: document.getElementById('d-inspiration').value || null,
        explication: document.getElementById('d-explication-detail').value || null,
        duree: document.getElementById('d-duree').value || null,
        statut: document.getElementById('d-statut').value
      };
      await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${detailId}`, {
        method: 'PATCH', headers, body: JSON.stringify(body)
      });
      await charger();
      ouvrirDetail(detailId);
      document.getElementById('save-ok').style.display = 'block';
      setTimeout(() => document.getElementById('save-ok').style.display = 'none', 2000);
      btn.disabled = false;
    }

    charger();

