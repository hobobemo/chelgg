<script setup>
const { data: docs } = await useAsyncData(() =>
  queryContent('/docs').only(['_path', 'title']).find()
)
</script>

<template>
  <div>
    <h1>Documentation Index</h1>
    <ul>
      <li v-for="doc in docs" :key="doc._path">
        <NuxtLink :to="doc._path">{{ doc.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
