<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <v-container class="d-flex flex-column justify-center align-center text-center hero-content">
        <div class="hero-badge mb-6">
          <v-chip
            color="zen-green"
            variant="elevated"
            size="large"
            class="px-6 py-2"
          >
            <v-icon start>mdi-leaf</v-icon>
            Wellness & Mindfulness
          </v-chip>
        </div>

        <h1 class="hero-title text-white mb-6">
          Find Your
          <span class="text-zen-green">Inner Peace</span>
        </h1>

        <p class="hero-subtitle text-white mb-8">
          Welcome to ZenMind, where mindfulness meets movement.<br>
          Discover transformative yoga, meditation, and wellness practices<br>
          designed for a balanced and harmonious life.
        </p>

        <div class="hero-actions d-flex flex-wrap justify-center gap-4">
          <v-btn
            color="zen-green"
            size="x-large"
            class="px-8 py-3"
            to="/classes"
            elevation="8"
            rounded="xl"
          >
            <v-icon start>mdi-yoga</v-icon>
            Explore Classes
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="x-large"
            class="px-8 py-3"
            to="/meditation"
            rounded="xl"
          >
            <v-icon start>mdi-meditation</v-icon>
            Try Meditation
          </v-btn>
        </div>

        <!-- Floating Elements -->
        <div class="hero-floating-elements">
          <div class="floating-element floating-1">
            <v-icon color="zen-green" size="24">mdi-leaf</v-icon>
          </div>
          <div class="floating-element floating-2">
            <v-icon color="soft-blue" size="20">mdi-flower</v-icon>
          </div>
          <div class="floating-element floating-3">
            <v-icon color="zen-green" size="18">mdi-spa</v-icon>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Featured Classes Section -->
    <section class="zen-section featured-classes-section">
      <v-container>
        <div class="text-center mb-16">
          <v-chip
            color="zen-green"
            variant="outlined"
            size="large"
            class="mb-6"
          >
            <v-icon start>mdi-star</v-icon>
            Featured Classes
          </v-chip>
          <h2 class="section-title mb-6">
            Transform Your Practice
          </h2>
          <p class="section-subtitle max-width-700 mx-auto">
            Discover our most popular yoga and wellness classes, carefully designed
            for all experience levels. Each class offers a unique journey toward
            mindfulness and physical well-being.
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
    <section class="zen-section philosophy-section bg-gentle-gray">
      <v-container>
        <v-row align="center" class="min-height-600">
          <v-col cols="12" md="6" class="philosophy-content">
            <v-chip
              color="earth-brown"
              variant="outlined"
              size="large"
              class="mb-6"
            >
              <v-icon start>mdi-heart</v-icon>
              Our Philosophy
            </v-chip>

            <h2 class="section-title mb-6">
              Holistic Wellness for
              <span class="text-earth-brown">Mind, Body & Spirit</span>
            </h2>

            <div class="philosophy-points mb-8">
              <div class="philosophy-point mb-4">
                <v-icon color="zen-green" class="mr-3">mdi-leaf</v-icon>
                <div>
                  <h4 class="zen-h4 mb-2">Ancient Wisdom, Modern Practice</h4>
                  <p class="zen-body text-text-muted">
                    Our practices are rooted in ancient wisdom and thoughtfully adapted for contemporary life.
                  </p>
                </div>
              </div>

              <div class="philosophy-point mb-4">
                <v-icon color="zen-green" class="mr-3">mdi-meditation</v-icon>
                <div>
                  <h4 class="zen-h4 mb-2">Mindful Movement</h4>
                  <p class="zen-body text-text-muted">
                    Through conscious movement and breath, we create harmony between body and mind.
                  </p>
                </div>
              </div>

              <div class="philosophy-point mb-4">
                <v-icon color="zen-green" class="mr-3">mdi-account-group</v-icon>
                <div>
                  <h4 class="zen-h4 mb-2">Community Connection</h4>
                  <p class="zen-body text-text-muted">
                    We foster a supportive community where everyone can discover their inner strength.
                  </p>
                </div>
              </div>
            </div>

            <v-btn
              color="earth-brown"
              size="x-large"
              to="/about"
              class="px-8"
              rounded="xl"
            >
              <v-icon start>mdi-information</v-icon>
              About Our Studio
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="philosophy-image">
            <div class="image-container">
              <v-img
                src="https://placehold.co/600x500/68d391/ffffff?text=Wellness+Philosophy"
                alt="Wellness Philosophy"
                height="500"
                class="rounded-xl philosophy-img"
                cover
              />
              <div class="image-overlay">
                <v-icon color="white" size="64">mdi-spa</v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section class="zen-section testimonials-section">
      <v-container>
        <div class="text-center mb-16">
          <v-chip
            color="soft-blue"
            variant="outlined"
            size="large"
            class="mb-6"
          >
            <v-icon start>mdi-account-heart</v-icon>
            Community Stories
          </v-chip>
          <h2 class="section-title mb-6">
            Transformative
            <span class="text-soft-blue">Wellness Journeys</span>
          </h2>
          <p class="section-subtitle max-width-700 mx-auto">
            Hear inspiring stories from our community members about how ZenMind
            has transformed their approach to wellness, mindfulness, and inner peace.
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
      <div class="cta-overlay"></div>
      <v-container class="text-center cta-content">
        <div class="cta-badge mb-6">
          <v-chip
            color="zen-green"
            variant="elevated"
            size="large"
            class="px-6 py-2"
          >
            <v-icon start>mdi-rocket-launch</v-icon>
            Start Your Journey
          </v-chip>
        </div>

        <h2 class="cta-title text-white mb-6">
          Begin Your Wellness Journey
          <span class="text-zen-green">Today</span>
        </h2>

        <p class="cta-subtitle text-white mb-10 max-width-700 mx-auto">
          Join our thriving community and discover the transformative power of mindful movement,
          meditation, and holistic wellness practices. Your journey to inner peace starts here.
        </p>

        <div class="cta-actions d-flex flex-wrap justify-center gap-4">
          <v-btn
            color="zen-green"
            size="x-large"
            to="/membership"
            class="px-10 py-4"
            elevation="8"
            rounded="xl"
          >
            <v-icon start>mdi-account-plus</v-icon>
            Become a Member
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="x-large"
            to="/classes"
            class="px-10 py-4"
            rounded="xl"
          >
            <v-icon start>mdi-calendar</v-icon>
            Try a Free Class
          </v-btn>
        </div>

        <!-- Stats Section -->
        <div class="cta-stats mt-16">
          <v-row justify="center">
            <v-col cols="6" md="3" class="text-center">
              <div class="stat-number text-zen-green mb-2">500+</div>
              <div class="stat-label text-white">Happy Members</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="stat-number text-zen-green mb-2">50+</div>
              <div class="stat-label text-white">Weekly Classes</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="stat-number text-zen-green mb-2">10+</div>
              <div class="stat-label text-white">Expert Instructors</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="stat-number text-zen-green mb-2">5</div>
              <div class="stat-label text-white">Years of Excellence</div>
            </v-col>
          </v-row>
        </div>
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
  min-height: 100vh;
  background: linear-gradient(135deg, #68d391 0%, #4299e1 50%, #a0785a 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: -80px;
  padding-top: 80px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-badge {
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 700px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.hero-actions {
  animation: fadeInUp 1s ease-out 0.8s both;
}

.hero-floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-element {
  position: absolute;
  animation: float 6s ease-in-out infinite;

  &.floating-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &.floating-2 {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
  }

  &.floating-3 {
    bottom: 30%;
    left: 20%;
    animation-delay: 4s;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.cta-section {
  background: linear-gradient(135deg, #a0785a 0%, #68d391 100%);
  padding: 100px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 100px 100px;
    animation: float 20s linear infinite;
  }
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

// Enhanced section styling
.featured-classes-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
}

.philosophy-section {
  padding: 120px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" fill="none" stroke="rgba(104,211,145,0.1)" stroke-width="1"/></svg>');
    background-size: 200px 200px;
    opacity: 0.5;
  }
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-subtitle {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #4a5568;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.philosophy-content {
  position: relative;
  z-index: 2;
}

.philosophy-point {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(104, 211, 145, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 8px 32px rgba(104, 211, 145, 0.2);
  }
}

.philosophy-image {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 24px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(104, 211, 145, 0.1), transparent);
    animation: shimmer 3s ease-in-out infinite;
    z-index: 1;
  }
}

.philosophy-img {
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(104, 211, 145, 0.9);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.min-height-600 {
  min-height: 600px;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

// Testimonials section styling
.testimonials-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #f7fafc 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="rgba(144,205,244,0.1)"/><circle cx="75" cy="75" r="1.5" fill="rgba(144,205,244,0.1)"/><circle cx="50" cy="10" r="1" fill="rgba(144,205,244,0.1)"/></svg>');
    background-size: 150px 150px;
    animation: float 25s linear infinite;
  }
}

// Enhanced CTA section
.cta-section {
  background: linear-gradient(135deg, #a0785a 0%, #68d391 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 100px 100px;
    animation: float 20s linear infinite;
  }
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-badge {
  animation: fadeInUp 1s ease-out 0.2s both;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
}

.cta-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.cta-actions {
  animation: fadeInUp 1s ease-out 0.8s both;
}

.cta-stats {
  animation: fadeInUp 1s ease-out 1s both;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

// Enhanced card hover effects
:deep(.zen-card-hover) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}

// Breathing animation enhancement
:deep(.breathing-element) {
  &.breathing-active {
    animation: breathe 4s ease-in-out infinite;
  }
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
</style>
