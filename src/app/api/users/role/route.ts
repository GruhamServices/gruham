import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth-options"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const roleSchema = z.object({
  role: z.enum(["TENANT", "OWNER"]),
})

export async function POST(request: NextRequest) {
  try {
    // Get current session
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const { role } = roleSchema.parse(body)

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Check if role already set
    if (user.role) {
      return NextResponse.json(
        { error: "Role already selected" },
        { status: 400 }
      )
    }

    // Update user role and create appropriate profile
    if (role === "TENANT") {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: user.id },
          data: { role: "TENANT" },
        }),
        prisma.tenantProfile.create({
          data: { userId: user.id },
        }),
      ])
    } else {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: user.id },
          data: { role: "OWNER" },
        }),
        prisma.ownerProfile.create({
          data: { userId: user.id },
        }),
      ])
    }

    return NextResponse.json({
      success: true,
      role,
      redirectTo: role === "TENANT" ? "/tenant/dashboard" : "/owner/dashboard",
    })

  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid role", details: err.issues },
        { status: 400 }
      )
    }
    
    console.error("Role selection error:", err)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { role: true },
    })

    return NextResponse.json({
      role: user?.role || null,
    })

  } catch (error) {
    console.error("Get role error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}