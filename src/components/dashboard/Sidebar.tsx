"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SidebarLink } from "./SidebarLink"
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
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react"
import { NavItem } from "@/types/dashboard"

const tenantNavItems: NavItem[] = [
  { title: "Dashboard", href: "/tenant/dashboard", icon: LayoutDashboard },
  { title: "Search Properties", href: "/tenant/search", icon: Search },
  { title: "My Connections", href: "/tenant/connections", icon: Users },
  { title: "Messages", href: "/tenant/messages", icon: MessageSquare, badge: 0 },
  { title: "My Ratings", href: "/tenant/ratings", icon: Star },
  { title: "Rental History", href: "/tenant/history", icon: History },
  { title: "My Profile", href: "/tenant/profile", icon: User },
]

const ownerNavItems: NavItem[] = [
  { title: "Dashboard", href: "/owner/dashboard", icon: LayoutDashboard },
  { title: "My Properties", href: "/owner/properties", icon: Home },
  { title: "Find Tenants", href: "/owner/tenants", icon: Search },
  { title: "Connections", href: "/owner/connections", icon: Users },
  { title: "Messages", href: "/owner/messages", icon: MessageSquare, badge: 0 },
  { title: "Ratings", href: "/owner/ratings", icon: Star },
  { title: "Past Tenants", href: "/owner/past-tenants", icon: History },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const { data: session } = useSession()
  const [collapsed, setCollapsed] = useState(false)
  
  const role = session?.user?.role
  const navItems = role === "OWNER" ? ownerNavItems : tenantNavItems
  const isOwner = role === "OWNER"

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Logo */}
      <div className={cn(
        "flex h-16 items-center border-b px-4",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && (
          <Link href="/" className="text-xl font-bold text-primary">
            Gruham
          </Link>
        )}
        {collapsed && (
          <Link href="/" className="text-xl font-bold text-primary">
            G 
          </Link> /*replace with logo later */
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Quick Action */}
      {isOwner && (
        <div className={cn("p-4", collapsed && "px-2")}>
          <Button asChild className={cn("w-full", collapsed && "px-0")}>
            <Link href="/owner/properties/new">
              <Plus className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Add Property</span>}
            </Link>
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4 pt-2">
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            href={item.href}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="border-t p-4">
        <SidebarLink
          href={`/${role?.toLowerCase()}/settings`}
          icon={Settings}
          title="Settings"
          collapsed={collapsed}
        />
      </div>
    </aside>
  )
}
