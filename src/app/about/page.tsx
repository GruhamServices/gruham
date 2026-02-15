import { MainLayout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Star, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">About RentMatch</h1>
          <p className="text-xl text-muted-foreground">
            Building trust in the rental market, one connection at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            The rental market has always been built on incomplete information. 
            Landlords struggle to verify tenant reliability, while tenants have 
            no way to know if a landlord will be responsive and fair.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            RentMatch changes this by creating a mutual accountability system. 
            Both landlords and tenants build reputation over time through honest 
            ratings and reviews. This transparency leads to better matches and 
            fewer disputes.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe everyone deserves to know who they&apos;re renting from or 
            renting to. Trust shouldn&apos;t be a gamble.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trust & Safety</h3>
                <p className="text-muted-foreground">
                  Every interaction on our platform is designed to build trust. 
                  Verified ratings help everyone make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mutual Respect</h3>
                <p className="text-muted-foreground">
                  Both landlords and tenants deserve respect. Our two-way rating 
                  system ensures accountability on both sides.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fair Ratings</h3>
                <p className="text-muted-foreground">
                  Our algorithm protects against unfair ratings. One bad review 
                  won&apos;t destroy your reputation - consistency matters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We&apos;re building more than a platform. We&apos;re creating a 
                  community where good behavior is rewarded.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Built with ❤️</h2>
          <p className="text-lg text-muted-foreground">
            RentMatch is built by a small team passionate about making the 
            rental experience better for everyone.
          </p>
        </div>
      </section>
    </MainLayout>
  )
}