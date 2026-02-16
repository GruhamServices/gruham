import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Resend from "next-auth/providers/resend"
import { prisma } from "./prisma"
import { Resend as ResendClient } from "resend"
import { authConfig } from "./auth.config"
import type { NextAuthConfig } from "next-auth"
import type { UserRole } from "@prisma/client"

const resendClient = new ResendClient(process.env.AUTH_RESEND_KEY)

// Full config with Prisma adapter, providers, and DB callbacks
// Used by server components and API routes (Node.js runtime)
const config: NextAuthConfig = {
  ...authConfig,
  adapter: PrismaAdapter(prisma) as NextAuthConfig["adapter"],

  providers: [
    Resend({
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        const result = await resendClient.emails.send({
          from: process.env.EMAIL_FROM!,
          to: email,
          subject: "Sign in to Gruham",
          html: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
              <h1 style="color: #333; margin-bottom: 24px;">Welcome to Gruham</h1>
              <p style="color: #666; margin-bottom: 24px;">Click the button below to sign in to your account:</p>
              <a href="${url}" style="
                display: inline-block;
                padding: 12px 24px;
                background-color: #0070f3;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 500;
              ">Sign In to Gruham</a>
              <p style="color: #999; margin-top: 24px; font-size: 14px;">
                This link expires in 24 hours and can only be used once.
              </p>
              <p style="color: #999; font-size: 14px;">
                If you didn't request this email, you can safely ignore it.
              </p>
            </div>
          `,
        })

        if (result.error) {
          console.error("Failed to send verification email:", result.error)
          throw new Error("Failed to send verification email")
        }
      },
    }),
  ],

  callbacks: {
    ...authConfig.callbacks,

    async jwt({ token, user, trigger, session }) {
      if (user?.id) {
        token.id = user.id
        // Get role from database
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        })
        token.role = dbUser?.role ?? null
      }

      // Handle session updates (after role selection)
      if (trigger === "update" && (session as { role?: string })?.role) {
        token.role = (session as { role: string }).role as UserRole
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole | null
      }
      return session
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
