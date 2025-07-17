<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">Contact Us</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Get in touch with our team for questions, class inquiries, or to schedule a visit to our wellness sanctuary.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Contact Information -->
    <section class="zen-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="zen-card h-100 text-center">
              <v-card-text class="pa-8">
                <v-icon icon="mdi-map-marker" size="48" color="zen-green" class="mb-4" />
                <h3 class="zen-h3 mb-4">Visit Us</h3>
                <p class="zen-body mb-2">123 Wellness Way</p>
                <p class="zen-body mb-2">Mindful City, MC 12345</p>
                <p class="zen-body-sm text-text-muted">
                  Free parking available
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="4">
            <v-card class="zen-card h-100 text-center">
              <v-card-text class="pa-8">
                <v-icon icon="mdi-phone" size="48" color="earth-brown" class="mb-4" />
                <h3 class="zen-h3 mb-4">Call Us</h3>
                <p class="zen-body mb-2">(555) 123-YOGA</p>
                <p class="zen-body mb-2">(555) 123-9642</p>
                <p class="zen-body-sm text-text-muted">
                  Mon-Fri: 6am-9pm<br>
                  Sat-Sun: 7am-7pm
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="4">
            <v-card class="zen-card h-100 text-center">
              <v-card-text class="pa-8">
                <v-icon icon="mdi-email" size="48" color="soft-blue" class="mb-4" />
                <h3 class="zen-h3 mb-4">Email Us</h3>
                <p class="zen-body mb-2">hello@zenmind.com</p>
                <p class="zen-body mb-2">classes@zenmind.com</p>
                <p class="zen-body-sm text-text-muted">
                  We respond within 24 hours
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Form -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="zen-card">
              <v-card-title class="text-center">
                <h2 class="zen-h2">Send us a Message</h2>
              </v-card-title>
              
              <v-card-text class="pa-8">
                <v-form ref="contactForm" v-model="formValid">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.firstName"
                        label="First Name"
                        :rules="[rules.required]"
                        variant="outlined"
                        class="zen-focus"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.lastName"
                        label="Last Name"
                        :rules="[rules.required]"
                        variant="outlined"
                        class="zen-focus"
                      />
                    </v-col>
                  </v-row>
                  
                  <v-text-field
                    v-model="form.email"
                    label="Email Address"
                    :rules="[rules.required, rules.email]"
                    variant="outlined"
                    class="zen-focus"
                  />
                  
                  <v-text-field
                    v-model="form.phone"
                    label="Phone Number (Optional)"
                    variant="outlined"
                    class="zen-focus"
                  />
                  
                  <v-select
                    v-model="form.subject"
                    :items="subjectOptions"
                    label="Subject"
                    :rules="[rules.required]"
                    variant="outlined"
                    class="zen-focus"
                  />
                  
                  <v-textarea
                    v-model="form.message"
                    label="Message"
                    :rules="[rules.required]"
                    rows="5"
                    variant="outlined"
                    class="zen-focus"
                  />
                  
                  <div class="text-center">
                    <v-btn
                      color="zen-green"
                      size="large"
                      :disabled="!formValid"
                      @click="submitForm"
                    >
                      Send Message
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Studio Hours -->
    <section class="zen-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-6">Studio Hours</h2>
            <v-card class="zen-card">
              <v-list>
                <v-list-item
                  v-for="(hours, day) in studioHours"
                  :key="day"
                >
                  <v-list-item-title class="zen-body-lg">{{ day }}</v-list-item-title>
                  <template #append>
                    <span class="zen-body">{{ hours }}</span>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
            
            <v-alert
              type="info"
              variant="tonal"
              class="mt-4"
            >
              <strong>Holiday Hours:</strong> Please check our website or call for holiday schedule updates.
            </v-alert>
          </v-col>
          
          <v-col cols="12" md="6">
            <h2 class="zen-h2 mb-6">Getting Here</h2>
            <v-card class="zen-card">
              <v-card-text>
                <div class="mb-4">
                  <h3 class="zen-h3 mb-2">Public Transportation</h3>
                  <p class="zen-body">
                    Metro Line 2 - Wellness Station (2 blocks)<br>
                    Bus Routes 15, 23, 45 - Mindful Ave Stop
                  </p>
                </div>
                
                <div class="mb-4">
                  <h3 class="zen-h3 mb-2">Parking</h3>
                  <p class="zen-body">
                    Free parking available in our lot<br>
                    Street parking also available
                  </p>
                </div>
                
                <div>
                  <h3 class="zen-h3 mb-2">Accessibility</h3>
                  <p class="zen-body">
                    Wheelchair accessible entrance<br>
                    Accessible restrooms and changing areas
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Map Placeholder -->
    <section class="zen-section bg-gentle-gray">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="zen-h2 mb-4">Find Us</h2>
        </div>
        
        <v-card class="zen-card text-center pa-8">
          <v-icon icon="mdi-map" size="64" color="zen-green" class="mb-4" />
          <h3 class="zen-h3 mb-4">Interactive Map</h3>
          <p class="zen-body mb-6">
            Interactive map with directions and nearby amenities coming soon.
          </p>
          <v-btn color="zen-green" size="large">
            Get Directions
          </v-btn>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
const formValid = ref(false)
const contactForm = ref()

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form validation rules
const rules = {
  required: (value: string) => !!value || 'This field is required',
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Please enter a valid email address'
  }
}

// Subject options
const subjectOptions = [
  'General Inquiry',
  'Class Information',
  'Membership Questions',
  'Private Sessions',
  'Workshop Booking',
  'Feedback',
  'Other'
]

// Studio hours
const studioHours = {
  'Monday': '6:00 AM - 9:00 PM',
  'Tuesday': '6:00 AM - 9:00 PM',
  'Wednesday': '6:00 AM - 9:00 PM',
  'Thursday': '6:00 AM - 9:00 PM',
  'Friday': '6:00 AM - 9:00 PM',
  'Saturday': '7:00 AM - 7:00 PM',
  'Sunday': '7:00 AM - 7:00 PM'
}

// Form submission
const submitForm = () => {
  if (formValid.value) {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    
    // Show success message (you could use a snackbar or alert)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    contactForm.value?.reset()
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: linear-gradient(rgba(144, 205, 244, 0.1), rgba(144, 205, 244, 0.1));
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
