# Development Guide

## 📋 Overview

This guide covers:
- **Project Manager Integration** - How to connect and interact with the central project management system
- **General Coding Practices** - Universal best practices for all projects
- **Documentation Maintenance** - How to keep DEV.md, PLAN.md, and DEVLOG.md updated

**⚠️ Important**: Update this DEV.md file regularly as your project evolves. Add project-specific practices, tools, and workflows that are unique to your tech stack.

## 🔗 Project Manager Integration

### Database Schema (Key Tables)

**Projects Table:**
```sql
- id (UUID, primary key)
- name (string, required)
- type (WEBAPP/WEBSITE/CLI/API/MOBILE/DESKTOP/etc.)
- status (PLANNING/ACTIVE/COMPLETED/ON_HOLD/ARCHIVED)
- priority (LOW/MEDIUM/HIGH/URGENT)
- briefDescription (text)
- detailedDescription (text, optional)
- liveUrl, githubUrl, localPath (strings, optional)
- techStack, tags (JSON arrays as strings)
- createdAt, updatedAt (timestamps)
```

**ProjectItem Table:**
```sql
- id (UUID, primary key)
- projectId (UUID, foreign key)
- name (string, required)
- description (text, optional)
- type (FEATURE/BUG/IMPROVEMENT/TASK/RESEARCH/DOCUMENTATION)
- status (TODO/IN_PROGRESS/COMPLETED/BLOCKED/CANCELLED)
- priority (LOW/MEDIUM/HIGH/URGENT)
- labels (JSON array as string)
- createdAt, updatedAt (timestamps)
```

### Connection Setup

**Local Development:**
```bash
# Set environment variable
export PROJECT_MANAGER_DB="file:../project-manager/prisma/dev.db"
# Or relative to your project location
export PROJECT_MANAGER_DB="file:/path/to/project-manager/prisma/dev.db"
```

**Production:**
```bash
# For hosted database
export PROJECT_MANAGER_DB="postgresql://user:pass@host:port/db"
# Or MySQL
export PROJECT_MANAGER_DB="mysql://user:pass@host:port/db"
```

### Common Operations

**Query Your Project's Tasks:**
```bash
# Get all tasks for your project
sqlite3 $PROJECT_MANAGER_DB "
  SELECT pi.name, pi.type, pi.status, pi.priority, pi.description 
  FROM ProjectItem pi 
  JOIN Project p ON pi.projectId = p.id 
  WHERE p.name = 'YOUR_PROJECT_NAME' 
  ORDER BY pi.priority DESC, pi.createdAt ASC;
"

# Get high-priority TODO items
sqlite3 $PROJECT_MANAGER_DB "
  SELECT pi.name, pi.description, pi.priority 
  FROM ProjectItem pi 
  JOIN Project p ON pi.projectId = p.id 
  WHERE p.name = 'YOUR_PROJECT_NAME' 
  AND pi.priority IN ('HIGH', 'URGENT') 
  AND pi.status = 'TODO';
"
```

**Update Task Status:**
```bash
# Mark task as completed
sqlite3 $PROJECT_MANAGER_DB "
  UPDATE ProjectItem 
  SET status='COMPLETED', updatedAt=datetime('now') 
  WHERE name='TASK_NAME' 
  AND projectId=(SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME');
"

# Mark task as in progress
sqlite3 $PROJECT_MANAGER_DB "
  UPDATE ProjectItem 
  SET status='IN_PROGRESS', updatedAt=datetime('now') 
  WHERE name='TASK_NAME' 
  AND projectId=(SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME');
"
```

**Add New Tasks:**
```bash
# Add a new feature
sqlite3 $PROJECT_MANAGER_DB "
  INSERT INTO ProjectItem (id, projectId, name, description, type, status, priority, labels, createdAt, updatedAt)
  VALUES (
    lower(hex(randomblob(16))),
    (SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME'),
    'New Feature Name',
    'Feature description',
    'FEATURE',
    'TODO',
    'MEDIUM',
    '[]',
    datetime('now'),
    datetime('now')
  );
"
```

### MCP Server Integration (Future)

When the Project Manager MCP server is available, you'll be able to use AI tools directly:
- AI assistants can query your project tasks
- Automatic status updates when you complete work
- Better integration with development workflow

## 🛠️ General Coding Practices

### Git Workflow
- **Commit regularly** - Don't let changes pile up
- **Use conventional commits** - `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- **Write meaningful commit messages** - Explain what and why, not just what
- **Create branches for features** - Don't work directly on main
- **Tag releases** - Use semantic versioning (v1.0.0, v1.1.0, etc.)

```bash
# Good commit examples
git commit -m "feat: add user authentication with JWT"
git commit -m "fix: resolve database connection timeout issue"
git commit -m "docs: update API documentation for new endpoints"
```

### Security Best Practices
- **Never commit secrets** - Use .env files for sensitive data
- **Add .env to .gitignore** - But include .env.example
- **Use environment variables** - For API keys, database URLs, etc.
- **Validate all inputs** - Sanitize user data
- **Keep dependencies updated** - Regular security updates
- **Use HTTPS everywhere** - Especially in production

```bash
# .env.example
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
API_KEY=your_api_key_here
JWT_SECRET=your_jwt_secret_here
```

### Code Quality
- **Use linting tools** - ESLint, Prettier, etc.
- **Write tests** - Unit tests, integration tests
- **Document your code** - Comments for complex logic
- **Follow naming conventions** - Consistent and descriptive names
- **Keep functions small** - Single responsibility principle
- **Handle errors properly** - Don't ignore exceptions

### Versioning & Releases
- **Use semantic versioning** - MAJOR.MINOR.PATCH
- **Tag releases in git** - `git tag v1.0.0`
- **Maintain a CHANGELOG** - Document what changed
- **Test before releasing** - Don't break production
- **Backup before major changes** - Safety first

### Documentation Standards
- **Keep README.md current** - Update as features change
- **Document API endpoints** - If you have an API
- **Include setup instructions** - For new developers
- **Add troubleshooting section** - Common issues and solutions

## 📝 Documentation Maintenance

### When to Update DEV.md
- **Add new tools or dependencies** - Document setup and usage
- **Change development workflow** - Update processes
- **Add project-specific practices** - Customize for your tech stack
- **Discover new best practices** - Share knowledge

### When to Update PLAN.md
- **Add new features** - Document what you plan to build
- **Change priorities** - Update what's important
- **Complete milestones** - Mark progress
- **Discover new requirements** - Add to backlog

### When to Update DEVLOG.md
- **Complete significant work** - Document what was done
- **Make important decisions** - Record reasoning
- **Solve difficult problems** - Share solutions
- **Learn something new** - Document insights

## 🎯 ZenMind Project-Specific Practices

### Vue.js 3 & Nuxt.js Best Practices

**Vue.js 3 Composition API:**
```javascript
// Use Composition API for better TypeScript support and logic reuse
import { ref, computed, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const classes = ref([])
    const filteredClasses = computed(() =>
      classes.value.filter(c => c.isActive)
    )

    onMounted(async () => {
      classes.value = await $fetch('/api/classes')
    })

    return { classes, filteredClasses }
  }
})
```

**Nuxt.js File-based Routing:**
```
pages/
├── index.vue              # Homepage (/)
├── classes/
│   ├── index.vue         # Classes listing (/classes)
│   └── [slug].vue        # Individual class (/classes/yoga-basics)
├── instructors/
│   ├── index.vue         # Instructors listing (/instructors)
│   └── [id].vue          # Instructor profile (/instructors/jane-doe)
├── blog/
│   ├── index.vue         # Blog listing (/blog)
│   └── [slug].vue        # Blog post (/blog/mindfulness-tips)
├── meditation.vue         # Meditation center (/meditation)
├── about.vue             # About page (/about)
├── membership.vue        # Membership (/membership)
└── contact.vue           # Contact (/contact)
```

**Vuetify 3 Component Usage:**
```vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="zen-card" elevation="2">
          <v-card-title class="zen-title">
            {{ class.name }}
          </v-card-title>
          <v-card-text>
            <v-chip
              :color="getDifficultyColor(class.difficulty)"
              size="small"
            >
              {{ class.difficulty }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
```

### Development Environment Setup

**Required Software:**
- Node.js v18.0.0 or higher
- npm or yarn package manager
- Git for version control
- VS Code with Vue.js extensions

**Environment Variables (.env):**
```bash
# Sanity CMS Configuration
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Netlify Configuration
NETLIFY_SITE_ID=your_site_id
NETLIFY_AUTH_TOKEN=your_auth_token

# Development
NUXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Development Commands:**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Lint code
npm run lint

# Format code
npm run format
```

### Code Style Guidelines

**Vue.js Component Structure:**
```vue
<template>
  <!-- Template content -->
</template>

<script setup lang="ts">
// Imports
import { ref, computed } from 'vue'

// Props and emits
interface Props {
  title: string
  classes?: YogaClass[]
}

const props = withDefaults(defineProps<Props>(), {
  classes: () => []
})

// Reactive data
const isLoading = ref(false)

// Computed properties
const filteredClasses = computed(() => {
  return props.classes.filter(c => c.isActive)
})

// Methods
const handleBooking = (classId: string) => {
  // Booking logic
}
</script>

<style lang="scss" scoped>
// Component-specific styles
.zen-card {
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
}
</style>
```

**File Naming Conventions:**
- Components: PascalCase (`ClassCard.vue`, `InstructorProfile.vue`)
- Pages: kebab-case (`class-schedule.vue`, `instructor-detail.vue`)
- Composables: camelCase with `use` prefix (`useClassBooking.ts`)
- Utils: camelCase (`formatDate.ts`, `validateEmail.ts`)

**Import/Export Patterns:**
```javascript
// Named exports for utilities
export const formatDate = (date: Date) => { /* ... */ }
export const validateEmail = (email: string) => { /* ... */ }

// Default export for components
export default defineComponent({ /* ... */ })

// Composables
export const useClassBooking = () => {
  // Composable logic
  return { bookClass, cancelBooking }
}
```

### Testing Strategy

**Testing Framework Setup:**
```bash
# Install testing dependencies
npm install --save-dev @nuxt/test-utils vitest @vue/test-utils
```

**Unit Testing (Vitest):**
```javascript
// tests/components/ClassCard.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ClassCard from '~/components/ClassCard.vue'

describe('ClassCard', () => {
  it('renders class information correctly', () => {
    const wrapper = mount(ClassCard, {
      props: {
        class: {
          name: 'Hatha Yoga',
          difficulty: 'Beginner',
          duration: 60
        }
      }
    })

    expect(wrapper.text()).toContain('Hatha Yoga')
    expect(wrapper.text()).toContain('Beginner')
  })
})
```

**E2E Testing (Playwright):**
```javascript
// tests/e2e/booking.spec.ts
import { test, expect } from '@playwright/test'

test('user can book a yoga class', async ({ page }) => {
  await page.goto('/classes')
  await page.click('[data-testid="class-card-hatha-yoga"]')
  await page.click('[data-testid="book-class-button"]')

  await expect(page.locator('[data-testid="booking-confirmation"]'))
    .toBeVisible()
})
```

### Deployment Process

**Netlify Deployment:**
```bash
# Build command
npm run generate

# Publish directory
dist

# Environment variables (set in Netlify dashboard)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
NUXT_PUBLIC_BASE_URL=https://zenmind.com
```

**Deployment Checklist:**
- [ ] Environment variables configured
- [ ] Build passes without errors
- [ ] All tests pass
- [ ] Lighthouse scores > 90
- [ ] Accessibility audit passed
- [ ] SEO meta tags configured
- [ ] Sitemap generated
- [ ] Analytics tracking setup

### Wellness-Focused Development Considerations

**Mindful User Experience:**
- **Loading States**: Use calming animations and breathing-rhythm transitions
- **Color Psychology**: Implement earth tones and soft greens for tranquility
- **Typography**: Choose readable, zen-inspired fonts that promote calmness
- **Spacing**: Use generous white space to avoid visual clutter
- **Micro-interactions**: Subtle, gentle animations that don't overwhelm

**Accessibility for Wellness:**
```scss
// Ensure sufficient color contrast for meditation content
.meditation-text {
  color: #2d3748; // Dark gray for readability
  background: #f7fafc; // Light background
  line-height: 1.6; // Comfortable reading
  font-size: clamp(1rem, 2.5vw, 1.125rem); // Responsive text
}

// Reduce motion for users with vestibular disorders
@media (prefers-reduced-motion: reduce) {
  .breathing-animation {
    animation: none;
  }
}
```

**Performance for Mindfulness:**
- Optimize images for fast loading (use WebP format)
- Implement lazy loading for meditation videos
- Minimize JavaScript bundle size for smooth interactions
- Use service workers for offline meditation content

### UI/UX Guidelines for Wellness

**Design Principles:**
1. **Simplicity**: Clean, uncluttered interfaces that promote focus
2. **Consistency**: Uniform spacing, colors, and interactions throughout
3. **Accessibility**: WCAG 2.1 AA compliance for inclusive wellness
4. **Performance**: Fast loading times to maintain user calm
5. **Mobile-First**: Responsive design for on-the-go wellness

**Color Palette:**
```scss
// Primary wellness colors
$zen-green: #68d391;      // Calming green
$earth-brown: #a0785a;    // Grounding brown
$soft-blue: #90cdf4;      // Peaceful blue
$warm-white: #fefefe;     // Pure white
$gentle-gray: #e2e8f0;    // Soft gray

// Semantic colors
$success: #48bb78;        // Achievement green
$warning: #ed8936;        // Gentle orange
$error: #f56565;          // Soft red
$info: #4299e1;           // Calm blue
```

**Typography Scale:**
```scss
// Zen-inspired typography
$font-family-primary: 'Inter', 'Segoe UI', sans-serif;
$font-family-heading: 'Playfair Display', serif;

$font-sizes: (
  xs: 0.75rem,    // 12px - Small labels
  sm: 0.875rem,   // 14px - Body text
  base: 1rem,     // 16px - Default
  lg: 1.125rem,   // 18px - Large body
  xl: 1.25rem,    // 20px - Small headings
  2xl: 1.5rem,    // 24px - Medium headings
  3xl: 1.875rem,  // 30px - Large headings
  4xl: 2.25rem    // 36px - Hero text
);
```

**Component Guidelines:**
```vue
<!-- Wellness-focused button component -->
<template>
  <button
    class="zen-button"
    :class="[`zen-button--${variant}`, { 'zen-button--loading': loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <v-progress-circular
      v-if="loading"
      size="20"
      indeterminate
      color="white"
    />
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.zen-button {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &--primary {
    background: linear-gradient(135deg, #68d391, #48bb78);
    color: white;
  }

  &--secondary {
    background: #e2e8f0;
    color: #2d3748;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
}
</style>
```

### Security Best Practices for Wellness Apps

**Data Privacy:**
- Implement GDPR-compliant data handling
- Secure user meditation progress and personal wellness data
- Use HTTPS everywhere, especially for booking and payment forms
- Sanitize all user inputs in blog comments and contact forms

**Content Security:**
```javascript
// Nuxt.js security configuration
export default defineNuxtConfig({
  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'img-src': ["'self'", 'data:', 'https://cdn.sanity.io'],
        'media-src': ["'self'", 'https://cdn.sanity.io'],
        'script-src': ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com']
      }
    }
  }
})
```

**API Security:**
```javascript
// Secure API endpoints for class bookings
export default defineEventHandler(async (event) => {
  // Rate limiting for booking endpoints
  await rateLimit(event, { max: 10, window: '1m' })

  // Validate user authentication
  const user = await validateAuthToken(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authentication required'
    })
  }

  // Sanitize input data
  const body = await readBody(event)
  const sanitizedData = sanitizeBookingData(body)

  return await processBooking(sanitizedData)
})
```

---

**Remember**: This DEV.md file should evolve with your project. Keep it updated and relevant to your current development practices, especially as you discover new wellness-focused UX patterns and accessibility improvements!
