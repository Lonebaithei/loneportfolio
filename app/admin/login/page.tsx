import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth/auth";

export const metadata = { title: "Admin sign in", robots: { index: false } };

async function login(formData: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      redirectTo: "/admin",
    });
  } catch (e) {
    if (e instanceof AuthError) redirect("/admin/login?error=1");
    throw e; // the redirect on success is thrown by signIn and must propagate
  }
}

export default async function Login({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if ((await auth())?.user) redirect("/admin");
  const { error } = await searchParams;
  return (
    <main className="mx-auto mt-24 w-full max-w-sm px-5">
      <h1 className="text-xl font-semibold">Admin sign in</h1>
      <form action={login} className="mt-6 space-y-4">
        <label className="block text-sm">Email
          <input name="email" type="email" required autoComplete="username" className="mt-1 w-full border border-line bg-transparent p-2" />
        </label>
        <label className="block text-sm">Password
          <input name="password" type="password" required autoComplete="current-password" className="mt-1 w-full border border-line bg-transparent p-2" />
        </label>
        {error && <p role="alert" className="text-sm text-red-600">Sign-in failed. Check your email and password.</p>}
        <button className="w-full bg-foreground p-2 text-background">Sign in</button>
      </form>
    </main>
  );
}
