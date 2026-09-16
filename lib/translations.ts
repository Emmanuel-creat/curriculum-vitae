export type Lang = "fr" | "en";

type ExperienceItem = {
  when: string;
  role: string;
  org: string;
  desc: string;
  href?: string;
};

export type Dict = {
  nav: Record<
    "about" | "skills" | "experience" | "projects" | "gallery" | "contact" | "cv",
    string
  >;
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    role: string;
    focus: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    body2: string;
    quickfacts: {
      location: string;
      study: string;
      available: string;
      stack: string;
    };
  };
  skills: {
    kicker: string;
    title: string;
    subtitle: string;
    groups: Record<
      "bio" | "code" | "cao" | "fab" | "data" | "embed" | "soft",
      { name: string; items: string[] }
    >;
  };
  experience: {
    kicker: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewProject: string;
    tagRnd: string;
    tagCode: string;
    cards: Record<
      | "mobilis"
      | "biomemory"
      | "vic2d"
      | "symbiosuits"
      | "calendrier"
      | "arcade"
      | "safescreen",
      { tag: string; title: string; subtitle: string; summary: string }
    >;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    empty: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    email: string;
    call: string;
    linkedin: string;
    github: string;
  };
  footer: {
    role: string;
    built: string;
    rights: string;
  };
  project: Record<
    | "back"
    | "pitch"
    | "problem"
    | "contribution"
    | "results"
    | "stack"
    | "links"
    | "status"
    | "period"
    | "role"
    | "team"
    | "lab"
    | "next"
    | "prev"
    | "inCharge"
    | "soon",
    string
  >;
};

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Parcours",
      projects: "Projets",
      gallery: "Galerie",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      badge: "Ouvert au stage de fin d'études · Avril 2026",
      titleLine1: "À la croisée du vivant,",
      titleLine2: "du code et de la mécanique.",
      subtitle:
        "Étudiant en bioingénierie — ingénierie tissulaire, implantation et biomédical. Je conçois, je code, je fabrique.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Me contacter",
      role: "Étudiant en bioingénierie",
      focus: "Ingénierie tissulaire · Implantation · Biomédical",
    },
    about: {
      kicker: "À propos",
      title: "Curieux, créatif, entre paillasse et clavier.",
      body: "Je suis Emmanuel, 22 ans, en Master 2 Bio-ingénierie des Tissus et des Implants à Aix-Marseille. Ce qui me passionne, c'est le point de contact — celui où un modèle éléments finis rencontre un vrai tissu, où un script Python pilote un moteur qui déplace une goutte de silicone, où une pièce imprimée sort de la machine et fait exactement ce qu'on avait dessiné trois semaines plus tôt.",
      body2:
        "Je viens d'un cursus ingénieur (ESME Sudria) et j'ai bifurqué vers la bioingénierie parce que le vivant est le système le plus intéressant que je connaisse. Aujourd'hui je cherche un stage de fin d'études R&D où je peux continuer à apprendre en faisant, avec des gens qui aiment prototyper.",
      quickfacts: {
        location: "Marseille, France",
        study: "Master 2 IEAP BTI · AMU",
        available: "Stage · Avril → Août 2026",
        stack: "Python · R · SolidWorks · Fusion 360 · PyTorch",
      },
    },
    skills: {
      kicker: "Compétences",
      title: "Une boîte à outils qui traverse les disciplines.",
      subtitle:
        "Rangées par thématique. Le fil rouge : passer de l'idée au prototype qui marche.",
      groups: {
        bio: {
          name: "Bio & Ingénierie tissulaire",
          items: [
            "Ingénierie tissulaire",
            "Biomécanique ostéoarticulaire",
            "Mécanobiologie",
            "Biomatériaux",
            "Anatomie fonctionnelle",
          ],
        },
        code: {
          name: "Code & Data",
          items: [
            "Python",
            "R",
            "HTML / CSS",
            "MATLAB",
            "PyTorch",
            "TensorFlow",
            "Deep learning",
            "Traitement d'image",
          ],
        },
        cao: {
          name: "CAO & Simulation",
          items: [
            "SolidWorks",
            "Fusion 360",
            "SketchUp",
            "Blender",
            "Reconstruction 3D",
            "Éléments finis",
          ],
        },
        fab: {
          name: "Prototypage & Fabrication",
          items: [
            "Impression 3D (FDM · SLA)",
            "Moulage silicone",
            "Stéréolithographie",
            "Usinage",
            "Circuits fluidiques",
          ],
        },
        data: {
          name: "Mesure & Analyse",
          items: [
            "Métrologie",
            "Statistiques",
            "Kinovéa (cinématique)",
            "Bancs d'essai automatisés",
          ],
        },
        embed: {
          name: "Systèmes embarqués",
          items: [
            "Raspberry Pi",
            "Cartes de commande moteur",
            "Interface CAN",
            "Chaînes capteur / PC",
          ],
        },
        soft: {
          name: "Savoir-être",
          items: [
            "Autonomie",
            "Rigueur scientifique",
            "Travail intra & inter-équipes",
            "Gestion du stress",
            "Curiosité",
          ],
        },
      },
    },
    experience: {
      kicker: "Parcours",
      title: "Là où j'ai appris ce que je sais.",
      items: [
        {
          when: "Avr. → Août 2026",
          role: "Stagiaire R&D",
          org: "MGA Medtech — BioMemory",
          desc: "Automatisation de bancs de test métrologiques, prototypage multi-procédés, circuits fluidiques picolitriques.",
          href: "/projects/biomemory",
        },
        {
          when: "Avril 2025",
          role: "Stagiaire R&D",
          org: "Laboratoire GIBOC · Sainte-Marguerite",
          desc: "Automatisation VIC2D, deep learning appliqué à l'analyse d'essais mécaniques sur tendons et os.",
          href: "/projects/vic2d",
        },
        {
          when: "2023 → 2024",
          role: "Associé",
          org: "Symbiosuits (exosquelette)",
          desc: "Prototypage, impression 3D, usinage, site web du projet.",
          href: "/projects/symbiosuits",
        },
        {
          when: "2025 → 2026",
          role: "Projet collectif M1",
          org: "Mobilis — orthèse de poignet",
          desc: "Conception CAO d'un dispositif modulable d'assistance/résistance pour la rééducation.",
          href: "/projects/mobilis",
        },
        {
          when: "2025 → …",
          role: "Master 2 IEAP BTI",
          org: "Aix-Marseille Université",
          desc: "Bio-ingénierie des Tissus et des Implants. MMC, mécanique des fluides, mécanobiologie, éléments finis.",
        },
        {
          when: "2021 → 2022",
          role: "École d'ingénieur",
          org: "ESME Sudria — Lyon",
          desc: "Physique, électrotechnique, électromagnétisme, programmation, systèmes vivants.",
        },
      ],
    },
    projects: {
      kicker: "Projets",
      title: "Ce que j'ai conçu, codé, fabriqué.",
      subtitle:
        "Sept projets, deux mondes — R&D biomédicale et code applicatif. Cliquez pour la présentation détaillée.",
      viewAll: "Voir tous les projets",
      viewProject: "Découvrir",
      tagRnd: "R&D",
      tagCode: "Code",
      cards: {
        mobilis: {
          tag: "R&D",
          title: "Mobilis",
          subtitle: "Orthèse de rééducation du poignet",
          summary:
            "Dispositif modulable d'assistance et de résistance, conçu en équipe pour la rééducation post-fracture.",
        },
        biomemory: {
          tag: "R&D",
          title: "BioMemory",
          subtitle: "MGA Medtech — Stage R&D 2026",
          summary:
            "Automatisation métrologique, fluidique picolitrique, prototypage multi-procédés pour la mémoire moléculaire.",
        },
        vic2d: {
          tag: "R&D",
          title: "VIC2D — Auto",
          subtitle: "Deep learning appliqué à la mécanique",
          summary:
            "Automatisation d'un logiciel de corrélation d'images et entraînement de réseaux de neurones sur essais mécaniques.",
        },
        symbiosuits: {
          tag: "R&D",
          title: "Symbiosuits",
          subtitle: "Exosquelette — sport, assistance, militaire",
          summary:
            "Développement d'un exosquelette : prototypage, impression 3D, usinage, site web du projet.",
        },
        calendrier: {
          tag: "Code",
          title: "Calendrier BTI",
          subtitle: "Emploi du temps M2 BTI",
          summary:
            "Planning intelligent (Excel-driven, admin CRUD, filtres par profil, déployé sur Render) pour toute la promo.",
        },
        arcade: {
          tag: "Code",
          title: "Arcade Online",
          subtitle: "Plateforme jeux multijoueurs",
          summary:
            "Salons privés par code, chat, architecture modulaire pour ajouter des jeux à la volée.",
        },
        safescreen: {
          tag: "Code",
          title: "Safe Screen",
          subtitle: "Projet en préparation",
          summary: "Nouveau projet en cours de développement. Plus d'infos très bientôt.",
        },
      },
    },
    gallery: {
      kicker: "Galerie",
      title: "Rendus CAO & prototypes.",
      subtitle:
        "Une sélection de pièces conçues, imprimées, usinées, moulées — rangée par projet.",
      viewAll: "Voir la galerie complète",
      empty: "Visuels bientôt en ligne — je les ajoute au fur et à mesure.",
    },
    contact: {
      kicker: "Contact",
      title: "Un stage, une collaboration, une question ?",
      body: "Je réponds vite. Le plus simple, c'est l'email ou le téléphone.",
      email: "Écrire un email",
      call: "Appeler",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      role: "Ingénieur R&D en devenir",
      built: "Fait main avec Next.js, Tailwind, un peu de café.",
      rights: "Tous droits réservés",
    },
    project: {
      back: "Retour",
      pitch: "Le pitch",
      problem: "Le problème",
      contribution: "Ma contribution",
      results: "Résultats",
      stack: "Stack technique",
      links: "Liens & ressources",
      status: "Statut",
      period: "Période",
      role: "Rôle",
      team: "Équipe",
      lab: "Laboratoire",
      next: "Projet suivant",
      prev: "Projet précédent",
      inCharge: "Ce que j'ai fait",
      soon: "Bientôt disponible",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Journey",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
      cv: "Résumé",
    },
    hero: {
      badge: "Open to end-of-studies internship · April 2026",
      titleLine1: "Where living matter meets",
      titleLine2: "code and mechanics.",
      subtitle:
        "Bioengineering student — tissue engineering, implants and biomedical devices. I design, I code, I build.",
      ctaPrimary: "See my work",
      ctaSecondary: "Get in touch",
      role: "Bioengineering student",
      focus: "Tissue engineering · Implants · Biomedical",
    },
    about: {
      kicker: "About",
      title: "Curious, hands-on — between wet lab and keyboard.",
      body: "I'm Emmanuel, 22, in the second year of the Master's in Bioengineering of Tissues and Implants at Aix-Marseille University. What drives me is the interface — where a finite element model meets real tissue, where a Python script drives a motor that dispenses a picoliter droplet, where a printed part comes out of the machine and does exactly what was drawn three weeks earlier.",
      body2:
        "I started in a classical engineering school (ESME Sudria) and switched to bioengineering because the living is the most interesting system I know. Today I'm looking for an R&D end-of-studies internship where I can keep learning by doing, with people who love to prototype.",
      quickfacts: {
        location: "Marseille, France",
        study: "M2 IEAP BTI · AMU",
        available: "Internship · Apr → Aug 2026",
        stack: "Python · R · SolidWorks · Fusion 360 · PyTorch",
      },
    },
    skills: {
      kicker: "Skills",
      title: "A toolbox that crosses disciplines.",
      subtitle: "Grouped by theme. The thread: turning ideas into working prototypes.",
      groups: {
        bio: {
          name: "Bio & Tissue engineering",
          items: [
            "Tissue engineering",
            "Osteoarticular biomechanics",
            "Mechanobiology",
            "Biomaterials",
            "Functional anatomy",
          ],
        },
        code: {
          name: "Code & Data",
          items: [
            "Python",
            "R",
            "HTML / CSS",
            "MATLAB",
            "PyTorch",
            "TensorFlow",
            "Deep learning",
            "Image processing",
          ],
        },
        cao: {
          name: "CAD & Simulation",
          items: [
            "SolidWorks",
            "Fusion 360",
            "SketchUp",
            "Blender",
            "3D reconstruction",
            "Finite elements",
          ],
        },
        fab: {
          name: "Prototyping & Fabrication",
          items: [
            "3D printing (FDM · SLA)",
            "Silicone molding",
            "Stereolithography",
            "Machining",
            "Fluidic circuits",
          ],
        },
        data: {
          name: "Measurement & Analysis",
          items: [
            "Metrology",
            "Statistics",
            "Kinovéa (kinematics)",
            "Automated test benches",
          ],
        },
        embed: {
          name: "Embedded systems",
          items: [
            "Raspberry Pi",
            "Motor controller boards",
            "CAN interface",
            "Sensor / PC chains",
          ],
        },
        soft: {
          name: "Soft skills",
          items: [
            "Autonomy",
            "Scientific rigor",
            "Cross-team collaboration",
            "Stress management",
            "Curiosity",
          ],
        },
      },
    },
    experience: {
      kicker: "Journey",
      title: "Where I've learned what I know.",
      items: [
        {
          when: "Apr → Aug 2026",
          role: "R&D Intern",
          org: "MGA Medtech — BioMemory",
          desc: "Automated metrology benches, multi-process prototyping, picoliter fluidic circuits.",
          href: "/projects/biomemory",
        },
        {
          when: "April 2025",
          role: "R&D Intern",
          org: "GIBOC lab · Sainte-Marguerite",
          desc: "VIC2D automation, deep learning applied to mechanical testing on tendons and bone.",
          href: "/projects/vic2d",
        },
        {
          when: "2023 → 2024",
          role: "Co-founder",
          org: "Symbiosuits (exoskeleton)",
          desc: "Prototyping, 3D printing, machining, project website.",
          href: "/projects/symbiosuits",
        },
        {
          when: "2025 → 2026",
          role: "M1 team project",
          org: "Mobilis — wrist orthosis",
          desc: "CAD design of a modular assist/resist device for rehabilitation.",
          href: "/projects/mobilis",
        },
        {
          when: "2025 → …",
          role: "M2 IEAP BTI",
          org: "Aix-Marseille University",
          desc: "Bioengineering of Tissues and Implants. Continuum mechanics, fluid mechanics, mechanobiology, FEA.",
        },
        {
          when: "2021 → 2022",
          role: "Engineering school",
          org: "ESME Sudria — Lyon",
          desc: "Physics, electrical engineering, electromagnetism, programming, living systems.",
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "What I've designed, coded, built.",
      subtitle:
        "Seven projects, two worlds — biomedical R&D and application code. Click for the full case study.",
      viewAll: "See all projects",
      viewProject: "Explore",
      tagRnd: "R&D",
      tagCode: "Code",
      cards: {
        mobilis: {
          tag: "R&D",
          title: "Mobilis",
          subtitle: "Wrist rehabilitation orthosis",
          summary:
            "A modular assist-and-resist device designed as a team for post-fracture rehabilitation.",
        },
        biomemory: {
          tag: "R&D",
          title: "BioMemory",
          subtitle: "MGA Medtech — R&D Internship 2026",
          summary:
            "Metrology automation, picoliter fluidics, multi-process prototyping for molecular memory.",
        },
        vic2d: {
          tag: "R&D",
          title: "VIC2D — Auto",
          subtitle: "Deep learning applied to mechanics",
          summary:
            "Automating an image-correlation software and training neural networks on mechanical test data.",
        },
        symbiosuits: {
          tag: "R&D",
          title: "Symbiosuits",
          subtitle: "Exoskeleton — sport, assist, military",
          summary:
            "Building an exoskeleton: prototyping, 3D printing, machining, project website.",
        },
        calendrier: {
          tag: "Code",
          title: "Calendrier BTI",
          subtitle: "M2 BTI schedule",
          summary:
            "A smart schedule (Excel-driven, CRUD admin, per-profile filters, deployed on Render) for the whole class.",
        },
        arcade: {
          tag: "Code",
          title: "Arcade Online",
          subtitle: "Multiplayer game platform",
          summary:
            "Private rooms by code, chat, modular architecture to plug in new games on the fly.",
        },
        safescreen: {
          tag: "Code",
          title: "Safe Screen",
          subtitle: "Project in the works",
          summary: "A new project currently in development. More soon.",
        },
      },
    },
    gallery: {
      kicker: "Gallery",
      title: "CAD renders & prototypes.",
      subtitle:
        "A selection of parts I designed, printed, machined, molded — grouped by project.",
      viewAll: "See the full gallery",
      empty: "Visuals coming soon — I add them as they come.",
    },
    contact: {
      kicker: "Contact",
      title: "Internship, collaboration, question?",
      body: "Quick to answer. Easiest is email or phone.",
      email: "Send an email",
      call: "Call",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      role: "R&D engineer in the making",
      built: "Handcrafted with Next.js, Tailwind, a bit of coffee.",
      rights: "All rights reserved",
    },
    project: {
      back: "Back",
      pitch: "The pitch",
      problem: "The problem",
      contribution: "My contribution",
      results: "Results",
      stack: "Tech stack",
      links: "Links & resources",
      status: "Status",
      period: "Period",
      role: "Role",
      team: "Team",
      lab: "Lab",
      next: "Next project",
      prev: "Previous project",
      inCharge: "What I did",
      soon: "Coming soon",
    },
  },
};
