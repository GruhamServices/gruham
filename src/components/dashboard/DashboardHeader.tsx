 "use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { UserMenu } from "./UserMenu"
import { Bell, Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MobileNav } from "./MobileNav"

interface DashboardHeaderProps {
  title?: string
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <MobileNav />
        </SheetContent>
      </Sheet>

      {/* Logo for mobile */}
      <Link href="/" className="lg:hidden text-xl font-bold text-primary">
        Gruham
      </Link>

      {/* Page Title */}
      {title && (
        <h1 className="hidden md:block text-lg font-semibold">{title}</h1>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {/* Notification badge */}
          {/* <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
            3
          </span> */}
        </Button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  )
}
