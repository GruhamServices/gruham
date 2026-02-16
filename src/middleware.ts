import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"
import { NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const token = req.auth
  const path = req.nextUrl.pathname

  // Logged-in user with no role → force them to /select-role
  // This must run BEFORE the public routes check, otherwise
  // they'd land on "/" after signup and never be sent to role selection
  if (token && !token.user?.role) {
    // Allow the role selection page and the API that sets the role
    if (path === "/select-role" || path === "/api/users/role") {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/select-role", req.url))
  }

  // Public routes - always accessible (for non-logged-in users)
  const publicRoutes = ["/", "/login", "/signup", "/verify", "/about", "/how-it-works", "/contact", "/privacy", "/terms"]
  if (publicRoutes.includes(path)) {
    return NextResponse.next()
  }

  // Not logged in → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
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
