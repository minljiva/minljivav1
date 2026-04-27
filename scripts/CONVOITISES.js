// Extrait de CONVOITISES.html

const plants = [
    {
      name: "Mélisse", latin: "Melissa officinalis",
      cat: ["med","prio"], priority: true,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["est","ombre"],
      expoLabel: "Est ou mi-ombre", expoClass: "expo-both",
      pot: "Pot de 20 cm min. Arrosage régulier. Très généreuse — une plante suffit largement.",
      tags: ["antistress","antivirale","digestive","antispasmodique","insomnie"],
      desc: "La plus grande absence d'un balcon tisane. Antistress et antiviral numéro un — supérieure à la verveine sur ce point. Active sur l'herpès, les palpitations nerveuses et les insomnies. Pousse à mi-ombre sans problème.",
      tip: "Sécher les feuilles à l'ombre avant floraison. Tailler après floraison pour une deuxième pousse. Attention : envahissante comme les menthes.",
      mariage: "Verveine + camomille pour tisane nuit profonde. Mélisse seule contre l'herpès labial."
    },
    {
      name: "Calendula (souci officinal)", latin: "Calendula officinalis",
      cat: ["med","mel","prio"], priority: true,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["ouest","est"],
      expoLabel: "Ouest ou Est", expoClass: "expo-ouest",
      pot: "Pot de 15 cm suffit. Arrosage modéré. Ressème seul d'une année sur l'autre.",
      tags: ["anti-inflammatoire","cicatrisante","digestive","peau","gastrite"],
      desc: "Irremplaçable en herboristerie. En tisane : gastrite, intestin irritable, règles douloureuses. En externe : peau sensible, brûlures, plaies. Belle plante orange qui fleurit tout l'été.",
      tip: "Récolter les fleurs dès ouverture, sécher à plat rapidement. Plus on récolte, plus elle fleurit. Plante annuelle qui se ressème facilement.",
      mariage: "Menthe + fraisier + calendula pour cure dépurative printanière."
    },
    {
      name: "Hibiscus", latin: "Hibiscus sabdariffa",
      cat: ["ete","prio"], priority: true,
      badge: "Été / froid", badgeClass: "badge-ete",
      expo: ["ouest"],
      expoLabel: "Ouest — plein soleil après-midi", expoClass: "expo-ouest",
      pot: "Grand pot 25–30 cm. Chaleur indispensable. Rentrer avant les gelées (annuel à Bordeaux).",
      tags: ["vitamine C","acidulé","antioxydant","tension","cold brew"],
      desc: "Transforme les cold brews estivaux — couleur rouge vif, goût acidulé fruité, riche en vitamine C et anthocyanes. Hypotenseur léger. Demande le maximum de soleil et de chaleur.",
      tip: "C'est le calice charnu (pas la fleur) qu'on récolte et sèche. Attendre que les calices soient bien développés après la chute des pétales.",
      mariage: "Cold brew hibiscus + menthe ananas + verveine. Hibiscus + gingembre pour boisson hivernale chaude."
    },
    {
      name: "Échinacée", latin: "Echinacea purpurea",
      cat: ["imm"], priority: false,
      badge: "Immunité", badgeClass: "badge-imm",
      expo: ["ouest","est"],
      expoLabel: "Ouest ou Est", expoClass: "expo-both",
      pot: "Grand pot 25 cm min. Vivace — revient chaque année. Peu d'entretien.",
      tags: ["immunostimulant","antiviral","anti-infectieux","cure courte"],
      desc: "Le stimulant immunitaire le plus documenté en phytothérapie. À utiliser en cure courte dès les premiers signes de rhume, pas en prévention continue. Grande fleur mauve très décorative.",
      tip: "Plante vivace robuste. Racines et parties aériennes fleuries sont actives. Laisser sécher avant usage. Ne pas utiliser plus de 3 semaines d'affilée.",
      mariage: "Thym + échinacée + miel + citron en cure courte hivernale."
    },
    {
      name: "Tulsi (basilic sacré)", latin: "Ocimum tenuiflorum",
      cat: ["adapt","med"], priority: false,
      badge: "Adaptogène", badgeClass: "badge-adapt",
      expo: ["ouest"],
      expoLabel: "Ouest — plein soleil après-midi", expoClass: "expo-ouest",
      pot: "Pot de 20 cm. Chaleur et soleil indispensables. Comme le basilic commun.",
      tags: ["adaptogène","antistress","immunité","anti-inflammatoire","ayurvédique"],
      desc: "Plante adaptogène puissante de la médecine ayurvédique. Aide l'organisme à mieux gérer le stress chronique. Goût complexe, clou de girofle et poivre, très original en tisane.",
      tip: "Pincer les fleurs pour prolonger la récolte de feuilles. Rentrer avant les nuits fraîches — très frileux en dessous de 10 °C.",
      mariage: "Tulsi + mélisse + verveine pour tisane anti-stress profonde."
    },
    {
      name: "Rose ancienne", latin: "Rosa gallica / Rosa damascena",
      cat: ["mel"], priority: false,
      badge: "Mélanges", badgeClass: "badge-mel",
      expo: ["ouest","est"],
      expoLabel: "Ouest ou Est", expoClass: "expo-both",
      pot: "Grand pot 30–40 cm. Taille annuelle. Choisir impérativement une variété ancienne parfumée.",
      tags: ["anti-inflammatoire","digestive","adoucissante","parfumée","astringente"],
      desc: "Les pétales séchés de roses anciennes adoucissent et parfument n'importe quelle tisane. Propriétés astringentes, anti-inflammatoires et digestives. Les roses modernes hybrides sont sans intérêt herboriste.",
      tip: "Rosa gallica, Ispahan ou Damas uniquement. Sécher les pétales rapidement à l'ombre dès cueillette pour préserver la couleur et l'arôme.",
      mariage: "Verveine + camomille + lavande + pétales de rose pour tisane nuit très parfumée."
    },
    {
      name: "Achillée millefeuille", latin: "Achillea millefolium",
      cat: ["med"], priority: false,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["ouest","est"],
      expoLabel: "Ouest ou Est", expoClass: "expo-both",
      pot: "Pot de 20 cm. Vivace très rustique. Quasiment aucun entretien nécessaire.",
      tags: ["fièvre","cicatrisante","digestive","règles","hémostatique"],
      desc: "Plante médicinale sauvage très polyvalente. Fièvres légères (sudorifique), digestion difficile, règles douloureuses. En externe : hémostatique sur petites plaies. Goût légèrement amer et aromatique.",
      tip: "Récolter les sommités fleuries en été. Éviter en cas de grossesse. Plante vivace qui revient sans soin chaque année.",
      mariage: "Menthe verte + mélisse + achillée pour mélange digestif et antispasmodique complet."
    },
    {
      name: "Réglisse", latin: "Glycyrrhiza glabra",
      cat: ["med","arom"], priority: false,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["est","ombre"],
      expoLabel: "Est ou mi-ombre", expoClass: "expo-est",
      pot: "Grand pot profond 30–40 cm (racines profondes). Arrosage modéré. Vivace.",
      tags: ["toux","gastrite","fatigue","naturellement sucrée","adoucissante"],
      desc: "La racine séchée est un grand remède herboriste : toux, gastrite, fatigue surrénale. Goût naturellement sucré sans sucre. Tolère bien la mi-ombre et le soleil du matin, ce qui est rare parmi les médicinales.",
      tip: "Ce sont les racines qu'on utilise — récolter après 2–3 ans de culture. En pot, couper de petits morceaux de racine à sécher. Un morceau de racine suffit à parfumer toute une tisane.",
      mariage: "Thym + réglisse pour adoucir les tisanes hivernales âcres. Camomille + réglisse pour gastrite."
    },
    {
      name: "Houblon", latin: "Humulus lupulus",
      cat: ["med"], priority: false,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["ombre","est"],
      expoLabel: "Mi-ombre ou Est", expoClass: "expo-ombre",
      pot: "Grand pot 30 cm avec tuteur ou treillage. Plante grimpante vivace — pousse très vite.",
      tags: ["sédatif","insomnie","anxiété","amer","relaxant"],
      desc: "Les cônes (strobiles) sont sédatifs puissants — bien plus efficaces que la camomille pour les insomnies sérieuses. Aussi amer digestif. Plante grimpante qui peut habiller une rambarde ou un mur ombragé.",
      tip: "Ce sont les cônes femelles récoltés en fin d'été qu'on sèche. La plante pousse 3–5 m en une saison. Idéale pour créer un mur végétal sur un balcon mi-ombragé.",
      mariage: "Houblon + valériane (à acheter sec) + mélisse pour insomnie sérieuse."
    },
    {
      name: "Consoude", latin: "Symphytum officinale",
      cat: ["med"], priority: false,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["ombre","est"],
      expoLabel: "Mi-ombre ou Est", expoClass: "expo-ombre",
      pot: "Très grand pot 40 cm min. Plante imposante. Vivace très robuste.",
      tags: ["articulations","os","tendons","cicatrisante","reminéralisante"],
      desc: "Les feuilles en tisane pour les articulations, os, tendons — une des rares plantes réellement actives sur les tissus conjonctifs. Très grandes feuilles veloutées, port imposant, pousse bien à l'ombre.",
      tip: "Usage interne à limiter dans le temps (alcaloïdes pyrrolizidiniques en grande quantité). En cure courte de 2–3 semaines max. L'usage externe (cataplasme) est sans restriction.",
      mariage: "Consoude + prêle (à acheter sèche) pour cure articulations-reminéralisation."
    },
    {
      name: "Bourrache", latin: "Borago officinalis",
      cat: ["med","mel"], priority: false,
      badge: "Médicinale", badgeClass: "badge-med",
      expo: ["ouest","est"],
      expoLabel: "Ouest ou Est", expoClass: "expo-both",
      pot: "Pot de 20 cm. Annuelle qui se ressème facilement. Fleurs comestibles très décoratives.",
      tags: ["dépurative","sudorifique","anti-inflammatoire","adrénaline","fleurs comestibles"],
      desc: "Plante dépurative et sudorifique — utilisée pour les refroidissements et comme cure de printemps. Les fleurs bleues étoilées sont comestibles et décoratives en tisane ou en salade. Goût concombre.",
      tip: "Se ressème spontanément d'une année sur l'autre si on laisse quelques fleurs monter en graine. Fleurs à récolter fraîches ou à sécher rapidement.",
      mariage: "Fleurs de bourrache + verveine + pétales de calendula pour tisane dépurative printanière."
    },
    {
      name: "Gingembre", latin: "Zingiber officinale",
      cat: ["arom","imm"], priority: false,
      badge: "Aromatique", badgeClass: "badge-arom",
      expo: ["ouest"],
      expoLabel: "Ouest — plein soleil après-midi", expoClass: "expo-ouest",
      pot: "Grand pot large et peu profond. Rhizome étalé horizontalement. Hiverner à l'intérieur.",
      tags: ["anti-nausées","réchauffant","anti-inflammatoire","digestif","immunité"],
      desc: "Le rhizome frais ou séché est un incontournable des tisanes hivernales et digestives. Anti-nausées puissant, réchauffant, anti-inflammatoire (arthrite). Très facile à cultiver en pot à partir d'un rhizome du commerce.",
      tip: "Planter un rhizome du supermarché en mars, pot large. Récolter en automne avant les gelées. Sécher les tranches ou utiliser frais. Rentrer l'hiver.",
      mariage: "Gingembre + citron + miel + thym — la tisane hivernale de référence. Gingembre + hibiscus pour boisson acidulée chaude."
    },
    {
      name: "Citronnelle (vraie)", latin: "Cymbopogon citratus",
      cat: ["arom","mel"], priority: false,
      badge: "Aromatique", badgeClass: "badge-arom",
      expo: ["ouest"],
      expoLabel: "Ouest — plein soleil après-midi", expoClass: "expo-ouest",
      pot: "Grand pot 30 cm. Forte touffe — une seule plante produit beaucoup. Rentrer l'hiver.",
      tags: ["digestive","relaxante","répulsive","arôme citron","anti-fièvre"],
      desc: "À ne pas confondre avec la verveine citronnelle. La vraie citronnelle (herbe) est utilisée en Asie du Sud-Est pour les fièvres, digestion et relaxation. Arôme citronné puissant, très agréable en tisane froide.",
      tip: "Couper les tiges à la base, enlever les feuilles extérieures dures. Utiliser les tiges tendues intérieures. Excellent en cold brew ou tisane chaude.",
      mariage: "Citronnelle + gingembre + menthe ananas pour tisane asiatique fraîche et digestive."
    }
  ];

  let activeCat = 'all';
  let activeExpo = 'all';

  function filterCat(cat, btn) {
    activeCat = cat;
    document.querySelectorAll('.filter-btn:not(.expo-btn)').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  function filterExpo(expo, btn) {
    activeExpo = expo;
    document.querySelectorAll('.expo-btn').forEach(b => {
      b.classList.remove('active', 'active-est', 'active-ouest', 'active-ombre', 'active-all');
    });
    btn.classList.add('active');
    if (expo === 'est')        btn.classList.add('active-est');
    else if (expo === 'ouest') btn.classList.add('active-ouest');
    else if (expo === 'ombre') btn.classList.add('active-ombre');
    else                       btn.classList.add('active-all');
    render();
  }

  function render() {
    const grid = document.getElementById('grid');
    let filtered = plants;
    if (activeCat !== 'all') filtered = filtered.filter(p => p.cat.includes(activeCat));
    if (activeExpo !== 'all') filtered = filtered.filter(p => p.expo.includes(activeExpo));

    document.getElementById('count').textContent =
      filtered.length + ' plante' + (filtered.length > 1 ? 's' : '') +
      ' affichée' + (filtered.length > 1 ? 's' : '');

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty">Aucune plante ne correspond à cette combinaison de filtres.</div>';
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="card${p.priority ? ' prio' : ''}">
        ${p.priority ? '<span class="prio-label">Priorité recommandée</span>' : ''}
        <div class="card-header">
          <span class="badge ${p.badgeClass}">${p.badge}</span>
          <span class="expo-tag ${p.expoClass}">${p.expoLabel}</span>
        </div>
        <div class="plant-name">${p.name}</div>
        <div class="plant-latin">${p.latin}</div>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="desc">${p.desc}</div>
        <div class="pot-info">En pot : ${p.pot}</div>
        <div class="tipV">${p.tip}</div>
        <div class="mariage">Se marie avec : ${p.mariage}</div>
      </div>
    `).join('');
  }

  render();

