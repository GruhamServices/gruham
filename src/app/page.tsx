import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Gruham</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Testing shadcn/ui components</p>
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </main>
  )
}