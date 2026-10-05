import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await requireAdmin();
  const [byStatus, drafts, published, resume, now, next] = await Promise.all([
    db.project.groupBy({ by: ["status"], _count: true }),
    db.project.count({ where: { publishStatus: "DRAFT" } }),
    db.project.count({ where: { publishStatus: "PUBLISHED" } }),
    db.resume.findFirst({ where: { status: "CURRENT" } }),
    db.nowEntry.findFirst({ where: { isCurrent: true } }),
    db.project.findFirst({ where: { status: "ACTIVE", nextAction: { not: null } }, orderBy: { updatedAt: "desc" }, select: { title: true, nextAction: true } }),
  ]);
  const count = (s: string) => byStatus.find((b) => b.status === s)?._count ?? 0;
  return (
    <>
      <h1 className="font-mono text-sm uppercase text-muted">Command center</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section><h2 className="text-sm text-muted">Projects</h2>
          <p>{count("ACTIVE")} active · {count("COMPLETED")} completed · {count("IDEA")} ideas</p></section>
        <section><h2 className="text-sm text-muted">Content</h2><p>{drafts} drafts · {published} published</p></section>
        <section><h2 className="text-sm text-muted">Resume</h2>
          <p>{resume ? `Version ${resume.version}` : "None uploaded"}</p></section>
        <section><h2 className="text-sm text-muted">Current focus</h2>
          <p>{now?.currentProjects[0] ?? "Not set"}</p></section>
        {next && <section className="sm:col-span-2"><h2 className="text-sm text-muted">Next action — {next.title}</h2><p>{next.nextAction}</p></section>}
      </div>
    </>
  );
}
