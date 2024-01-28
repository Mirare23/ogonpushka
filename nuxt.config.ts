export default defineNuxtConfig({
  modules: ["nuxt-icon", "nuxt-lenis"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
})
