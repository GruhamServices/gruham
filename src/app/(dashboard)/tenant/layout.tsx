// src/app/(dashboard)/tenant/layout.tsx
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth-options"

export default async function TenantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // Extra protection - ensure user is a tenant
  if (session?.user?.role !== "TENANT") {
    redirect("/owner/dashboard")
  }

  return <>{children}</>
}
