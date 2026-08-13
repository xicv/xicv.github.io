<template>
  <section class="contact-page" aria-labelledby="contact-title">
    <p class="contact-page__eyebrow">Contact / public</p>
    <h1 id="contact-title" class="contact-page__title">Say hello.</h1>

    <div class="contact-page__panel">
      <p class="contact-page__intro">
        Want to talk about a project, an idea, or something I wrote?
        Send me a public message on GitHub.
      </p>
      <a
        class="contact-page__link"
        href="https://github.com/xicv/xicv.github.io/issues/new?template=contact.yml"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the public contact form on GitHub (opens in a new tab)"
      >Open contact form ↗</a>
      <p class="contact-page__note">
        You will need a GitHub account. The message and any replies will be public,
        so please do not include private or sensitive information.
      </p>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
  gap: clamp(3rem, 9vw, 9rem);
  align-items: end;
  width: min(100%, var(--site-max));
  min-height: calc(100svh - var(--header-height) - 8rem);
  margin-inline: auto;
  padding: clamp(4rem, 10vw, 9rem) var(--page-gutter) 0;
}

.contact-page__eyebrow,
.contact-page__intro,
.contact-page__link,
.contact-page__note {
  font-family: var(--font-mono);
}

.contact-page__eyebrow {
  grid-column: 1 / -1;
  align-self: start;
  margin: 0;
  font-size: var(--text-small);
  text-transform: uppercase;
}

.contact-page__title {
  max-width: 8ch;
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(5rem, 12vw, 11rem);
  font-weight: 600;
  letter-spacing: -0.08em;
  line-height: 0.84;
}

.contact-page__panel {
  padding-top: 1.5rem;
  border-top: 1px solid var(--rule-strong);
}

.contact-page__intro {
  margin: 0;
  font-size: var(--text-ui);
  line-height: 1.6;
}

.contact-page__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--accent);
  color: var(--ink);
  font-size: var(--text-ui);
  text-decoration: none;
}

.contact-page__note {
  max-width: 48ch;
  margin: 2rem 0 0;
  color: var(--ink-muted);
  font-size: var(--text-small);
  line-height: 1.55;
}

@media (max-width: 42rem) {
  .contact-page {
    grid-template-columns: 1fr;
    gap: 3rem;
    min-height: calc(100svh - var(--header-height-mobile) - 7rem);
    padding-top: 3rem;
  }

  .contact-page__eyebrow {
    grid-column: auto;
  }

  .contact-page__title {
    font-size: clamp(4.5rem, 23vw, 7rem);
  }
}
</style>
