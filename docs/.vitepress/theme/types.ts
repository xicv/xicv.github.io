export interface Project {
  name: string
  repositoryName: string
  description: string
  repositoryUrl: string
  landingUrl: string | null
  destinationUrl: string
  destinationLabel: 'Visit site' | 'Visit docs' | 'View source'
  language: string | null
  pushedAt: string
}

export interface ProjectsData {
  projects: Project[]
  source: 'github' | 'snapshot'
}

export interface BlogPost {
  title: string
  description: string
  date: string
  url: string
}
