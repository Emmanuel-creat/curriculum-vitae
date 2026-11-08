import ProjectPage from "@/components/ProjectPage";
import CariesDesign from "@/components/CariesDesign";

export const metadata = {
  title: "Cultures de lésions carieuses · Emmanuel Bailly",
  description:
    "Projet R&D M2 · dispositif de culture bi-chambre sur dent entière pour recréer des lésions carieuses, mises en plan CAO commentées.",
};

export default function Page() {
  return (
    <ProjectPage
      slug="lesions-carieuses"
      heroImage="/images/caries/eclate-iso.jpg"
      extra={<CariesDesign />}
    />
  );
}
