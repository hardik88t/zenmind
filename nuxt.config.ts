// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content'
  ],

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/scss/main.scss'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            // ZenMind SCSS variables
            $zen-green: #68d391;
            $earth-brown: #a0785a;
            $soft-blue: #90cdf4;
            $warm-white: #fefefe;
            $gentle-gray: #e2e8f0;
            $success: #48bb78;
            $warning: #ed8936;
            $error: #f56565;
            $info: #4299e1;
          `
        }
      }
    }
  },

  app: {
    head: {
      title: 'ZenMind - Yoga & Wellness Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'ZenMind yoga & wellness studio - Find your inner peace through mindful yoga practice, meditation, and holistic wellness.'
        },
        { name: 'theme-color', content: '#68d391' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})