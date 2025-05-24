import { useUserStore } from '@/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
    const user = useUserStore();
    const link = `https://discord.com/oauth2/authorize?client_id=${config.public.discordClient}&response_type=code&redirect_uri=${encodeURIComponent(config.public.BASE_URL + '/auth/user')}&scope=identify+guilds+email+connections`;

    if (!user.isAuth) {
      return navigateTo(link, { external: true })
    }
  
    // If you want to check for roles:
    if (to.meta.requiresAdmin && user.getLevel !== 10) {
      return navigateTo('/not-authorized')
    }
  })
  