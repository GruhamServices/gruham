import { auth } from "@/lib/auth-options"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Users, MessageSquare, Star, Plus } from "lucide-react"
import Link from "next/link"

export default async function OwnerDashboardPage() {
  const session = await auth()

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-muted-foreground">
            {session?.user?.email}
          </p>
        </div>
        <Button asChild>
          <Link href="/owner/properties/new">
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <Home className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">My Properties</CardTitle>
            <CardDescription>0 listed properties</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/owner/properties">View All</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Users className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">Find Tenants</CardTitle>
            <CardDescription>Search for reliable tenants</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/owner/tenants">Search Tenants</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <MessageSquare className="w-8 h-8 text-primary mb-2" />
            <CardTitle className="text-lg">Messages</CardTitle>
            <CardDescription>Chat with tenants</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/owner/messages">View Messages</Link>
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
              <Link href="/owner/ratings">View Details</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Add Property Prompt */}
      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle>List Your First Property</CardTitle>
          <CardDescription>
            Add your property with photos, location, and details to start 
            receiving connection requests from verified tenants.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/owner/properties/new">
              <Plus className="w-4 h-4 mr-2" />
              Add Property
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
