import { getProfile } from "@/lib/db/queries";
export const dynamic = "force-dynamic";
export const metadata = { title: "Contact" };

export default async function Contact() {
  const p = await getProfile();
  const links = [["Email", p?.email ? `mailto:${p.email}` : null, p?.email], ["LinkedIn", p?.linkedinUrl, p?.linkedinUrl], ["GitHub", p?.githubUrl, p?.githubUrl]] as const;
  return (
    <>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <ul className="mt-6 space-y-2">
        {links.map(([l, href, text]) => href && <li key={l}><span className="text-muted">{l}: </span><a href={href} className="text-accent underline underline-offset-4">{text}</a></li>)}
      </ul>
    </>
  );
}
