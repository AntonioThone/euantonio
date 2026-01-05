"use client"

import type { Section } from "@/lib/types"
import { ThemeToggle } from "./theme-toggle"

interface NavigationProps {
  currentSection: Section
  onNavigate: (section: Section) => void
}

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const navItems: { label: string; section: Section }[] = [
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Labs", section: "labs" },
    { label: "Certifications", section: "certifications" },
    { label: "Blog", section: "blog" },
    { label: "Contact", section: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button
          onClick={() => onNavigate("hero")}
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          António Thone
        </button>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentSection === item.section
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}