// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],
  tailwindcss: {
    cssPath: [
      '~/assets/css/main.css',
      {
        injectPosition: 'last',
      },
    ],
    configPath: 'tailwind.config.js',
    viewer: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    baseURL: '/penguin-that-cant-swim/',
    buildAssetsDir: '/static/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      titleTemplate: '泳げないペンギン',
      meta: [
        { name: 'robots', content: 'noindex, nofollow'},
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: '' },
      ],
      link:[],
      script: [],
    }
  },
})
