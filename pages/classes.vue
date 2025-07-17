<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">Yoga Classes</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Discover our diverse range of yoga classes designed for all levels and preferences. From gentle Hatha to dynamic Vinyasa, find your perfect practice.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Class Schedule -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="zen-h2 mb-4">Class Schedule</h2>
          <p class="zen-body">Interactive class scheduling and booking coming soon!</p>
        </div>

        <!-- Placeholder for class schedule -->
        <v-card class="zen-card text-center pa-8">
          <v-icon icon="mdi-calendar" size="64" color="zen-green" class="mb-4" />
          <h3 class="zen-h3 mb-4">Interactive Schedule</h3>
          <p class="zen-body mb-6">
            Our interactive class schedule with real-time availability and booking will be available soon.
          </p>
          <v-btn color="zen-green" size="large">
            View Schedule (Coming Soon)
          </v-btn>
        </v-card>
      </v-container>
    </section>

    <!-- Class Types -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Our Class Types</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Explore our variety of yoga styles and wellness practices, each designed to meet you where you are in your journey.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(classType, index) in classTypes"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="zen-card h-100">
              <v-img
                :src="classType.image"
                height="200"
                cover
                class="rounded-t-lg"
              />
              <v-card-title>{{ classType.name }}</v-card-title>
              <v-card-subtitle>
                <v-chip
                  :color="getDifficultyColor(classType.difficulty)"
                  size="small"
                  class="mr-2"
                >
                  {{ classType.difficulty }}
                </v-chip>
                <span>{{ classType.duration }} min</span>
              </v-card-subtitle>
              <v-card-text>
                <p class="zen-body mb-4">{{ classType.description }}</p>
                <div class="mb-2">
                  <strong>Benefits:</strong>
                  <ul class="mt-2">
                    <li v-for="benefit in classType.benefits" :key="benefit" class="zen-body-sm">
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  variant="text"
                  color="zen-green"
                >
                  Book Class
                </v-btn>
                <v-btn
                  variant="text"
                  color="earth-brown"
                >
                  Preview
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sample class types data
const classTypes = [
  {
    name: 'Hatha Yoga',
    difficulty: 'Beginner',
    duration: 60,
    description: 'A gentle, slower-paced practice focusing on basic postures and breathing techniques. Perfect for beginners or those seeking a meditative approach.',
    benefits: ['Improved flexibility', 'Stress reduction', 'Better posture', 'Enhanced mindfulness'],
    image: 'https://placehold.co/600x400/68d391/ffffff?text=Hatha+Yoga'
  },
  {
    name: 'Vinyasa Flow',
    difficulty: 'Intermediate',
    duration: 75,
    description: 'A dynamic practice linking breath with movement through flowing sequences. Build strength, flexibility, and endurance.',
    benefits: ['Cardiovascular health', 'Muscle strength', 'Mental focus', 'Emotional balance'],
    image: 'https://placehold.co/600x400/90cdf4/ffffff?text=Vinyasa+Flow'
  },
  {
    name: 'Yin Yoga',
    difficulty: 'All Levels',
    duration: 90,
    description: 'A quiet, meditative practice with poses held for 3-5 minutes. Uses props to support deep stretching and relaxation.',
    benefits: ['Deep tissue release', 'Improved flexibility', 'Stress relief', 'Better sleep'],
    image: 'https://placehold.co/600x400/a0785a/ffffff?text=Yin+Yoga'
  },
  {
    name: 'Hot Yoga',
    difficulty: 'Advanced',
    duration: 90,
    description: 'Practice in a heated room (95-105°F) to promote deeper stretching, detoxification, and increased flexibility.',
    benefits: ['Detoxification', 'Increased flexibility', 'Improved circulation', 'Mental resilience'],
    image: 'https://placehold.co/600x400/f56565/ffffff?text=Hot+Yoga'
  },
  {
    name: 'Restorative Yoga',
    difficulty: 'All Levels',
    duration: 75,
    description: 'A deeply relaxing practice using props to support the body in restful poses. Focus on healing and restoration.',
    benefits: ['Deep relaxation', 'Nervous system healing', 'Improved sleep', 'Stress recovery'],
    image: 'https://placehold.co/600x400/9f7aea/ffffff?text=Restorative'
  },
  {
    name: 'Power Yoga',
    difficulty: 'Advanced',
    duration: 60,
    description: 'An athletic, fitness-based approach to yoga. Build strength, stamina, and flexibility through challenging sequences.',
    benefits: ['Muscle building', 'Weight management', 'Improved stamina', 'Mental toughness'],
    image: 'https://placehold.co/600x400/ed8936/ffffff?text=Power+Yoga'
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
    case 'all levels':
      return 'info'
    default:
      return 'info'
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: linear-gradient(rgba(104, 211, 145, 0.1), rgba(104, 211, 145, 0.1));
  padding: 120px 0 60px;
  margin-top: -80px;
  padding-top: 160px;
}

.max-width-700 {
  max-width: 700px;
}

.bg-gentle-gray {
  background-color: #f7fafc;
}
</style>
