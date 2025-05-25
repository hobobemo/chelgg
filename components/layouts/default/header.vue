<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
    {
        label: 'Home',
        to: '/',
        active: route.path.startsWith('/docs')
    }, {
        label: 'Extensions',
        children: [
            {
                label: 'Web',
                to: '/extensions/web',
                description: 'The Original',
                icon: 'i-mdi-desktop-mac'
            }, {
                label: 'Discord',
                to: '/extensions/discord',
                description: 'Discord Bot',
                icon: 'i-mdi-discord'
            }, {
                label: 'Mobile',
                to: '/extensions/mobile',
                description: 'Mobile Application',
                icon: 'i-mdi-cellphone-android'
            },
        ]
    }, {
        label: 'Leagues',
        to: '/leagues'
    }, {
        label: 'Documentation',
        to: '/documentation'
    },
]);
</script>

<template>
    <UHeader>
        <!-- Logo -->
        <template #left>
            <NuxtLink to="/">
                CHEL.gg
            </NuxtLink>
        </template>

        <!-- Menu -->
        <UNavigationMenu :items="items" variant="link" />

        <!-- Right Menu -->
        <template #right>
            <UButton icon="i-lucide-log-in" color="neutral" variant="ghost" to="/" class="lg:hidden" />

            <UButton label="Sign in" color="neutral" variant="outline" to="/" class="hidden lg:inline-flex" />

            <UButton label="Sign up" color="neutral" trailing-icon="i-lucide-arrow-right" class="hidden lg:inline-flex"
                to="/" />
        </template>
    </UHeader>
</template>