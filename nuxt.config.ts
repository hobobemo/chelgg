import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/content',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@vueuse/nuxt',
    '@nuxt/ui-pro',
    '@nuxthub/core',
    '@nuxtjs/tailwindcss',
  ],
  ui: {
    theme: {
      extend: {
        typography: true
      }
    }
  },
  runtimeConfig: { 
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
      stripeSecret: process.env.NUXT_STRIPE_SECRET,
      discordClient: process.env.NUXT_DISCORD_CLIENT, 
      discordSecret: process.env.NUXT_DISCORD_SECRET,
    },
  },
})