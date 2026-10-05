import { getPublicProjects } from "@/lib/db/queries";
import { ProjectCard } from "@/components/public/ProjectCard";

export const dynamic = "force-dynamic";
export const metadata = { title: "Projects" };

export default async function Projects() {
  const projects = await getPublicProjects();
  return (
    <>
      <h1 className="text-2xl font-semibold">Projects</h1>
      {projects.length === 0
        ? <p className="mt-4 text-muted">No projects published yet.</p>
        : <div className="mt-6 grid gap-4 sm:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} p={p} />)}</div>}
    </>
  );
}
