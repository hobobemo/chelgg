<script setup>
    definePageMeta({ layout: 'dashboard' });

    const items = [[
        {
            label: 'New mail',
            icon: 'i-lucide-send',
            to: '/inbox'
        }, {
            label: 'New customer',
            icon: 'i-lucide-user-plus',
            to: '/customers'
        }
    ]];
</script>

<template>
  <UDashboardPanel id="home">
    <template #header>
      <UDashboardNavbar title="Home" :ui="{ right: 'gap-3' }">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #right>
          <UDropdownMenu :items="items">
            <UButton icon="i-lucide-plus" size="md" class="rounded-full" />
          </UDropdownMenu>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>

        </template>
      </UDashboardToolbar>
    </template>

    <template #body>

    </template>
  </UDashboardPanel>
</template>