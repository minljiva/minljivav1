const NAV = [
  { cat: "projets", pages: [
    { label: "Iceolie",     href: "ICEOLIE.html" },
    { label: "Atelier",     href: "ATELIER.html" },
    { label: "Convoitises", href: "CONVOITISES.html" }
  ]},
  { cat: "carnet", pages: [
    { label: "Jardin",   href: "JARDIN.html" },
    { label: "Recettes", href: "RECETTES.html" },
    { label: "Drainage", href: "DRAINAGE.html" }
  ]},
  { cat: "learning", pages: [
    { label: "Coding", href: "CODING.html" }
  ]}
];

(function buildNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const cat = nav.closest('[data-page]') ? nav.closest('[data-page]').dataset.page : '';
  NAV.forEach(group => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-group' + (group.cat === cat ? ' nav-group-active' : '');
    const lbl = document.createElement('span');
    lbl.className = 'nav-cat' + (group.cat === cat ? ' actif' : '');
    lbl.textContent = group.cat;
    lbl.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = wrap.classList.contains('nav-open');
      document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('nav-open'));
      if (!isOpen) wrap.classList.add('nav-open');
    });
    wrap.appendChild(lbl);
    if (group.pages.length > 0) {
      const dd = document.createElement('div');
      dd.className = 'nav-dropdown';
      group.pages.forEach(p => {
        const a = document.createElement('a');
        a.href = p.href; a.textContent = p.label; a.className = 'nav-drop-item';
        dd.appendChild(a);
      });
      wrap.appendChild(dd);
    }
    nav.appendChild(wrap);
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('nav-open'));
  });
})();
