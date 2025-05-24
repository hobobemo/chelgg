<script setup lang="ts">
const { data: pages } = await useAsyncData(() => queryCollection('docs').path('/').first())

</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Documentation" description="Explore all topics" />

      <UPageBody>
        <ul v-if="pages?.length" class="space-y-2">
          <li v-for="page in pages" :key="page._path">
            <NuxtLink :to="page._path" class="text-primary hover:underline">
              {{ page.title || page._file }}
            </NuxtLink>
          </li>
        </ul>
        <p v-else>No documentation pages found.</p>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
