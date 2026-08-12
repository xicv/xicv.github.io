---
title: Blog
description: Occasional notes by xic.
---

<script setup lang="ts">
import BlogIndex from '../.vitepress/theme/components/BlogIndex.vue'
import { data as posts } from './posts.data'
</script>

<BlogIndex :posts="posts" />
