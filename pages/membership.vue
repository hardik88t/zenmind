<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">Membership Plans</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Choose the membership plan that fits your lifestyle and wellness goals. All plans include access to our supportive community.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Membership Plans -->
    <section class="zen-section">
      <v-container>
        <v-row>
          <v-col
            v-for="(plan, index) in membershipPlans"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              class="zen-card h-100"
              :class="{ 'popular-plan': plan.popular }"
              :elevation="plan.popular ? 8 : 2"
            >
              <div v-if="plan.popular" class="popular-badge">
                <v-chip color="zen-green" size="small">Most Popular</v-chip>
              </div>
              
              <v-card-text class="text-center pa-8">
                <h3 class="zen-h3 mb-2">{{ plan.name }}</h3>
                <div class="price-display mb-4">
                  <span class="price">${{ plan.price }}</span>
                  <span class="period">/{{ plan.period }}</span>
                </div>
                <p class="zen-body mb-6">{{ plan.description }}</p>
                
                <v-list class="mb-6">
                  <v-list-item
                    v-for="feature in plan.features"
                    :key="feature"
                    class="px-0"
                  >
                    <template #prepend>
                      <v-icon icon="mdi-check" color="zen-green" size="small" />
                    </template>
                    <v-list-item-title class="zen-body-sm">{{ feature }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                
                <v-btn
                  :color="plan.popular ? 'zen-green' : 'earth-brown'"
                  size="large"
                  block
                  class="mb-4"
                >
                  Choose {{ plan.name }}
                </v-btn>
                
                <p class="zen-body-sm text-text-muted">{{ plan.note }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Trial Offer -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-4">Try Before You Commit</h2>
            <p class="zen-body mb-4">
              New to ZenMind? Start with our 7-day trial to experience our classes, community, and facilities before choosing a membership plan.
            </p>
            <p class="zen-body mb-6">
              Your trial includes access to all classes, meditation sessions, and community events.
            </p>
            <v-btn
              color="zen-green"
              size="large"
              class="mr-4 mb-2"
            >
              Start Free Trial
            </v-btn>
            <v-btn
              variant="outlined"
              color="earth-brown"
              size="large"
              class="mb-2"
            >
              Schedule Tour
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="zen-card text-center pa-8">
              <v-icon icon="mdi-gift" size="64" color="zen-green" class="mb-4" />
              <h3 class="zen-h3 mb-4">7-Day Free Trial</h3>
              <p class="zen-body mb-4">
                Full access to all classes and amenities
              </p>
              <v-chip color="zen-green" size="large">No commitment required</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Member Benefits -->
    <section class="zen-section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Member Benefits</h2>
          <p class="zen-body-lg max-width-700 mx-auto">
            All membership plans include these exclusive benefits designed to enhance your wellness journey.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(benefit, index) in memberBenefits"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <div class="text-center">
              <v-icon
                :icon="benefit.icon"
                size="48"
                :color="benefit.color"
                class="mb-4"
              />
              <h3 class="zen-h3 mb-3">{{ benefit.title }}</h3>
              <p class="zen-body">{{ benefit.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="zen-h2 mb-4">Frequently Asked Questions</h2>
        </div>

        <v-expansion-panels variant="accordion" class="max-width-800 mx-auto">
          <v-expansion-panel
            v-for="(faq, index) in faqs"
            :key="index"
          >
            <v-expansion-panel-title class="zen-body-lg">
              {{ faq.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="zen-body">
              {{ faq.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Membership plans data
const membershipPlans = [
  {
    name: 'Drop-In',
    price: 25,
    period: 'class',
    description: 'Perfect for trying out classes or occasional practice',
    features: [
      'Single class access',
      'All class types included',
      'Valid for 30 days',
      'Community events access'
    ],
    note: 'Great for beginners or occasional visitors',
    popular: false
  },
  {
    name: 'Monthly',
    price: 89,
    period: 'month',
    description: 'Unlimited access to all classes and amenities',
    features: [
      'Unlimited classes',
      'All meditation sessions',
      'Member workshops',
      'Community events',
      'Guest passes (2/month)',
      'Online class library'
    ],
    note: 'Most flexible option with no long-term commitment',
    popular: true
  },
  {
    name: 'Annual',
    price: 799,
    period: 'year',
    description: 'Best value with exclusive annual member benefits',
    features: [
      'Everything in Monthly',
      'Priority class booking',
      'Free guest passes (4/month)',
      'Exclusive retreats access',
      'Personal wellness consultation',
      'Member appreciation events'
    ],
    note: 'Save $269 compared to monthly payments',
    popular: false
  }
]

// Member benefits data
const memberBenefits = [
  {
    title: 'Expert Instruction',
    description: 'Learn from certified instructors with years of experience and ongoing training.',
    icon: 'mdi-school',
    color: 'zen-green'
  },
  {
    title: 'Community Support',
    description: 'Connect with like-minded individuals on similar wellness journeys.',
    icon: 'mdi-account-group',
    color: 'earth-brown'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Classes throughout the day to fit your busy lifestyle and preferences.',
    icon: 'mdi-calendar-clock',
    color: 'soft-blue'
  },
  {
    title: 'Wellness Resources',
    description: 'Access to meditation library, wellness workshops, and educational content.',
    icon: 'mdi-library',
    color: 'zen-green'
  },
  {
    title: 'Clean Facilities',
    description: 'Pristine, eco-friendly studio spaces with all necessary equipment provided.',
    icon: 'mdi-leaf',
    color: 'earth-brown'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your wellness journey with our member portal and progress tools.',
    icon: 'mdi-chart-line',
    color: 'soft-blue'
  }
]

// FAQ data
const faqs = [
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, monthly and annual members can freeze their membership for up to 3 months per year for medical reasons or extended travel.'
  },
  {
    question: 'What should I bring to class?',
    answer: 'We provide all necessary equipment including mats, blocks, and straps. Just bring water, a towel, and comfortable clothing.'
  },
  {
    question: 'Are there beginner-friendly classes?',
    answer: 'Absolutely! We offer classes for all levels, including specific beginner series and gentle yoga options.'
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Monthly memberships can be cancelled with 30 days notice. Annual memberships have a 6-month minimum commitment.'
  },
  {
    question: 'Do you offer student or senior discounts?',
    answer: 'Yes, we offer 15% discounts for students, seniors (65+), and military personnel with valid ID.'
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

.popular-plan {
  position: relative;
  border: 2px solid #68d391;
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.price-display {
  .price {
    font-size: 3rem;
    font-weight: 700;
    color: #68d391;
  }
  
  .period {
    font-size: 1.2rem;
    color: #718096;
  }
}

.max-width-700 {
  max-width: 700px;
}

.max-width-800 {
  max-width: 800px;
}

.bg-gentle-gray {
  background-color: #f7fafc;
}
</style>
