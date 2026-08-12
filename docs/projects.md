---
title: Projects
description: Active open-source projects by xic, ordered by the latest code push.
---

<script setup lang="ts">
import ProjectIndex from './.vitepress/theme/components/ProjectIndex.vue'
import { data } from './projects.data'
</script>

<ProjectIndex :projects="data.projects" />
