import ProjectPage from "@/components/ProjectPage";
import BiomemoryShowcase from "@/components/BiomemoryShowcase";

export const metadata = {
  title: "BioMemory · Emmanuel Bailly",
  description: "Stage R&D MGA Medtech · stockage de données sur ADN avec BioMemory.",
};

export default function Page() {
  return (
    <ProjectPage
      slug="biomemory"
      heroImage="https://cdn.prod.website-files.com/69a1daabcf12b345743e4373/6aa3f8a69a0f873448d18c11_techno.avif"
      heroFallback="/images/lattice.jpg"
      extra={<BiomemoryShowcase />}
    />
  );
}
