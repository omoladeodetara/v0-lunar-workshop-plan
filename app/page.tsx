import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Lunar Workshop Materials</h1>
        <p className="text-xl mt-2 text-muted-foreground">LOGIC/LSIC/GEGSLA Virtual Workshop</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workshop Agenda</CardTitle>
            <CardDescription>Detailed agenda and workshop structure</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/agenda">
              <Button className="w-full">View Agenda</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Miro Board Template</CardTitle>
            <CardDescription>Collaborative template for breakout sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/miro">
              <Button className="w-full">View Miro Template</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Promotional Flyer</CardTitle>
            <CardDescription>Marketing material for the workshop</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/flyer">
              <Button className="w-full">View Flyer</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email Template</CardTitle>
            <CardDescription>Communication template for participants</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/email">
              <Button className="w-full">View Email Template</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
