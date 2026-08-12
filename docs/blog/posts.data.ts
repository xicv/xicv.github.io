import { createContentLoader } from 'vitepress'
import type { BlogPost } from '../.vitepress/theme/types'

declare const data: BlogPost[]
export { data }

export default createContentLoader('blog/*.md', {
  transform(rawData): BlogPost[] {
    return rawData
      .filter((page) => page.url !== '/blog/')
      .map((page) => ({
        title: String(page.frontmatter.title || 'Untitled'),
        description: String(page.frontmatter.description || ''),
        date: String(page.frontmatter.date || ''),
        url: page.url,
      }))
      .sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
  },
})
