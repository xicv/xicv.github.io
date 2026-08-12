import { defineLoader } from 'vitepress'
import {
  descriptions,
  displayNames,
  excludedRepositories,
  landingPages,
} from './.vitepress/data/project-catalog'
import { projectSnapshot } from './.vitepress/data/projects.snapshot'
import type { Project, ProjectsData } from './.vitepress/theme/types'

export interface GitHubRepository {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  fork: boolean
  archived: boolean
  disabled: boolean
  visibility: string
  has_pages: boolean
  language: string | null
  pushed_at: string
  size: number
}

declare const data: ProjectsData
export { data }

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== 'object' || value === null) return false

  const repository = value as Partial<GitHubRepository>
  return (
    typeof repository.name === 'string' &&
    typeof repository.html_url === 'string' &&
    typeof repository.fork === 'boolean' &&
    typeof repository.archived === 'boolean' &&
    typeof repository.disabled === 'boolean' &&
    typeof repository.visibility === 'string' &&
    typeof repository.has_pages === 'boolean' &&
    typeof repository.pushed_at === 'string' &&
    typeof repository.size === 'number'
  )
}

function isPortfolioProject(repository: GitHubRepository): boolean {
  return (
    !repository.fork &&
    !repository.archived &&
    !repository.disabled &&
    repository.visibility === 'public' &&
    repository.size > 0 &&
    !excludedRepositories.has(repository.name)
  )
}

function externalHomepage(repository: GitHubRepository): string | null {
  if (!repository.homepage) return null

  try {
    const url = new URL(repository.homepage)
    if (url.hostname === 'github.com' || url.hostname === 'www.github.com') {
      return null
    }
    return url.href
  } catch {
    return null
  }
}

function toProject(repository: GitHubRepository): Project {
  const landingUrl =
    landingPages[repository.name] ||
    externalHomepage(repository) ||
    (repository.has_pages
      ? `https://xicv.github.io/${repository.name}/`
      : null)

  return {
    name: displayNames[repository.name] || repository.name,
    repositoryName: repository.name,
    description:
      descriptions[repository.name] ||
      repository.description ||
      'An open-source project by xic.',
    repositoryUrl: repository.html_url,
    landingUrl,
    destinationUrl: landingUrl || repository.html_url,
    destinationLabel:
      repository.name === 'minco'
        ? 'Visit docs'
        : landingUrl
          ? 'Visit site'
          : 'View source',
    language: repository.language,
    pushedAt: repository.pushed_at,
  }
}

async function fetchRepositories(): Promise<GitHubRepository[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'xicv.github.io',
    'X-GitHub-Api-Version': '2026-03-10',
  }

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const response = await fetch(
    'https://api.github.com/users/xicv/repos?per_page=100&type=owner&sort=pushed&direction=desc',
    { headers },
  )

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status}`)
  }

  const repositories: unknown = await response.json()
  if (!Array.isArray(repositories) || !repositories.every(isGitHubRepository)) {
    throw new Error('GitHub returned an unexpected repository payload')
  }

  return repositories
}

function buildProjectData(
  repositories: readonly GitHubRepository[],
  source: ProjectsData['source'],
): ProjectsData {
  return {
    projects: repositories
      .filter(isPortfolioProject)
      .sort((left, right) => Date.parse(right.pushed_at) - Date.parse(left.pushed_at))
      .map(toProject),
    source,
  }
}

export default defineLoader({
  async load(): Promise<ProjectsData> {
    try {
      return buildProjectData(await fetchRepositories(), 'github')
    } catch (error) {
      console.warn('Using the tracked project snapshot:', error)
      return buildProjectData(projectSnapshot, 'snapshot')
    }
  },
})
