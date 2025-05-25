<script setup>
    const { data: page } = await useAsyncData(() => queryCollection('content').path('/').first())

    useSeoMeta({
        title: page.value.title,
        ogTitle: page.value.title,
        description: page.value.description,
        ogDescription: page.value.description
    });
</script>

<template>
    <!-- Hero -->
    <SharedHero :title="page.body.hero.title" :description="page.body.hero.description" :links="page.body.hero.links" :image="page.body.hero.headerImage"/>

    <!-- Features -->
    <UPageSection :title="page.body.features.title" :description="page.body.features.description">
      <UPageGrid>
        <UPageCard v-for="(a, i) in page.body.features.items" :key="i" v-bind="a" spotlight />
      </UPageGrid>
    </UPageSection>
</template>