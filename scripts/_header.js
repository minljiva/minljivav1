// Extrait de _header.html

const NAV = [
    {
      cat: "balcon",
      pages: [
        { label: "Herboriste", href: "HERBORISTE.html" },
        { label: "Tisanes",    href: "TISANES.html" },
        { label: "Recettes",   href: "RECETTE.html" },
        { label: "L'avenir",  href: "AVENIR.html" }
      ]
    },
    {
      cat: "projets",
      pages: [
        { label: "Crochet",   href: "CROCHET.html" },
        { label: "Drainage",  href: "DRAINAGE.html" }
      ]
    },
    {
      cat: "learning",
      pages: [
        { label: "Coding",    href: "CODING.html" }
      ]
    },
    {
      cat: "iceolie",
      pages: [],
      soon: true
    }
  ];

  (function buildNav() {
    const nav = document.getElementById('main-nav');
    const header = document.querySelector('.site-header');
    const currentPage = header ? header.dataset.page : '';

    NAV.forEach(group => {
      const isActive = group.cat === currentPage;
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
  })();

