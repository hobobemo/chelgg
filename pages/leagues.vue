<script setup>
let items = ref([]);

onMounted(async () => {
    items.value = await getData('/leagues/active');
});

</script>

<template>
    <UPageSection
      title="Leagues"
      description="League Description"
    >
      <UPageColumns class="xl:columns-4">
        <UPageCard v-for="(a, i) in items" :key="i" variant="subtle" :title="a.name" :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }" />
      </UPageColumns>
    </UPageSection>
</template>