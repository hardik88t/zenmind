<template>
  <div>
    <!-- Page Header -->
    <section class="page-header meditation-bg">
      <v-container>
        <div class="text-center text-white">
          <h1 class="zen-h1 mb-4">Meditation Center</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Find inner peace and clarity through our guided meditation resources, breathing exercises, and mindfulness practices.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Meditation Tools -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Meditation Tools</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Explore our collection of meditation resources designed to support your mindfulness journey.
          </p>
        </div>

        <v-row>
          <!-- Meditation Timer -->
          <v-col cols="12" md="8" lg="6">
            <div class="mb-4 text-center">
              <h3 class="zen-h3 mb-2">Meditation Timer</h3>
              <p class="zen-body text-text-muted">
                Set your meditation duration and let the timer guide your practice
              </p>
            </div>
            <MeditationTimer />
          </v-col>

          <!-- Guided Meditations -->
          <v-col cols="12" md="6">
            <v-card class="zen-card h-100 text-center">
              <v-card-text class="pa-8">
                <v-icon icon="mdi-headphones" size="64" color="soft-blue" class="mb-4" />
                <h3 class="zen-h3 mb-4">Guided Sessions</h3>
                <p class="zen-body mb-6">
                  Audio-guided meditation sessions for beginners and experienced practitioners.
                </p>
                <v-btn color="soft-blue" size="large" class="mb-4">
                  Browse Library
                </v-btn>
                <div class="zen-body-sm text-text-muted">
                  Coming Soon: Audio meditation library
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Breathing Exercises -->
          <v-col cols="12">
            <div class="mb-4 text-center">
              <h3 class="zen-h3 mb-2">Breathing Exercises</h3>
              <p class="zen-body text-text-muted">
                Practice guided breathing patterns to calm your mind and body
              </p>
            </div>
            <BreathingExercise />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Meditation Techniques -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Meditation Techniques</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Learn different meditation approaches and find the practice that resonates with you.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(technique, index) in meditationTechniques"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card class="zen-card h-100">
              <v-card-title>{{ technique.name }}</v-card-title>
              <v-card-subtitle>
                <v-chip
                  :color="getDifficultyColor(technique.difficulty)"
                  size="small"
                  class="mr-2"
                >
                  {{ technique.difficulty }}
                </v-chip>
                <span>{{ technique.duration }} minutes</span>
              </v-card-subtitle>
              <v-card-text>
                <p class="zen-body mb-4">{{ technique.description }}</p>
                <div class="mb-3">
                  <strong>Benefits:</strong>
                  <ul class="mt-2">
                    <li v-for="benefit in technique.benefits" :key="benefit" class="zen-body-sm">
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Best for:</strong> {{ technique.bestFor }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  variant="text"
                  color="zen-green"
                >
                  Try Now
                </v-btn>
                <v-btn
                  variant="text"
                  color="earth-brown"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Progress Tracking -->
    <section class="zen-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-4">Track Your Progress</h2>
            <p class="zen-body mb-4">
              Monitor your meditation journey with our progress tracking tools. Set goals, track sessions, and celebrate milestones.
            </p>
            <p class="zen-body mb-6">
              Build a consistent practice and watch as mindfulness becomes a natural part of your daily routine.
            </p>
            <v-btn
              color="zen-green"
              size="large"
            >
              Start Tracking (Coming Soon)
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="zen-card text-center pa-8">
              <v-icon icon="mdi-chart-line" size="64" color="zen-green" class="mb-4" />
              <h3 class="zen-h3 mb-4">Progress Dashboard</h3>
              <p class="zen-body">
                Comprehensive tracking and analytics for your meditation practice coming soon.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sample meditation techniques data
const meditationTechniques = [
  {
    name: 'Mindfulness Meditation',
    difficulty: 'Beginner',
    duration: 10,
    description: 'Focus on the present moment by observing thoughts, feelings, and sensations without judgment.',
    benefits: ['Reduced stress', 'Improved focus', 'Emotional regulation', 'Better self-awareness'],
    bestFor: 'Beginners and daily practice'
  },
  {
    name: 'Loving-Kindness Meditation',
    difficulty: 'Beginner',
    duration: 15,
    description: 'Cultivate compassion and love for yourself and others through guided visualization and affirmations.',
    benefits: ['Increased empathy', 'Reduced negative emotions', 'Better relationships', 'Self-compassion'],
    bestFor: 'Emotional healing and relationship improvement'
  },
  {
    name: 'Body Scan Meditation',
    difficulty: 'Intermediate',
    duration: 20,
    description: 'Systematically focus attention on different parts of the body to develop awareness and release tension.',
    benefits: ['Physical relaxation', 'Pain management', 'Body awareness', 'Stress relief'],
    bestFor: 'Physical tension and sleep preparation'
  },
  {
    name: 'Breath Awareness',
    difficulty: 'All Levels',
    duration: 5,
    description: 'Simple yet powerful practice focusing solely on the natural rhythm of breathing.',
    benefits: ['Calmed nervous system', 'Improved concentration', 'Anxiety reduction', 'Quick stress relief'],
    bestFor: 'Quick sessions and anxiety management'
  },
  {
    name: 'Walking Meditation',
    difficulty: 'Intermediate',
    duration: 15,
    description: 'Mindful movement practice combining meditation with slow, deliberate walking.',
    benefits: ['Mind-body integration', 'Improved balance', 'Active meditation', 'Nature connection'],
    bestFor: 'Active people and outdoor practice'
  },
  {
    name: 'Visualization Meditation',
    difficulty: 'Advanced',
    duration: 25,
    description: 'Use mental imagery and visualization techniques to achieve specific goals or states of being.',
    benefits: ['Goal achievement', 'Creativity enhancement', 'Healing visualization', 'Performance improvement'],
    bestFor: 'Goal-oriented practice and healing'
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
  padding: 120px 0 60px;
  margin-top: -80px;
  padding-top: 160px;
}

.meditation-bg {
  background: linear-gradient(135deg, #68d391 0%, #4299e1 50%, #a0785a 100%);
}

.max-width-700 {
  max-width: 700px;
}

.bg-gentle-gray {
  background-color: #f7fafc;
}
</style>
