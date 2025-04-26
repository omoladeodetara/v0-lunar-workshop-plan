import { Calendar, Clock, Globe, Users, Database, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function WorkshopAgenda() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">LOGIC/LSIC/GEGSLA Virtual Workshop</h1>
        <p className="text-xl mt-2 text-muted-foreground">Lunar Activities Database: Interoperability & Cooperation</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Workshop Details
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Date & Time</p>
                <p className="text-sm text-muted-foreground">Tuesday, May 13, 2025</p>
                <p className="text-sm text-muted-foreground">15:00-18:30 CEST</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Time Zones</p>
                <p className="text-sm text-muted-foreground">06:00 PT | 09:00 ET | 21:00 Beijing</p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://everytimezone.com/s/b32057b8"
                    className="underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View all time zones
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Audience</p>
                <p className="text-sm text-muted-foreground">
                  Space agencies, industry (including startups), academia, NPOs and NGOs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Database className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Focus Areas</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline">Interoperability</Badge>
                  <Badge variant="outline">Standardization</Badge>
                  <Badge variant="outline">Collaboration</Badge>
                  <Badge variant="outline">Database Design</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Workshop Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Establish an international community focused on lunar activities interoperability</li>
            <li>Identify database requirements using the principle "do no harm"</li>
            <li>Create a framework for cataloging potential harmful interferences</li>
            <li>Establish a coordination system and identify a leading body</li>
            <li>Develop standardization approaches to prevent future interference</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Detailed Agenda</CardTitle>
          <CardDescription>3.5 hours total duration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Introduction</h3>
              <span className="text-sm text-muted-foreground">15:00-15:10 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Welcome, brief introduction to LOGIC, LSIC and GEGSLA, explanation of workshop structure
            </p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Panel Discussion</h3>
              <span className="text-sm text-muted-foreground">15:13-15:53 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Panel with 4-5 speakers and a moderator discussing key challenges and opportunities
            </p>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs font-medium">Panelist Composition:</p>
                <ul className="text-xs list-disc pl-4 mt-1">
                  <li>1 space agency/government representative</li>
                  <li>1 academic representative</li>
                  <li>1 industry representative</li>
                  <li>1 NPO/NGO representative</li>
                  <li>1 GEGSLA WG2 moderator</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs font-medium">Panel Focus:</p>
                <ul className="text-xs list-disc pl-4 mt-1">
                  <li>Current challenges in lunar activities coordination</li>
                  <li>Database requirements and governance</li>
                  <li>Standardization approaches</li>
                  <li>International cooperation frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Q&A Session</h3>
              <span className="text-sm text-muted-foreground">15:53-16:08 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">Open floor for questions to the panel</p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Breakout Room Instructions</h3>
              <span className="text-sm text-muted-foreground">16:08-16:13 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">Explanation of Zoom breakout rooms and Miro boards usage</p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Break</h3>
              <span className="text-sm text-muted-foreground">16:13-16:28 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">Short break to grab refreshments and join breakout rooms</p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Breakout Sessions</h3>
              <span className="text-sm text-muted-foreground">16:28-17:18 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Collaborative work in breakout rooms using Miro boards (40 min brainstorming + 10 min summary)
            </p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Group Presentations</h3>
              <span className="text-sm text-muted-foreground">17:18-17:43 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Each breakout group presents their findings (5 minutes max per group)
            </p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Open Discussion</h3>
              <span className="text-sm text-muted-foreground">17:43-18:03 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">Q&A and open floor discussion on presented findings</p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Conclusion & Next Steps</h3>
              <span className="text-sm text-muted-foreground">18:03-18:08 CEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Summary of outcomes, action items, and future collaboration opportunities
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Breakout Room Structure</CardTitle>
          <CardDescription>Collaborative discussion in focused groups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Room Organization</h3>
              <p className="text-sm text-muted-foreground">
                4 breakout rooms with mixed representation from space agencies, academia, industry, and NGOs
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Discussion Questions</h3>
              <div className="space-y-2">
                <p className="text-sm">Each room will address the following key questions:</p>
                <ul className="list-disc pl-5 text-sm space-y-1.5">
                  <li>
                    What are the most urgent challenges around space interoperability that justify creating a shared
                    database?
                  </li>
                  <li>
                    What specific types of data should be included to effectively capture and prevent harmful
                    interferences?
                  </li>
                  <li>Who should own or oversee the database, and why?</li>
                  <li>
                    How can we ensure all stakeholders contribute to and agree on database architecture and data
                    standards?
                  </li>
                  <li>What governance or coordination system do we need to ensure alignment and prevent conflicts?</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Facilitation</h3>
              <p className="text-sm text-muted-foreground">
                Each room will have 2 facilitators to guide discussion and ensure all voices are heard
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Miro boards will be used to capture ideas, with a designated note-taker in each room
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
