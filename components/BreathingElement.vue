<template>
  <div
    class="breathing-element"
    :class="{ 'breathing-active': animate }"
    :style="{ '--duration': `${duration}s` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  animate?: boolean
  duration?: number
}

withDefaults(defineProps<Props>(), {
  animate: true,
  duration: 4
})
</script>

<style lang="scss" scoped>
.breathing-element {
  transition: transform 0.3s ease;
  
  &.breathing-active {
    animation: breathe var(--duration, 4s) cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes breathe {
    0%, 100% { 
      transform: scale(1); 
    }
    50% { 
      transform: scale(1.05); 
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    &.breathing-active {
      animation: none;
    }
  }
}
</style>
