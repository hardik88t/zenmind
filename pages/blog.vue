<template>
  <div>
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <h1 class="zen-h1 mb-4">Wellness Blog</h1>
          <p class="zen-body-lg max-width-700 mx-auto">
            Discover insights, tips, and inspiration for your wellness journey through our collection of mindfulness articles and yoga wisdom.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Blog Posts -->
    <section class="zen-section">
      <v-container>
        <v-row>
          <v-col
            v-for="(post, index) in blogPosts"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="zen-card h-100">
              <v-img
                :src="post.image"
                height="200"
                cover
                class="rounded-t-lg"
              />
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-subtitle>
                <v-chip
                  :color="getCategoryColor(post.category)"
                  size="small"
                  class="mr-2"
                >
                  {{ post.category }}
                </v-chip>
                <span>{{ post.date }}</span>
              </v-card-subtitle>
              <v-card-text>
                <p class="zen-body">{{ post.excerpt }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  variant="text"
                  color="zen-green"
                >
                  Read More
                </v-btn>
                <v-spacer />
                <span class="zen-body-sm text-text-muted">{{ post.readTime }} min read</span>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Load More Button -->
        <div class="text-center mt-8">
          <v-btn
            color="zen-green"
            size="large"
          >
            Load More Articles
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sample blog posts data
const blogPosts = [
  {
    title: '5 Morning Meditation Practices to Start Your Day',
    category: 'Meditation',
    date: 'January 15, 2025',
    readTime: 5,
    excerpt: 'Discover simple yet powerful meditation techniques that can transform your morning routine and set a positive tone for the entire day.',
    image: 'https://placehold.co/600x400/68d391/ffffff?text=Morning+Meditation'
  },
  {
    title: 'The Benefits of Yin Yoga for Stress Relief',
    category: 'Yoga',
    date: 'January 12, 2025',
    readTime: 7,
    excerpt: 'Learn how the gentle, passive poses of Yin Yoga can help release tension, calm the nervous system, and promote deep relaxation.',
    image: 'https://placehold.co/600x400/90cdf4/ffffff?text=Yin+Yoga'
  },
  {
    title: 'Mindful Eating: Bringing Awareness to Your Meals',
    category: 'Wellness',
    date: 'January 10, 2025',
    readTime: 6,
    excerpt: 'Explore the practice of mindful eating and how it can improve digestion, enhance satisfaction, and create a healthier relationship with food.',
    image: 'https://placehold.co/600x400/a0785a/ffffff?text=Mindful+Eating'
  },
  {
    title: 'Building a Home Yoga Practice: Tips for Beginners',
    category: 'Yoga',
    date: 'January 8, 2025',
    readTime: 8,
    excerpt: 'Create a sustainable home yoga practice with these practical tips for setting up your space, choosing sequences, and staying motivated.',
    image: 'https://placehold.co/600x400/f56565/ffffff?text=Home+Practice'
  },
  {
    title: 'The Science of Breathwork and Its Health Benefits',
    category: 'Wellness',
    date: 'January 5, 2025',
    readTime: 9,
    excerpt: 'Discover the scientific research behind breathwork practices and how conscious breathing can improve physical and mental health.',
    image: 'https://placehold.co/600x400/9f7aea/ffffff?text=Breathwork'
  },
  {
    title: 'Yoga Philosophy: Understanding the Eight Limbs',
    category: 'Philosophy',
    date: 'January 3, 2025',
    readTime: 10,
    excerpt: 'Dive deep into the philosophical foundations of yoga by exploring Patanjali\'s eight-limbed path and its relevance to modern practice.',
    image: 'https://placehold.co/600x400/ed8936/ffffff?text=Philosophy'
  }
]

// Helper function to get color based on category
const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'meditation':
      return 'zen-green'
    case 'yoga':
      return 'soft-blue'
    case 'wellness':
      return 'earth-brown'
    case 'philosophy':
      return 'info'
    default:
      return 'gentle-gray'
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
</style>
