<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">Our Instructors</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Meet our experienced and passionate yoga instructors who are dedicated to guiding you on your wellness journey.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Instructors Grid -->
    <section class="zen-section">
      <v-container>
        <v-row>
          <v-col
            v-for="(instructor, index) in instructors"
            :key="index"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card class="zen-card h-100">
              <v-img
                :src="instructor.photo"
                height="300"
                cover
                class="rounded-t-lg"
              />
              <v-card-title>{{ instructor.name }}</v-card-title>
              <v-card-subtitle>{{ instructor.specialization }}</v-card-subtitle>
              <v-card-text>
                <p class="zen-body mb-4">{{ instructor.bio }}</p>
                <div class="mb-3">
                  <strong>Certifications:</strong>
                  <div class="mt-2">
                    <v-chip
                      v-for="cert in instructor.certifications"
                      :key="cert"
                      size="small"
                      class="mr-1 mb-1"
                      color="zen-green"
                      variant="outlined"
                    >
                      {{ cert }}
                    </v-chip>
                  </div>
                </div>
                <div>
                  <strong>Experience:</strong> {{ instructor.experience }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  variant="text"
                  color="zen-green"
                >
                  View Schedule
                </v-btn>
                <v-btn
                  variant="text"
                  color="earth-brown"
                >
                  Book Session
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
// Sample instructors data
const instructors = [
  {
    name: 'Sarah Williams',
    specialization: 'Hatha & Restorative Yoga',
    bio: 'Sarah brings 8 years of experience in gentle yoga practices. She specializes in helping beginners find their foundation and experienced practitioners deepen their practice.',
    certifications: ['RYT-500', 'Yin Yoga', 'Meditation'],
    experience: '8 years',
    photo: 'https://placehold.co/400x500/68d391/ffffff?text=Sarah+W'
  },
  {
    name: 'Michael Chen',
    specialization: 'Vinyasa & Power Yoga',
    bio: 'Michael is passionate about dynamic yoga practices that build strength and flexibility. His classes challenge students while maintaining mindful awareness.',
    certifications: ['RYT-200', 'Power Yoga', 'Anatomy'],
    experience: '6 years',
    photo: 'https://placehold.co/400x500/90cdf4/ffffff?text=Michael+C'
  },
  {
    name: 'Elena Rodriguez',
    specialization: 'Hot Yoga & Meditation',
    bio: 'Elena combines traditional yoga wisdom with modern techniques. She creates a safe space for transformation through heat-based practices and mindfulness.',
    certifications: ['RYT-300', 'Hot Yoga', 'Mindfulness'],
    experience: '10 years',
    photo: 'https://placehold.co/400x500/a0785a/ffffff?text=Elena+R'
  },
  {
    name: 'David Thompson',
    specialization: 'Yin & Therapeutic Yoga',
    bio: 'David focuses on the healing aspects of yoga, helping students recover from injuries and find balance through gentle, therapeutic practices.',
    certifications: ['RYT-500', 'Therapeutic Yoga', 'Anatomy'],
    experience: '12 years',
    photo: 'https://placehold.co/400x500/f56565/ffffff?text=David+T'
  },
  {
    name: 'Lisa Park',
    specialization: 'Prenatal & Family Yoga',
    bio: 'Lisa specializes in yoga for expecting mothers and families. She creates inclusive practices that support all stages of life and family dynamics.',
    certifications: ['RYT-200', 'Prenatal Yoga', 'Kids Yoga'],
    experience: '7 years',
    photo: 'https://placehold.co/400x500/9f7aea/ffffff?text=Lisa+P'
  },
  {
    name: 'James Kumar',
    specialization: 'Ashtanga & Traditional Yoga',
    bio: 'James brings authentic traditional yoga practices to modern students. His deep knowledge of yoga philosophy enriches every class experience.',
    certifications: ['RYT-500', 'Ashtanga', 'Philosophy'],
    experience: '15 years',
    photo: 'https://placehold.co/400x500/ed8936/ffffff?text=James+K'
  }
]
</script>

<style lang="scss" scoped>
.page-header {
  background: linear-gradient(rgba(160, 120, 90, 0.1), rgba(160, 120, 90, 0.1));
  padding: 120px 0 60px;
  margin-top: -80px;
  padding-top: 160px;
}

.max-width-700 {
  max-width: 700px;
}
</style>
