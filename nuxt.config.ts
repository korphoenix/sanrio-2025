// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],


  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
    configPath: 'tailwind.config',
    exposeConfig: false,
    // exposeLevel: 2,
    config: {},
    // injectPosition: 'first',
    viewer: false,
  },
})
