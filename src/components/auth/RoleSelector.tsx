"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, User, Loader2 } from "lucide-react"

type Role = "TENANT" | "OWNER"

interface RoleCardProps {
  role: Role
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  selected: boolean
  onSelect: () => void
}

function RoleCard({ role, title, description, icon, features, selected, onSelect }: RoleCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:border-primary ${
        selected ? "border-primary border-2 bg-primary/5" : ""
      }`}
      onClick={onSelect}
    >
      <CardHeader className="text-center">
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
          selected ? "bg-primary text-primary-foreground" : "bg-muted"
        }`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { update } = useSession()

  const handleContinue = async () => {
    if (!selectedRole) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/users/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to set role")
      }

      // Update session with new role (refreshes the JWT cookie)
      await update({ role: selectedRole })

      // Full page redirect to pick up the new JWT cookie
      window.location.href = data.redirectTo
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Gruham!</h1>
        <p className="text-muted-foreground mt-2">
          How would you like to use the platform?
        </p>
      </div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md text-center">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <RoleCard
          role="TENANT"
          title="I'm a Tenant"
          description="Looking for a place to rent"
          icon={<User className="w-8 h-8" />}
          features={[
            "Search for properties",
            "Connect with verified landlords",
            "Build your rental reputation",
            "Rate your landlords",
          ]}
          selected={selectedRole === "TENANT"}
          onSelect={() => setSelectedRole("TENANT")}
        />

        <RoleCard
          role="OWNER"
          title="I'm a Property Owner"
          description="Looking for tenants"
          icon={<Home className="w-8 h-8" />}
          features={[
            "List your properties",
            "Find verified tenants",
            "Check tenant history",
            "Rate your tenants",
          ]}
          selected={selectedRole === "OWNER"}
          onSelect={() => setSelectedRole("OWNER")}
        />
      </div>

      <Button
        className="w-full"
        size="lg"
        disabled={!selectedRole || isLoading}
        onClick={handleContinue}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Setting up your account...
          </>
        ) : (
          "Continue"
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        You can&apos;t change this later. Choose carefully.
      </p>
    </div>
  )
}
