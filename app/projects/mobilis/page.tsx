import ProjectPage from "@/components/ProjectPage";

export const metadata = {
  title: "Mobilis — Emmanuel Bailly",
  description: "Orthèse modulable de rééducation du poignet — projet M1 Bio-ingénierie.",
};

export default function Page() {
  return <ProjectPage slug="mobilis" heroImage="/images/anatomy.jpg" />;
}
