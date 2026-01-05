"use client"

import type { Section } from "@/lib/types"
import { Github, Linkedin, Download, FolderGit2 } from "lucide-react"
import { Button } from "../ui/button"

interface HeroSectionProps {
  onNavigate: (section: Section) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">António Thone</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">Linux Systems Administrator</p>
            <div className="flex flex-wrap gap-2 text-sm md:text-base text-muted-foreground">
              <span>Infrastructure</span>
              <span className="text-border">•</span>
              <span>Networking</span>
              <span className="text-border">•</span>
              <span>Automation</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Specializing in building and maintaining robust Linux server infrastructure with a focus on security,
            automation, and reliability. Experienced in deploying enterprise-grade solutions across networking,
            virtualization, and system administration.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => onNavigate("projects")} size="lg">
              <FolderGit2 className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              <a href="/cv.pdf" download className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
