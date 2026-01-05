import { certifications } from "@/lib/data"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { GraduationCap } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications & Education</h2>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={cert.status === "Completed" || cert.status === "Certified" ? "default" : "secondary"}
                      >
                        {cert.status}
                      </Badge>
                      {cert.date && <span className="text-sm text-muted-foreground">{cert.date}</span>}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
