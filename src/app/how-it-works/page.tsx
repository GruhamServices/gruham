import { MainLayout } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  Home, 
  Star, 
  Shield,
  ArrowRight
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">How Gruham Works</h1>
          <p className="text-xl text-muted-foreground">
            A simple process to find trusted landlords or reliable tenants.
          </p>
        </div>
      </section>

      {/* For Tenants */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">For Tenants</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and build your tenant profile. Add your occupation, 
                  preferences, and any details that help landlords know you better. 
                  The more complete your profile, the more likely landlords will 
                  connect with you.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Search Properties</h3>
                <p className="text-muted-foreground">
                  Browse properties by location, price, and type. See photos, 
                  approximate location, and most importantly - the landlord&apos;s 
                  rating from previous tenants. Filter by owner rating to find 
                  the best landlords.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Connect & Chat</h3>
                <p className="text-muted-foreground">
                  Found a property you like? Send a connection request. Once the 
                  landlord accepts, you&apos;ll see full property details including 
                  the exact address, and can chat directly to discuss terms.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Rate Your Experience</h3>
                <p className="text-muted-foreground">
                  After your tenancy, rate your landlord based on your experience. 
                  Your honest review helps future tenants make better decisions, 
                  and builds accountability in the rental market.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started as Tenant
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Owners */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">For Property Owners</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1. List Your Property</h3>
                <p className="text-muted-foreground">
                  Add your property with photos, location, rent details, and 
                  amenities. Set it as available when you&apos;re ready to find 
                  tenants. You control what&apos;s visible before connection.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Find Verified Tenants</h3>
                <p className="text-muted-foreground">
                  Search through available tenants. See their occupation, rating 
                  from previous landlords, and reviews. Filter by rating to find 
                  only the most reliable tenants.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Check References</h3>
                <p className="text-muted-foreground">
                  Once connected with a tenant, you can request to contact their 
                  previous landlord (with tenant&apos;s consent). Get real references 
                  through our secure, anonymous chat system.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Rate Your Tenants</h3>
                <p className="text-muted-foreground">
                  After tenancy ends, rate your tenant. Help other landlords by 
                  sharing your honest experience. Good tenants get recognized, 
                  problematic ones get flagged.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started as Owner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Is Gruham free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Gruham is completely free to use for both tenants and 
                  property owners. We may introduce premium features in the future.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How does the rating system work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instead of picking a number, users select a satisfaction level 
                  (from Very Unsatisfied to Very Satisfied). Our algorithm converts 
                  these into a fair rating that protects against single unfair reviews.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What information is visible before connection?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For privacy, we show limited information before you connect. 
                  Tenants see property photos, rent, and approximate location. 
                  Owners see tenant name, occupation, and rating. Full details 
                  are revealed only after both parties agree to connect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I respond to negative reviews?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! If you receive a negative rating, you can write one response 
                  to provide your side of the story. This helps maintain fairness 
                  and gives context to future users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}