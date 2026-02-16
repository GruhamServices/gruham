import Link from 'next/link'
import { AuthButtons } from './AuthButtons'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Gruham
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
        <AuthButtons />
      </div>
    </header>
  )
}
