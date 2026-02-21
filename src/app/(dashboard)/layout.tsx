import { redirect } from "next/navigation"
import { auth } from "@/lib/auth-options"
import { Sidebar, DashboardHeader } from "@/components/dashboard"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  if (!session.user.role) {
    redirect("/select-role")
  }

  return (
    <div className="flex h-screen overflow-hidden bg-muted/30">
      {/* Sidebar - Hidden on mobile */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
