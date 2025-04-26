import { Calendar, Clock, Globe, Users, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PromotionalFlyer() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4" variant="outline">
            Virtual Workshop
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lunar Activities Database</h1>
          <p className="text-xl text-muted-foreground">Interoperability, Cooperation & Standards</p>
        </div>

        <Card className="overflow-hidden mb-8 border-0 shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">LOGIC/LSIC/GEGSLA Workshop</h2>
                <p className="opacity-90 mt-1">Building the Future of Lunar Exploration Together</p>
              </div>
              <Button variant="secondary" className="whitespace-nowrap">
                Register Now
              </Button>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Tuesday, May 13, 2025</p>
                    <p className="text-sm text-muted-foreground">One week before LSIC Spring Meeting</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">15:00-18:30 CEST</p>
                    <p className="text-sm text-muted-foreground">3.5 hours duration</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Virtual Event (Zoom)</p>
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="https://everytimezone.com/s/b32057b8"
                        className="underline"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Check your timezone
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Workshop Objectives</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full flex-shrink-0 mt-0.5">✓</span>
                    <span>Establish international community for lunar activities interoperability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full flex-shrink-0 mt-0.5">✓</span>
                    <span>Identify database requirements using the principle "do no harm"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full flex-shrink-0 mt-0.5">✓</span>
                    <span>Create framework for cataloging potential harmful interferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full flex-shrink-0 mt-0.5">✓</span>
                    <span>Establish coordination system and identify leading body</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Featured Speakers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Quan Haofang" />
                    <AvatarFallback>QH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Quan Haofang</p>
                    <p className="text-sm text-muted-foreground">Director, China Astronautics Standards Institute</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Fred Slane" />
                    <AvatarFallback>FS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Fred Slane</p>
                    <p className="text-sm text-muted-foreground">ISO Technical Standards Expert</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Krystal Azelton" />
                    <AvatarFallback>KA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Krystal Azelton</p>
                    <p className="text-sm text-muted-foreground">Senior Director, Secure World Foundation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="ispace CTO" />
                    <AvatarFallback>CT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">ispace CTO</p>
                    <p className="text-sm text-muted-foreground">Technical Mission Lead</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Workshop Format</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-1.5 rounded-full flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Expert Panel Discussion</p>
                    <p className="text-sm text-muted-foreground">Insights from industry leaders and policymakers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-1.5 rounded-full flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Interactive Breakout Sessions</p>
                    <p className="text-sm text-muted-foreground">Collaborative problem-solving in small groups</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-1.5 rounded-full flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Group Presentations</p>
                    <p className="text-sm text-muted-foreground">Share findings and recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-1.5 rounded-full flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Open Discussion & Next Steps</p>
                    <p className="text-sm text-muted-foreground">
                      Develop actionable outcomes and future collaboration
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Who Should Attend?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium text-sm">Space Agencies</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Database className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium text-sm">Industry & Startups</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium text-sm">Academia</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium text-sm">NPOs & NGOs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Register for the Workshop
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            For questions, please contact:{" "}
            <a href="mailto:workshop@example.com" className="underline">
              workshop@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
