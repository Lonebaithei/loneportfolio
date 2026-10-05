import { notFound } from "next/navigation";
import { getPublicProject } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getPublicProject((await params).slug);
  return p ? { title: p.title, description: p.shortDescription } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getPublicProject((await params).slug);
  if (!p) notFound();
  const sections: [string, string | null][] = [
    ["Problem", p.problem], ["Objective", p.objectives], ["Approach", p.approach],
    ["Results", p.outcomes], ["Lessons", p.lessons],
  ];
  const links = [["Repository", p.repositoryUrl], ["Demo", p.demoUrl], ["Documentation", p.documentationUrl]] as const;
  return (
    <article className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase text-muted">{p.category.replace("_", " ")}</p>
        <h1 className="mt-1 text-2xl font-semibold">{p.title}</h1>
        <p className="mt-2 text-muted">{p.shortDescription}</p>
        <p className="mt-3 font-mono text-xs text-muted">Status: {p.status.toLowerCase()} · Updated {p.updatedAt.toISOString().slice(0, 10)}</p>
      </header>
      {p.technologies.length > 0 && <section><h2 className="font-mono text-xs uppercase text-muted">Technology</h2><p className="mt-2">{p.technologies.join(" · ")}</p></section>}
      {sections.map(([h, body]) => body && (
        <section key={h}><h2 className="font-mono text-xs uppercase text-muted">{h}</h2><p className="mt-2 whitespace-pre-line">{body}</p></section>
      ))}
      {p.milestones.length > 0 && (
        <section><h2 className="font-mono text-xs uppercase text-muted">Milestones</h2>
          <ul className="mt-2 space-y-1">{p.milestones.map((m) => <li key={m.id}><span aria-hidden>{m.status === "DONE" ? "✓" : "○"}</span> <span className="sr-only">{m.status === "DONE" ? "Done:" : "Not done:"}</span>{m.title}</li>)}</ul>
        </section>
      )}
      {links.some(([, u]) => u) && (
        <section><h2 className="font-mono text-xs uppercase text-muted">Evidence</h2>
          <ul className="mt-2 space-y-1">{links.map(([l, u]) => u && <li key={l}><a href={u} className="text-accent underline underline-offset-4" rel="noopener noreferrer">{l}</a></li>)}</ul>
        </section>
      )}
    </article>
  );
}
