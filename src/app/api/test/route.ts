import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Try to count users (should be 0)
    const count = await prisma.user.count()
    return NextResponse.json({ success: true, userCount: count })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}