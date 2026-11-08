import type { L10n } from "./cad";

export type GalleryImage = { src: string; alt: L10n; kind: "cad" | "photo" };

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
};
