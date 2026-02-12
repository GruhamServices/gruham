import { getSession, getCurrentUser } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getSession()
  const user = await getCurrentUser()
  
  return NextResponse.json({
    hasSession: !!session,
    user: user || null,
  })
}