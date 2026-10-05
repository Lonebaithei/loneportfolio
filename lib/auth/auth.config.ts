import type { NextAuthConfig } from "next-auth";

// Edge-safe config (no DB imports) so proxy.ts can use it.
export const authConfig = {
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isAdmin = request.nextUrl.pathname.startsWith("/admin");
      const isLogin = request.nextUrl.pathname === "/admin/login";
      if (!isAdmin || isLogin) return true;
      return !!auth?.user;
    },
  },
} satisfies NextAuthConfig;
