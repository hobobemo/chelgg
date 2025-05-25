<script setup>
const route = useRoute()

// Turn ['getting-started'] into '/documentation/getting-started'
const slugArray = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
const slugPath = `/documentation${slugArray.length ? '/' + slugArray.join('/') : ''}`

const { data: docs } = await useAsyncData(() => queryCollection('content').path(slugPath).first())

console.log(docs);
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
