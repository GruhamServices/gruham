import type { NextAuthConfig } from "next-auth"
import type { UserRole } from "@prisma/client"

// Edge-compatible config (no Prisma/pg/resend imports)
// Used by middleware. Extended by auth-options.ts with adapter + providers.
export const authConfig: NextAuthConfig = {
  providers: [], // Populated in auth-options.ts (email provider needs adapter)

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: "/login",
    verifyRequest: "/verify",
    error: "/login",
  },

  callbacks: {
    // Pass role from JWT token into the session so middleware can read it
    jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.role) {
        token.role = session.role
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole | null
      }
      return session
    },
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url
      }
      return baseUrl
    },
  },
}
