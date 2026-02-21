"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { 
  LayoutDashboard, 
  Search, 
  MessageSquare, 
  Star, 
  User, 
  Home,
  Users,
  History,
  Settings,
  Plus,
  X
} from "lucide-react"
import { NavItem } from "@/types/dashboard"

const tenantNavItems: NavItem[] = [
  { title: "Dashboard", href: "/tenant/dashboard", icon: LayoutDashboard },
  { title: "Search Properties", href: "/tenant/search", icon: Search },
  { title: "My Connections", href: "/tenant/connections", icon: Users },
  { title: "Messages", href: "/tenant/messages", icon: MessageSquare },
  { title: "My Ratings", href: "/tenant/ratings", icon: Star },
  { title: "Rental History", href: "/tenant/history", icon: History },
  { title: "My Profile", href: "/tenant/profile", icon: User },
  { title: "Settings", href: "/tenant/settings", icon: Settings },
]

const ownerNavItems: NavItem[] = [
  { title: "Dashboard", href: "/owner/dashboard", icon: LayoutDashboard },
  { title: "My Properties", href: "/owner/properties", icon: Home },
  { title: "Find Tenants", href: "/owner/tenants", icon: Search },
  { title: "Connections", href: "/owner/connections", icon: Users },
  { title: "Messages", href: "/owner/messages", icon: MessageSquare },
  { title: "Ratings", href: "/owner/ratings", icon: Star },
  { title: "Past Tenants", href: "/owner/past-tenants", icon: History },
  { title: "Settings", href: "/owner/settings", icon: Settings },
]

export function MobileNav() {
  const { data: session } = useSession()
  const pathname = usePathname()
  
  const role = session?.user?.role
  const navItems = role === "OWNER" ? ownerNavItems : tenantNavItems
  const isOwner = role === "OWNER"

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          Gruham
        </Link>
        <SheetClose asChild>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </SheetClose>
      </div>

      {/* Quick Action for Owner */}
      {isOwner && (
        <div className="p-4 border-b">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href="/owner/properties/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Link>
            </Button>
          </SheetClose>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SheetClose>
            )
          })}
        </div>
      </nav>

      {/* User Info */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {session?.user?.email}
            </p>
            <p className="text-xs text-muted-foreground capitalize">
              {role?.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
