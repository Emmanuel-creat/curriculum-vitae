export type ProjectMeta = {
  slug: string;
  tag: "R&D" | "Code";
  accent: string;
  order: number;
};

export type ProjectLink = { label: string; href: string };

export type ProjectContent = {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  status: string;
  pitch: string;
  problem: string;
  contribution: string[];
  results: string[];
  stack: string[];
  links: ProjectLink[];
};

export const projectOrder: ProjectMeta[] = [
  { slug: "mobilis", tag: "R&D", accent: "#4ade80", order: 1 },
  { slug: "biomemory", tag: "R&D", accent: "#22d3ee", order: 2 },
  { slug: "vic2d", tag: "R&D", accent: "#f472b6", order: 3 },
  { slug: "symbiosuits", tag: "R&D", accent: "#fb923c", order: 4 },
  { slug: "calendrier-bti", tag: "Code", accent: "#818cf8", order: 5 },
  { slug: "arcade-online", tag: "Code", accent: "#facc15", order: 6 },
  { slug: "safe-screen", tag: "Code", accent: "#c084fc", order: 7 },
];

type Slug =
  | "mobilis"
  | "biomemory"
  | "vic2d"
  | "symbiosuits"
  | "calendrier-bti"
  | "arcade-online"
  | "safe-screen";

export const projectContent: Record<Slug, Record<"fr" | "en", ProjectContent>> = {
  mobilis: {
    fr: {
      title: "Mobilis",
      subtitle: "Dispositif orthétique modulable de rééducation du poignet",
      period: "2025 → 2026",
      role: "Conception CAO · Équipe de 4 · Projet M1 Bio-ingénierie",
      status: "Prototype fonctionnel · Non poursuivi (équipe partie sur d'autres directions)",
      pitch:
        "Une seule attelle qui accompagne le poignet du premier jour post-plâtre jusqu'à la reprise du sport. Modulable, imprimable, portée en autonomie.",
      problem:
        "La rééducation du poignet après fracture est souvent linéaire : on passe d'une immobilisation totale à des exercices standard, sans progressivité fine. Les orthèses existantes sont soit passives (soutien), soit très spécialisées (une seule fonction). Résultat : plusieurs dispositifs, plusieurs coûts, une observance en dents de scie.",
      contribution: [
        "Conception CAO complète sous SolidWorks (structure, articulation modulaire, points d'ancrage bandes élastiques).",
        "Recherche du bon compromis entre rigidité, confort et modularité — plusieurs itérations imprimées et testées.",
        "Choix des matériaux et des procédés d'impression pour un prototype portable et lavable.",
        "Rédaction de la partie technique du dossier de candidature au programme PEPITE.",
      ],
      results: [
        "Prototype fonctionnel : le poignet passe en autonomie de l'assistance à la résistance en changeant simplement les modules.",
        "Dossier PEPITE monté et déposé.",
        "Décision collective de ne pas poursuivre l'aventure entrepreneuriale — chacun est parti dans une direction différente.",
      ],
      stack: ["SolidWorks", "Impression 3D (FDM)", "Bandes élastiques calibrées", "Prototypage itératif"],
      links: [],
    },
    en: {
      title: "Mobilis",
      subtitle: "Modular wrist rehabilitation orthosis",
      period: "2025 → 2026",
      role: "CAD design · Team of 4 · M1 Bioengineering project",
      status: "Functional prototype · Not pursued (team went separate ways)",
      pitch:
        "One single brace that supports the wrist from day one post-cast to sport comeback. Modular, printable, self-worn.",
      problem:
        "Post-fracture wrist rehabilitation is often linear: patients jump from full immobilization to standardized exercises, with no fine progression. Existing orthoses are either passive (support) or highly specialized (one function). The result: multiple devices, multiple costs, uneven compliance.",
      contribution: [
        "Full CAD design in SolidWorks (structure, modular joint, elastic-band anchor points).",
        "Iterating for the right trade-off between rigidity, comfort and modularity — several 3D-printed test parts.",
        "Material and process selection for a wearable, washable prototype.",
        "Wrote the technical part of the PEPITE application file.",
      ],
      results: [
        "Working prototype: the wrist moves autonomously from assist to resist by swapping modules.",
        "PEPITE application submitted.",
        "Collective decision not to pursue the venture — each teammate went in a different direction.",
      ],
      stack: ["SolidWorks", "3D printing (FDM)", "Calibrated elastic bands", "Iterative prototyping"],
      links: [],
    },
  },
  biomemory: {
    fr: {
      title: "BioMemory",
      subtitle: "Stage R&D — MGA Medtech",
      period: "Avril → Août 2026",
      role: "Stagiaire R&D · Équipe de développement interne",
      status: "Stage à venir",
      pitch:
        "Participer à la R&D d'une technologie de rupture : stocker de l'information dans l'ADN, à l'échelle industrielle. Là où le vivant devient le disque dur du futur.",
      problem:
        "Le monde produit plus de données qu'il ne peut en stocker durablement. Les supports magnétiques et flash se dégradent, consomment, occupent. BioMemory propose une réponse : encoder l'information dans des molécules d'ADN, denses, stables sur des millénaires, et alignées avec la biologie. Pour passer du concept au produit, il faut construire toute la chaîne physique qui dépose, mesure, lave, sèche — à l'échelle du picolitre.",
      contribution: [
        "Développement de scripts Python pour automatiser des bancs de test métrologiques (pilotage d'axes, acquisition, traitement).",
        "Intégration d'une chaîne complète capteur → interface CAN → ordinateur.",
        "Prototypage multi-procédés : moulage silicone, stéréolithographie, usinage.",
        "Conception et optimisation de circuits fluidiques pour le dépôt de gouttes picolitriques.",
        "Développement d'un système wash-and-dry piloté par tenségrité d'une nappe d'eau.",
        "Qualification métrologique d'un axe linéaire selon cahier des charges client.",
        "Conception de pièces et supports sous SolidWorks.",
      ],
      results: [
        "Contribution à un produit R&D en développement actif chez MGA Medtech.",
        "Compétences transférables : automatisation de bancs, fluidique, métrologie, conception mécanique.",
      ],
      stack: [
        "Python",
        "SolidWorks",
        "Interface CAN",
        "Moulage silicone",
        "SLA",
        "Usinage",
        "Fluidique picolitrique",
        "Métrologie",
      ],
      links: [
        { label: "BioMemory (site officiel)", href: "https://www.biomemory.com" },
        { label: "MGA Medtech", href: "https://www.mgamedtech.com" },
      ],
    },
    en: {
      title: "BioMemory",
      subtitle: "R&D Internship — MGA Medtech",
      period: "April → August 2026",
      role: "R&D intern · Internal development team",
      status: "Upcoming",
      pitch:
        "Joining the R&D of a breakthrough technology: storing information in DNA at industrial scale. Where the living becomes the hard drive of the future.",
      problem:
        "The world produces more data than it can durably store. Magnetic and flash media degrade, consume energy, take up space. BioMemory proposes encoding information into DNA — dense, stable over millennia, biology-aligned. Getting from concept to product means building the full physical chain that dispenses, measures, washes, dries — at picoliter scale.",
      contribution: [
        "Python scripts to automate metrology test benches (axis control, acquisition, processing).",
        "Integration of a full sensor → CAN interface → computer chain.",
        "Multi-process prototyping: silicone molding, stereolithography, machining.",
        "Design and optimization of fluidic circuits for picoliter droplet deposition.",
        "Wash-and-dry system driven by surface-tensegrity of a water sheet.",
        "Metrology qualification of a linear axis against client specs.",
        "Parts and fixtures designed in SolidWorks.",
      ],
      results: [
        "Contribution to an actively developed R&D product at MGA Medtech.",
        "Transferable skills: bench automation, fluidics, metrology, mechanical design.",
      ],
      stack: [
        "Python",
        "SolidWorks",
        "CAN interface",
        "Silicone molding",
        "SLA",
        "Machining",
        "Picoliter fluidics",
        "Metrology",
      ],
      links: [
        { label: "BioMemory (official)", href: "https://www.biomemory.com" },
        { label: "MGA Medtech", href: "https://www.mgamedtech.com" },
      ],
    },
  },
  vic2d: {
    fr: {
      title: "VIC2D — Automatisation",
      subtitle: "Deep learning appliqué à l'analyse d'essais mécaniques",
      period: "Avril 2025",
      role: "Stagiaire R&D · Laboratoire GIBOC (Sainte-Marguerite)",
      status: "Terminé · Rapport disponible sur demande",
      pitch:
        "Faire parler des images de tendons et d'os qui se déforment sous contrainte — sans qu'un humain doive cliquer pendant des heures. Un pipeline logiciel qui prend le relais des essais mécaniques.",
      problem:
        "VIC2D est un logiciel commercial d'analyse de corrélation d'images (Digital Image Correlation) très utilisé en biomécanique. Puissant, mais chronophage : chaque essai demande de nombreux réglages, une intervention humaine à chaque étape, et l'exploitation des données prend souvent plus de temps que l'essai lui-même. Le laboratoire GIBOC voulait une chaîne qui automatise ce qui peut l'être et sort des indicateurs comparables entre essais.",
      contribution: [
        "Élaboration du cahier des charges fonctionnel du logiciel, en lien avec les besoins expérimentaux du labo.",
        "Traitement d'images de tendons et d'essais de traction/compression sur os post-mortem et synthétiques (contexte : développement d'exosquelettes).",
        "Entraînement de réseaux de neurones (PyTorch, TensorFlow) pour classer et exploiter les résultats.",
        "Pilotage d'un banc d'essai embarqué (carte de commande moteur, Raspberry Pi) pour synchroniser essai mécanique et acquisition.",
      ],
      results: [
        "Cahier des charges livré au laboratoire.",
        "Premiers réseaux de neurones fonctionnels sur données réelles.",
        "Boucle acquisition ↔ analyse partiellement automatisée.",
      ],
      stack: ["Python", "PyTorch", "TensorFlow", "Raspberry Pi", "Traitement d'image", "Kinovéa"],
      links: [],
    },
    en: {
      title: "VIC2D — Automation",
      subtitle: "Deep learning applied to mechanical test analysis",
      period: "April 2025",
      role: "R&D intern · GIBOC lab (Sainte-Marguerite)",
      status: "Completed · Report available on request",
      pitch:
        "Make images of tendons and bones under load speak — without a human clicking for hours. A software pipeline that takes over the mechanical test workflow.",
      problem:
        "VIC2D is a commercial Digital Image Correlation software widely used in biomechanics. Powerful, but time-consuming: each test requires many manual settings, human intervention at each step, and data exploitation often takes longer than the test itself. The GIBOC lab wanted a pipeline that automates what can be automated and outputs comparable indicators across tests.",
      contribution: [
        "Functional spec written for the software, tied to the lab's experimental needs.",
        "Image processing on tendons and tensile/compression tests on post-mortem and synthetic bones (exoskeleton context).",
        "Neural network training (PyTorch, TensorFlow) to classify and exploit results.",
        "Driving an embedded test rig (motor board, Raspberry Pi) to sync mechanical test and acquisition.",
      ],
      results: [
        "Functional spec delivered to the lab.",
        "First working neural networks on real data.",
        "Acquisition ↔ analysis loop partially automated.",
      ],
      stack: ["Python", "PyTorch", "TensorFlow", "Raspberry Pi", "Image processing", "Kinovéa"],
      links: [],
    },
  },
  symbiosuits: {
    fr: {
      title: "Symbiosuits",
      subtitle: "Exosquelette — sport, assistance, militaire",
      period: "2023 → 2024 · En pause",
      role: "Associé fondateur · Fabrication et web",
      status: "En pause — reprise prévue",
      pitch:
        "Un exosquelette qui augmente le corps humain — pour l'athlète, pour le travailleur qui porte lourd, pour le soldat qui marche loin. Fabriqué à la main, pensé pour durer.",
      problem:
        "Les exosquelettes existants sont soit médicaux et hors de prix, soit industriels et rigides. Il manque une génération intermédiaire : robuste, modulaire, adressable au sport de haut niveau, à l'assistance physique du travailleur, et à l'usage militaire — trois marchés qui partagent les mêmes contraintes de fiabilité, de poids et d'endurance.",
      contribution: [
        "Fabrication de pièces prototypes par impression 3D et usinage.",
        "Création complète du site web du projet.",
        "Participation aux tâches administratives et à la démarche de développement durable.",
      ],
      results: [
        "Premières pièces prototypes fonctionnelles.",
        "Vitrine web du projet en ligne.",
        "Le projet est en pause volontaire — il reprendra plus tard, avec l'expérience accumulée depuis.",
      ],
      stack: ["Impression 3D", "Usinage", "SolidWorks", "HTML / CSS / JS"],
      links: [],
    },
    en: {
      title: "Symbiosuits",
      subtitle: "Exoskeleton — sport, assist, military",
      period: "2023 → 2024 · On hold",
      role: "Co-founder · Manufacturing and web",
      status: "On hold — will resume",
      pitch:
        "An exoskeleton that augments the human body — for athletes, for workers carrying loads, for soldiers walking far. Hand-built, made to last.",
      problem:
        "Existing exoskeletons are either medical and prohibitively expensive, or industrial and rigid. A middle generation is missing: robust, modular, addressable to elite sport, physical assist for workers, and military use — three markets that share the same reliability, weight and endurance constraints.",
      contribution: [
        "Prototype parts manufactured via 3D printing and machining.",
        "Full project website built from scratch.",
        "Administrative and sustainability tasks.",
      ],
      results: [
        "First functional prototype parts.",
        "Project website online.",
        "Project intentionally paused — will resume later, with everything learned since.",
      ],
      stack: ["3D printing", "Machining", "SolidWorks", "HTML / CSS / JS"],
      links: [],
    },
  },
  "calendrier-bti": {
    fr: {
      title: "Calendrier BTI",
      subtitle: "L'emploi du temps que la promo M2 BTI utilise vraiment",
      period: "Sept. 2025 → …",
      role: "Conception, code, déploiement · Projet perso",
      status: "En production sur Render",
      pitch:
        "ADE ne se met pas à jour à temps ? La promo s'en fiche. On ouvre le lien, on voit la semaine actuelle, l'heure défile en temps réel, le prochain cours saute aux yeux. Excel comme source de vérité, admin protégé, aucun bundler, zéro friction.",
      problem:
        "ADE, l'outil officiel, met des jours à intégrer les changements. Résultat : personne ne fait confiance au planning affiché. Les emails et messages Discord se multiplient. Il fallait un outil piloté par la promo, mis à jour à la volée, qui tient dans un onglet et fonctionne sur mobile aussi bien que sur ordi.",
      contribution: [
        "Backend Node/Express : parseur Excel maison (ExcelJS) qui gère les cellules fusionnées, les couleurs de groupes, les événements spéciaux, et corrige un décalage constaté dans le fichier V5.",
        "Frontend vanilla JS (aucun framework, aucun bundler) : vue semaine complète bureau, vue jour mobile avec swipe, barre bleue de l'heure au pixel près.",
        "Espace constructeur protégé par mot de passe (`/constructeur`) : CRUD complet des cours, répétition multi-semaines par sélection cliquer-glisser, diff Excel ↔ site, rechargement de l'Excel, remise à zéro.",
        "Filtres par profil (BTI · STAPS · PolyTech · ECM · Clinicien · sous-groupes A/B/C/D).",
        "Pill « en cours » et « prochain cours » en tête de page, mise à jour toutes les minutes.",
        "Comparateur ADE (bouton Rafraîchir + comparaison des salles avec cas FSS).",
        "Déploiement Render avec disque persistant pour les overrides admin.",
      ],
      results: [
        "Utilisé par la promo M2 BTI 2026-2027.",
        "Zéro dépendance native, portable, redéployable en une minute.",
        "Icône SVG calendrier premium fait maison.",
      ],
      stack: [
        "Node.js ≥ 18",
        "Express 4",
        "ExcelJS",
        "HTML / CSS / JS vanilla (ES modules)",
        "Render",
        "Cookie-parser",
      ],
      links: [
        { label: "Repo GitHub", href: "https://github.com/Emmanuel-creat/Calendrier-BTI" },
      ],
    },
    en: {
      title: "Calendrier BTI",
      subtitle: "The schedule the M2 BTI class actually uses",
      period: "Sept. 2025 → …",
      role: "Design, code, deployment · Personal project",
      status: "Live on Render",
      pitch:
        "ADE doesn't update in time? The class doesn't care. Open the link, current week is right there, the hour ticks in real time, next class jumps out. Excel as source of truth, protected admin, no bundler, zero friction.",
      problem:
        "ADE, the official tool, takes days to reflect changes. Result: nobody trusts the displayed schedule. Emails and Discord pile up. We needed a class-driven tool, live-editable, that fits in a tab and works on mobile as well as desktop.",
      contribution: [
        "Node/Express backend: custom Excel parser (ExcelJS) handling merged cells, group colors, special events, and correcting a shift found in the V5 file.",
        "Vanilla JS frontend (no framework, no bundler): full-week desktop view, mobile day view with swipe, pixel-accurate blue time bar.",
        "Password-protected admin panel (`/constructeur`): full CRUD, multi-week repetition via drag-select, Excel ↔ site diff, reload, reset.",
        "Per-profile filters (BTI · STAPS · PolyTech · ECM · Clinician · A/B/C/D subgroups).",
        "'Current class' and 'next class' pills, updated every minute.",
        "ADE comparator (Refresh button + room comparison with FSS handling).",
        "Render deployment with a persistent disk for admin overrides.",
      ],
      results: [
        "Used by the whole M2 BTI 2026-2027 class.",
        "Zero native dependencies, portable, redeployable in a minute.",
        "Custom premium SVG calendar icon.",
      ],
      stack: [
        "Node.js ≥ 18",
        "Express 4",
        "ExcelJS",
        "Vanilla HTML / CSS / JS (ES modules)",
        "Render",
        "Cookie-parser",
      ],
      links: [
        { label: "GitHub repo", href: "https://github.com/Emmanuel-creat/Calendrier-BTI" },
      ],
    },
  },
  "arcade-online": {
    fr: {
      title: "Arcade Online",
      subtitle: "Plateforme de jeux multijoueurs à salons privés",
      period: "2024 → …",
      role: "Conception, code, architecture · Projet perso",
      status: "En développement actif",
      pitch:
        "Un lien, un code, une partie. Tu crées un salon privé, tu partages le code, tes potes te rejoignent, on joue. Chaque jeu est un module qu'on branche à chaud.",
      problem:
        "Les plateformes existantes imposent leur écosystème, leurs comptes, leurs pubs, leur latence. Pour une soirée entre amis, il faut quelque chose de plus léger : pas d'inscription, pas de friction, plusieurs jeux au menu, un chat en live, et une base de code assez simple pour ajouter un jeu en quelques heures.",
      contribution: [
        "Architecture serveur multijoueur temps réel.",
        "Système de salons privés par code à 6 caractères.",
        "Chat intégré, synchronisation d'état entre joueurs.",
        "Architecture modulaire : chaque jeu est déclaré dans `games.json` et branché sans toucher au cœur.",
        "Interface web front, pensée pour être jouable à la souris et au clavier.",
      ],
      results: [
        "Base fonctionnelle : création/rejoint de salon, chat, lancement de partie.",
        "Pipeline d'ajout de jeu documenté.",
      ],
      stack: ["Node.js", "Socket temps réel", "JSON de configuration", "HTML / CSS / JS"],
      links: [
        { label: "Repo GitHub", href: "https://github.com/Emmanuel-creat/SOCKET-GAME" },
      ],
    },
    en: {
      title: "Arcade Online",
      subtitle: "Multiplayer game platform with private rooms",
      period: "2024 → …",
      role: "Design, code, architecture · Personal project",
      status: "In active development",
      pitch:
        "One link, one code, one game. You create a private room, share the code, friends join, you play. Each game is a module you plug in on the fly.",
      problem:
        "Existing platforms impose their ecosystem, accounts, ads, latency. For a night with friends you need something lighter: no signup, no friction, several games on the menu, a live chat, and a codebase simple enough to add a new game in a few hours.",
      contribution: [
        "Real-time multiplayer server architecture.",
        "6-character private room codes.",
        "Built-in chat, state sync between players.",
        "Modular architecture: each game is declared in `games.json` and plugged in without touching the core.",
        "Web front-end, playable with mouse and keyboard.",
      ],
      results: [
        "Working core: room creation/join, chat, game start.",
        "Documented pipeline for adding a new game.",
      ],
      stack: ["Node.js", "Real-time sockets", "JSON config", "HTML / CSS / JS"],
      links: [
        { label: "GitHub repo", href: "https://github.com/Emmanuel-creat/SOCKET-GAME" },
      ],
    },
  },
  "safe-screen": {
    fr: {
      title: "Safe Screen",
      subtitle: "Projet en préparation",
      period: "À venir",
      role: "Perso",
      status: "En préparation",
      pitch: "Un nouveau projet est en cours de conception. Détails très bientôt.",
      problem: "",
      contribution: [],
      results: [],
      stack: [],
      links: [
        { label: "Repo GitHub", href: "https://github.com/Emmanuel-creat/SAFE-SCREEN" },
      ],
    },
    en: {
      title: "Safe Screen",
      subtitle: "Project in the works",
      period: "Upcoming",
      role: "Personal",
      status: "In preparation",
      pitch: "A new project is being designed. Details coming soon.",
      problem: "",
      contribution: [],
      results: [],
      stack: [],
      links: [
        { label: "GitHub repo", href: "https://github.com/Emmanuel-creat/SAFE-SCREEN" },
      ],
    },
  },
};

export type ProjectSlug = Slug;
