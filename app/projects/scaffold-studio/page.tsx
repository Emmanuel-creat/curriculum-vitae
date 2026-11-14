import ProjectPage from "@/components/ProjectPage";
import ScaffoldShowcase from "@/components/ScaffoldShowcase";

export const metadata = {
  title: "Scaffold Studio · Emmanuel Bailly",
  description:
    "Scaffold Studio : conception de scaffolds osseux poreux avec rigidité, perfusion, oxygène et croissance du tissu calculés en direct dans le navigateur.",
};

export default function Page() {
  return (
    <ProjectPage
      slug="scaffold-studio"
      heroImage="/images/scaffold-studio/hero.jpg"
      heroFallback="/images/lattice.jpg"
      extra={<ScaffoldShowcase />}
    />
  );
}
