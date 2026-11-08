import ProjectPage from "@/components/ProjectPage";
import SymbiosuitsDesign from "@/components/SymbiosuitsDesign";

export const metadata = {
  title: "Symbiosuits · Emmanuel Bailly",
  description: "Exosquelette des membres inférieurs · concept CAO, rendus et mises en plan cotées.",
};

export default function Page() {
  return (
    <ProjectPage
      slug="symbiosuits"
      heroImage="/images/symbiosuits/rendu-marche.jpg"
      extra={<SymbiosuitsDesign />}
    />
  );
}
