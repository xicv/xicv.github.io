<script setup lang="ts">
import type { BlogPost } from '../types'
import PostRow from './PostRow.vue'

defineProps<{
  posts: readonly BlogPost[]
}>()
</script>

<template>
  <section class="blog-index" aria-labelledby="blog-title">
    <header class="blog-index__header">
      <h1 id="blog-title" class="page-title">Blog</h1>
      <p class="blog-index__count">{{ posts.length }} / published</p>
    </header>

    <div v-if="posts.length === 0" class="blog-empty">
      <h2>Nothing published. Yet.</h2>
      <p>Notes will live here when they are worth keeping.</p>
    </div>

    <ol v-else class="post-list" aria-label="Published posts">
      <PostRow
        v-for="(post, index) in posts"
        :key="post.url"
        :post="post"
        :index="index"
      />
    </ol>
  </section>
</template>

<style scoped>
.blog-index {
  display: flex;
  flex-direction: column;
  width: min(100%, var(--site-max));
  min-height: calc(100svh - var(--header-height) - 9rem);
  margin-inline: auto;
  padding: clamp(3.5rem, 8vw, 8rem) var(--page-gutter) 0;
}

.page-title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(5rem, 10vw, 9.5rem);
  font-weight: 600;
  letter-spacing: -0.075em;
  line-height: 0.86;
}

.blog-index__count {
  margin: clamp(2rem, 4vw, 3.75rem) 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-ui);
}

.blog-empty,
.post-list {
  margin-top: clamp(4rem, 8vw, 7rem);
  padding-top: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid var(--rule-strong);
}

.blog-empty h2 {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(2.25rem, 4vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 1;
}

.blog-empty p {
  margin: 1.5rem 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-ui);
}

.post-list {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

@media (max-width: 42rem) {
  .blog-index {
    min-height: calc(100svh - var(--header-height-mobile) - 8rem);
    padding-top: 3rem;
  }

  .page-title {
    font-size: clamp(4.25rem, 22vw, 7rem);
  }

  .blog-empty {
    padding-top: 3rem;
  }
}
</style>
