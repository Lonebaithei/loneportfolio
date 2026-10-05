import Link from "next/link";

type P = { slug: string; title: string; category: string; shortDescription: string; technologies: string[]; status: string; progress: number; updatedAt: Date };

export function ProjectCard({ p }: { p: P }) {
  return (
    <article className="border border-line p-4">
      <p className="font-mono text-xs uppercase text-muted">{p.category.replace("_", " ")}</p>
      <h3 className="mt-1 font-medium"><Link href={`/projects/${p.slug}`} className="hover:text-accent">{p.title}</Link></h3>
      <p className="mt-2 text-sm text-muted">{p.shortDescription}</p>
      {p.technologies.length > 0 && <p className="mt-2 font-mono text-xs">{p.technologies.join(" · ")}</p>}
      <p className="mt-3 font-mono text-xs text-muted">
        Status: {p.status.toLowerCase()}{p.status === "ACTIVE" && ` · ${p.progress}%`} · Updated {p.updatedAt.toISOString().slice(0, 10)}
      </p>
    </article>
  );
}
