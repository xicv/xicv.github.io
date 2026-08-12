<script setup lang="ts">
import type { Project } from '../types'
import ProjectRow from './ProjectRow.vue'

defineProps<{
  projects: readonly Project[]
}>()
</script>

<template>
  <section class="project-index" aria-labelledby="projects-title">
    <header class="project-index__header">
      <h1 id="projects-title" class="page-title">Projects</h1>
      <p class="project-index__count">{{ projects.length }} / active</p>
      <p class="project-index__intro">
        Small tools, larger systems, and a few ongoing experiments.
        Sorted by latest code push.
      </p>
    </header>

    <ol class="project-list" aria-label="Active projects">
      <ProjectRow
        v-for="(project, index) in projects"
        :key="project.repositoryName"
        :project="project"
        :index="index"
      />
    </ol>
  </section>
</template>

<style scoped>
.project-index {
  width: min(100%, var(--site-max));
  margin-inline: auto;
  padding: clamp(3.5rem, 8vw, 8rem) var(--page-gutter) 0;
}

.project-index__header {
  max-width: 48rem;
}

.page-title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(5rem, 10vw, 9.5rem);
  font-weight: 600;
  letter-spacing: -0.075em;
  line-height: 0.86;
}

.project-index__count,
.project-index__intro {
  font-family: var(--font-mono);
}

.project-index__count {
  margin: clamp(2rem, 4vw, 3.75rem) 0 0;
  font-size: var(--text-ui);
}

.project-index__intro {
  max-width: 42ch;
  margin: 1.5rem 0 0;
  font-size: var(--text-ui);
  line-height: 1.55;
}

.project-list {
  margin: clamp(4rem, 9vw, 8rem) 0 0;
  padding: 0;
  border-top: 1px solid var(--rule-strong);
  list-style: none;
}

@media (max-width: 42rem) {
  .project-index {
    padding-top: 3rem;
  }

  .page-title {
    font-size: clamp(4.25rem, 22vw, 7rem);
  }

  .project-index__intro {
    max-width: 30ch;
  }

  .project-list {
    margin-top: 3rem;
  }
}
</style>
