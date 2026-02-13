"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have access to this resource.",
    Verification: "The verification link has expired or has already been used.",
    Default: "An unexpected error occurred. Please try again.",
  }

  const message = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default

  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <CardTitle className="text-2xl">Authentication Error</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          If this problem persists, please contact support.
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild>
          <Link href="/login">Try Again</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
