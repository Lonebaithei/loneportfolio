import Link from "next/link";
import { requireAdmin } from "@/lib/auth/session";
import { signOut } from "@/lib/auth/auth";

export const metadata = { robots: { index: false, follow: false } };

const sections = ["Dashboard", "Resume", "About", "Skills", "Education", "Certifications", "Experience", "Projects", "Research", "Now", "Settings", "Activity"];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-5 py-8">
      <nav aria-label="Admin" className="w-40 shrink-0 text-sm">
        <ul className="space-y-1">
          {sections.map((s) => (
            <li key={s}><Link href={s === "Dashboard" ? "/admin" : `/admin/${s.toLowerCase()}`} className="text-muted hover:text-foreground">{s}</Link></li>
          ))}
        </ul>
        <form action={async () => { "use server"; await signOut({ redirectTo: "/admin/login" }); }} className="mt-6">
          <button className="text-muted underline underline-offset-4">Sign out</button>
        </form>
      </nav>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
