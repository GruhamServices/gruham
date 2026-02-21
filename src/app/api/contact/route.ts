import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = contactSchema.parse(body)

    // Send email to admin
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM!,
      subject: `[Gruham Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Gruham contact form.
          </p>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Failed to send contact email:", error)
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      )
    }

    // Send confirmation to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "We received your message - Gruham",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting us!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
          <p>Best regards,<br />The Gruham Team</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }
    
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}