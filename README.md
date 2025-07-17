# 🧘 ZenMind - Yoga & Wellness Studio

*A calming, wellness-focused website for ZenMind yoga & wellness studio*

## 📋 Project Overview

- **Type**: WEBSITE (Yoga & Wellness Studio)
- **Tech Stack**: Vue.js 3, Nuxt.js, Vuetify 3, SCSS, Sanity CMS
- **Status**: PLANNING
- **Priority**: HIGH
- **Live URL**: https://zenmind.com
- **Repository**: https://github.com/hardik88t/zenmind
- **Project ID**: `cmd6ykd7l0001i0zx5ewy5e5l`

## 🎯 What This Project Does

ZenMind is a comprehensive wellness platform that connects yoga practitioners and wellness seekers with a tranquil digital experience. The website features class schedules, instructor profiles, meditation guides, wellness blog content, and an integrated booking system, all designed to promote mindfulness, holistic health, and community connection.

## ✨ Key Features

- [x] **Interactive Class Scheduling**: Real-time class availability with filtering and booking integration
- [x] **Meditation Center**: Guided meditation resources, breathing exercises, and mindfulness practices
- [x] **Instructor Profiles**: Detailed teacher information with specializations and booking capabilities
- [x] **Wellness Blog**: Mindfulness articles, yoga tips, and lifestyle content with search functionality
- [x] **Membership System**: Comprehensive plans with benefits comparison and signup forms
- [x] **Virtual Previews**: Class preview functionality for better user experience
- [x] **Content Management**: Dynamic content via Sanity CMS for easy updates
- [x] **Mobile-First Design**: Fully responsive, accessibility-focused user experience

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **Sanity Studio** account for content management
- **Netlify** account for deployment

### Installation
```bash
# Clone the repository
git clone https://github.com/hardik88t/zenmind.git
cd zenmind

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your Sanity project details and API keys

# Run the development server
npm run dev
# or
yarn dev
```

### Usage
- **Development**: Visit `http://localhost:3000` to view the local development server
- **Content Management**: Access Sanity Studio for content updates
- **Build**: Run `npm run build` for production build
- **Preview**: Use `npm run preview` to test production build locally

## 🏗️ Architecture

ZenMind follows a modern JAMstack architecture with the following components:

- **Frontend**: Vue.js 3 with Composition API and Nuxt.js for SSR/SSG
- **UI Framework**: Vuetify 3 with Material Design components
- **Styling**: SCSS for advanced CSS preprocessing and custom theming
- **Content Management**: Sanity CMS for headless content management
- **Deployment**: Netlify for continuous deployment and hosting
- **Performance**: Optimized for Core Web Vitals and accessibility

### Page Structure (8 Pages)
1. **Homepage** (`/`) - Hero, featured classes, testimonials
2. **Classes** (`/classes`) - Interactive schedules and booking
3. **Instructors** (`/instructors`) - Teacher profiles and specializations
4. **Wellness Blog** (`/blog`) - Articles and mindfulness content
5. **Meditation Center** (`/meditation`) - Guided resources and tools
6. **About Us** (`/about`) - Studio story and mission
7. **Membership** (`/membership`) - Plans and pricing
8. **Contact** (`/contact`) - Location and inquiries

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run component tests
npm run test:unit

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

**Netlify Deployment:**
1. Connect GitHub repository to Netlify
2. Configure build settings: `npm run build`
3. Set environment variables in Netlify dashboard
4. Deploy automatically on push to main branch

**Manual Deployment:**
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📚 Development Documentation

For development workflow, coding practices, and project management integration, see:
- **[DEV.md](./DEV.md)** - Development guide and project manager integration
- **[PLAN.md](./PLAN.md)** - Project planning and feature tracking
- **[DEVLOG.md](./DEVLOG.md)** - Detailed development progress log
