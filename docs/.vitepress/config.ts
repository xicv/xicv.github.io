import { defineConfig } from 'vitepress'

const siteUrl = 'https://xicv.github.io/'

export default defineConfig({
  title: 'xicv',
  description: 'Another boring programmer. Projects and occasional notes by xic.',
  lang: 'en-AU',
  cleanUrls: true,
  sitemap: {
    hostname: siteUrl,
  },
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#f3f4f1' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#11130f' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'link',
      {
        rel: 'preload',
        href: '/fonts/maple-mono-nf-regular-subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        href: '/fonts/maple-mono-nf-semibold-subset.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'xic',
        url: siteUrl,
        sameAs: ['https://github.com/xicv'],
      }),
    ],
  ],
  transformPageData(pageData) {
    const canonicalPath = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    const canonicalUrl = new URL(canonicalPath, siteUrl).href
    const title = pageData.frontmatter.title || pageData.title || 'xicv'
    const description =
      pageData.frontmatter.description ||
      'Another boring programmer. Projects and occasional notes by xic.'

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
    )
  },
})
