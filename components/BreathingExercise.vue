<template>
  <ZenCard class="breathing-exercise text-center">
    <div class="breathing-display mb-6">
      <div 
        class="breathing-circle"
        :class="{ 'breathing-active': isActive }"
        :style="{ '--duration': `${currentPattern.duration}s` }"
      >
        <div class="breathing-inner">
          <div class="breathing-text">
            <div class="phase-text">{{ currentPhase }}</div>
            <div class="pattern-name">{{ currentPattern.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="breathing-instructions mb-4">
      <p class="zen-body">{{ currentPattern.description }}</p>
      <div class="phase-indicator">
        <v-chip
          v-for="(phase, index) in phases"
          :key="index"
          :color="currentPhaseIndex === index ? 'zen-green' : 'gentle-gray'"
          size="small"
          class="mx-1"
        >
          {{ phase }}
        </v-chip>
      </div>
    </div>

    <div class="breathing-controls mb-4">
      <v-btn
        v-if="!isActive"
        @click="startExercise"
        color="zen-green"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-play</v-icon>
        Start Breathing
      </v-btn>
      
      <v-btn
        v-if="isActive"
        @click="stopExercise"
        color="earth-brown"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-stop</v-icon>
        Stop
      </v-btn>
    </div>

    <div class="pattern-selector">
      <v-select
        v-model="selectedPatternIndex"
        :items="patternOptions"
        label="Breathing Pattern"
        variant="outlined"
        :disabled="isActive"
        @update:model-value="changePattern"
      />
    </div>

    <div class="exercise-info mt-4">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-icon icon="mdi-information" class="mr-2" />
            About This Exercise
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p class="zen-body mb-2">
              <strong>Benefits:</strong>
            </p>
            <ul class="zen-body-sm">
              <li v-for="benefit in currentPattern.benefits" :key="benefit">
                {{ benefit }}
              </li>
            </ul>
            <p class="zen-body mt-3 mb-2">
              <strong>Instructions:</strong>
            </p>
            <p class="zen-body-sm">{{ currentPattern.instructions }}</p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </ZenCard>
</template>

<script setup lang="ts">
interface BreathingPattern {
  name: string
  description: string
  duration: number
  phases: string[]
  phaseDurations: number[]
  benefits: string[]
  instructions: string
}

const isActive = ref(false)
const selectedPatternIndex = ref(0)
const currentPhaseIndex = ref(0)
let intervalId: NodeJS.Timeout | null = null
let phaseTimeLeft = ref(0)

const breathingPatterns: BreathingPattern[] = [
  {
    name: '4-7-8 Breathing',
    description: 'A calming technique that helps reduce anxiety and promote sleep.',
    duration: 19,
    phases: ['Inhale', 'Hold', 'Exhale'],
    phaseDurations: [4, 7, 8],
    benefits: [
      'Reduces anxiety and stress',
      'Promotes better sleep',
      'Lowers heart rate',
      'Improves focus'
    ],
    instructions: 'Inhale for 4 counts, hold for 7 counts, then exhale slowly for 8 counts. Repeat this cycle.'
  },
  {
    name: 'Box Breathing',
    description: 'Equal timing for all phases creates balance and calm.',
    duration: 16,
    phases: ['Inhale', 'Hold', 'Exhale', 'Hold'],
    phaseDurations: [4, 4, 4, 4],
    benefits: [
      'Balances nervous system',
      'Improves concentration',
      'Reduces stress',
      'Enhances performance'
    ],
    instructions: 'Breathe in for 4 counts, hold for 4, exhale for 4, and hold empty for 4. Keep the rhythm steady.'
  },
  {
    name: 'Triangle Breathing',
    description: 'Simple three-phase breathing for beginners.',
    duration: 12,
    phases: ['Inhale', 'Hold', 'Exhale'],
    phaseDurations: [4, 4, 4],
    benefits: [
      'Easy to learn',
      'Calms the mind',
      'Improves lung capacity',
      'Reduces tension'
    ],
    instructions: 'Inhale for 4 counts, hold for 4 counts, then exhale for 4 counts. Perfect for beginners.'
  }
]

const currentPattern = computed(() => breathingPatterns[selectedPatternIndex.value])
const phases = computed(() => currentPattern.value.phases)
const currentPhase = computed(() => phases.value[currentPhaseIndex.value])

const patternOptions = computed(() => 
  breathingPatterns.map((pattern, index) => ({
    title: pattern.name,
    value: index
  }))
)

const startExercise = () => {
  isActive.value = true
  currentPhaseIndex.value = 0
  phaseTimeLeft.value = currentPattern.value.phaseDurations[0]
  
  intervalId = setInterval(() => {
    phaseTimeLeft.value--
    
    if (phaseTimeLeft.value <= 0) {
      // Move to next phase
      currentPhaseIndex.value = (currentPhaseIndex.value + 1) % phases.value.length
      phaseTimeLeft.value = currentPattern.value.phaseDurations[currentPhaseIndex.value]
    }
  }, 1000)
}

const stopExercise = () => {
  isActive.value = false
  currentPhaseIndex.value = 0
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const changePattern = () => {
  if (isActive.value) {
    stopExercise()
  }
}

// Cleanup on unmount
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style lang="scss" scoped>
.breathing-exercise {
  max-width: 500px;
  margin: 0 auto;
}

.breathing-display {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.breathing-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #68d391, #48bb78);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  
  &.breathing-active {
    animation: breathingCycle var(--duration, 16s) ease-in-out infinite;
  }
  
  @keyframes breathingCycle {
    0%, 100% { 
      transform: scale(1);
      background: linear-gradient(135deg, #68d391, #48bb78);
    }
    25% { 
      transform: scale(1.2);
      background: linear-gradient(135deg, #90cdf4, #68d391);
    }
    50% { 
      transform: scale(1.2);
      background: linear-gradient(135deg, #90cdf4, #68d391);
    }
    75% { 
      transform: scale(0.8);
      background: linear-gradient(135deg, #a0785a, #68d391);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    &.breathing-active {
      animation: none;
    }
  }
}

.breathing-inner {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.breathing-text {
  .phase-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 4px;
  }
  
  .pattern-name {
    font-size: 0.875rem;
    color: #718096;
  }
}

.breathing-instructions {
  margin-bottom: 24px;
}

.phase-indicator {
  margin-top: 16px;
}

.breathing-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.pattern-selector {
  margin-top: 16px;
}

.exercise-info {
  text-align: left;
}
</style>
