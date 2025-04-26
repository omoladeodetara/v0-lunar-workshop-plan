import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MiroBoardTemplate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Lunar Activities Database</h1>
        <p className="text-xl mt-2 text-muted-foreground">Breakout Room Miro Board Template</p>
      </div>

      <Tabs defaultValue="challenges">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="data">Data Types</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="standards">Standards</TabsTrigger>
          <TabsTrigger value="actions">Action Items</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Challenges</CardTitle>
              <CardDescription>
                What are the most urgent challenges around space interoperability that justify creating a shared
                database?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-yellow-800 mb-2">Technical Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">Communication protocols compatibility</li>
                    <li className="text-muted-foreground">Data format standardization</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-blue-800 mb-2">Policy & Regulatory Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">International coordination mechanisms</li>
                    <li className="text-muted-foreground">Regulatory frameworks</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-green-800 mb-2">Operational Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">Resource allocation conflicts</li>
                    <li className="text-muted-foreground">Mission planning coordination</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Requirements</CardTitle>
              <CardDescription>
                What specific types of data should be included to effectively capture and prevent harmful interferences?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Essential Data Categories</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Mission Data</h4>
                      <ul className="mt-2 text-xs space-y-1 text-muted-foreground">
                        <li>• Mission timeline</li>
                        <li>• Landing coordinates</li>
                        <li>• Operational zones</li>
                        <li>• Add your ideas...</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Technical Specifications</h4>
                      <ul className="mt-2 text-xs space-y-1 text-muted-foreground">
                        <li>• Communication frequencies</li>
                        <li>• Power requirements</li>
                        <li>• Emission profiles</li>
                        <li>• Add your ideas...</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Resource Utilization</h4>
                      <ul className="mt-2 text-xs space-y-1 text-muted-foreground">
                        <li>• Water/ice extraction plans</li>
                        <li>• Mining activities</li>
                        <li>• Energy generation</li>
                        <li>• Add your ideas...</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Data Structure & Access</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Data Format Standards</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>What standardized formats should be used?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Access Levels</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>How should data access be structured?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Data Validation</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>How should data be validated?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Governance Structure</CardTitle>
              <CardDescription>
                Who should own or oversee the database, and what governance system do we need?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Ownership Models</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border">
                      <div className="w-5 h-5 rounded-full bg-red-100 border border-red-200 flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="text-sm font-medium">UN-led Consortium</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Pros and cons of United Nations oversight through UNOOSA or similar body
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border">
                      <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="text-sm font-medium">Multi-stakeholder Consortium</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Independent organization with representation from agencies, industry, academia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border">
                      <div className="w-5 h-5 rounded-full bg-green-100 border border-green-200 flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="text-sm font-medium">Space Agency Coalition</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Collaboration between major space agencies (NASA, ESA, JAXA, etc.)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border">
                      <div className="w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="text-sm font-medium">Other Models</h4>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20 mt-1"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Governance Framework</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Decision-Making Process</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>How should decisions about the database be made?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Conflict Resolution</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>How should conflicts between stakeholders be resolved?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded border">
                      <h4 className="text-sm font-medium">Funding Model</h4>
                      <div className="mt-2 text-xs text-muted-foreground space-y-2">
                        <p>How should the database be funded long-term?</p>
                        <textarea
                          className="w-full p-2 border rounded text-xs h-20"
                          placeholder="Add your ideas here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="standards" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Standards & Interoperability</CardTitle>
              <CardDescription>
                What existing standards can we build upon, and what new standards are needed?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-purple-800 mb-2">Existing Standards</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">ISO Space Data Standards</li>
                    <li className="text-muted-foreground">CCSDS Protocols</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-teal-800 mb-2">Needed Standards</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">Lunar surface activity coordination</li>
                    <li className="text-muted-foreground">Resource utilization protocols</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 min-h-[300px]">
                  <h3 className="font-medium text-orange-800 mb-2">Implementation Approach</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li className="text-muted-foreground">Phased adoption strategy</li>
                    <li className="text-muted-foreground">Incentives for compliance</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                    <li className="text-muted-foreground">Add your ideas here...</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Action Items & Next Steps</CardTitle>
              <CardDescription>
                What concrete steps would you recommend to build an international community dedicated to
                interoperability?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Short-term Actions (0-6 months)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Medium-term Actions (6-18 months)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4" />
                      <input
                        type="text"
                        className="flex-1 p-2 text-sm border rounded"
                        placeholder="Add action item..."
                      />
                      <select className="p-2 text-sm border rounded bg-white">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium mb-3">Long-term Vision (18+ months)</h3>
                  <textarea
                    className="w-full p-3 border rounded text-sm h-24"
                    placeholder="Describe the long-term vision for lunar activities database and interoperability..."
                  ></textarea>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
