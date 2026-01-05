import { projects } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-border overflow-hidden">
                {project.image && (
                  <div className="relative h-64 w-full bg-muted">
                    <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {project.github && (
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Architecture</h4>
                    <p className="text-sm text-muted-foreground">{project.architecture}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Implementation</h4>
                    <p className="text-sm text-muted-foreground">{project.implementation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenges</h4>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results</h4>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
