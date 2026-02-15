import { redirect } from "next/navigation"
import { auth } from "@/lib/auth-options"
import { prisma } from "@/lib/prisma"
import { RoleSelector } from "@/components/auth/RoleSelector"

export default async function SelectRolePage() {
  const session = await auth()

  // Not logged in → go to login
  if (!session?.user?.email) {
    redirect("/login")
  }

  // Check if user already has a role
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true },
  })

  // Already has role → go to appropriate dashboard
  if (user?.role === "TENANT") {
    redirect("/tenant/dashboard")
  }
  if (user?.role === "OWNER") {
    redirect("/owner/dashboard")
  }
  if (user?.role === "ADMIN") {
    redirect("/admin/dashboard")
  }

  // No role → show selector
  return <RoleSelector />
}
