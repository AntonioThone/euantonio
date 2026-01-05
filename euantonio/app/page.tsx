"use client"

import { useState } from "react"
import type { Section } from "@/lib/types"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { LabsSection } from "@/components/sections/labs-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function PortfolioPage() {
  const [currentSection, setCurrentSection] = useState<Section>("hero")

  const handleNavigate = (section: Section) => {
    setCurrentSection(section)
  }

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return <HeroSection onNavigate={handleNavigate} />
      case "about":
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "projects":
        return <ProjectsSection />
      case "labs":
        return <LabsSection />
      case "certifications":
        return <CertificationsSection />
      case "blog":
        return <BlogSection />
      case "contact":
        return <ContactSection />
      default:
        return <HeroSection onNavigate={handleNavigate} />
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
        <main className="pt-16">{renderSection()}</main>
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 António Thone. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}