<template>
  <v-card
    class="zen-card-component"
    :class="{ 'zen-card-hover': hover }"
    :elevation="elevation"
    :rounded="rounded"
  >
    <v-img
      v-if="image"
      :src="image"
      :height="imageHeight"
      cover
      class="rounded-t-lg"
    />
    
    <v-card-title v-if="title">
      {{ title }}
    </v-card-title>
    
    <v-card-subtitle v-if="subtitle">
      {{ subtitle }}
    </v-card-subtitle>
    
    <v-card-text>
      <slot />
    </v-card-text>
    
    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  image?: string
  imageHeight?: number | string
  hover?: boolean
  elevation?: number
  rounded?: string | number
}

withDefaults(defineProps<Props>(), {
  imageHeight: 200,
  hover: true,
  elevation: 2,
  rounded: 'lg'
})
</script>

<style lang="scss" scoped>
.zen-card-component {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &.zen-card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  @media (prefers-reduced-motion: reduce) {
    &.zen-card-hover:hover {
      transform: none;
    }
  }
}
</style>
