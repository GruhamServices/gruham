import { UserRole } from "@prisma/client"
import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: UserRole | null
      image?: string | null
    }
  }

  interface User {
    role: UserRole | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: UserRole | null
  }
}