<script setup lang="ts">
import { useTemplateRef } from 'vue'

const props = defineProps<{
  currentPath: string
}>()

const mobileMenu = useTemplateRef<HTMLDetailsElement>('mobileMenu')

function isActive(path: string): boolean {
  return path === '/blog/'
    ? props.currentPath.startsWith(path)
    : props.currentPath === path
}

function closeMobileMenu(): void {
  mobileMenu.value?.removeAttribute('open')
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="wordmark" href="/" aria-label="xicv home">xicv /</a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a
          class="nav-link"
          :class="{ 'nav-link--active': isActive('/blog/') }"
          href="/blog/"
          :aria-current="isActive('/blog/') ? 'page' : undefined"
        >Blog</a>
        <a
          class="nav-link"
          :class="{ 'nav-link--active': isActive('/projects') }"
          href="/projects"
          :aria-current="isActive('/projects') ? 'page' : undefined"
        >Projects</a>
        <a
          class="nav-link"
          href="https://github.com/xicv"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >GitHub ↗</a>
      </nav>

      <details ref="mobileMenu" class="mobile-menu">
        <summary>Menu</summary>
        <nav class="mobile-nav" aria-label="Mobile navigation">
          <a
            class="mobile-nav__link"
            :class="{ 'mobile-nav__link--active': isActive('/blog/') }"
            href="/blog/"
            :aria-current="isActive('/blog/') ? 'page' : undefined"
            @click="closeMobileMenu"
          >Blog</a>
          <a
            class="mobile-nav__link"
            :class="{ 'mobile-nav__link--active': isActive('/projects') }"
            href="/projects"
            :aria-current="isActive('/projects') ? 'page' : undefined"
            @click="closeMobileMenu"
          >Projects</a>
          <a
            class="mobile-nav__link"
            href="https://github.com/xicv"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
            @click="closeMobileMenu"
          >GitHub ↗</a>
        </nav>
      </details>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 10;
  width: 100%;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-height);
  width: min(100%, var(--site-max));
  margin-inline: auto;
  padding-inline: var(--page-gutter);
}

.wordmark,
.nav-link,
.mobile-menu,
.mobile-nav__link {
  font-family: var(--font-mono);
  font-size: var(--text-ui);
  letter-spacing: -0.02em;
}

.wordmark {
  padding-block: 0.75rem;
  color: var(--ink);
  text-decoration: none;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(1.75rem, 4vw, 4.5rem);
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  color: var(--ink);
  text-decoration: none;
}

.nav-link::after {
  position: absolute;
  right: 0;
  bottom: 0.25rem;
  left: 0;
  height: 1px;
  background: var(--accent);
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 140ms ease;
}

.nav-link:hover::after,
.nav-link--active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.mobile-menu {
  display: none;
}

@media (max-width: 42rem) {
  .site-header__inner {
    min-height: var(--header-height-mobile);
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .mobile-menu summary {
    display: flex;
    align-items: center;
    min-height: 2.75rem;
    padding-inline: 0.25rem;
    cursor: pointer;
    list-style: none;
  }

  .mobile-menu summary::-webkit-details-marker {
    display: none;
  }

  .mobile-nav {
    position: absolute;
    top: calc(var(--header-height-mobile) - 1px);
    right: var(--page-gutter);
    left: var(--page-gutter);
    display: grid;
    border-top: 1px solid var(--rule);
    background: var(--paper);
  }

  .mobile-nav__link {
    display: flex;
    align-items: center;
    min-height: 3.75rem;
    border-bottom: 1px solid var(--rule);
    color: var(--ink);
    text-decoration: none;
  }

  .mobile-nav__link--active {
    border-bottom-color: var(--accent);
  }
}
</style>
