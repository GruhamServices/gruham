import { auth } from "@/lib/auth-options"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, Star, User } from "lucide-react"
import Link from "next/link"

export default async function TenantDashboardPage() {
  const session = await auth()

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground">
          {session?.user?.email}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <Search className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">Find Properties</CardTitle>
            <CardDescription>Search for your next home</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/tenant/search">Search Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <MessageSquare className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">Messages</CardTitle>
            <CardDescription>Chat with property owners</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tenant/messages">View Messages</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Star className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">My Rating</CardTitle>
            <CardDescription>3.5 / 5.0 (New)</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tenant/ratings">View Details</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <User className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">My Profile</CardTitle>
            <CardDescription>Complete your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tenant/profile">Edit Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Profile Completion Prompt */}
      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>
            A complete profile helps landlords trust you. Add your occupation, 
            preferences, and other details to increase your chances.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/tenant/profile">Complete Profile</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
