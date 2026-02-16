import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"
import { NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const token = req.auth
  const path = req.nextUrl.pathname

  // Public routes - always accessible
  const publicRoutes = ["/", "/login", "/signup", "/verify", "/about", "/how-it-works", "/contact", "/privacy", "/terms"]
  if (publicRoutes.includes(path)) {
    return NextResponse.next()
  }

  // Not logged in → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // User is logged in but has no role
  if (!token.user?.role) {
    // Allow access to select-role page
    if (path === "/select-role") {
      return NextResponse.next()
    }
    // Redirect to select-role for any other protected route
    if (path.startsWith("/tenant") || path.startsWith("/owner") || path.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/select-role", req.url))
    }
  }

  // User has role, check access
  if (token.user?.role) {
    const role = token.user.role

    // Don't allow going back to select-role
    if (path === "/select-role") {
      if (role === "TENANT") {
        return NextResponse.redirect(new URL("/tenant/dashboard", req.url))
      }
      if (role === "OWNER") {
        return NextResponse.redirect(new URL("/owner/dashboard", req.url))
      }
      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))
      }
    }

    // Tenant trying to access owner routes
    if (role === "TENANT" && path.startsWith("/owner")) {
      return NextResponse.redirect(new URL("/tenant/dashboard", req.url))
    }

    // Owner trying to access tenant routes
    if (role === "OWNER" && path.startsWith("/tenant")) {
      return NextResponse.redirect(new URL("/owner/dashboard", req.url))
    }

    // Non-admin trying to access admin routes
    if (role !== "ADMIN" && path.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|api/auth).*)",
  ],
}
