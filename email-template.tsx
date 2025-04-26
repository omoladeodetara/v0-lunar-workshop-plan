import { Button } from "@/components/ui/button"
import { Calendar, Clock, Globe } from "lucide-react"

export default function EmailTemplate() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-purple-700">LOGIC/LSIC/GEGSLA Virtual Workshop</h1>
        <p className="text-lg mt-1">Lunar Activities Database: Interoperability & Cooperation</p>
      </div>

      <div className="mb-6">
        <p className="mb-4">Dear Colleague,</p>

        <p className="mb-4">
          We are pleased to invite you to participate in the upcoming virtual workshop on "Lunar Activities Database:
          Interoperability & Cooperation" organized jointly by LOGIC, LSIC, and GEGSLA.
        </p>

        <p className="mb-4">
          As lunar exploration accelerates globally, the need for coordination and standardization becomes increasingly
          critical. This workshop aims to bring together stakeholders from space agencies, industry, academia, and
          non-profit organizations to address these challenges and develop collaborative solutions.
        </p>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h2 className="font-bold text-purple-700 mb-3">Workshop Details</h2>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium">Date: Tuesday, May 13, 2025</p>
              <p className="text-sm text-muted-foreground">One week before LSIC Spring Meeting</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium">Time: 15:00-18:30 CEST</p>
              <p className="text-sm text-muted-foreground">
                06:00 PT | 09:00 ET | 21:00 Beijing
                <a
                  href="https://everytimezone.com/s/b32057b8"
                  className="underline ml-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  (Check your timezone)
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium">Location: Virtual (Zoom)</p>
              <p className="text-sm text-muted-foreground">Link will be provided upon registration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-purple-700 mb-3">Workshop Objectives</h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>Establish an international community focused on lunar activities interoperability</li>
          <li>Identify database requirements using the principle "do no harm"</li>
          <li>Create a framework for cataloging potential harmful interferences</li>
          <li>Establish a coordination system and identify a leading body</li>
          <li>Develop standardization approaches to prevent future interference</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-purple-700 mb-3">Featured Speakers</h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Quan Haofang</strong>, Director of China Astronautics Standards Institute
          </li>
          <li>
            <strong>Fred Slane</strong>, ISO Technical Standards Expert
          </li>
          <li>
            <strong>Krystal Azelton</strong>, Senior Director, Secure World Foundation
          </li>
          <li>
            <strong>ispace CTO</strong>, Technical Mission Lead
          </li>
        </ul>

        <p className="text-sm text-muted-foreground mt-2">*Speaker lineup subject to confirmation</p>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-purple-700 mb-3">Workshop Format</h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Expert Panel Discussion</strong> - Insights from industry leaders and policymakers
          </li>
          <li>
            <strong>Interactive Breakout Sessions</strong> - Collaborative problem-solving in small groups
          </li>
          <li>
            <strong>Group Presentations</strong> - Share findings and recommendations
          </li>
          <li>
            <strong>Open Discussion & Next Steps</strong> - Develop actionable outcomes and future collaboration
          </li>
        </ul>
      </div>

      <div className="text-center mb-6">
        <Button className="bg-purple-600 hover:bg-purple-700 w-full">Register Now</Button>
      </div>

      <div className="text-sm text-muted-foreground">
        <p className="mb-2">
          We encourage you to share this invitation with colleagues who may be interested in contributing to this
          important discussion.
        </p>

        <p className="mb-4">
          For questions, please contact:{" "}
          <a href="mailto:workshop@example.com" className="underline">
            workshop@example.com
          </a>
        </p>

        <p>
          Best regards,
          <br />
          The LOGIC/LSIC/GEGSLA Workshop Organizing Committee
        </p>
      </div>
    </div>
  )
}
