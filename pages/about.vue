<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">About ZenMind</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Discover our story, mission, and the passionate community that makes ZenMind a sanctuary for wellness and mindfulness.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Our Story -->
    <section class="zen-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-4">Our Story</h2>
            <p class="zen-body mb-4">
              ZenMind was born from a simple belief: everyone deserves access to the transformative power of yoga and mindfulness. Founded in 2020, our studio has grown into a thriving community of wellness seekers.
            </p>
            <p class="zen-body mb-4">
              What started as a small neighborhood studio has evolved into a comprehensive wellness center, offering diverse practices that honor both ancient wisdom and modern needs.
            </p>
            <p class="zen-body mb-6">
              Our journey continues to be guided by the principles of compassion, inclusivity, and authentic practice.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://placehold.co/600x400/68d391/ffffff?text=Our+Story"
              class="rounded-lg"
              height="400"
              cover
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Mission & Values -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Our Mission & Values</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            We are committed to creating an inclusive space where everyone can explore the benefits of yoga and mindfulness.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(value, index) in values"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="zen-card h-100 text-center">
              <v-card-text class="pa-8">
                <v-icon
                  :icon="value.icon"
                  size="64"
                  :color="value.color"
                  class="mb-4"
                />
                <h3 class="zen-h3 mb-4">{{ value.title }}</h3>
                <p class="zen-body">{{ value.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Team -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Meet Our Team</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            Our dedicated team of wellness professionals is here to support your journey every step of the way.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(member, index) in teamMembers"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="zen-card h-100 text-center">
              <v-img
                :src="member.photo"
                height="250"
                cover
                class="rounded-t-lg"
              />
              <v-card-text class="pa-6">
                <h3 class="zen-h3 mb-2">{{ member.name }}</h3>
                <p class="zen-body-lg text-zen-green mb-3">{{ member.role }}</p>
                <p class="zen-body">{{ member.bio }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Studio Tour -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img
              src="https://placehold.co/600x400/90cdf4/ffffff?text=Studio+Tour"
              class="rounded-lg"
              height="400"
              cover
            />
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-4">Virtual Studio Tour</h2>
            <p class="zen-body mb-4">
              Step inside our peaceful sanctuary designed to promote tranquility and mindfulness. Our studio features natural lighting, eco-friendly materials, and a calming atmosphere.
            </p>
            <p class="zen-body mb-6">
              From our main practice room to our meditation corner, every space is thoughtfully designed to support your wellness journey.
            </p>
            <v-btn
              color="zen-green"
              size="large"
            >
              Take Virtual Tour (Coming Soon)
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Community -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Our Community</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            ZenMind is more than a studio – it's a supportive community where lasting friendships are formed and personal growth is celebrated.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-center">
              <v-icon icon="mdi-account-group" size="64" color="zen-green" class="mb-4" />
              <h3 class="zen-h3 mb-3">Inclusive Community</h3>
              <p class="zen-body">
                We welcome practitioners of all backgrounds, abilities, and experience levels in our supportive environment.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-center">
              <v-icon icon="mdi-heart" size="64" color="earth-brown" class="mb-4" />
              <h3 class="zen-h3 mb-3">Compassionate Practice</h3>
              <p class="zen-body">
                Our approach emphasizes self-compassion, non-judgment, and honoring your body's unique needs.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-center">
              <v-icon icon="mdi-leaf" size="64" color="soft-blue" class="mb-4" />
              <h3 class="zen-h3 mb-3">Sustainable Wellness</h3>
              <p class="zen-body">
                We promote sustainable practices that support both personal well-being and environmental consciousness.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Values data
const values = [
  {
    title: 'Inclusivity',
    description: 'We create a welcoming space for all bodies, backgrounds, and experience levels, fostering a sense of belonging for everyone.',
    icon: 'mdi-account-group',
    color: 'zen-green'
  },
  {
    title: 'Authenticity',
    description: 'We honor traditional yoga wisdom while adapting practices to meet the needs of modern practitioners.',
    icon: 'mdi-heart',
    color: 'earth-brown'
  },
  {
    title: 'Growth',
    description: 'We support continuous learning and personal development, celebrating each step of your wellness journey.',
    icon: 'mdi-trending-up',
    color: 'soft-blue'
  }
]

// Team members data
const teamMembers = [
  {
    name: 'Maya Patel',
    role: 'Founder & Director',
    bio: 'Maya founded ZenMind with a vision of making yoga accessible to everyone. She brings 15 years of teaching experience and a passion for community building.',
    photo: 'https://placehold.co/400x500/68d391/ffffff?text=Maya+P'
  },
  {
    name: 'Alex Johnson',
    role: 'Studio Manager',
    bio: 'Alex ensures our studio runs smoothly and our community feels supported. They handle scheduling, events, and member services with care and attention.',
    photo: 'https://placehold.co/400x500/90cdf4/ffffff?text=Alex+J'
  },
  {
    name: 'Dr. Priya Singh',
    role: 'Wellness Consultant',
    bio: 'Dr. Singh brings medical expertise to our wellness programs, ensuring our practices are safe, effective, and beneficial for all participants.',
    photo: 'https://placehold.co/400x500/a0785a/ffffff?text=Dr+Singh'
  }
]
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
