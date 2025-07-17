<template>
  <ZenCard class="class-schedule">
    <div class="schedule-header mb-6">
      <h3 class="zen-h3 text-center mb-4">Weekly Class Schedule</h3>
      <div class="date-navigation d-flex justify-center align-center mb-4">
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click="previousWeek"
        />
        <div class="mx-4 text-center">
          <div class="zen-body-lg">{{ weekRange }}</div>
          <div class="zen-body-sm text-text-muted">{{ currentYear }}</div>
        </div>
        <v-btn
          icon="mdi-chevron-right"
          variant="text"
          @click="nextWeek"
        />
      </div>
    </div>

    <div class="schedule-grid">
      <div class="time-column">
        <div class="time-header"></div>
        <div
          v-for="time in timeSlots"
          :key="time"
          class="time-slot"
        >
          {{ time }}
        </div>
      </div>

      <div
        v-for="(day, dayIndex) in daysOfWeek"
        :key="day"
        class="day-column"
      >
        <div class="day-header">
          <div class="day-name">{{ day }}</div>
          <div class="day-date">{{ getDayDate(dayIndex) }}</div>
        </div>
        
        <div
          v-for="(time, timeIndex) in timeSlots"
          :key="`${day}-${time}`"
          class="class-slot"
        >
          <div
            v-if="getClassForSlot(dayIndex, timeIndex)"
            class="class-card"
            :class="getClassForSlot(dayIndex, timeIndex)?.difficulty.toLowerCase()"
            @click="selectClass(getClassForSlot(dayIndex, timeIndex))"
          >
            <div class="class-name">{{ getClassForSlot(dayIndex, timeIndex)?.name }}</div>
            <div class="class-instructor">{{ getClassForSlot(dayIndex, timeIndex)?.instructor }}</div>
            <div class="class-spots">{{ getClassForSlot(dayIndex, timeIndex)?.spotsLeft }} spots left</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Class Details Dialog -->
    <v-dialog v-model="showClassDialog" max-width="500">
      <v-card v-if="selectedClass">
        <v-card-title class="d-flex align-center">
          <v-icon :icon="getClassIcon(selectedClass.type)" class="mr-2" color="zen-green" />
          {{ selectedClass.name }}
        </v-card-title>
        
        <v-card-text>
          <div class="mb-4">
            <v-chip
              :color="getDifficultyColor(selectedClass.difficulty)"
              size="small"
              class="mr-2"
            >
              {{ selectedClass.difficulty }}
            </v-chip>
            <v-chip size="small" variant="outlined">
              {{ selectedClass.duration }} min
            </v-chip>
          </div>
          
          <p class="zen-body mb-4">{{ selectedClass.description }}</p>
          
          <div class="class-details">
            <div class="detail-row">
              <strong>Instructor:</strong> {{ selectedClass.instructor }}
            </div>
            <div class="detail-row">
              <strong>Time:</strong> {{ selectedClass.time }}
            </div>
            <div class="detail-row">
              <strong>Duration:</strong> {{ selectedClass.duration }} minutes
            </div>
            <div class="detail-row">
              <strong>Spots Available:</strong> {{ selectedClass.spotsLeft }} / {{ selectedClass.totalSpots }}
            </div>
          </div>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn
            variant="text"
            @click="showClassDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="zen-green"
            :disabled="selectedClass.spotsLeft === 0"
            @click="bookClass"
          >
            {{ selectedClass.spotsLeft === 0 ? 'Full' : 'Book Class' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Booking Confirmation -->
    <v-snackbar
      v-model="showBookingConfirmation"
      color="zen-green"
      timeout="3000"
    >
      Class booked successfully! Check your email for confirmation.
      <template #actions>
        <v-btn
          variant="text"
          @click="showBookingConfirmation = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </ZenCard>
</template>

<script setup lang="ts">
interface ClassSession {
  name: string
  instructor: string
  time: string
  duration: number
  difficulty: string
  type: string
  description: string
  spotsLeft: number
  totalSpots: number
  day: number
  timeSlot: number
}

const currentWeek = ref(0)
const selectedClass = ref<ClassSession | null>(null)
const showClassDialog = ref(false)
const showBookingConfirmation = ref(false)

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const timeSlots = ['6:00 AM', '7:30 AM', '9:00 AM', '10:30 AM', '12:00 PM', '5:30 PM', '7:00 PM', '8:30 PM']

// Sample class data
const classSchedule: ClassSession[] = [
  {
    name: 'Morning Hatha',
    instructor: 'Sarah Williams',
    time: '7:30 AM',
    duration: 60,
    difficulty: 'Beginner',
    type: 'hatha',
    description: 'Start your day with gentle poses and mindful breathing.',
    spotsLeft: 8,
    totalSpots: 15,
    day: 0, // Monday
    timeSlot: 1
  },
  {
    name: 'Vinyasa Flow',
    instructor: 'Michael Chen',
    time: '6:00 AM',
    duration: 75,
    difficulty: 'Intermediate',
    type: 'vinyasa',
    description: 'Dynamic flowing sequences to energize your morning.',
    spotsLeft: 3,
    totalSpots: 12,
    day: 1, // Tuesday
    timeSlot: 0
  },
  {
    name: 'Yin Yoga',
    instructor: 'Elena Rodriguez',
    time: '7:00 PM',
    duration: 90,
    difficulty: 'All Levels',
    type: 'yin',
    description: 'Deep relaxation and passive stretching.',
    spotsLeft: 12,
    totalSpots: 20,
    day: 2, // Wednesday
    timeSlot: 6
  },
  {
    name: 'Power Yoga',
    instructor: 'David Thompson',
    time: '5:30 PM',
    duration: 60,
    difficulty: 'Advanced',
    type: 'power',
    description: 'Challenging athletic practice to build strength.',
    spotsLeft: 0,
    totalSpots: 10,
    day: 3, // Thursday
    timeSlot: 5
  },
  {
    name: 'Restorative',
    instructor: 'Lisa Park',
    time: '8:30 PM',
    duration: 75,
    difficulty: 'All Levels',
    type: 'restorative',
    description: 'Gentle poses with props for deep relaxation.',
    spotsLeft: 15,
    totalSpots: 18,
    day: 4, // Friday
    timeSlot: 7
  }
]

const currentYear = computed(() => new Date().getFullYear())

const weekRange = computed(() => {
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + (currentWeek.value * 7))
  
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  
  return `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`
})

const getDayDate = (dayIndex: number) => {
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + (currentWeek.value * 7))
  
  const dayDate = new Date(startOfWeek)
  dayDate.setDate(startOfWeek.getDate() + dayIndex)
  
  return dayDate.getDate()
}

const getClassForSlot = (dayIndex: number, timeIndex: number) => {
  return classSchedule.find(cls => cls.day === dayIndex && cls.timeSlot === timeIndex)
}

const selectClass = (classSession: ClassSession | undefined) => {
  if (classSession) {
    selectedClass.value = classSession
    showClassDialog.value = true
  }
}

const bookClass = () => {
  if (selectedClass.value && selectedClass.value.spotsLeft > 0) {
    selectedClass.value.spotsLeft--
    showClassDialog.value = false
    showBookingConfirmation.value = true
  }
}

const previousWeek = () => {
  currentWeek.value--
}

const nextWeek = () => {
  currentWeek.value++
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'success'
    case 'intermediate':
      return 'warning'
    case 'advanced':
      return 'error'
    case 'all levels':
      return 'info'
    default:
      return 'info'
  }
}

const getClassIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'hatha':
      return 'mdi-meditation'
    case 'vinyasa':
      return 'mdi-run'
    case 'yin':
      return 'mdi-flower'
    case 'power':
      return 'mdi-dumbbell'
    case 'restorative':
      return 'mdi-spa'
    default:
      return 'mdi-yoga'
  }
}
</script>

<style lang="scss" scoped>
.class-schedule {
  overflow-x: auto;
}

.schedule-grid {
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  gap: 1px;
  background-color: #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  min-width: 800px;
}

.time-column,
.day-column {
  background-color: white;
}

.time-header,
.day-header {
  background-color: #f7fafc;
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
}

.day-header {
  .day-name {
    font-size: 0.875rem;
    color: #2d3748;
  }
  
  .day-date {
    font-size: 0.75rem;
    color: #718096;
    margin-top: 2px;
  }
}

.time-slot,
.class-slot {
  padding: 8px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-slot {
  font-size: 0.75rem;
  color: #718096;
  text-align: center;
  background-color: #f7fafc;
}

.class-card {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &.beginner {
    background-color: #f0fff4;
    border: 1px solid #48bb78;
  }
  
  &.intermediate {
    background-color: #fffaf0;
    border: 1px solid #ed8936;
  }
  
  &.advanced {
    background-color: #fff5f5;
    border: 1px solid #f56565;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .class-name {
    font-size: 0.75rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 2px;
  }
  
  .class-instructor {
    font-size: 0.625rem;
    color: #718096;
    margin-bottom: 2px;
  }
  
  .class-spots {
    font-size: 0.625rem;
    color: #4a5568;
  }
}

.detail-row {
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .schedule-grid {
    font-size: 0.75rem;
  }
  
  .class-card {
    padding: 4px;
    
    .class-name {
      font-size: 0.625rem;
    }
    
    .class-instructor,
    .class-spots {
      font-size: 0.5rem;
    }
  }
}
</style>
