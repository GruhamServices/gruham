import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function VerifyPage() {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Check your email</CardTitle>
        <CardDescription>
          We&apos;ve sent you a magic link to sign in
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Click the link in your email to complete the sign in process.
          The link will expire in 24 hours.
        </p>
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the email?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Try again
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
