import { redirect } from "next/navigation"
import { auth } from "@/lib/auth-options"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* We'll add sidebar later */}
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
