import { getNow } from "@/lib/db/queries";
export const dynamic = "force-dynamic";
export const metadata = { title: "Now" };

export default async function Now() {
  const n = await getNow();
  const rows: [string, string | undefined][] = n ? [
    ["Building", n.currentProjects.join(", ")], ["Learning", n.currentlyLearning.join(" · ")],
    ["Exploring", n.currentlyResearching.join(", ")], ["Recent", n.recentAchievement ?? undefined], ["Next", n.nextGoal ?? undefined],
  ] : [];
  return (
    <>
      <h1 className="text-2xl font-semibold">Now</h1>
      {!n ? <p className="mt-4 text-muted">Not set yet.</p> : (
        <>
          <dl className="mt-6 space-y-4">{rows.filter(([, v]) => v).map(([k, v]) => <div key={k}><dt className="font-mono text-xs uppercase text-muted">{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="mt-8 font-mono text-xs text-muted">Last updated {n.updatedAt.toISOString().slice(0, 10)}</p>
        </>
      )}
    </>
  );
}
