<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../types'
import { formatDate } from '../utils/formatDate'

const props = defineProps<{
  project: Project
  index: number
}>()

const position = computed(() => String(props.index + 1).padStart(2, '0'))
const pushedDate = computed(() => formatDate(props.project.pushedAt))
const linkLabel = computed(
  () => `${props.project.destinationLabel}: ${props.project.name}`,
)
</script>

<template>
  <li class="project-row">
    <span class="project-row__number" aria-hidden="true">{{ position }}</span>
    <div class="project-row__identity">
      <h2 class="project-row__name">{{ project.name }}</h2>
      <p class="project-row__description">{{ project.description }}</p>
    </div>
    <span class="project-row__language">{{ project.language || 'Other' }}</span>
    <time class="project-row__date" :datetime="project.pushedAt">
      <span>Updated</span>
      {{ pushedDate }}
    </time>
    <a
      class="project-row__link"
      :href="project.destinationUrl"
      target="_blank"
      rel="noreferrer"
      :aria-label="`${linkLabel} (opens in a new tab)`"
    >{{ project.destinationLabel }} ↗</a>
  </li>
</template>

<style scoped>
.project-row {
  display: grid;
  grid-template-columns: 3.5rem minmax(17rem, 1.5fr) minmax(6rem, 0.45fr) minmax(8rem, 0.55fr) auto;
  gap: clamp(1.25rem, 2.8vw, 3rem);
  align-items: start;
  padding-block: clamp(1.75rem, 3.2vw, 3rem);
  border-bottom: 1px solid var(--rule-strong);
  transition: background-color 140ms ease, border-color 140ms ease;
}

.project-row:hover,
.project-row:focus-within {
  border-bottom-color: var(--accent);
  background: var(--paper-raised);
}

.project-row__number,
.project-row__language,
.project-row__date,
.project-row__link,
.project-row__description {
  font-family: var(--font-mono);
}

.project-row__number,
.project-row__language,
.project-row__date,
.project-row__link {
  font-size: var(--text-small);
  line-height: 1.4;
}

.project-row__identity {
  min-width: 0;
}

.project-row__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1;
  overflow-wrap: anywhere;
}

.project-row__description {
  max-width: 46ch;
  margin: 1rem 0 0;
  color: var(--ink-muted);
  font-size: var(--text-small);
  line-height: 1.5;
}

.project-row__date {
  display: grid;
  color: var(--ink);
}

.project-row__link {
  justify-self: end;
  min-height: 2.75rem;
  border-bottom: 1px solid var(--accent);
  color: var(--ink);
  text-decoration: none;
  white-space: nowrap;
}

@media (max-width: 62rem) {
  .project-row {
    grid-template-columns: 3rem minmax(0, 1fr) auto;
  }

  .project-row__language {
    grid-column: 2;
  }

  .project-row__date {
    grid-row: 2;
    grid-column: 3;
  }

  .project-row__link {
    grid-row: 3;
    grid-column: 3;
  }
}

@media (max-width: 42rem) {
  .project-row {
    grid-template-columns: 2.5rem minmax(0, 1fr);
    gap: 0.75rem 1rem;
    padding-block: 1.75rem;
  }

  .project-row__identity,
  .project-row__language,
  .project-row__date,
  .project-row__link {
    grid-column: 2;
  }

  .project-row__identity {
    grid-row: 1;
  }

  .project-row__language {
    grid-row: 2;
  }

  .project-row__date {
    grid-row: 3;
  }

  .project-row__link {
    grid-row: 4;
    justify-self: start;
    display: inline-flex;
    align-items: center;
  }

  .project-row__name {
    font-size: clamp(1.85rem, 9vw, 2.7rem);
  }
}
</style>
