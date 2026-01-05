import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { FileCode2, Network, FileText, ScrollText } from "lucide-react"

export function LabsSection() {
  const labs = [
    {
      icon: Network,
      title: "Network Diagrams",
      description:
        "Detailed infrastructure diagrams showing network topology, VLAN segmentation, and service architecture.",
    },
    {
      icon: FileCode2,
      title: "Bash Scripts",
      description:
        "Collection of automation scripts with comprehensive comments for backup, monitoring, and system maintenance.",
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Step-by-step guides, runbooks, and procedures for system administration tasks and troubleshooting.",
    },
    {
      icon: ScrollText,
      title: "System Logs & Analysis",
      description: "Examples of log analysis, troubleshooting methodologies, and incident response documentation.",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Labs & Documentation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Practical examples, documentation, and resources from real-world implementations and virtual lab
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab) => {
              const Icon = lab.icon
              return (
                <Card key={lab.title} className="border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{lab.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{lab.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
