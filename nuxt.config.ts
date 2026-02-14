// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Ensure consistent behavior for static hosting
  app: {
    baseURL: '/foryou/', // Matches the repository name
    buildAssetsDir: 'assets', // Avoids issues with github underscores
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    static: true
  }
})
