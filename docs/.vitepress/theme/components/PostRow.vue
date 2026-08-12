<script setup lang="ts">
import { computed } from 'vue'
import type { BlogPost } from '../types'
import { formatDate } from '../utils/formatDate'

const props = defineProps<{
  post: BlogPost
  index: number
}>()

const position = computed(() => String(props.index + 1).padStart(2, '0'))
const publishedDate = computed(() => formatDate(props.post.date))
</script>

<template>
  <li class="post-row">
    <span class="post-row__number" aria-hidden="true">{{ position }}</span>
    <div>
      <h2 class="post-row__title">
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <p class="post-row__description">{{ post.description }}</p>
    </div>
    <time class="post-row__date" :datetime="post.date">{{ publishedDate }}</time>
  </li>
</template>

<style scoped>
.post-row {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  gap: 1.5rem;
  padding-block: 2rem;
  border-bottom: 1px solid var(--rule-strong);
}

.post-row__number,
.post-row__description,
.post-row__date {
  font-family: var(--font-mono);
  font-size: var(--text-small);
}

.post-row__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(1.75rem, 3vw, 3rem);
  letter-spacing: -0.045em;
}

.post-row__title a {
  color: var(--ink);
  text-decoration: none;
}

.post-row__description {
  max-width: 52ch;
  margin: 1rem 0 0;
  color: var(--ink-muted);
  line-height: 1.5;
}

@media (max-width: 42rem) {
  .post-row {
    grid-template-columns: 2rem minmax(0, 1fr);
  }

  .post-row__date {
    grid-column: 2;
  }
}
</style>
