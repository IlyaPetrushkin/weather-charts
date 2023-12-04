// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: [100, 300, 400, 700],
        }
    }],
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
})
