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
  background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
  border-radius: 16px;
  border: 1px solid rgba(104, 211, 145, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(104, 211, 145, 0.03) 0%, rgba(66, 153, 225, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &.zen-card-hover:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(104, 211, 145, 0.2);
    border-color: rgba(104, 211, 145, 0.4);

    &::before {
      opacity: 1;
    }

    :deep(.v-img) {
      transform: scale(1.05);
    }

    :deep(.v-card-title) {
      color: #68d391;
    }
  }

  // Enhanced card content styling
  :deep(.v-card-title) {
    font-weight: 700;
    font-size: 1.25rem;
    color: #2d3748;
    line-height: 1.3;
    padding: 20px 24px 8px;
    transition: color 0.3s ease;
  }

  :deep(.v-card-subtitle) {
    color: #68d391;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 24px 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  :deep(.v-card-text) {
    color: #4a5568;
    line-height: 1.7;
    font-size: 0.95rem;
    padding: 0 24px 24px;
    position: relative;
    z-index: 2;
  }

  :deep(.v-card-actions) {
    padding: 16px 24px 24px;
    position: relative;
    z-index: 2;
  }

  :deep(.v-img) {
    transition: transform 0.4s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(104, 211, 145, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 1;
    }
  }

  &.zen-card-hover:hover :deep(.v-img::after) {
    opacity: 1;
  }

  // Card variants
  &.zen-card--featured {
    background: linear-gradient(135deg, #68d391 0%, #4299e1 100%);
    border-color: rgba(255, 255, 255, 0.3);

    :deep(.v-card-title) {
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    :deep(.v-card-subtitle) {
      color: rgba(255, 255, 255, 0.9);
    }

    :deep(.v-card-text) {
      color: rgba(255, 255, 255, 0.9);
    }

    &:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 0 25px 50px rgba(104, 211, 145, 0.4);
    }
  }

  &.zen-card--testimonial {
    border-left: 4px solid #68d391;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);

    &:hover {
      border-left-color: #4299e1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &.zen-card-hover:hover {
      transform: none;

      :deep(.v-img) {
        transform: none;
      }
    }
  }

  // Responsive adjustments
  @media (max-width: 768px) {
    &.zen-card-hover:hover {
      transform: translateY(-4px) scale(1.01);
    }

    :deep(.v-card-title) {
      font-size: 1.1rem;
      padding: 16px 20px 6px;
    }

    :deep(.v-card-subtitle) {
      font-size: 0.85rem;
      padding: 0 20px 6px;
    }

    :deep(.v-card-text) {
      font-size: 0.9rem;
      padding: 0 20px 20px;
    }

    :deep(.v-card-actions) {
      padding: 12px 20px 20px;
    }
  }
}
</style>
