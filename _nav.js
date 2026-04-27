const NAV = [
  {
    cat: "balcon",
    pages: [
      { label: "Jardin", href: "JARDIN.html" },
      { label: "Recettes",   href: "RECETTES.html" },
      { label: "Convoitises",  href: "CONVOITISES.html" }
    ]
  },
  {
    cat: "projets",
    pages: [
      { label: "Atelier",  href: "ATELIER.html" },
      { label: "Drainage", href: "DRAINAGE.html" }
    ]
  },
  {
    cat: "learning",
    pages: [
      { label: "Coding", href: "CODING.html" }
    ]
  },
  {
    cat: "iceolie",
    pages: [],
    soon: true
  }
];

function buildNav(navId, activeCat) {
  const nav = document.getElementById(navId);
  if (!nav) return;

  NAV.forEach(group => {
    const isActive = group.cat === activeCat;
    const wrapper = document.createElement('div');
    wrapper.className = 'nav-group' + (isActive ? ' nav-group-active' : '');

    const label = document.createElement('span');
    label.className = 'nav-cat' + (isActive ? ' actif' : '') + (group.soon ? ' nav-cat-soon' : '');
    label.textContent = group.cat;
    wrapper.appendChild(label);

    if (group.pages.length > 0) {
      const dropdown = document.createElement('div');
      dropdown.className = 'nav-dropdown';
      group.pages.forEach(p => {
        const a = document.createElement('a');
        a.href = p.href;
        a.textContent = p.label;
        a.className = 'nav-drop-item';
        dropdown.appendChild(a);
      });
      wrapper.appendChild(dropdown);
    }

    nav.appendChild(wrapper);
  });
}
