<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-overlay"></div>
      <v-container class="header-content">
        <div class="text-center">
          <v-chip
            color="zen-green"
            variant="elevated"
            size="large"
            class="mb-6 header-badge"
          >
            <v-icon start>mdi-yoga</v-icon>
            Yoga Classes
          </v-chip>

          <h1 class="page-title text-white mb-6">
            Find Your Perfect
            <span class="text-zen-green">Yoga Practice</span>
          </h1>

          <p class="page-subtitle text-white mb-8 max-width-700 mx-auto">
            Discover our diverse range of yoga classes designed for all levels and preferences.
            From gentle Hatha to dynamic Vinyasa, find your perfect practice and join our
            welcoming community of mindful practitioners.
          </p>

          <div class="header-stats d-flex justify-center flex-wrap gap-8 mb-8">
            <div class="stat-item text-center">
              <div class="stat-number text-zen-green">50+</div>
              <div class="stat-label text-white">Weekly Classes</div>
            </div>
            <div class="stat-item text-center">
              <div class="stat-number text-zen-green">8</div>
              <div class="stat-label text-white">Class Types</div>
            </div>
            <div class="stat-item text-center">
              <div class="stat-number text-zen-green">All</div>
              <div class="stat-label text-white">Skill Levels</div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Class Schedule -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="zen-h2 mb-4">Class Schedule</h2>
          <p class="zen-body">Click on any class to view details and book your spot!</p>
        </div>

        <ClassSchedule />
      </v-container>
    </section>

    <!-- Class Types -->
    <section class="zen-section class-types-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-16">
          <v-chip
            color="earth-brown"
            variant="outlined"
            size="large"
            class="mb-6"
          >
            <v-icon start>mdi-format-list-bulleted</v-icon>
            Class Types
          </v-chip>

          <h2 class="section-title mb-6">
            Explore Our
            <span class="text-earth-brown">Yoga Styles</span>
          </h2>

          <p class="section-subtitle max-width-700 mx-auto">
            Discover our variety of yoga styles and wellness practices, each thoughtfully designed
            to meet you where you are in your journey. From beginner-friendly sessions to
            advanced practices, find the perfect class for your needs.
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
            <ZenCard
              :image="classType.image"
              :title="classType.name"
              :subtitle="`${classType.difficulty} • ${classType.duration} min`"
              :image-height="240"
              class="class-type-card h-100"
            >
              <div class="class-content">
                <p class="class-description mb-4">{{ classType.description }}</p>

                <!-- Class Features -->
                <div class="class-features mb-4">
                  <div class="feature-item d-flex align-center mb-2">
                    <v-icon color="zen-green" size="16" class="mr-2">mdi-account-group</v-icon>
                    <span class="feature-text">15 students max</span>
                  </div>
                  <div class="feature-item d-flex align-center mb-2">
                    <v-icon color="zen-green" size="16" class="mr-2">mdi-fire</v-icon>
                    <span class="feature-text">Moderate intensity</span>
                  </div>
                  <div class="feature-item d-flex align-center mb-2">
                    <v-icon color="zen-green" size="16" class="mr-2">mdi-target</v-icon>
                    <span class="feature-text">Mind & Body</span>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="class-benefits mb-4">
                  <h4 class="benefits-title mb-2">Benefits:</h4>
                  <div class="d-flex flex-wrap">
                    <v-chip
                      v-for="benefit in classType.benefits"
                      :key="benefit"
                      size="small"
                      color="zen-green"
                      variant="outlined"
                      class="ma-1 benefit-chip"
                    >
                      {{ benefit }}
                    </v-chip>
                  </div>
                </div>
              </div>

              <template #actions>
                <div class="d-flex gap-2">
                  <v-btn
                    color="zen-green"
                    variant="elevated"
                    flex
                    rounded="xl"
                    class="class-action-btn"
                  >
                    <v-icon start>mdi-calendar-plus</v-icon>
                    Book Class
                  </v-btn>
                  <v-btn
                    color="earth-brown"
                    variant="outlined"
                    flex
                    rounded="xl"
                  >
                    <v-icon start>mdi-information</v-icon>
                    Details
                  </v-btn>
                </div>
              </template>
            </ZenCard>
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
  background: linear-gradient(135deg, #68d391 0%, #4299e1 50%, #a0785a 100%);
  padding: 120px 0 80px;
  margin-top: -80px;
  padding-top: 160px;
  position: relative;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
}

.header-badge {
  animation: fadeInUp 1s ease-out 0.2s both;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
}

.page-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.header-stats {
  animation: fadeInUp 1s ease-out 0.8s both;
}

.stat-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

// Enhanced section styling
.class-types-section {
  padding: 120px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" fill="none" stroke="rgba(160,120,90,0.1)" stroke-width="1"/></svg>');
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

// Enhanced class card styling
.class-type-card {
  position: relative;
  z-index: 2;

  :deep(.v-card-subtitle) {
    background: linear-gradient(90deg, #68d391, #4299e1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.class-content {
  position: relative;
}

.class-description {
  color: #4a5568;
  line-height: 1.7;
  font-size: 0.95rem;
}

.class-features {
  background: rgba(104, 211, 145, 0.05);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(104, 211, 145, 0.2);
}

.feature-item {
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
  }
}

.feature-text {
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
}

.benefits-title {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.benefit-chip {
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(104, 211, 145, 0.3);
  }
}

.class-action-btn {
  box-shadow: 0 4px 16px rgba(104, 211, 145, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(104, 211, 145, 0.5);
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

.max-width-700 {
  max-width: 700px;
}

.bg-gentle-gray {
  background-color: #f7fafc;
}

// Responsive adjustments
@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 60px;
    padding-top: 140px;
  }

  .header-stats {
    flex-direction: column;
    gap: 16px !important;
  }

  .stat-item {
    padding: 12px;
  }

  .class-types-section {
    padding: 80px 0;
  }

  .class-features {
    padding: 12px;
  }

  .feature-text {
    font-size: 0.85rem;
  }
}
</style>
