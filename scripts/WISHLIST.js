// ============================================================
//  WISHLIST.js — Minljiva
//  Table Supabase attendue : wishlist
//  Colonnes : id, nom, cat, lien, prix, prio, notes, created_at
// ============================================================

const SUPABASE_URL = 'https://wenkojnlclbyuzgmtyyw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Gs78kcFk41qbUpaIM3RhZw_ONgTzhuQ';
const TABLE = 'wishlist';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY,
  'Prefer': 'return=representation'
};

// ── État ─────────────────────────────────────────────────────
let items = [];
let filtreCat  = 'all';
let filtrePrio = 'all';
let detailId   = null;

// ── Config catégories ────────────────────────────────────────
const CAT_CONFIG = {
  plantes:   { label: '🌿 Plantes',        badgeClass: 'badge-med' },
  laine:     { label: '🧶 Laine & crochet', badgeClass: 'badge-imm' },
  vetements: { label: '👗 Vêtements',       badgeClass: 'badge-orn' },
  livres:    { label: '📚 Livres',           badgeClass: 'badge-adapt' },
  autre:     { label: '✨ Autre',            badgeClass: 'badge-mel' },
};

// ── Chargement ───────────────────────────────────────────────
async function charger() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?order=created_at.desc`,
      { headers }
    );
    if (!res.ok) throw new Error(await res.text());
    items = await res.json();
    render();
  } catch (e) {
    document.getElementById('grid').innerHTML =
      `<div class="empty">Impossible de charger la wishlist.<br><small>${e.message}</small></div>`;
  }
}

// ── Rendu ────────────────────────────────────────────────────
function render() {
  const grid = document.getElementById('grid');

  let filtered = items;
  if (filtreCat  !== 'all') filtered = filtered.filter(i => i.cat  === filtreCat);
  if (filtrePrio !== 'all') filtered = filtered.filter(i => i.prio === filtrePrio);

  const count = document.getElementById('count');
  count.textContent = `${filtered.length} article${filtered.length > 1 ? 's' : ''} · ${items.length} au total`;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty">Aucun article ne correspond. ✨</div>';
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const cat = CAT_CONFIG[item.cat] || CAT_CONFIG.autre;
    const lienHtml = item.lien
      ? `<a href="${item.lien}" target="_blank" class="tip" style="display:block;margin-top:8px;">🔗 Voir l'article</a>`
      : '';
    const prixHtml = item.prix
      ? `<div class="pot-info" style="margin-top:6px;">💰 ${item.prix}</div>`
      : '';
    const notesHtml = item.notes
      ? `<div class="desc" style="margin-top:8px;">${item.notes}</div>`
      : '';
    const prioBadge = item.prio === 'haute'
      ? `<span class="prio-label">⭐ Priorité haute</span>`
      : '';

    return `
      <div class="card${item.prio === 'haute' ? ' prio' : ''}">
        ${prioBadge}
        <div class="card-top">
          <span class="badge ${cat.badgeClass}">${cat.label}</span>
          <div class="plant-name clickable-title card-top-title" onclick="ouvrirDetail('${item.id}')">
            ${item.nom}
          </div>
        </div>
        ${prixHtml}
        ${lienHtml}
        ${notesHtml}
        <div class="card-actions">
          <button class="btn-secondary" onclick="event.stopPropagation(); marquerAchete('${item.id}')">✓ Acheté</button>
          <button class="btn-delete" onclick="event.stopPropagation(); supprimer('${item.id}')">✕</button>
        </div>
      </div>`;
  }).join('');
}

// ── Filtres ──────────────────────────────────────────────────
function setFiltre(cat, btn) {
  filtreCat = cat;
  btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => {
    if (!b.getAttribute('onclick').includes('setPrio')) b.classList.remove('active');
  });
  btn.classList.add('active');
  render();
}

function setPrio(prio, btn) {
  filtrePrio = prio;
  document.querySelectorAll('[onclick*="setPrio"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

// ── Modal ajout ──────────────────────────────────────────────
function ouvrirModal() {
  ['inp-nom', 'inp-lien', 'inp-prix', 'inp-notes'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('inp-cat').value  = 'plantes';
  document.getElementById('inp-prio').value = 'normale';
  document.getElementById('overlay').classList.add('open');
  document.getElementById('inp-nom').focus();
}

function fermerModal() {
  document.getElementById('overlay').classList.remove('open');
}

function fermerModalSiDehors(e) {
  if (e.target.id === 'overlay') fermerModal();
}

async function ajouter() {
  const nom = document.getElementById('inp-nom').value.trim();
  if (!nom) { document.getElementById('inp-nom').focus(); return; }

  const body = {
    nom,
    cat:   document.getElementById('inp-cat').value,
    lien:  document.getElementById('inp-lien').value.trim()  || null,
    prix:  document.getElementById('inp-prix').value.trim()  || null,
    prio:  document.getElementById('inp-prio').value,
    notes: document.getElementById('inp-notes').value.trim() || null,
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
      method: 'POST', headers, body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());
    fermerModal();
    await charger();
  } catch (e) {
    alert('Erreur lors de l'ajout : ' + e.message);
  }
}

// ── Marquer acheté (supprime de la wishlist) ─────────────────
async function marquerAchete(id) {
  if (!confirm('Marquer comme acheté et retirer de la wishlist ?')) return;
  await supprimer(id);
}

// ── Suppression ──────────────────────────────────────────────
async function supprimer(id) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${id}`, {
      method: 'DELETE', headers
    });
    if (!res.ok) throw new Error(await res.text());
    await charger();
  } catch (e) {
    alert('Erreur : ' + e.message);
  }
}

// ── Panneau détail / édition ─────────────────────────────────
function ouvrirDetail(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  detailId = id;

  const cat = CAT_CONFIG[item.cat] || CAT_CONFIG.autre;
  document.getElementById('d-badge').innerHTML =
    `<span class="badge ${cat.badgeClass}">${cat.label}</span>`;
  document.getElementById('d-prio-badge').innerHTML = item.prio === 'haute'
    ? `<span class="prio-label">⭐ Haute</span>` : '';

  document.getElementById('d-nom-affiche').textContent = item.nom;
  document.getElementById('d-nom').value   = item.nom   || '';
  document.getElementById('d-cat').value   = item.cat   || 'autre';
  document.getElementById('d-lien').value  = item.lien  || '';
  document.getElementById('d-prix').value  = item.prix  || '';
  document.getElementById('d-prio').value  = item.prio  || 'normale';
  document.getElementById('d-notes').value = item.notes || '';

  document.getElementById('save-ok').style.display = 'none';
  document.getElementById('detail-overlay').classList.add('open');
  document.getElementById('detail-panel').classList.add('open');
}

function fermerDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.getElementById('detail-panel').classList.remove('open');
}

async function sauvegarder() {
  const btn = document.getElementById('btn-detail-save');
  btn.disabled = true;

  const body = {
    nom:   document.getElementById('d-nom').value.trim(),
    cat:   document.getElementById('d-cat').value,
    lien:  document.getElementById('d-lien').value.trim()  || null,
    prix:  document.getElementById('d-prix').value.trim()  || null,
    prio:  document.getElementById('d-prio').value,
    notes: document.getElementById('d-notes').value.trim() || null,
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${detailId}`, {
      method: 'PATCH', headers, body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());
    await charger();
    ouvrirDetail(detailId);
    document.getElementById('save-ok').style.display = 'block';
    setTimeout(() => document.getElementById('save-ok').style.display = 'none', 2000);
  } catch (e) {
    alert('Erreur : ' + e.message);
  } finally {
    btn.disabled = false;
  }
}

// ── Init ─────────────────────────────────────────────────────
charger();
