<script setup>

const props = defineProps({
  collapsed: Boolean
})

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

const items = computed(() => ([[
        {
            type: 'label',
            label: user.value.name,
            avatar: user.value.avatar
        }
    ], [
        {
            label: 'Profile',
            icon: 'i-lucide-user'
        }, {
            label: 'Billing',
            icon: 'i-lucide-credit-card'
        }, {
            label: 'Settings',
            icon: 'i-lucide-settings',
            to: '/settings'
        }
    ], [
        {
            label: 'Documentation',
            icon: 'i-lucide-book-open',
            target: '_blank'
        }, {
            label: 'GitHub repository',
            icon: 'i-simple-icons-github',
            target: '_blank'
        }, {
            label: 'Upgrade to Pro',
            icon: 'i-lucide-rocket',
            target: '_blank'
        }
    ], [
        {
            label: 'Log out',
            icon: 'i-lucide-log-out'
        }
    ]
]));
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: collapsed ? 'w-48' : 'w-(--reka-dropdown-menu-trigger-width)' }"
  >
    <UButton
      v-bind="{
        ...user,
        label: collapsed ? undefined : user?.name,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-elevated"
      :ui="{
        trailingIcon: 'text-dimmed'
      }"
    />
  </UDropdownMenu>
</template>