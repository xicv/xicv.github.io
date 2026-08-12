<template>
  <section class="not-found" aria-labelledby="not-found-title">
    <p>404 / missing</p>
    <h1 id="not-found-title">This page wandered off.</h1>
    <a href="/">Back home →</a>
  </section>
</template>

<style scoped>
.not-found {
  width: min(100%, var(--site-max));
  margin-inline: auto;
  padding: clamp(5rem, 12vw, 11rem) var(--page-gutter);
}

.not-found p,
.not-found a {
  font-family: var(--font-mono);
  font-size: var(--text-ui);
}

.not-found h1 {
  max-width: 10ch;
  margin: 2rem 0 4rem;
  font-family: var(--font-sans);
  font-size: clamp(4rem, 10vw, 9rem);
  letter-spacing: -0.075em;
  line-height: 0.9;
}

.not-found a {
  border-bottom: 1px solid var(--accent);
  color: var(--ink);
  text-decoration: none;
}
</style>
