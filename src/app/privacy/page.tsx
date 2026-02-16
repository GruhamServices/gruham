import { MainLayout } from "@/components/layout"

export default function PrivacyPage() {
  return (
    <MainLayout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Account information (email, name, phone number)</li>
              <li>Profile information (occupation, age, preferences)</li>
              <li>Property listings (photos, address, details)</li>
              <li>Messages and communications</li>
              <li>Ratings and reviews</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Match tenants with property owners</li>
              <li>Calculate and display ratings</li>
              <li>Send notifications and updates</li>
              <li>Respond to your comments and questions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>With other users as part of the connection process (after mutual consent)</li>
              <li>With your consent or at your direction</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We take reasonable measures to help protect information about you from 
              loss, theft, misuse, and unauthorized access. However, no security 
              system is impenetrable.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of promotional communications</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact 
              us at gruhamservices@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}