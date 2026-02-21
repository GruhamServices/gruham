"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SidebarLinkProps {
  href: string
  icon: LucideIcon
  title: string
  badge?: number
  collapsed?: boolean
}

export function SidebarLink({ href, icon: Icon, title, badge, collapsed }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2"
      )}
      title={collapsed ? title : undefined}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      {!collapsed && (
        <>
          <span className="flex-1">{title}</span>
          {badge !== undefined && badge > 0 && (
            <Badge variant={isActive ? "secondary" : "default"} className="ml-auto">
              {badge > 99 ? "99+" : badge}
            </Badge>
          )}
        </>
      )}
    </Link>
  )
}
