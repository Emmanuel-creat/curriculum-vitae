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
  { slug: "lesions-carieuses", tag: "R&D", accent: "#f87171", order: 1 },
  { slug: "mobilis", tag: "R&D", accent: "#4ade80", order: 2 },
  { slug: "biomemory", tag: "R&D", accent: "#22d3ee", order: 3 },
  { slug: "vic2d", tag: "R&D", accent: "#f472b6", order: 4 },
  { slug: "symbiosuits", tag: "R&D", accent: "#fb923c", order: 5 },
  { slug: "calendrier-bti", tag: "Code", accent: "#818cf8", order: 6 },
  { slug: "arcade-online", tag: "Code", accent: "#facc15", order: 7 },
  { slug: "safe-screen", tag: "Code", accent: "#c084fc", order: 8 },
];

type Slug =
  | "lesions-carieuses"
  | "mobilis"
  | "biomemory"
  | "vic2d"
  | "symbiosuits"
  | "calendrier-bti"
  | "arcade-online"
  | "safe-screen";

export const projectContent: Record<Slug, Record<"fr" | "en", ProjectContent>> = {
  "lesions-carieuses": {
    fr: {
      title: "Cultures de lésions carieuses",
      subtitle: "Dispositif de culture bi-chambre sur dent entière · Projet R&D M2",
      period: "Sept. 2026 → Janv. 2027",
      role: "Conception et développement de bout en bout · Projet M2 BTI pour un laboratoire d'odontologie",
      status: "En cours · Conception CAO",
      pitch:
        "Recréer une carie au laboratoire, sur une vraie dent : deux milieux de culture, un seul organe, et une étanchéité parfaite entre les deux.",
      problem:
        "Un laboratoire d'odontologie doit tester des traitements sur des lésions carieuses. Pour obtenir des lésions reproductibles, il faut les recréer artificiellement : mettre en culture la dent et la carie en même temps, dans des conditions maîtrisées. Le cahier des charges impose des matériaux biocompatibles et inertes (silicone, PETG, polystyrène, latex) et deux cuves parfaitement isolées l'une de l'autre autour d'une même dent. La cuve cariogène, côté couronne, doit rester accessible trois fois par jour pour la manipulation. La seconde cuve, côté racines, n'est ouverte que deux fois par semaine mais doit rester en échange gazeux avec l'extérieur.",
      contribution: [
        "Analyse du besoin du laboratoire et traduction en cahier des charges fonctionnel : isolement des milieux, fréquences d'accès, échange gazeux, matériaux autorisés.",
        "Croquis de recherche, puis choix d'une architecture en trois pièces : cuve basse, disque consommable, couvercle à cheminée.",
        "Conception du disque consommable : cœur semi-rigide en silicone ou en polystyrène sous une enveloppe extérieure en latex, pré-percé pour le passage des racines, changé à chaque dent. Il porte l'échantillon et sert de joint unique entre les deux milieux.",
        "Couvercle à cheminée clipsé sur la cuve : accès direct à la cuve cariogène sans démonter l'ensemble ni perturber le milieu racinaire.",
        "Dimensionnement de la cheminée selon la force exercée par le fluide sur le disque.",
        "Port d'injection / éjection pour renouveler le milieu racinaire.",
        "Modélisation 3D, vues éclatées, vues en coupe et mises en plan sous SolidWorks.",
        "Choix des matériaux par pièce : cuves en PETG, disque consommable avec un cœur en silicone ou en polystyrène et une enveloppe extérieure en latex.",
      ],
      results: [
        "Architecture complète en CAO : deux chambres séparées par un seul joint consommable.",
        "Assemblage par clipsage, sans vis ni colle : montage et démontage rapides entre deux manipulations.",
        "Séparation claire entre pièces réutilisables en PETG (cuve, couvercle) et pièce consommable (disque).",
        "Accès différencié : cuve cariogène par la cheminée, cuve racinaire par le port d'injection / éjection.",
      ],
      stack: [
        "SolidWorks",
        "Mise en plan",
        "Conception de dispositif de culture",
        "Étanchéité",
        "Assemblage par clipsage",
        "Matériaux biocompatibles",
        "PETG",
        "Polystyrène",
        "Silicone",
        "Latex",
      ],
      links: [],
    },
    en: {
      title: "Carious lesion cultures",
      subtitle: "Dual-chamber culture device on a whole tooth · M2 R&D project",
      period: "Sept 2026 → Jan 2027",
      role: "End-to-end design and development · M2 BTI project for a dental research lab",
      status: "Ongoing · CAD design",
      pitch:
        "Recreating a cavity in the lab, on a real tooth: two culture media, one organ, and a perfect seal between them.",
      problem:
        "A dental research lab needs to test treatments on carious lesions. To get reproducible lesions, they must be recreated artificially: culturing the tooth and the cavity at the same time, under controlled conditions. The specifications require biocompatible, inert materials (silicone, PETG, polystyrene, latex) and two chambers fully isolated from each other around the same tooth. The cariogenic chamber, on the crown side, must be accessible three times a day for handling. The second chamber, on the root side, is opened only twice a week but must keep gas exchange with the outside.",
      contribution: [
        "Analysed the lab's needs and turned them into functional specifications: media isolation, access frequency, gas exchange, allowed materials.",
        "Research sketches, then a three-part architecture: lower vessel, consumable disc, chimney lid.",
        "Designed the consumable disc: semi-rigid silicone or polystyrene core in an outer latex envelope, pre-drilled for the roots, replaced for every tooth. It carries the sample and is the only seal between both media.",
        "Chimney lid snapped onto the vessel: direct access to the cariogenic chamber without taking the unit apart or disturbing the root medium.",
        "Sized the chimney according to the force the fluid applies on the disc.",
        "Injection / ejection port to renew the root medium.",
        "3D modelling, exploded views, cross-sections and drawings in SolidWorks.",
        "Material choice per part: PETG vessels, consumable disc with a silicone or polystyrene core and an outer latex envelope.",
      ],
      results: [
        "Complete CAD architecture: two chambers separated by a single consumable seal.",
        "Snap-fit assembly, no screws or glue: quick to open and close between handlings.",
        "Clear split between reusable PETG parts (vessel, lid) and the consumable part (disc).",
        "Separate access: cariogenic chamber through the chimney, root chamber through the injection / ejection port.",
      ],
      stack: [
        "SolidWorks",
        "Technical drawings",
        "Culture device design",
        "Sealing",
        "Snap-fit assembly",
        "Biocompatible materials",
        "PETG",
        "Polystyrene",
        "Silicone",
        "Latex",
      ],
      links: [],
    },
  },
  mobilis: {
    fr: {
      title: "Mobilis",
      subtitle: "Dispositif orthétique modulable de rééducation du poignet",
      period: "Sept. 2025 → Mars 2026",
      role: "Conception CAO et simulation · Équipe de 5 · Projet fil rouge M1 IEAP BTI, Aix-Marseille Université",
      status: "Prototype testé sur volontaires · Non poursuivi",
      pitch:
        "Une seule attelle qui accompagne le poignet du premier jour post-plâtre jusqu'à la reprise du sport : elle assiste ou elle résiste, selon le réglage de la molette.",
      problem:
        "Les fractures du poignet représentent environ 17,5 % des fractures de l'adulte. Après le plâtre, la mobilité chute fortement : la flexion passe d'environ 66° à 24° et l'extension d'environ 68° à 25°. La rééducation reste souvent linéaire, avec des orthèses soit passives (soutien), soit très spécialisées (une seule fonction). Le patient enchaîne plusieurs dispositifs, plusieurs coûts, et son observance en souffre. Mobilis propose un dispositif médical de classe I (règlement MDR 2017/745) unique et modulable, utilisable en autonomie à la maison.",
      contribution: [
        "Conception CAO complète sous SolidWorks : bracelet, poignée, molette de tension, points d'ancrage des élastiques, sangles et boucle de serrage.",
        "Dimensionnement des élastiques à partir du couple maximal du poignet (8 à 14 Nm chez l'homme, 5 à 9 Nm chez la femme) : travail à 20 % du maximum, F = M / L puis Δl = F / k.",
        "Simulations sous SolidWorks Simulation : déplacements du bracelet en PLA, contraintes de von Mises dans la poignée en TPU et étude de fatigue (durée de vie minimale d'environ 8,7 millions de cycles).",
        "Choix des matériaux par pièce : TPU pour la poignée, PLA pour le bracelet et la molette, mousse polyester, élastiques caoutchouc, sangles nylon.",
        "Prototypage par impression 3D et itérations sur le confort et le réglage de tension.",
        "Participation, avec l'équipe, à l'étude expérimentale sur volontaires et à la rédaction du dossier PEPITE.",
      ],
      results: [
        "Prototype fonctionnel porté et réglable : le même dispositif passe de l'assistance à la résistance.",
        "Étude sur 10 volontaires (8 analysés) : vitesse angulaire en extension significativement modifiée (p = 0,008), amplitude articulaire préservée (pas de différence significative).",
        "Utilisabilité jugée excellente au questionnaire F-SUS (score supérieur à 80).",
        "Perspectives identifiées : mesures EMG, validation clinique sur patients, optimisation et étude dose-réponse.",
        "Dossier PEPITE monté, puis décision collective de ne pas poursuivre l'aventure entrepreneuriale.",
      ],
      stack: [
        "SolidWorks",
        "SolidWorks Simulation",
        "Analyse de fatigue",
        "Impression 3D (FDM)",
        "PLA",
        "TPU",
        "Dimensionnement d'élastiques",
        "Analyse cinématique",
        "F-SUS",
        "MDR 2017/745",
      ],
      links: [],
    },
    en: {
      title: "Mobilis",
      subtitle: "Modular wrist rehabilitation orthosis",
      period: "Sept 2025 → Mar 2026",
      role: "CAD design and simulation · Team of 5 · M1 IEAP BTI core project, Aix-Marseille University",
      status: "Prototype tested on volunteers · Not pursued",
      pitch:
        "One single brace that supports the wrist from day one post-cast to sport comeback: it assists or resists, depending on the wheel setting.",
      problem:
        "Wrist fractures account for about 17.5 % of adult fractures. After the cast, mobility drops sharply: flexion falls from about 66° to 24° and extension from about 68° to 25°. Rehabilitation is often linear, with orthoses that are either passive (support) or highly specialised (one function). Patients go through several devices and several costs, and compliance suffers. Mobilis is a single, modular class I medical device (MDR 2017/745) that patients can use on their own at home.",
      contribution: [
        "Full CAD design in SolidWorks: cuff, handle, tension wheel, elastic anchor points, straps and buckle.",
        "Sized the elastics from the wrist's maximum torque (8 to 14 Nm for men, 5 to 9 Nm for women): working at 20 % of maximum, F = M / L then Δl = F / k.",
        "SolidWorks Simulation studies: PLA cuff displacements, von Mises stress in the TPU handle and a fatigue study (minimum life of about 8.7 million cycles).",
        "Material choice per part: TPU handle, PLA cuff and wheel, polyester foam, rubber elastics, nylon straps.",
        "3D printed prototyping and iterations on comfort and tension setting.",
        "Took part, with the team, in the volunteer study and in writing the PEPITE application.",
      ],
      results: [
        "Working, wearable and adjustable prototype: the same device switches from assistance to resistance.",
        "Study on 10 volunteers (8 analysed): angular speed in extension significantly changed (p = 0.008), range of motion preserved (no significant difference).",
        "Usability rated excellent on the F-SUS questionnaire (score above 80).",
        "Next steps identified: EMG measurements, clinical validation on patients, optimisation and a dose-response study.",
        "PEPITE application built, then a collective decision not to pursue the venture.",
      ],
      stack: [
        "SolidWorks",
        "SolidWorks Simulation",
        "Fatigue analysis",
        "3D printing (FDM)",
        "PLA",
        "TPU",
        "Elastic sizing",
        "Kinematic analysis",
        "F-SUS",
        "MDR 2017/745",
      ],
      links: [],
    },
  },
  biomemory: {
    fr: {
      title: "BioMemory",
      subtitle: "Stage R&D · MGA Medtech · Stockage de données sur ADN",
      period: "Avril → Août 2026",
      role: "Stagiaire R&D · Équipe de développement interne",
      status: "Terminé · Travaux sous confidentialité",
      pitch:
        "Écrire les données du monde dans l'ADN : une molécule qui garde l'information pendant des siècles, sans consommer d'énergie une fois écrite.",
      problem:
        "Les data centers consomment déjà environ 2 % de l'électricité mondiale, et seuls 30 % des données produites sont conservées durablement. Les disques et les bandes s'usent, doivent être recopiés et alimentés en permanence. Fondée en 2021 à Paris, issue de Sorbonne Université et du CNRS, BioMemory propose une autre voie, l'informatique moléculaire : encoder l'information binaire dans de l'ADN synthétique. La molécule stocke un million de fois plus de données par unité de volume que les supports physiques, se conserve jusqu'à 150 ans sans être recopiée et ne demande aucune énergie au repos. Son premier service, DNA Shield, met à l'abri hors ligne des données critiques et souveraines. Passer de ce principe à un produit industriel demande des instruments fiables : c'est sur ce volet matériel que j'ai travaillé, au sein de MGA Medtech.",
      contribution: [
        "Développement d'outils Python pour automatiser des bancs de test et le traitement des mesures.",
        "Intégration de capteurs et de chaînes d'acquisition de données.",
        "Travaux de fluidique et de caractérisation métrologique sur des sous-ensembles d'instrument.",
        "Prototypage multi-procédés : moulage silicone, impression 3D résine, usinage.",
        "Conception mécanique de pièces et de supports sous SolidWorks.",
      ],
      results: [
        "Contribution au développement matériel d'une technologie de rupture, au sein d'une équipe R&D pluridisciplinaire.",
        "Compétences consolidées : automatisation, métrologie, fluidique, conception mécanique et prototypage.",
      ],
      stack: [
        "Python",
        "SolidWorks",
        "Acquisition de données",
        "Fluidique",
        "Métrologie",
        "Moulage silicone",
        "Impression 3D résine",
        "Usinage",
      ],
      links: [
        { label: "BioMemory (site officiel)", href: "https://www.biomemory.com" },
        { label: "MGA Medtech", href: "https://www.maisonmga.fr/" },
      ],
    },
    en: {
      title: "BioMemory",
      subtitle: "R&D Internship · MGA Medtech · DNA data storage",
      period: "April → August 2026",
      role: "R&D intern · Internal development team",
      status: "Completed · Work under confidentiality",
      pitch:
        "Writing the world's data into DNA: a molecule that keeps information for centuries, with no energy needed once it is written.",
      problem:
        "Data centers already use around 2% of global electricity, and only 30% of the world's data is stored durably. Disks and tapes wear out, must be copied again and stay powered all the time. Founded in 2021 in Paris as a spin-off of Sorbonne University and CNRS, BioMemory offers another path, molecular IT: encoding binary information into synthetic DNA. The molecule holds a million times more data per unit volume than physical media, lasts up to 150 years without being rewritten and needs no energy at rest. Its first service, DNA Shield, keeps critical and sovereign data safe offline. Turning this principle into an industrial product requires reliable instruments: that hardware side is what I worked on, at MGA Medtech.",
      contribution: [
        "Python tools to automate test benches and measurement processing.",
        "Integration of sensors and data acquisition chains.",
        "Fluidics and metrology characterization work on instrument sub-assemblies.",
        "Multi-process prototyping: silicone molding, resin 3D printing, machining.",
        "Mechanical design of parts and fixtures in SolidWorks.",
      ],
      results: [
        "Contributed to the hardware development of a breakthrough technology, within a multidisciplinary R&D team.",
        "Strengthened skills: automation, metrology, fluidics, mechanical design and prototyping.",
      ],
      stack: [
        "Python",
        "SolidWorks",
        "Data acquisition",
        "Fluidics",
        "Metrology",
        "Silicone molding",
        "Resin 3D printing",
        "Machining",
      ],
      links: [
        { label: "BioMemory (official website)", href: "https://www.biomemory.com" },
        { label: "MGA Medtech", href: "https://www.maisonmga.fr/" },
      ],
    },
  },
  vic2d: {
    fr: {
      title: "VIC2D · Automatisation",
      subtitle: "Deep learning appliqué à l'analyse d'essais mécaniques",
      period: "Avril 2025",
      role: "Stagiaire R&D · Laboratoire GIBOC (Sainte-Marguerite)",
      status: "Terminé · Rapport disponible sur demande",
      pitch:
        "Faire parler des images de tendons et d'os qui se déforment sous contrainte, sans qu'un humain doive cliquer pendant des heures. Un pipeline logiciel qui prend le relais des essais mécaniques.",
      problem:
        "VIC2D est un logiciel commercial d'analyse de corrélation d'images (Digital Image Correlation) très utilisé en biomécanique. Puissant, mais chronophage : chaque essai demande de nombreux réglages, une intervention humaine à chaque étape, et l'exploitation des données prend souvent plus de temps que l'essai lui-même. Le laboratoire GIBOC voulait une chaîne qui automatise ce qui peut l'être et sort des indicateurs comparables entre essais.",
      contribution: [
        "Élaboration du cahier des charges fonctionnel du logiciel, en lien avec les besoins expérimentaux du labo.",
        "Développement du Corrélateur Automatique, un logiciel Python avec interface CustomTkinter qui pilote Vic-2D : découpage des vidéos d'essai en images (OpenCV), génération et modification du projet Vic-2D (lxml), corrélation lancée en mode batch, export CSV et champs de déplacement (VicPy).",
        "Sélecteurs interactifs sur l'image de référence : zone d'intérêt, calibration, subset et step, points initiaux, point fixe pour retirer les mouvements rigides.",
        "Traitement d'images de tendons et d'essais de traction/compression sur os post-mortem et synthétiques (contexte : développement d'exosquelettes).",
        "Entraînement de réseaux de neurones (PyTorch, TensorFlow) pour classer et exploiter les résultats.",
        "Pilotage d'un banc d'essai embarqué (carte de commande moteur, Raspberry Pi) pour synchroniser essai mécanique et acquisition.",
      ],
      results: [
        "Cahier des charges livré au laboratoire.",
        "Corrélateur Automatique fonctionnel : 21 options de Vic-2D réglables depuis une seule interface, corrélation et export lancés en un clic.",
        "Premiers réseaux de neurones fonctionnels sur données réelles.",
        "Boucle acquisition ↔ analyse partiellement automatisée.",
      ],
      stack: ["Python", "Vic-2D", "CustomTkinter", "OpenCV", "lxml", "VicPy", "PyTorch", "TensorFlow", "Raspberry Pi", "Traitement d'image", "Kinovéa"],
      links: [],
    },
    en: {
      title: "VIC2D · Automation",
      subtitle: "Deep learning applied to mechanical test analysis",
      period: "April 2025",
      role: "R&D intern · GIBOC lab (Sainte-Marguerite)",
      status: "Completed · Report available on request",
      pitch:
        "Make images of tendons and bones under load speak, without a human clicking for hours. A software pipeline that takes over the mechanical test workflow.",
      problem:
        "VIC2D is a commercial Digital Image Correlation software widely used in biomechanics. Powerful, but time-consuming: each test requires many manual settings, human intervention at each step, and data exploitation often takes longer than the test itself. The GIBOC lab wanted a pipeline that automates what can be automated and outputs comparable indicators across tests.",
      contribution: [
        "Functional spec written for the software, tied to the lab's experimental needs.",
        "Built the Automatic Correlator, a Python application with a CustomTkinter interface that drives Vic-2D: splitting test videos into frames (OpenCV), generating and editing the Vic-2D project (lxml), batch correlation, CSV and displacement field export (VicPy).",
        "Interactive pickers on the reference image: area of interest, calibration, subset and step, initial guesses, fixed point to remove rigid body motion.",
        "Image processing on tendons and tensile/compression tests on post-mortem and synthetic bones (exoskeleton context).",
        "Neural network training (PyTorch, TensorFlow) to classify and exploit results.",
        "Driving an embedded test rig (motor board, Raspberry Pi) to sync mechanical test and acquisition.",
      ],
      results: [
        "Functional spec delivered to the lab.",
        "Working Automatic Correlator: 21 Vic-2D options set from a single interface, correlation and export run in one click.",
        "First working neural networks on real data.",
        "Acquisition ↔ analysis loop partially automated.",
      ],
      stack: ["Python", "Vic-2D", "CustomTkinter", "OpenCV", "lxml", "VicPy", "PyTorch", "TensorFlow", "Raspberry Pi", "Image processing", "Kinovéa"],
      links: [],
    },
  },
  symbiosuits: {
    fr: {
      title: "Symbiosuits",
      subtitle: "Exosquelette · sport, assistance, militaire",
      period: "2023 → 2024 · En pause",
      role: "Associé fondateur · Fabrication, CAO et web",
      status: "En pause",
      pitch:
        "Un exosquelette qui augmente le corps humain, pour l'athlète, pour le travailleur qui porte lourd, pour le soldat qui marche loin. Fabriqué à la main, pensé pour durer.",
      problem:
        "Les exosquelettes existants sont soit médicaux et hors de prix, soit industriels et rigides. Il manque une génération intermédiaire : robuste, modulaire, adressable au sport de haut niveau, à l'assistance physique du travailleur, et à l'usage militaire, trois marchés qui partagent les mêmes contraintes de fiabilité, de poids et d'endurance.",
      contribution: [
        "Fabrication de pièces prototypes par impression 3D et usinage.",
        "Modélisation 3D paramétrique détaillée d'un exosquelette des membres inférieurs complet : blindages ajustés au porteur, bras en treillis, moteurs de hanche et de genou, vérins de cheville, pack dorsal, câblage.",
        "Mises en plan cotées (face, profil, dos, dessus) et détail de l'articulation du genou.",
        "Architecture d'assistance : capteurs d'angle et d'effort, actionneurs de hanche et de cheville, unité de contrôle et batterie à la ceinture.",
        "Création complète du site web du projet.",
        "Participation aux tâches administratives et à la démarche de développement durable.",
      ],
      results: [
        "Premières pièces prototypes fonctionnelles.",
        "Concept CAO détaillé : plus de 200 pièces, 11 sous-ensembles, rendus, vue éclatée, plans cotés.",
        "Vitrine web du projet en ligne.",
        "Le projet est en pause volontaire, il reprendra plus tard, avec l'expérience accumulée depuis.",
      ],
      stack: ["Impression 3D", "Usinage", "SolidWorks", "CAO paramétrique", "Mise en plan", "HTML / CSS / JS"],
      links: [],
    },
    en: {
      title: "Symbiosuits",
      subtitle: "Exoskeleton · sport, assist, military",
      period: "2023 → 2024 · On hold",
      role: "Co-founder · Manufacturing, CAD and web",
      status: "On hold",
      pitch:
        "An exoskeleton that augments the human body, for athletes, for workers carrying loads, for soldiers walking far. Hand-built, made to last.",
      problem:
        "Existing exoskeletons are either medical and prohibitively expensive, or industrial and rigid. A middle generation is missing: robust, modular, addressable to elite sport, physical assist for workers, and military use, three markets that share the same reliability, weight and endurance constraints.",
      contribution: [
        "Prototype parts manufactured via 3D printing and machining.",
        "Detailed parametric 3D model of a complete lower-limb exoskeleton: armor fitted to the wearer, truss struts, hip and knee motors, ankle actuators, back pack and cabling.",
        "Dimensioned drawings (front, side, back, top) and a knee joint detail.",
        "Assistance architecture: angle and force sensors, hip and ankle actuators, control unit and battery on the belt.",
        "Full project website built from scratch.",
        "Administrative and sustainability tasks.",
      ],
      results: [
        "First functional prototype parts.",
        "Detailed CAD concept: over 200 parts, 11 sub-assemblies, renders, exploded view, dimensioned drawings.",
        "Project website online.",
        "Project intentionally paused, will resume later, with everything learned since.",
      ],
      stack: ["3D printing", "Machining", "SolidWorks", "Parametric CAD", "Technical drawings", "HTML / CSS / JS"],
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
