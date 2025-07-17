<template>
  <ZenCard class="meditation-timer text-center">
    <div class="timer-display mb-6">
      <BreathingElement :animate="isRunning" :duration="8">
        <div class="timer-circle">
          <v-progress-circular
            :model-value="progress"
            :size="200"
            :width="8"
            color="zen-green"
            class="timer-progress"
          >
            <div class="timer-text">
              <div class="time-display">{{ formattedTime }}</div>
              <div class="timer-label">{{ isRunning ? 'Meditating' : 'Ready' }}</div>
            </div>
          </v-progress-circular>
        </div>
      </BreathingElement>
    </div>

    <div class="timer-controls mb-4">
      <v-btn
        v-if="!isRunning && timeLeft === selectedDuration * 60"
        @click="startTimer"
        color="zen-green"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-play</v-icon>
        Start
      </v-btn>
      
      <v-btn
        v-if="isRunning"
        @click="pauseTimer"
        color="earth-brown"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-pause</v-icon>
        Pause
      </v-btn>
      
      <v-btn
        v-if="!isRunning && timeLeft < selectedDuration * 60"
        @click="resumeTimer"
        color="zen-green"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-play</v-icon>
        Resume
      </v-btn>
      
      <v-btn
        v-if="timeLeft < selectedDuration * 60"
        @click="resetTimer"
        variant="outlined"
        color="earth-brown"
        size="large"
        class="mx-2"
      >
        <v-icon left>mdi-refresh</v-icon>
        Reset
      </v-btn>
    </div>

    <div class="duration-selector">
      <v-chip-group
        v-model="selectedDuration"
        selected-class="text-white"
        color="zen-green"
        mandatory
      >
        <v-chip
          v-for="duration in durations"
          :key="duration"
          :value="duration"
          @click="changeDuration(duration)"
        >
          {{ duration }} min
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Completion Message -->
    <v-dialog v-model="showCompletion" max-width="400">
      <v-card class="text-center pa-6">
        <v-icon icon="mdi-check-circle" size="64" color="zen-green" class="mb-4" />
        <h3 class="zen-h3 mb-4">Meditation Complete!</h3>
        <p class="zen-body mb-6">
          Well done! You've completed {{ selectedDuration }} minutes of mindful meditation.
        </p>
        <v-btn color="zen-green" @click="showCompletion = false">
          Continue
        </v-btn>
      </v-card>
    </v-dialog>
  </ZenCard>
</template>

<script setup lang="ts">
const isRunning = ref(false)
const selectedDuration = ref(5) // minutes
const timeLeft = ref(5 * 60) // seconds
const showCompletion = ref(false)
let intervalId: NodeJS.Timeout | null = null

const durations = [5, 10, 15, 20, 30]

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const progress = computed(() => {
  const totalSeconds = selectedDuration.value * 60
  return ((totalSeconds - timeLeft.value) / totalSeconds) * 100
})

const startTimer = () => {
  isRunning.value = true
  intervalId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      completeTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  isRunning.value = false
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const resumeTimer = () => {
  startTimer()
}

const resetTimer = () => {
  pauseTimer()
  timeLeft.value = selectedDuration.value * 60
}

const completeTimer = () => {
  pauseTimer()
  showCompletion.value = true
  resetTimer()
}

const changeDuration = (duration: number) => {
  if (!isRunning.value) {
    selectedDuration.value = duration
    timeLeft.value = duration * 60
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
.meditation-timer {
  max-width: 400px;
  margin: 0 auto;
}

.timer-display {
  position: relative;
}

.timer-circle {
  position: relative;
  display: inline-block;
}

.timer-progress {
  transform: rotate(-90deg);
}

.timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .time-display {
    font-size: 2rem;
    font-weight: 600;
    color: #2d3748;
    line-height: 1;
  }
  
  .timer-label {
    font-size: 0.875rem;
    color: #718096;
    margin-top: 4px;
  }
}

.timer-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.duration-selector {
  margin-top: 16px;
}
</style>
