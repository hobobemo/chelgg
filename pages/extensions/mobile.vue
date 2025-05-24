<script setup>
    const { data: page } = await useAsyncData(() => queryCollection('content').path('/extensions/mobile').first())

    useSeoMeta({
        title: page.value.title,
        ogTitle: page.value.title,
        description: page.value.description,
        ogDescription: page.value.description
    });
</script>

<template>
    <!-- Hero -->
    <SharedHero :title="page.body.hero.title" :description="page.body.hero.description" :image="page.body.hero.headerImage" />

    <!-- Features -->
    <UPageSection :title="page.body.features.title" :description="page.body.features.description">
      <UPageGrid>
        <UPageCard v-for="(a, i) in page.body.features.items" :key="i" v-bind="a" spotlight />
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <!-- Features -->
    <UPageSection
      id="features"
      :title="page.body.benefits.title"
      :description="page.body.benefits.headline"
      :features="page.body.benefits.items"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
    <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
    <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
    </UPageSection>

    <USeparator />

    <!-- Start Today -->
    <UPageCTA v-bind="page.body.pricing" variant="naked" class="overflow-hidden">
        <div class="absolute rounded-full dark:bg-primary blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
    </UPageCTA>
</template>