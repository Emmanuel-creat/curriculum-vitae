import ProjectPage from "@/components/ProjectPage";
import MobilisShowcase from "@/components/MobilisShowcase";

export const metadata = {
  title: "Mobilis · Emmanuel Bailly",
  description:
    "Orthèse modulable de rééducation du poignet : conception CAO, simulation numérique et étude expérimentale sur volontaires · projet M1 IEAP BTI.",
};

export default function Page() {
  return (
    <ProjectPage
      slug="mobilis"
      heroImage="/images/mobilis/prototype-porte-face.jpg"
      heroFallback="/images/anatomy.jpg"
      extra={<MobilisShowcase />}
    />
  );
}
