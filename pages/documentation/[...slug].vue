<script setup lang="ts">
import { ref, onMounted } from 'vue'

const route = useRoute()

const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug || ''

const fullPath = `/documentation/${slug}`
const doc = ref(null)

onMounted(async () => {
  const result = await queryCollection('documentation')
    .path(fullPath)
    .first()

  doc.value = result
})
</script>

<template>
  <div v-if="doc" class="prose dark:prose-invert max-w-none">
    <ContentRenderer :value="doc" />
  </div>
</template>
