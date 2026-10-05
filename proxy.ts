import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/auth.config";

// Next 16 renamed middleware.ts -> proxy.ts. This is a first gate only;
// pages and server actions re-check via requireAdmin().
export const proxy = NextAuth(authConfig).auth;

export const config = { matcher: ["/admin/:path*"] };
