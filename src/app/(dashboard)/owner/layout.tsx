import { redirect } from "next/navigation"
import { auth } from "@/lib/auth-options"


export default async function OwnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // Extra protection - ensure user is an owner
  if (session?.user?.role !== "OWNER") {
    redirect("/tenant/dashboard")
  }

  return <>{children}</>
}
