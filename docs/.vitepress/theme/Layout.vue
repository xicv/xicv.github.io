<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import NotFoundPage from './components/NotFoundPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

defineOptions({ name: 'SiteLayout' })

const { frontmatter, page } = useData()
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isBlogIndex = computed(() => route.path === '/blog/')
const isArticle = computed(
  () => route.path.startsWith('/blog/') && route.path !== '/blog/',
)
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader :current-path="route.path" />
    <main
      id="main-content"
      class="site-main"
      :class="{
        'site-main--home': isHome,
        'site-main--article': isArticle,
      }"
    >
      <NotFoundPage v-if="page.isNotFound" />
      <Content v-else />
    </main>
    <SiteFooter
      v-if="frontmatter.footer !== false && !isHome"
      :variant="isBlogIndex ? 'github' : 'back-to-top'"
    />
  </div>
</template>
