import { SiteShell } from "@/components/public/SiteShell";
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
