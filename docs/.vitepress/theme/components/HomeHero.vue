<script setup lang="ts">
defineProps<{
  projectCount: number
}>()
</script>

<template>
  <section class="home-hero" aria-labelledby="home-title">
    <h1 id="home-title" class="home-hero__title">
      another<br />
      boring<br />
      programmer<span class="home-hero__period">.</span>
    </h1>
    <a class="home-hero__link" href="/projects">
      {{ projectCount }} active projects →
    </a>
    <div class="home-hero__rule" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.home-hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: min(100%, var(--site-max));
  min-height: calc(100svh - var(--header-height));
  margin-inline: auto;
  padding: clamp(3rem, 8vh, 7rem) var(--page-gutter) 1.75rem;
}

.home-hero__title {
  max-width: 12ch;
  margin: 0;
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: clamp(4.5rem, 12.4vw, 12rem);
  font-weight: 600;
  letter-spacing: -0.085em;
  line-height: 0.83;
}

.home-hero__period {
  color: var(--accent);
}

.home-hero__link {
  align-self: flex-start;
  margin-top: clamp(2.5rem, 5vw, 5rem);
  border-bottom: 1px solid var(--accent);
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: var(--text-ui);
  text-decoration: none;
}

.home-hero__rule {
  width: 100%;
  margin-top: 2rem;
  border-bottom: 1px solid var(--rule-strong);
}

@media (max-width: 42rem) {
  .home-hero {
    min-height: calc(100svh - var(--header-height-mobile));
    padding-top: 5rem;
  }

  .home-hero__title {
    max-width: none;
    font-size: clamp(3rem, 15.5vw, 5.75rem);
    letter-spacing: -0.075em;
    line-height: 0.88;
  }
}
</style>
