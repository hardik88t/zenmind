import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ZenMind wellness theme colors
const zenTheme = {
  dark: false,
  colors: {
    // Primary wellness colors
    primary: '#68d391',      // Calming green
    secondary: '#a0785a',    // Earth brown
    accent: '#90cdf4',       // Soft blue
    
    // Semantic colors
    success: '#48bb78',      // Achievement green
    warning: '#ed8936',      // Gentle orange
    error: '#f56565',        // Soft red
    info: '#4299e1',         // Calm blue
    
    // Surface colors
    surface: '#fefefe',      // Warm white
    background: '#f7fafc',   // Light background
    'on-surface': '#2d3748', // Dark gray text
    'on-background': '#2d3748',
    
    // Additional wellness colors
    'zen-green': '#68d391',
    'earth-brown': '#a0785a',
    'soft-blue': '#90cdf4',
    'gentle-gray': '#e2e8f0',
    'warm-white': '#fefefe'
  }
}

export default defineNuxtPlugin({
  name: 'vuetify',
  parallel: true,
  setup(nuxtApp) {
    const vuetify = createVuetify({
      components,
      directives,
      ssr: true,
      theme: {
        defaultTheme: 'zenTheme',
        themes: {
          zenTheme
        }
      },
      defaults: {
        // Global component defaults for wellness UX
        VBtn: {
          style: 'text-transform: none;',
          rounded: 'lg'
        },
        VCard: {
          elevation: 2,
          rounded: 'lg'
        },
        VTextField: {
          variant: 'outlined',
          rounded: 'lg'
        },
        VTextarea: {
          variant: 'outlined',
          rounded: 'lg'
        }
      }
    })

    nuxtApp.vueApp.use(vuetify)
  }
})
