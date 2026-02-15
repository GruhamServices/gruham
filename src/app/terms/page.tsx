import { MainLayout } from "@/components/layout"

export default function TermsPage() {
  return (
    <MainLayout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using RentMatch, you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, 
              please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              RentMatch is a platform that connects property owners with potential 
              tenants. We provide a rating and review system to help both parties 
              make informed decisions. We do not own, manage, or control any properties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To use certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us of any unauthorized use</li>
              <li>Be responsible for all activity under your account</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Post false, misleading, or fraudulent content</li>
              <li>Harass, threaten, or intimidate other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to manipulate ratings or reviews</li>
              <li>Use the service for any illegal purpose</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Ratings and Reviews</h2>
            <p className="text-muted-foreground mb-4">
              Our rating system is designed to be fair and protect against abuse. 
              By using RentMatch, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>You will provide honest and accurate ratings</li>
              <li>Ratings cannot be changed after submission</li>
              <li>One response is allowed for negative reviews</li>
              <li>We may remove reviews that violate our policies</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Property Listings</h2>
            <p className="text-muted-foreground mb-4">
              Property owners are solely responsible for their listings. RentMatch 
              does not verify the accuracy of property information and is not 
              responsible for any disputes between owners and tenants.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              RentMatch is a platform that facilitates connections. We are not 
              responsible for the actions of users, the quality of properties, 
              or any damages arising from your use of the service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update these terms from time to time. Continued use of the 
              service after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms, contact us at support@rentmatch.com.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}