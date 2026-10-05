import Link from "next/link";

const nav = [
  ["About", "/about"], ["CV", "/cv"], ["Projects", "/projects"], ["Now", "/now"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:bg-background focus:p-2">Skip to content</a>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">Lone Baithei</Link>
          <nav aria-label="Primary"><ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {nav.map(([label, href]) => (
              <li key={href}><Link href={href} className="text-muted hover:text-foreground">{label}</Link></li>
            ))}
          </ul></nav>
        </div>
      </header>
      <main id="main" className="mx-auto w-full max-w-4xl flex-1 px-5 py-10">{children}</main>
      <footer className="border-t border-line py-6 text-center font-mono text-xs text-muted">
        Show the work. Document the thinking. Keep the record.
      </footer>
    </>
  );
}
