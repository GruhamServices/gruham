import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          RentMatch
        </Link>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground">
            Find Properties
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            How it Works
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}