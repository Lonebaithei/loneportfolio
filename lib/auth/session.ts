import { redirect } from "next/navigation";
import { auth } from "./auth";

// Defence in depth: every admin page/action calls this, not just proxy.ts.
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) redirect("/admin/login");
  return session.user;
}
