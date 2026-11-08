import ProjectPage from "@/components/ProjectPage";
import Vic2dShowcase from "@/components/Vic2dShowcase";

export const metadata = {
  title: "VIC2D · Emmanuel Bailly",
  description:
    "Corrélateur Automatique : logiciel Python qui pilote Vic-2D, de la vidéo d'essai mécanique aux champs de déplacement (GIBOC).",
};

export default function Page() {
  return <ProjectPage slug="vic2d" heroImage="/images/knee.webp" extra={<Vic2dShowcase />} />;
}
