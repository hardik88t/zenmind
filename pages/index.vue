<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container class="d-flex flex-column justify-center align-center text-center">
        <h1 class="zen-h1 text-white mb-4">Find Your Inner Peace</h1>
        <p class="zen-body-lg text-white mb-8 max-width-500">
          Welcome to ZenMind, where mindfulness meets movement. Discover yoga, meditation, and wellness practices for a balanced life.
        </p>
        <div class="d-flex flex-wrap justify-center">
          <v-btn
            to="/classes"
            size="large"
            color="zen-green"
            class="ma-2"
          >
            Explore Classes
          </v-btn>
          <v-btn
            to="/meditation"
            size="large"
            variant="outlined"
            color="white"
            class="ma-2"
          >
            Try Meditation
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Featured Classes Section -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Featured Classes</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Discover our most popular yoga and wellness classes, designed for all experience levels.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(yogaClass, index) in featuredClasses"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <BreathingElement :duration="6">
              <ZenCard
                :title="yogaClass.title"
                :image="yogaClass.image"
                class="h-100"
              >
                <div class="mb-4">
                  <v-chip
                    :color="getDifficultyColor(yogaClass.difficulty)"
                    size="small"
                    class="mr-2"
                  >
                    {{ yogaClass.difficulty }}
                  </v-chip>
                  <span class="text-text-muted">{{ yogaClass.duration }} min</span>
                </div>
                <p class="zen-body">{{ yogaClass.description }}</p>

                <template #actions>
                  <v-btn
                    variant="text"
                    color="zen-green"
                    to="/classes"
                  >
                    Learn More
                  </v-btn>
                </template>
              </ZenCard>
            </BreathingElement>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-btn
            to="/classes"
            color="zen-green"
            size="large"
          >
            View All Classes
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Wellness Philosophy Section -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-4">Our Wellness Philosophy</h2>
            <p class="zen-body mb-4">
              At ZenMind, we believe in a holistic approach to wellness that nurtures the mind, body, and spirit. Our practices are rooted in ancient wisdom and adapted for modern life.
            </p>
            <p class="zen-body mb-6">
              Through mindful movement, meditation, and community connection, we create a space for you to discover your inner strength and peace.
            </p>
            <v-btn
              to="/about"
              color="earth-brown"
              size="large"
            >
              About Our Studio
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://placehold.co/600x400/e2e8f0/2d3748?text=Wellness+Philosophy"
              class="rounded-lg"
              height="400"
              cover
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">What Our Community Says</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Hear from our members about how ZenMind has transformed their wellness journey.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(testimonial, index) in testimonials"
            :key="index"
            cols="12"
            md="4"
          >
            <ZenCard class="h-100">
              <div class="text-center">
                <div class="d-flex justify-center mb-4">
                  <v-rating
                    :model-value="5"
                    color="zen-green"
                    density="compact"
                    readonly
                  />
                </div>
                <p class="zen-body mb-6">
                  "{{ testimonial.quote }}"
                </p>
                <div class="d-flex align-center justify-center">
                  <v-avatar size="48" class="mr-3">
                    <v-img :src="testimonial.avatar" />
                  </v-avatar>
                  <div>
                    <p class="zen-body-lg mb-0">{{ testimonial.name }}</p>
                    <p class="zen-body-sm text-text-muted">{{ testimonial.title }}</p>
                  </div>
                </div>
              </div>
            </ZenCard>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container class="text-center">
        <h2 class="zen-h2 text-white mb-4">Begin Your Wellness Journey Today</h2>
        <p class="zen-body-lg text-white mb-8 max-width-700 mx-auto">
          Join our community and discover the transformative power of mindful movement and meditation.
        </p>
        <v-btn
          to="/membership"
          size="x-large"
          color="zen-green"
          class="px-8"
        >
          Become a Member
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sample data for featured classes
const featuredClasses = [
  {
    title: 'Hatha Yoga',
    difficulty: 'Beginner',
    duration: 60,
    description: 'A gentle introduction to the most basic yoga postures. Perfect for beginners and those looking to refine their practice.',
    image: 'https://placehold.co/600x400/68d391/ffffff?text=Hatha+Yoga'
  },
  {
    title: 'Vinyasa Flow',
    difficulty: 'Intermediate',
    duration: 75,
    description: 'A dynamic sequence of flowing postures that synchronizes breath with movement for a revitalizing practice.',
    image: 'https://placehold.co/600x400/90cdf4/ffffff?text=Vinyasa+Flow'
  },
  {
    title: 'Meditation Basics',
    difficulty: 'All Levels',
    duration: 45,
    description: 'Learn fundamental meditation techniques to calm the mind, reduce stress, and increase mindfulness in daily life.',
    image: 'https://placehold.co/600x400/a0785a/ffffff?text=Meditation'
  }
]

// Sample data for testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Member since 2022',
    quote: 'ZenMind has completely transformed my approach to wellness. The instructors are knowledgeable and supportive, creating a truly nurturing environment.',
    avatar: 'https://placehold.co/100/e2e8f0/2d3748?text=SJ'
  },
  {
    name: 'Michael Chen',
    title: 'Member since 2021',
    quote: 'The meditation classes have helped me manage stress and find balance in my busy life. I\'ve never felt more centered and focused.',
    avatar: 'https://placehold.co/100/e2e8f0/2d3748?text=MC'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Member since 2023',
    quote: 'As a beginner, I was intimidated to start yoga, but the welcoming community at ZenMind made me feel right at home from day one.',
    avatar: 'https://placehold.co/100/e2e8f0/2d3748?text=ER'
  }
]

// Helper function to get color based on difficulty
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'success'
    case 'intermediate':
      return 'warning'
    case 'advanced':
      return 'error'
    default:
      return 'info'
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://placehold.co/1920x1080/68d391/ffffff?text=ZenMind+Hero') no-repeat center center;
  background-size: cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px; /* Offset for fixed header */
  padding-top: 80px;
}

.cta-section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://placehold.co/1920x1080/a0785a/ffffff?text=ZenMind+CTA') no-repeat center center;
  background-size: cover;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.max-width-500 {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.max-width-700 {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.bg-gentle-gray {
  background-color: #f7fafc;
}
</style>
