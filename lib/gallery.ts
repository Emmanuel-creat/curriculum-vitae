import type { L10n } from "./cad";

export type GalleryImage = { src: string; alt: L10n; kind: "cad" | "photo" | "render"; credit?: string };

const c = (src: string, fr: string, en: string): GalleryImage => ({
  src: `/images/caries/${src}.jpg`,
  alt: { fr, en },
  kind: "cad",
});
const p = (src: string, fr: string, en: string): GalleryImage => ({
  src: `/images/caries/${src}.jpg`,
  alt: { fr, en },
  kind: "photo",
});

// Visuels publics du site officiel biomemory.com (chargés depuis leur CDN).
const BM = "https://cdn.prod.website-files.com/69a1daabcf12b345743e4373/";
const b = (file: string, fr: string, en: string): GalleryImage => ({
  src: BM + file,
  alt: { fr, en },
  kind: "photo",
  credit: "BioMemory, biomemory.com",
});

export const biomemoryImages: GalleryImage[] = [
  b("6aa3f8a69a0f873448d18c11_techno.avif", "Échantillon d'ADN dans un instrument de stockage BioMemory", "DNA sample inside a BioMemory storage instrument"),
  b("6aa1573b645aa3b4fa6d972c_96c49b816362efbaca57cbd0a7f4a2c1_DNA%20data%20storage%20server.avif", "Machine de synthèse d'ADN", "DNA synthesis machine"),
  b("6acf8e61b5b1300184af9cc0_shannon-326-1600.avif", "Système de stockage de données sur ADN au laboratoire", "DNA data storage system in the lab"),
  b("6aa1573bb22d0428036aba9c_5f25ff9e4196608089c912ef370fa80b_lock.avif", "Détail du matériel de stockage sur ADN", "Close-up of the DNA storage hardware"),
  b("6aa80fbaf403bab22e34ecf6_Gemini_Generated_Image_q5p1n8q5p1n8q5p1%201.avif", "Lame de verre portant des dépôts d'ADN synthétique", "Glass slide with synthetic DNA spots"),
  b("6a58d8bb9b94300dc425b73e_biomemory-paris.avif", "Les locaux de BioMemory à Paris", "BioMemory's Paris office"),
  b("6aa41dd8a77394977b56089c_boston.avif", "Boston, site de production d'ADN de BioMemory", "Boston, BioMemory's DNA production site"),
  b("69a598adfc66c40feaefc3e9_c4cba086d80053227feae11c71efad76_vision_biomemory.avif", "La vision de BioMemory", "BioMemory's vision"),
];

const sy = (src: string, fr: string, en: string, kind: "cad" | "photo" = "cad"): GalleryImage => ({
  src: `/images/symbiosuits/${src}.jpg`,
  alt: { fr, en },
  kind,
});

export const symbiosuitsImages: GalleryImage[] = [
  sy("rendu-iso", "Exosquelette complet, vue d'ensemble", "Full exoskeleton, overview"),
  sy("rendu-marche", "En phase de marche", "Walking pose"),
  sy("rendu-eclate", "Vue éclatée des sous-ensembles", "Exploded view of the sub-assemblies"),
  sy("rendu-hanche", "Moteur de hanche et support ajouré", "Hip motor and lightened bracket"),
  sy("rendu-genou", "Genou : moteur, genouillère, bras en treillis", "Knee: motor, knee cap, truss strut"),
  sy("rendu-mollet", "Vérins de cheville à soufflet", "Bellows ankle actuators"),
  sy("plan-profil", "Plan de profil coté", "Dimensioned side view"),
  sy("plan-face", "Plan de face coté", "Dimensioned front view"),
  sy("plan-dos", "Plan arrière coté", "Dimensioned back view"),
  sy("plan-dessus", "Plan de dessus coté", "Dimensioned top view"),
  sy("plan-eclate", "Plan en vue éclatée", "Exploded view drawing"),
  sy("plan-hanche", "Détail de la hanche", "Hip detail"),
  sy("plan-genou", "Détail du genou", "Knee detail"),
  sy("plan-botte", "Détail de la botte", "Boot detail"),
  sy("plan-pack", "Détail du pack dorsal", "Back pack detail"),
];

const mo = (src: string, fr: string, en: string, kind: "cad" | "photo" = "cad"): GalleryImage => ({
  src: `/images/mobilis/${src}.jpg`,
  alt: { fr, en },
  kind,
});

export const mobilisImages: GalleryImage[] = [
  mo("dispositif-cao", "Le dispositif en CAO et ses composants", "The device in CAD and its parts"),
  mo("simulation-anneau", "Simulation du bracelet en PLA : déplacements", "PLA cuff simulation: displacements"),
  mo("simulation-poignee", "Simulation de la poignée en TPU : contraintes de von Mises", "TPU handle simulation: von Mises stress"),
  mo("simulation-fatigue", "Étude de fatigue de la poignée", "Handle fatigue study"),
  mo("courbe-fatigue-tpu", "Courbe de fatigue du TPU (loi de Basquin)", "TPU fatigue curve (Basquin law)"),
  mo("protocole", "Protocole de l'étude expérimentale", "Experimental study protocol"),
  mo("marqueurs", "Analyse cinématique par marqueurs", "Marker based kinematic analysis"),
  mo("resultats-amplitude", "Résultats : amplitude articulaire", "Results: range of motion"),
  mo("resultats-vitesse", "Résultats : vitesse angulaire", "Results: angular speed"),
  mo("resultats-fsus", "Résultats : utilisabilité F-SUS", "Results: F-SUS usability"),
  mo("emg", "Perspective : mesures EMG", "Outlook: EMG measurements"),
  mo("contexte-fractures", "Contexte : fractures du poignet", "Context: wrist fractures"),
  mo("planning", "Planning du projet", "Project schedule"),
];

const vi = (src: string, fr: string, en: string): GalleryImage => ({
  src: `/images/vic2d/${src}.jpg`,
  alt: { fr, en },
  kind: "render",
});

export const vic2dImages: GalleryImage[] = [
  vi("chaine", "La chaîne complète, de la vidéo aux résultats", "The full pipeline, from video to results"),
  vi("interface", "Interface du Corrélateur Automatique", "Automatic Correlator interface"),
  vi("principe-subset", "Zone d'intérêt, subset et step", "Area of interest, subset and step"),
  vi("principe-champ", "Champ de déplacement et déformation (illustration)", "Displacement field and strain (illustration)"),
  vi("code-video", "Code : vidéo vers images PNG", "Code: video to PNG frames"),
  vi("code-template", "Code : réglages du projet Vic-2D", "Code: Vic-2D project settings"),
  vi("code-projet", "Code : référence et images déformées", "Code: reference and deformed images"),
  vi("code-pipeline", "Code : corrélation en mode batch", "Code: batch correlation"),
  vi("code-export", "Code : export des résultats", "Code: results export"),
  vi("code-interface", "Code : interface en onglets", "Code: tabbed interface"),
];

// Images réelles par projet. Un projet absent garde les cases "bientôt disponible".
export const galleryImages: Record<string, GalleryImage[]> = {
  "lesions-carieuses": [
    c("assemblage", "Ensemble monté, vue isométrique", "Assembled unit, isometric view"),
    c("eclate-iso", "Vue éclatée : couvercle, disque consommable, cuve", "Exploded view: lid, consumable disc, vessel"),
    c("eclate-face", "Vue éclatée de face", "Exploded front view"),
    c("assemblage-coupe", "Coupe de l'ensemble : milieu 2, disque, milieu 1", "Assembly section: medium 2, disc, medium 1"),
    c("disque-iso", "Disque consommable pré-percé pour les racines", "Consumable disc pre-drilled for the roots"),
    c("couvercle-iso", "Couvercle à cheminée", "Chimney lid"),
    c("couvercle-dessous", "Couvercle vu de dessous", "Lid seen from below"),
    c("couvercle-coupe", "Couvercle à cheminée, coupe", "Chimney lid, section"),
    c("couvercle-filaire", "Couvercle, vue filaire", "Lid, wireframe view"),
    c("couvercle-filaire-dessous", "Couvercle, filaire vu de dessous", "Lid, wireframe from below"),
    c("cuve-iso", "Cuve basse, vue isométrique", "Lower vessel, isometric view"),
    c("cuve-filaire", "Cuve basse, vue filaire", "Lower vessel, wireframe view"),
    c("cuve-coupe", "Cuve basse, coupe", "Lower vessel, section"),
    p("croquis-4", "Croquis : principe de la dent dans le support consommable", "Sketch: tooth in the consumable support"),
    p("croquis-1", "Croquis : coupe transversale des deux milieux", "Sketch: cross-section of both media"),
    p("croquis-3", "Croquis : vue isométrique et clips", "Sketch: isometric view and clips"),
    p("croquis-2", "Croquis : disque semi-rigide et enveloppe latex", "Sketch: semi-rigid disc and latex envelope"),
  ],
  mobilis: mobilisImages,
  vic2d: vic2dImages,
  symbiosuits: symbiosuitsImages,
  biomemory: biomemoryImages,
};
