<script setup lang="ts">
const route = useRoute()

const slugArray = Array.isArray(route.params.slug)
  ? route.params.slug
  : [route.params.slug]

const slugPath = `/documentation${slugArray.length ? '/' + slugArray.join('/') : ''}`

const asyncDoc = await useAsyncData(`doc-${slugPath}`, () =>
  queryContent(slugPath).findOne()
)

const doc = asyncDoc.data
</script>

<template>
  <div v-if="doc">
    <h1>{{ doc.title }}</h1>
    <div v-html="doc.body" />
  </div>
  <div v-else>
    <h1>404 - Page not found</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
