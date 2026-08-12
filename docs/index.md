---
title: xicv
titleTemplate: false
description: Another boring programmer. Projects and occasional notes by xic.
footer: false
---

<script setup lang="ts">
import HomeHero from './.vitepress/theme/components/HomeHero.vue'
import { data } from './projects.data'
</script>

<HomeHero :project-count="data.projects.length" />
