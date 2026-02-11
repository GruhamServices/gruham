import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Tenants.<br />
            Find Trusted Landlords.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            RentMatch connects property owners with reliable tenants through 
            verified ratings and reviews. Build trust before you rent.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">I&apos;m a Tenant</Button>
            <Button size="lg" variant="outline">I&apos;m an Owner</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Create Profile</h3>
              <p className="text-muted-foreground">Sign up and build your rental reputation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Find and connect with verified users</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Rate & Review</h3>
              <p className="text-muted-foreground">Build trust through honest feedback</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}