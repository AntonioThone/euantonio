export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  id: string
  name: string
  problem: string
  architecture: string
  technologies: string[]
  implementation: string
  challenges: string
  results: string
  github?: string
  image?: string
}

export interface Certification {
  name: string
  organization: string
  status: string
  date?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

export type Section = "hero" | "about" | "skills" | "projects" | "labs" | "certifications" | "blog" | "contact"