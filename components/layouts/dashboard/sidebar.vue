<script setup>
const isOpen = ref(false);

const links = [[
    {
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Inbox',
        icon: 'i-lucide-inbox',
        to: '/inbox',
        badge: '4',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Customers',
        icon: 'i-lucide-users',
        to: '/customers',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Settings',
        to: '/settings',
        icon: 'i-lucide-settings',
        defaultOpen: true,
        children: [
            {
                label: 'General',
                to: '/settings',
                exact: true,
                onSelect: () => {
                open.value = false
                }
            }, {
                label: 'Members',
                to: '/settings/members',
                onSelect: () => {
                open.value = false
                }
            }, {
                label: 'Notifications',
                to: '/settings/notifications',
                onSelect: () => {
                open.value = false
                }
            }, {
                label: 'Security',
                to: '/settings/security',
                onSelect: () => {
                open.value = false
                }
            }
        ]
}], [
    {
        label: 'Feedback',
        icon: 'i-lucide-message-circle',
        to: 'https://github.com/nuxt-ui-pro/dashboard',
        target: '_blank'
    }, {
        label: 'Help & Support',
        icon: 'i-lucide-info',
        to: 'https://github.com/nuxt/ui-pro',
        target: '_blank'
    }
]];

</script>

<template>
    <UDashboardSidebar id="default" v-model:open="isOpen" collapsible resizable class="bg-elevated/25" :ui="{ footer: 'lg:border-t lg:border-default' }" >
        <template #header="{ collapsed }">
            <LayoutsDashboardLeagueMenu :collapsed="collapsed" />
        </template>
     
        <template #default="{ collapsed }">
            <UNavigationMenu :collapsed="collapsed" :items="links[0]" orientation="vertical" />
            <UNavigationMenu :collapsed="collapsed" :items="links[1]" orientation="vertical" class="mt-auto" />
        </template>

        <template #footer="{ collapsed }">
            <LayoutsDashboardUserMenu :collapsed="collapsed" />
        </template>
    </UDashboardSidebar>
</template>