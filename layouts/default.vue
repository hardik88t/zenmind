<template>
  <v-app>
    <!-- Navigation Header -->
    <v-app-bar
      :elevation="2"
      color="warm-white"
      height="80"
      fixed
    >
      <v-container class="d-flex align-center">
        <!-- Logo -->
        <NuxtLink to="/" class="text-decoration-none">
          <div class="d-flex align-center">
            <v-icon
              icon="mdi-leaf"
              size="32"
              color="zen-green"
              class="mr-2"
            />
            <h1 class="zen-h3 text-zen-green mb-0">ZenMind</h1>
          </div>
        </NuxtLink>

        <v-spacer />

        <!-- Desktop Navigation -->
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            variant="text"
            class="mx-1"
            :class="{ 'text-zen-green': $route.path === item.path }"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>

        <!-- Mobile Menu Button -->
        <v-btn
          icon="mdi-menu"
          variant="text"
          class="d-md-none"
          @click="mobileDrawer = !mobileDrawer"
        />
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
      location="right"
      width="280"
    >
      <v-list>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          @click="mobileDrawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer
      color="earth-brown"
      class="text-white"
      height="auto"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
              <v-icon
                icon="mdi-leaf"
                size="24"
                class="mr-2"
              />
              <h3 class="zen-h3 mb-0">ZenMind</h3>
            </div>
            <p class="zen-body-sm mb-0">
              Find your inner peace through mindful yoga practice, meditation, and holistic wellness.
            </p>
          </v-col>
          
          <v-col cols="12" md="4">
            <h4 class="zen-h3 mb-4">Quick Links</h4>
            <v-list color="transparent" class="pa-0">
              <v-list-item
                v-for="item in navigationItems.slice(0, 4)"
                :key="item.path"
                :to="item.path"
                class="pa-0 mb-2"
                min-height="auto"
              >
                <v-list-item-title class="zen-body-sm">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          
          <v-col cols="12" md="4">
            <h4 class="zen-h3 mb-4">Contact Info</h4>
            <div class="zen-body-sm">
              <p class="mb-2">
                <v-icon icon="mdi-map-marker" size="16" class="mr-2" />
                123 Wellness Way, Mindful City
              </p>
              <p class="mb-2">
                <v-icon icon="mdi-phone" size="16" class="mr-2" />
                (555) 123-YOGA
              </p>
              <p class="mb-2">
                <v-icon icon="mdi-email" size="16" class="mr-2" />
                hello@zenmind.com
              </p>
            </div>
          </v-col>
        </v-row>
        
        <v-divider class="my-6" color="white" opacity="0.3" />
        
        <v-row align="center">
          <v-col cols="12" md="6">
            <p class="zen-body-sm mb-0">
              © {{ currentYear }} ZenMind. All rights reserved.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="text-md-right">
            <v-btn
              v-for="social in socialLinks"
              :key="social.name"
              :icon="social.icon"
              variant="text"
              size="small"
              class="mx-1"
              :href="social.url"
              target="_blank"
              :aria-label="social.name"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
const mobileDrawer = ref(false)

const navigationItems = [
  { title: 'Home', path: '/' },
  { title: 'Classes', path: '/classes' },
  { title: 'Instructors', path: '/instructors' },
  { title: 'Blog', path: '/blog' },
  { title: 'Meditation', path: '/meditation' },
  { title: 'About', path: '/about' },
  { title: 'Membership', path: '/membership' },
  { title: 'Contact', path: '/contact' }
]

const socialLinks = [
  { name: 'Facebook', icon: 'mdi-facebook', url: '#' },
  { name: 'Instagram', icon: 'mdi-instagram', url: '#' },
  { name: 'Twitter', icon: 'mdi-twitter', url: '#' },
  { name: 'YouTube', icon: 'mdi-youtube', url: '#' }
]

const currentYear = new Date().getFullYear()
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<style lang="scss" scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
  background-color: rgba(254, 254, 254, 0.95) !important;
}

.v-footer {
  margin-top: auto;
}
</style>
