<script setup lang="ts">
defineProps<{
  variant: 'github' | 'back-to-top'
}>()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <span>© 2026 xic</span>
      <a
        v-if="variant === 'github'"
        href="https://github.com/xicv"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub (opens in a new tab)"
      >GitHub ↗</a>
      <a v-else href="#main-content">Back to top ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  padding-block: clamp(3rem, 7vw, 6rem) 1.75rem;
}

.site-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, var(--site-max));
  margin-inline: auto;
  padding-top: 1.25rem;
  padding-inline: var(--page-gutter);
  border-top: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: var(--text-small);
}

.site-footer a {
  color: var(--ink);
  text-decoration: none;
}
</style>
