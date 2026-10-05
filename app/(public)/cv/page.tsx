import { getCvData } from "@/lib/db/queries";
export const dynamic = "force-dynamic";
export const metadata = { title: "CV" };

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 font-mono text-xs uppercase text-muted">{children}</h2>;
}

const yr = (d: Date | null) => (d ? d.getUTCFullYear() : "");

export default async function CV() {
  const { education, certifications, experience, skills } = await getCvData();
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-semibold">CV</h1>
      {education.length > 0 && <section><H>Education</H>{education.map((e) => <p key={e.id}><strong>{e.program}</strong>, {e.institution} <span className="text-muted">{yr(e.startDate)}–{e.endDate ? yr(e.endDate) : e.status ?? "present"}</span></p>)}</section>}
      {certifications.length > 0 && <section><H>Certifications</H>{certifications.map((c) => <p key={c.id}>{c.verifyUrl ? <a className="text-accent underline underline-offset-4" href={c.verifyUrl}>{c.name}</a> : c.name}, {c.issuer} <span className="text-muted">{yr(c.issuedAt)}</span></p>)}</section>}
      {experience.length > 0 && <section><H>Experience</H>{experience.map((x) => <div key={x.id} className="mb-3"><p><strong>{x.role}</strong>, {x.organization}</p>{x.description && <p className="text-sm text-muted">{x.description}</p>}</div>)}</section>}
      {skills.length > 0 && <section><H>Skills</H>{(["DATA", "ENGINEERING", "QUANT", "OTHER"] as const).map((cat) => { const s = skills.filter((k) => k.category === cat); return s.length ? <p key={cat}><span className="font-mono text-xs text-muted">{cat} </span>{s.map((k) => k.name).join(" · ")}</p> : null; })}</section>}
    </div>
  );
}
