# Wisp Technologies - Shopify-Inspired Landing Page

A cutting-edge, responsive landing page for Wisp Technologies built with a **cyan-black-white color scheme** and inspired by Shopify's layout structure. This minimalist, futuristic design emphasizes scalability from startups to enterprises through asymmetrical layouts, digital wisp aesthetics, and intelligent micro-interactions.

## 🎨 Design Philosophy

### Visual Concept
**"Digital Wisps in a Void"** - Imagine sleek, glowing energy pulses flowing through a black expanse, symbolizing cutting-edge innovation, precision, and reliability.

### Color Palette
- **Cyan (#00FFFF)**: Primary accent for CTAs, icons, highlights - represents AI intelligence
- **Black (#000000)**: Background for depth and focus
- **White (#FFFFFF)**: Text, borders, secondary elements for high contrast

### Typography
- **Headlines**: Orbitron (bold, sci-fi inspired) - H1 at 3rem with 0.1em letter-spacing
- **Body**: Inter (modern, readable) - lighter weights for accessibility

## 📐 Design Structure

Follows the `design.json` specification file included in the project:

```json
{
  "colors": {
    "primary": "#00FFFF",
    "background": "#000000", 
    "text": "#FFFFFF"
  },
  "typography": {
    "headline": "Orbitron, sans-serif",
    "body": "Inter, sans-serif"
  }
}
```

## 🏗️ Page Sections

### 1. **Hero Section** (Shopify-inspired)
- **Layout**: Asymmetrical grid - headline left, expertise details right
- **Background**: Liquid Ether (Aurora) with black and cyan pulses
- **Logo**: Placeholder for Wisp Technologies logo
- **CTA**: "Start Building" button with Click Spark effect (cyan sparkles)
- **Features**: Energy pulse hover animation, magnetic interaction

### 2. **About/Introduction Section**
- **Layout**: Asymmetrical grid with text left, SVG illustration right
- **Content**: Platform overview with bullet points
- **Animation**: FadeContent with emerging signal effects
- **Visual**: Custom SVG network diagram showing AI-web integration

### 3. **Services Section** (Segmented by Context)
Four service groups inspired by Shopify's multichannel approach:
- **Web Development for Online Presence**
- **AI Solutions for Intelligent Automation**
- **Bespoke Software for Custom Needs**
- **Consulting for Scalable Growth**

**Features**: Staggered card grid, GlareHover effects, Magnet interactions

### 4. **Case Studies Section**
Three real-world examples (fictional) demonstrating impact:
- TechStart Solutions: 2x growth, 45% faster load times
- GlobalManu Corp: 50% efficiency gain, 30% cost reduction
- HealthMetrics Pro: 80% faster diagnostics, 100% HIPAA compliant

**Layout**: Asymmetrical alternating (text/graphics swap sides)

### 5. **Performance Highlights Section**
Echo of Shopify's performance claims with key metrics:
- 15% Faster AI Insights
- 99.9% Uptime Guarantee
- 100% Security Compliant
- 3x Performance Boost

**Design**: Stat grid with animated progress bars and hover glows

### 6. **Testimonials Section**
Four client testimonials with:
- BlurText typewriter effect (mimics code deployment)
- Cyan glow borders
- Asymmetrical carousel layout

### 7. **Contact/Footer Section**
- **Layout**: Form left, company info right
- **Form Effects**: Ripple effect on focus (cyan ripples)
- **Background**: Particles (subtle cyan/white particles in black space)
- **CTA**: "Start Your Project Today"

## 🛠 Technologies Used

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) (Pages Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **WebGL**: [OGL 1.0](https://github.com/oframe/ogl) for 3D particle effects
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Next.js Font Optimization (Google Fonts)
- **TypeScript**: Full type safety
- **Package Manager**: pnpm

## 📦 ReactBits Components

Custom implementations optimized for Wisp Technologies:

1. **Aurora** (Liquid Ether) - WebGL flowing background (Hero only)
2. **ClickSpark** - Cyan particle explosion on clicks
3. **Particles** - 3D particle system (Footer background)
4. **Magnet** - Magnetic attraction for interactive elements
5. **GlareHover** - Cyan glare animation on card hover
6. **FadeContent** - Scroll-triggered fade-in animations
7. **BlurText** - Typewriter-style text reveal

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
cd wisp-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📱 Responsive Design

- **Desktop**: Full asymmetrical layouts with advanced animations
- **Tablet**: Adjusted grids, maintained interactions
- **Mobile**: Stacked vertical layouts, optimized touch targets
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px

## 🎯 Key Features

### Shopify-Inspired Structure
✅ Hero section emphasizing ambition and scalability  
✅ Platform introduction with value propositions  
✅ Segmented services by business context  
✅ Real-world case studies with measurable results  
✅ Performance highlights with specific metrics  
✅ Integrated testimonials from diverse clients  
✅ Strong CTAs throughout ("Start Building", "Start Your Project Today")

### Visual Excellence
✅ Pure cyan-black-white color scheme (no gradients)  
✅ Asymmetrical layouts (no centered symmetry)  
✅ Energy pulse animations and digital wisp aesthetics  
✅ Isolated micro-interactions (no overlapping effects)  
✅ WebGL backgrounds for depth without distraction

### Technical Excellence
✅ Optimized Next.js font loading  
✅ Type-safe TypeScript implementation  
✅ Tailwind CSS utility classes  
✅ Performance-optimized WebGL (low particle counts)  
✅ Accessibility-focused (keyboard navigation, ARIA labels)

## 📊 Performance Metrics

- **First Load JS**: ~174 KB (optimized)
- **Build Time**: ~3.2s
- **Lighthouse Score**: Target 90+ (all metrics)
- **WebGL Overhead**: Minimal (60fps maintained)

## 🗂️ Project Structure

```
wisp-portfolio/
├── design.json                    # Design specification
├── src/
│   ├── components/
│   │   ├── Aurora.tsx            # WebGL liquid background
│   │   ├── ClickSpark.tsx        # Click particle effects
│   │   ├── Particles.tsx         # 3D particle system
│   │   ├── Magnet.tsx            # Magnetic interaction
│   │   ├── GlareHover.tsx        # Glare hover effect
│   │   ├── FadeContent.tsx       # Scroll fade animation
│   │   ├── BlurText.tsx          # Typewriter text effect
│   │   ├── HeroSection.tsx       # Landing hero
│   │   ├── AboutSection.tsx      # Platform introduction
│   │   ├── ServicesSection.tsx   # Service offerings
│   │   ├── CaseStudiesSection.tsx # Success stories
│   │   ├── PerformanceSection.tsx # Metrics highlights
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   └── ContactSection.tsx    # Contact form + footer
│   ├── pages/
│   │   ├── _app.tsx             # App wrapper with fonts
│   │   ├── index.tsx            # Main landing page
│   │   └── api/hello.ts         # Example API route
│   ├── styles/
│   │   └── globals.css          # Global styles (cyan theme)
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── package.json
├── design.json                  # Design specification
├── README.md
└── USAGE.md
```

## 🎨 Customization Guide

### Update Colors

```css
/* src/styles/globals.css */
:root {
  --cyan-primary: #00FFFF;  /* Change primary accent */
  --black-bg: #000000;      /* Change background */
  --white-text: #FFFFFF;    /* Change text color */
}
```

### Modify Content

Each section component is self-contained. Edit the respective file:
- **Hero**: `src/components/HeroSection.tsx`
- **Services**: Update `serviceGroups` array in `ServicesSection.tsx`
- **Case Studies**: Update `caseStudies` array in `CaseStudiesSection.tsx`
- **Testimonials**: Update `testimonials` array in `TestimonialsSection.tsx`

### Adjust Animations

```tsx
// Speed up/slow down Aurora
<Aurora speed={0.8} />  // Increase for faster

// More particles
<Particles particleCount={150} />  // Increase count

// Longer spark duration
<ClickSpark duration={1000} />  // Milliseconds
```

## 🔧 Design.json Integration

The `design.json` file serves as the single source of truth for design decisions. Import it for programmatic theming:

```tsx
import design from '@/design.json';

// Use design specs
const primaryColor = design.colors.primary; // #00FFFF
```

## 🌐 Browser Support

- Chrome/Edge (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Mobile browsers (iOS Safari, Chrome Mobile) ✅

WebGL effects require modern browser support.

## 📈 SEO & Performance

- **Meta Tags**: Optimized title, description, theme-color
- **Semantic HTML**: Proper heading hierarchy
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Self-hosted via Next.js

## 🔐 Security

- Environment variables for sensitive data
- Form validation (client + server recommended)
- No API keys in client code
- CORS policies configured

## 📝 License

This project is proprietary to Wisp Technologies.

## 🤝 Contributing

For inquiries or collaboration:
- **Email**: contact@wisp.tech
- **LinkedIn**: [Company Profile](#)
- **GitHub**: [Company Repository](#)

---

**Built with precision, powered by innovation** ✨

© 2025 Wisp Technologies. All rights reserved.
