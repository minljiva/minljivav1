// Extrait de JARDIN.html

const plants = [
    {
      name: "Verveine citronnelle", latin: "Aloysia citrodora", cat: "med", badge: "Médicinale", badgeClass: "badge-med",
      tags: ["digestive", "sédative", "antispasmodique"],
      desc: "Grande favorite des herboristes. Ses feuilles riches en citral et limonène en font un antistress de premier ordre. Infusion classique contre les insomnies légères, les digestions difficiles et les spasmes intestinaux.",
      tip: "Récolter avant floraison pour un arôme maximal. Sécher à l'ombre, les feuilles perdent vite leur huile essentielle à la chaleur."
    },
    {
      name: "Camomille allemande", latin: "Matricaria chamomilla", cat: "med", badge: "Médicinale", badgeClass: "badge-med",
      tags: ["anti-inflammatoire", "antispasmodique", "cicatrisante"],
      desc: "La plus précieuse des camomilles. Contient de l'alpha-bisabolol et du chamazulène (huile bleue). Usage interne : crampes digestives, règles douloureuses, anxiété. Usage externe : peau irritée, eczéma, conjonctivite.",
      tip: "Récolter les capitules quand les ligules (pétales blancs) se rabattent vers le bas — signe de maturité optimale."
    },
    {
      name: "Pelargonium 'Pinki Pinks'", latin: "Pelargonium × hortorum", cat: "orn", badge: "Ornementale", badgeClass: "badge-orn",
      tags: ["répulsif naturel", "parfum", "comestible"],
      desc: "Peu exploité en herboristerie classique, mais les feuilles des pélargoniums odorants sont antiseptiques et répulsives contre les moustiques. Les fleurs sont comestibles, utilisées en décoration culinaire.",
      tip: "Mettre un pot près d'une fenêtre ouverte : l'odeur des feuilles froissées éloigne les moustiques naturellement."
    },
    {
      name: "Nectarine 'Sweet Lady'", latin: "Prunus persica var. nucipersica", cat: "fruit", badge: "Fruitière", badgeClass: "badge-fruit",
      tags: ["feuilles astringentes", "fleurs pectorales", "antioxydant"],
      desc: "Les feuilles de pêcher/nectarinier sont traditionnellement utilisées en décoction contre la toux et les bronchites. Les amandes du noyau contiennent de l'amygdaline et sont à éviter en grande quantité.",
      tip: "Pruner les rameaux après récolte pour garder un port compact en pot. Un balcon bien ensoleillé suffit pour une bonne fructification."
    },
    {
      name: "Framboisier 'Fallgold'", latin: "Rubus idaeus", cat: "fruit", badge: "Fruitière", badgeClass: "badge-fruit",
      tags: ["feuilles toniques", "astringente", "préparation accouchement"],
      desc: "Les feuilles de framboisier sont un remède herboriste emblématique. Riches en tanins et fragarine, elles tonifient l'utérus. Aussi utiles contre les diarrhées et les aphtes.",
      tip: "Récoltez les jeunes feuilles au printemps avant floraison. Cette variété remontante donne deux récoltes : été et automne."
    },
    {
      name: "Menthe verte", latin: "Mentha spicata", cat: "cul", badge: "Aromatique", badgeClass: "badge-cul",
      tags: ["digestive", "rafraîchissante", "stimulante"],
      desc: "Plus douce que la menthe poivrée, idéale en cuisine et en infusion. L'herboriste l'utilise pour les nausées, maux de tête et mauvaise digestion. Le carvone qu'elle contient est antifongique.",
      tip: "À isoler en pot car très envahissante. Pincer régulièrement pour densifier le feuillage et retarder la montée en graines."
    },
    {
      name: "Menthe ananas", latin: "Mentha suaveolens 'Variegata'", cat: "cul", badge: "Aromatique", badgeClass: "badge-cul",
      tags: ["digestive", "décorative", "infusion douce"],
      desc: "Variété originale au parfum fruité et doux. Moins puissante médicalement mais très appréciée en infusion légère, cocktails et cuisine. Propriétés digestives et antispasmodiques douces.",
      tip: "Son feuillage panaché crème et vert en fait aussi une plante ornementale. Préfère une mi-ombre sur balcon exposé sud."
    },
    {
      name: "Lavande grosso", latin: "Lavandula × intermedia 'Grosso'", cat: "med", badge: "Médicinale", badgeClass: "badge-med",
      tags: ["calmante", "antiseptique", "cicatrisante", "répulsive"],
      desc: "La lavande la plus cultivée pour son huile essentielle. Linalol et acétate de linalyle lui confèrent de puissantes propriétés : anxiolytique, antalgique, cicatrisante. Application locale sur brûlures légères, piqûres, maux de tête. Éloigne les mites et moustiques.",
      tip: "Tailler après floraison en ne coupant jamais dans le vieux bois. L'HE de lavandin 'Grosso' est plus camphrée que la vraie lavande fine."
    },
    {
      name: "Thym commun", latin: "Thymus vulgaris", cat: "cul", badge: "Aromatique", badgeClass: "badge-cul",
      tags: ["antiseptique", "expectorant", "antifongique", "digestif"],
      desc: "Le plus puissant des aromatiques de balcon. Le thymol et le carvacrol sont parmi les antiseptiques naturels les plus efficaces. Bronchites, toux, rhumes : indispensable. Aussi antimycosique, digestif et vermifuge.",
      tip: "Laisser fleurir une fois par an — les fleurs sont aussi médicinales et très mellifères. Supporte bien la sécheresse."
    },
    {
      name: "Fraisier gariguette", latin: "Fragaria × ananassa 'Gariguette'", cat: "fruit", badge: "Fruitière", badgeClass: "badge-fruit",
      tags: ["feuilles astringentes", "reminéralisante", "dépurative"],
      desc: "Les feuilles de fraisier sont riches en tanins et acide ellagique. En herboristerie : infusion dépurative, astringente pour les diarrhées, gingivites. Les fruits, riches en vitamine C et antioxydants, sont eux-mêmes considérés comme aliments-médicaments.",
      tip: "Les stolons peuvent être supprimés pour concentrer l'énergie sur les fruits, ou laissés pour multiplier la plante gratuitement."
    },
    {
  name: "Basilic grand vert", latin: "Ocimum basilicum", cat: "cul", badge: "Aromatique", badgeClass: "badge-cul",
  tags: ["digestif", "antispasmodique", "antibactérien", "anti-inflammatoire"],
  desc: "Bien plus qu'une herbe de cuisine. Le basilic contient de l'eugénol et du linalol, actifs sur les spasmes digestifs, les nausées et les maux de tête. Traditionnellement utilisé contre l'anxiété légère et la fatigue nerveuse.",
  tip: "Pincer les fleurs dès qu'elles apparaissent pour concentrer les huiles essentielles dans les feuilles. Récolter le matin, avant la chaleur."
},
{
  name: "Persil frisé", latin: "Petroselinum crispum", cat: "cul", badge: "Aromatique", badgeClass: "badge-cul",
  tags: ["reminéralisant", "diurétique", "antioxydant", "vitamine C"],
  desc: "Le persil est une des plantes les plus riches en vitamine C, fer et apigénine (flavonoïde antioxydant). En herboristerie : diurétique doux, dépuratif, reminéralisant. Les feuilles fraîches mâchées neutralisent les mauvaises odeurs buccales.",
  tip: "Couper au ras du sol en laissant le cœur — il repousse plusieurs fois. Éviter en tisane concentrée en cas de grossesse (apiol en quantité)."
},
  ];

  let active = 'all';

  function filter(cat, btn) {
    active = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  function render() {
    const grid = document.getElementById('grid');
    const filtered = active === 'all' ? plants : plants.filter(p => p.cat === active);
    grid.innerHTML = filtered.map(p => `
      <div class="card">
        <div class="card-header">
          <span class="badge ${p.badgeClass}">${p.badge}</span>
        </div>
        <div class="plant-name">${p.name}</div>
        <div class="plant-latin">${p.latin}</div>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="desc">${p.desc}</div>
        <div class="tip">${p.tip}</div>
      </div>
    `).join('');


    document.getElementById('count').textContent = 
  filtered.length + ' fiche' + (filtered.length > 1 ? 's' : '') + ' affichée' + (filtered.length > 1 ? 's' : '');
  }
  render();

