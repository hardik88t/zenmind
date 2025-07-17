<template>
  <v-app>
    <!-- Navigation Header -->
    <v-app-bar
      :elevation="scrolled ? 8 : 2"
      color="white"
      height="80"
      fixed
      class="zen-header"
      :class="{ 'header-scrolled': scrolled }"
    >
      <v-container class="d-flex align-center">
        <!-- Logo -->
        <NuxtLink to="/" class="text-decoration-none logo-container">
          <div class="d-flex align-center">
            <div class="logo-icon-wrapper">
              <v-icon
                icon="mdi-spa"
                size="36"
                color="zen-green"
                class="logo-icon"
              />
            </div>
            <div class="logo-text ml-3">
              <h1 class="zen-logo text-zen-green mb-0">ZenMind</h1>
              <p class="logo-tagline text-text-muted mb-0">Wellness Studio</p>
            </div>
          </div>
        </NuxtLink>

        <v-spacer />

        <!-- Desktop Navigation -->
        <nav class="d-none d-lg-flex align-center">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link mx-3"
            :class="{ 'nav-link--active': $route.path === item.path }"
          >
            <v-icon :icon="item.icon" size="18" class="mr-1" />
            {{ item.title }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <v-btn
          color="zen-green"
          variant="elevated"
          class="d-none d-lg-flex ml-6 cta-button"
          to="/membership"
          rounded="xl"
          elevation="4"
        >
          <v-icon start>mdi-account-plus</v-icon>
          Join Now
        </v-btn>

        <!-- Mobile Menu Button -->
        <v-btn
          icon
          variant="text"
          class="d-lg-none mobile-menu-btn"
          @click="mobileDrawer = !mobileDrawer"
          :color="mobileDrawer ? 'zen-green' : 'default'"
        >
          <v-icon>{{ mobileDrawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
      location="right"
      width="320"
      class="mobile-nav"
      elevation="16"
    >
      <div class="mobile-nav-header pa-6">
        <div class="d-flex align-center mb-4">
          <v-icon icon="mdi-spa" size="32" color="zen-green" class="mr-3" />
          <div>
            <h2 class="zen-h4 text-zen-green mb-0">ZenMind</h2>
            <p class="text-text-muted mb-0">Wellness Studio</p>
          </div>
        </div>
        <v-divider />
      </div>

      <v-list class="mobile-nav-list">
        <v-list-item
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          @click="mobileDrawer = false"
          class="mobile-nav-item"
          :class="{ 'mobile-nav-item--active': $route.path === item.path }"
          rounded="xl"
        >
          <template #prepend>
            <v-icon :icon="item.icon" size="20" />
          </template>
          <v-list-item-title class="mobile-nav-title">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="mobile-nav-footer pa-6">
        <v-btn
          color="zen-green"
          variant="elevated"
          block
          size="large"
          to="/membership"
          @click="mobileDrawer = false"
          rounded="xl"
          elevation="4"
        >
          <v-icon start>mdi-account-plus</v-icon>
          Join Now
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>

    <!-- Footer -->
    <footer class="zen-footer">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <v-container>
          <v-row>
            <!-- Brand Section -->
            <v-col cols="12" lg="4" class="footer-brand">
              <div class="brand-content">
                <div class="d-flex align-center mb-6">
                  <div class="footer-logo-icon">
                    <v-icon icon="mdi-spa" size="40" color="zen-green" />
                  </div>
                  <div class="ml-4">
                    <h3 class="footer-brand-title text-white mb-1">ZenMind</h3>
                    <p class="footer-brand-subtitle text-zen-green mb-0">Wellness Studio</p>
                  </div>
                </div>
                <p class="footer-description text-white mb-6">
                  Transform your life through mindful yoga practice, meditation, and holistic wellness.
                  Join our community and discover your path to inner peace and physical vitality.
                </p>

                <!-- Newsletter Signup -->
                <div class="newsletter-signup">
                  <h4 class="footer-section-title text-white mb-3">Stay Connected</h4>
                  <div class="d-flex">
                    <v-text-field
                      placeholder="Enter your email"
                      variant="outlined"
                      density="compact"
                      hide-details
                      class="newsletter-input"
                      color="zen-green"
                    />
                    <v-btn
                      color="zen-green"
                      variant="elevated"
                      class="ml-2"
                      icon
                      elevation="4"
                    >
                      <v-icon>mdi-send</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- Quick Links -->
            <v-col cols="12" md="6" lg="2" class="footer-links">
              <h4 class="footer-section-title text-white mb-4">Quick Links</h4>
              <v-list color="transparent" class="pa-0">
                <v-list-item
                  v-for="item in navigationItems.slice(0, 4)"
                  :key="item.path"
                  :to="item.path"
                  class="footer-link-item pa-0 mb-2"
                  min-height="auto"
                >
                  <template #prepend>
                    <v-icon :icon="item.icon" size="16" class="mr-3" color="zen-green" />
                  </template>
                  <v-list-item-title class="footer-link-text">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Services -->
            <v-col cols="12" md="6" lg="2" class="footer-links">
              <h4 class="footer-section-title text-white mb-4">Services</h4>
              <v-list color="transparent" class="pa-0">
                <v-list-item
                  v-for="service in services"
                  :key="service.name"
                  class="footer-link-item pa-0 mb-2"
                  min-height="auto"
                >
                  <template #prepend>
                    <v-icon :icon="service.icon" size="16" class="mr-3" color="zen-green" />
                  </template>
                  <v-list-item-title class="footer-link-text">
                    {{ service.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Contact & Social -->
            <v-col cols="12" lg="4" class="footer-contact">
              <h4 class="footer-section-title text-white mb-4">Get In Touch</h4>

              <!-- Contact Info -->
              <div class="contact-info mb-6">
                <div class="contact-item d-flex align-center mb-3">
                  <div class="contact-icon">
                    <v-icon icon="mdi-map-marker" size="20" color="zen-green" />
                  </div>
                  <div class="contact-text ml-3">
                    <p class="contact-label text-zen-green mb-0">Address</p>
                    <p class="contact-value text-white mb-0">123 Wellness Way, Zen City, ZC 12345</p>
                  </div>
                </div>

                <div class="contact-item d-flex align-center mb-3">
                  <div class="contact-icon">
                    <v-icon icon="mdi-phone" size="20" color="zen-green" />
                  </div>
                  <div class="contact-text ml-3">
                    <p class="contact-label text-zen-green mb-0">Phone</p>
                    <p class="contact-value text-white mb-0">(555) 123-YOGA</p>
                  </div>
                </div>

                <div class="contact-item d-flex align-center mb-3">
                  <div class="contact-icon">
                    <v-icon icon="mdi-email" size="20" color="zen-green" />
                  </div>
                  <div class="contact-text ml-3">
                    <p class="contact-label text-zen-green mb-0">Email</p>
                    <p class="contact-value text-white mb-0">hello@zenmind.com</p>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="social-section">
                <h5 class="social-title text-white mb-3">Follow Us</h5>
                <div class="d-flex social-links">
                  <v-btn
                    v-for="social in socialLinks"
                    :key="social.name"
                    :icon="social.icon"
                    variant="outlined"
                    color="zen-green"
                    size="large"
                    class="mr-3 social-btn"
                    :aria-label="social.name"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6">
              <p class="footer-copyright text-white mb-0">
                © {{ currentYear }} ZenMind Wellness Studio. All rights reserved.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="text-md-right">
              <div class="footer-legal-links">
                <NuxtLink to="/privacy" class="footer-legal-link text-zen-green mr-4">
                  Privacy Policy
                </NuxtLink>
                <NuxtLink to="/terms" class="footer-legal-link text-zen-green mr-4">
                  Terms of Service
                </NuxtLink>
                <NuxtLink to="/accessibility" class="footer-legal-link text-zen-green">
                  Accessibility
                </NuxtLink>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
const mobileDrawer = ref(false)

const navigationItems = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'Classes', path: '/classes', icon: 'mdi-yoga' },
  { title: 'Instructors', path: '/instructors', icon: 'mdi-account-group' },
  { title: 'Blog', path: '/blog', icon: 'mdi-post' },
  { title: 'Meditation', path: '/meditation', icon: 'mdi-meditation' },
  { title: 'About', path: '/about', icon: 'mdi-information' },
  { title: 'Membership', path: '/membership', icon: 'mdi-card-account-details' },
  { title: 'Contact', path: '/contact', icon: 'mdi-phone' }
]

// Scroll detection for header styling
const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Services data for footer
const services = [
  { name: 'Hatha Yoga', icon: 'mdi-yoga' },
  { name: 'Vinyasa Flow', icon: 'mdi-meditation' },
  { name: 'Meditation', icon: 'mdi-spa' },
  { name: 'Wellness Coaching', icon: 'mdi-heart' }
]

// Social media links
const socialLinks = [
  { name: 'Facebook', icon: 'mdi-facebook', url: '#' },
  { name: 'Instagram', icon: 'mdi-instagram', url: '#' },
  { name: 'Twitter', icon: 'mdi-twitter', url: '#' },
  { name: 'YouTube', icon: 'mdi-youtube', url: '#' }
]

// Current year for copyright
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
// Enhanced Header Styles
.zen-header {
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(104, 211, 145, 0.1);

  &.header-scrolled {
    background: rgba(255, 255, 255, 0.95) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.logo-container {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.logo-icon-wrapper {
  background: linear-gradient(135deg, #68d391, #4299e1);
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(104, 211, 145, 0.3);
}

.logo-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.zen-logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo-tagline {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.8;
}

// Enhanced Navigation Links
.nav-link {
  position: relative;
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #68d391, #4299e1);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #68d391;
    background: rgba(104, 211, 145, 0.1);
    transform: translateY(-2px);

    &::before {
      width: 80%;
    }
  }

  &--active {
    color: #68d391;
    background: rgba(104, 211, 145, 0.15);
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(104, 211, 145, 0.2);

    &::before {
      width: 100%;
    }
  }
}

.cta-button {
  box-shadow: 0 4px 16px rgba(104, 211, 145, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(104, 211, 145, 0.5);
  }
}

.mobile-menu-btn {
  transition: all 0.3s ease;

  &:hover {
    background: rgba(104, 211, 145, 0.1);
  }
}

// Enhanced Mobile Navigation
.mobile-nav {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
}

.mobile-nav-header {
  background: rgba(104, 211, 145, 0.1);
  border-bottom: 1px solid rgba(104, 211, 145, 0.2);
}

.mobile-nav-list {
  padding: 20px;
}

.mobile-nav-item {
  margin-bottom: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(104, 211, 145, 0.1);
    transform: translateX(8px);
  }

  &--active {
    background: rgba(104, 211, 145, 0.2);
    border-left: 4px solid #68d391;

    .mobile-nav-title {
      color: #68d391;
      font-weight: 600;
    }
  }
}

.mobile-nav-title {
  color: #e2e8f0;
  font-weight: 500;
}

.mobile-nav-footer {
  border-top: 1px solid rgba(104, 211, 145, 0.2);
  background: rgba(104, 211, 145, 0.05);
}

// Enhanced Footer Styles
.zen-footer {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(104,211,145,0.1)"/><circle cx="80" cy="40" r="0.5" fill="rgba(104,211,145,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(104,211,145,0.1)"/></svg>');
    background-size: 200px 200px;
    animation: float 30s linear infinite;
  }
}

.footer-main {
  padding: 80px 0 40px;
  position: relative;
  z-index: 2;
}

.footer-brand-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.footer-brand-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
}

.footer-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #68d391, #4299e1);
  }
}

.newsletter-input {
  :deep(.v-field) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;

    .v-field__input {
      color: white;
    }

    .v-field__outline {
      color: rgba(104, 211, 145, 0.5);
    }
  }

  :deep(.v-field--focused .v-field__outline) {
    color: #68d391;
  }
}

.footer-link-item {
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    background: rgba(104, 211, 145, 0.1);
    transform: translateX(8px);
  }
}

.footer-link-text {
  color: #e2e8f0;
  font-weight: 400;
  transition: color 0.3s ease;

  .footer-link-item:hover & {
    color: #68d391;
  }
}

.contact-item {
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(104, 211, 145, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(104, 211, 145, 0.1);
    transform: translateY(-2px);
  }
}

.contact-icon {
  background: rgba(104, 211, 145, 0.2);
  border-radius: 8px;
  padding: 8px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 400;
}

.social-btn {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(104, 211, 145, 0.3);
  }
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  border-top: 1px solid rgba(104, 211, 145, 0.2);
  position: relative;
  z-index: 2;
}

.footer-copyright {
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-legal-link {
  color: #68d391;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
    text-decoration: underline;
  }
}

@keyframes float {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-200px) translateY(-200px);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .footer-main {
    padding: 60px 0 30px;
  }

  .footer-brand-title {
    font-size: 1.5rem;
  }

  .footer-section-title {
    font-size: 1.1rem;
  }

  .contact-item {
    margin-bottom: 16px;
  }

  .social-links {
    justify-content: center;
    margin-top: 20px;
  }

  .footer-legal-links {
    text-align: center;
    margin-top: 16px;
  }
}

// Additional global styles
.v-app-bar {
  backdrop-filter: blur(10px);
  background-color: rgba(254, 254, 254, 0.95) !important;
}

.v-footer {
  margin-top: auto;
}
</style>
