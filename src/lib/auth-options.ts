import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "./prisma"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          const result = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            subject: "Sign in to RentMatch",
            html: `
              <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
                <h1 style="color: #333; margin-bottom: 24px;">Welcome to RentMatch</h1>
                <p style="color: #666; margin-bottom: 24px;">Click the button below to sign in to your account:</p>
                <a href="${url}" style="
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #0070f3;
                  color: white;
                  text-decoration: none;
                  border-radius: 8px;
                  font-weight: 500;
                ">Sign In to RentMatch</a>
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
            throw new Error(result.error.message)
          }
        } catch (error) {
          console.error("Failed to send verification email:", error)
          throw new Error("Failed to send verification email")
        }
      },
    }),
  ],

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
    async jwt({ token, user, trigger, session }) {
      // First time sign in
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      
      // Handle session updates (e.g., after role selection)
      if (trigger === "update" && session?.role) {
        token.role = session.role
      }
      
      return token
    },
    
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string | null
      }
      return session
    },
    
    async redirect({ url, baseUrl }) {
      // After sign in, check if user needs to select role
      if (url.startsWith(baseUrl)) {
        return url
      }
      return baseUrl
    },
  },
}