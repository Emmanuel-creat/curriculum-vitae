// Mises en plan annotées du projet "Cultures de lésions carieuses".
// Coordonnées en pixels de l'image source : (x, y) = point visé,
// (bx, by) = position du repère numéroté.

export type L10n = { fr: string; en: string };

export type Callout = {
  x: number;
  y: number;
  bx: number;
  by: number;
  label: L10n;
};

export type CadSheet = {
  id: string;
  src: string;
  w: number;
  h: number;
  /** Zone visible de l'image (rognage des marges vides) : x, y, largeur, hauteur. */
  crop?: [number, number, number, number];
  title: L10n;
  view: L10n;
  material: L10n;
  caption: L10n;
  callouts: Callout[];
};

export const cadSheets: CadSheet[] = [
  {
    id: "A",
    src: "/images/caries/assemblage.jpg",
    w: 400,
    h: 444,
    crop: [20, 50, 360, 370],
    title: { fr: "Ensemble monté", en: "Assembled unit" },
    view: { fr: "Vue isométrique", en: "Isometric view" },
    material: { fr: "PETG · Polystyrène · Silicone / latex", en: "PETG · Polystyrene · Silicone / latex" },
    caption: {
      fr: "Le dispositif fermé : le couvercle se clipse sur la cuve et vient pincer le disque consommable, seul joint entre les deux milieux. La cheminée laisse voir le disque et donne un accès direct à la cuve cariogène.",
      en: "The closed device: the lid snaps onto the vessel and clamps the consumable disc, the only seal between both media. The chimney shows the disc and gives direct access to the cariogenic chamber.",
    },
    callouts: [
      { x: 192, y: 110, bx: 70, by: 72, label: { fr: "Cheminée d'accès libre (cuve cariogène)", en: "Open access chimney (cariogenic chamber)" } },
      { x: 200, y: 152, bx: 330, by: 72, label: { fr: "Disque consommable visible au fond", en: "Consumable disc visible at the bottom" } },
      { x: 95, y: 220, bx: 40, by: 290, label: { fr: "Couvercle clipsé", en: "Snap-fit lid" } },
      { x: 250, y: 330, bx: 345, by: 300, label: { fr: "Cuve basse transparente (milieu 1)", en: "Transparent lower vessel (medium 1)" } },
    ],
  },
  {
    id: "B",
    src: "/images/caries/eclate-iso.jpg",
    w: 498,
    h: 774,
    crop: [40, 20, 440, 740],
    title: { fr: "Vue éclatée", en: "Exploded view" },
    view: { fr: "Isométrique, 3 pièces", en: "Isometric, 3 parts" },
    material: { fr: "PETG · Silicone / latex · Polystyrène", en: "PETG · Silicone / latex · Polystyrene" },
    caption: {
      fr: "Trois pièces seulement. Le couvercle et la cuve sont réutilisables, le disque est changé à chaque dent : c'est lui qui porte l'échantillon et assure l'étanchéité.",
      en: "Only three parts. Lid and vessel are reusable, the disc is replaced for every tooth: it carries the sample and provides the seal.",
    },
    callouts: [
      { x: 255, y: 92, bx: 420, by: 60, label: { fr: "Cheminée", en: "Chimney" } },
      { x: 140, y: 205, bx: 70, by: 140, label: { fr: "Couvercle à jupe de clipsage", en: "Lid with snap skirt" } },
      { x: 250, y: 345, bx: 420, by: 300, label: { fr: "Pré-perçages pour le passage des racines", en: "Pre-drilled holes for the roots" } },
      { x: 160, y: 390, bx: 70, by: 420, label: { fr: "Disque consommable semi-rigide, enveloppe latex", en: "Semi-rigid consumable disc, latex envelope" } },
      { x: 250, y: 525, bx: 420, by: 500, label: { fr: "Logement du disque", en: "Disc seat" } },
      { x: 190, y: 660, bx: 70, by: 700, label: { fr: "Cuve du milieu 1 (racines)", en: "Medium 1 vessel (roots)" } },
    ],
  },
  {
    id: "C",
    src: "/images/caries/assemblage-coupe.jpg",
    w: 814,
    h: 771,
    crop: [30, 30, 760, 700],
    title: { fr: "Coupe de l'ensemble", en: "Assembly cross-section" },
    view: { fr: "Coupe longitudinale", en: "Longitudinal section" },
    material: { fr: "PETG · Silicone / latex · Polystyrène", en: "PETG · Silicone / latex · Polystyrene" },
    caption: {
      fr: "La coupe montre l'isolement des deux milieux : au-dessus, le volume de la cheminée (milieu 2, côté couronne) ; au-dessous, la chambre racinaire (milieu 1). Le disque, pincé entre couvercle et cuve, est la seule interface entre les deux.",
      en: "The section shows how both media are isolated: above, the chimney volume (medium 2, crown side); below, the root chamber (medium 1). The disc, clamped between lid and vessel, is the only interface between them.",
    },
    callouts: [
      { x: 370, y: 140, bx: 720, by: 110, label: { fr: "Milieu 2 : volume cariogène dans la cheminée", en: "Medium 2: cariogenic volume in the chimney" } },
      { x: 375, y: 300, bx: 720, by: 250, label: { fr: "Perçage central : passage de la dent", en: "Central bore: tooth passage" } },
      { x: 220, y: 290, bx: 60, by: 160, label: { fr: "Disque consommable pincé (joint unique)", en: "Clamped consumable disc (single seal)" } },
      { x: 82, y: 320, bx: 60, by: 420, label: { fr: "Jupe du couvercle clipsée sur la cuve", en: "Lid skirt snapped on the vessel" } },
      { x: 370, y: 520, bx: 720, by: 470, label: { fr: "Milieu 1 : chambre racinaire", en: "Medium 1: root chamber" } },
      { x: 625, y: 640, bx: 720, by: 640, label: { fr: "Paroi et fond de cuve", en: "Vessel wall and bottom" } },
    ],
  },
  {
    id: "D",
    src: "/images/caries/cuve-coupe.jpg",
    w: 748,
    h: 645,
    crop: [60, 60, 600, 520],
    title: { fr: "Cuve basse", en: "Lower vessel" },
    view: { fr: "Coupe longitudinale", en: "Longitudinal section" },
    material: { fr: "Polystyrène transparent", en: "Transparent polystyrene" },
    caption: {
      fr: "La cuve sépare un logement supérieur, qui reçoit le disque, et la chambre du milieu 1. Une ouverture centrale épaulée laisse descendre les racines dans le milieu.",
      en: "The vessel separates an upper seat, which receives the disc, from the medium 1 chamber. A stepped central opening lets the roots go down into the medium.",
    },
    callouts: [
      { x: 350, y: 150, bx: 230, by: 90, label: { fr: "Logement du disque", en: "Disc seat" } },
      { x: 482, y: 222, bx: 630, by: 175, label: { fr: "Ouverture centrale épaulée", en: "Stepped central opening" } },
      { x: 170, y: 234, bx: 85, by: 300, label: { fr: "Cloison entre logement et chambre", en: "Wall between seat and chamber" } },
      { x: 360, y: 380, bx: 630, by: 360, label: { fr: "Chambre du milieu 1", en: "Medium 1 chamber" } },
      { x: 360, y: 520, bx: 230, by: 555, label: { fr: "Fond de cuve", en: "Vessel bottom" } },
    ],
  },
  {
    id: "E",
    src: "/images/caries/couvercle-coupe.jpg",
    w: 1201,
    h: 733,
    crop: [60, 60, 1080, 600],
    title: { fr: "Couvercle à cheminée", en: "Chimney lid" },
    view: { fr: "Coupe longitudinale", en: "Longitudinal section" },
    material: { fr: "PETG", en: "PETG" },
    caption: {
      fr: "Le couvercle concentre deux fonctions : la cheminée, qui ouvre la cuve cariogène sans toucher au reste, et la jupe, qui se clipse sur la cuve et presse le disque. Le diamètre de la cheminée règle la force exercée par le fluide sur le disque.",
      en: "The lid combines two functions: the chimney, which opens the cariogenic chamber without touching the rest, and the skirt, which snaps on the vessel and presses the disc. The chimney diameter sets the force the fluid applies on the disc.",
    },
    callouts: [
      { x: 600, y: 250, bx: 600, by: 95, label: { fr: "Cheminée : accès libre au milieu 2", en: "Chimney: open access to medium 2" } },
      { x: 348, y: 240, bx: 190, by: 170, label: { fr: "Paroi de cheminée", en: "Chimney wall" } },
      { x: 360, y: 400, bx: 190, by: 420, label: { fr: "Épaulement d'appui sur le disque", en: "Shoulder pressing the disc" } },
      { x: 130, y: 380, bx: 120, by: 260, label: { fr: "Bord arrondi", en: "Rounded edge" } },
      { x: 700, y: 510, bx: 960, by: 560, label: { fr: "Jupe de clipsage (reçoit disque et cuve)", en: "Snap skirt (holds disc and vessel)" } },
    ],
  },
  {
    id: "F",
    src: "/images/caries/disque-iso.jpg",
    w: 925,
    h: 656,
    crop: [80, 60, 760, 560],
    title: { fr: "Disque consommable", en: "Consumable disc" },
    view: { fr: "Vue isométrique", en: "Isometric view" },
    material: { fr: "Silicone semi-rigide sous enveloppe latex", en: "Semi-rigid silicone in a latex envelope" },
    caption: {
      fr: "Pièce clé du dispositif : un cœur semi-rigide qui tient la dent, sous une enveloppe latex qui épouse les parois et fait joint. Les pré-perçages guident les racines vers le milieu 1.",
      en: "Key part of the device: a semi-rigid core that holds the tooth, inside a latex envelope that conforms to the walls and seals. The pre-drilled holes guide the roots into medium 1.",
    },
    callouts: [
      { x: 457, y: 255, bx: 640, by: 140, label: { fr: "Pré-perçages pour les racines", en: "Pre-drilled holes for the roots" } },
      { x: 300, y: 200, bx: 180, by: 110, label: { fr: "Face supérieure, côté couronne", en: "Top face, crown side" } },
      { x: 170, y: 320, bx: 130, by: 440, label: { fr: "Bourrelet périphérique d'étanchéité", en: "Peripheral sealing bead" } },
      { x: 600, y: 520, bx: 760, by: 520, label: { fr: "Enveloppe latex", en: "Latex envelope" } },
    ],
  },
];

export const sketches: { src: string; caption: L10n }[] = [
  { src: "/images/caries/croquis-1.jpg", caption: { fr: "Coupe transversale : milieu 2, zone consommable, milieu 1 et port d'injection / éjection.", en: "Cross-section: medium 2, consumable zone, medium 1 and injection / ejection port." } },
  { src: "/images/caries/croquis-2.jpg", caption: { fr: "Disque semi-rigide, enveloppe latex et pré-perçage pour les racines.", en: "Semi-rigid disc, latex envelope and pre-drilling for the roots." } },
  { src: "/images/caries/croquis-3.jpg", caption: { fr: "Vue isométrique : zone consommable et emplacements des clips.", en: "Isometric view: consumable zone and clip locations." } },
  { src: "/images/caries/croquis-4.jpg", caption: { fr: "Principe : la dent traverse le support consommable, couronne en haut, racines en bas.", en: "Principle: the tooth goes through the consumable support, crown up, roots down." } },
];
