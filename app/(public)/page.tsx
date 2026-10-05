import Link from "next/link";
import { getFeaturedProjects, getNow, getProfile } from "@/lib/db/queries";
import { ProjectCard } from "@/components/public/ProjectCard";

export const dynamic = "force-dynamic"; // content comes from the CMS database

export default async function Home() {
  const [profile, now, projects] = await Promise.all([getProfile(), getNow(), getFeaturedProjects()]);
  const areas = profile?.headline.split("·").map((s) => s.trim()) ?? [];
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">{profile?.name ?? "Lone Baithei"}</h1>
        <ul className="mt-3 text-muted">{areas.map((a) => <li key={a}>{a}</li>)}</ul>
        {profile?.summary && <p className="mt-4 max-w-2xl">{profile.summary}</p>}
        <p className="mt-6 flex gap-4 text-sm">
          <Link href="/cv" className="text-accent underline underline-offset-4">View CV</Link>
          <Link href="/projects" className="text-accent underline underline-offset-4">Projects</Link>
        </p>
      </section>

      {now && (
        <section aria-labelledby="now-h">
          <h2 id="now-h" className="font-mono text-xs uppercase text-muted">Currently</h2>
          <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
            {now.currentProjects.length > 0 && <div><dt className="text-muted">Building</dt><dd>{now.currentProjects.join(", ")}</dd></div>}
            {now.currentlyLearning.length > 0 && <div><dt className="text-muted">Learning</dt><dd>{now.currentlyLearning.join(" · ")}</dd></div>}
            {now.currentlyResearching.length > 0 && <div><dt className="text-muted">Exploring</dt><dd>{now.currentlyResearching.join(", ")}</dd></div>}
          </dl>
        </section>
      )}

      <section aria-labelledby="proj-h">
        <h2 id="proj-h" className="font-mono text-xs uppercase text-muted">Selected projects</h2>
        {projects.length === 0
          ? <p className="mt-3 text-sm text-muted">No projects published yet.</p>
          : <div className="mt-3 grid gap-4 sm:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} p={p} />)}</div>}
      </section>
    </div>
  );
}
