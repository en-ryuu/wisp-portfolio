# Wisp Technologies Landing Page - Usage Guide

## 🎯 Quick Start

### Development Mode

```bash
# Install dependencies (first time only)
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Production Build

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## 🎨 Customization Guide

### Changing Colors

Edit `src/styles/globals.css`:

```css
:root {
  --cosmic-blue: #0A2540;      /* Primary background */
  --indigo-deep: #4A00E0;      /* Gradient accent */
  --cyan-glow: #00FFFF;        /* CTA buttons, highlights */
  --purple-mystical: #8B5CF6;  /* Service cards, borders */
}
```

### Updating Content

#### Hero Section
Edit `src/components/HeroSection.tsx`:
- Change headline in `<h1>` tag
- Update subheading description
- Modify expertise bullet points

#### About Section
Edit `src/components/AboutSection.tsx`:
- Update the `aboutPoints` array
- Modify main description text
- Adjust SVG illustration if needed

#### Services
Edit `src/components/ServicesSection.tsx`:
- Update the `services` array with your offerings
- Change icons (import from `lucide-react`)
- Modify titles and descriptions

#### Testimonials
Edit `src/components/TestimonialsSection.tsx`:
- Update the `testimonials` array
- Add/remove client quotes
- Change author names and roles

#### Contact Form
Edit `src/components/ContactSection.tsx`:
- Modify form fields
- Update `handleSubmit` function for your backend
- Change social media links

### Adjusting Animations

#### Aurora Background Speed
```tsx
// In HeroSection.tsx
<Aurora 
  speed={0.8}        // Increase for faster animation
  amplitude={1.5}    // Control wave height
  blend={0.7}        // Adjust transparency blend
/>
```

#### Particle Effects
```tsx
// In ContactSection.tsx
<Particles
  particleCount={100}     // More particles = denser effect
  speed={0.05}            // Animation speed
  particleBaseSize={80}   // Size of particles
/>
```

#### Click Spark Intensity
```tsx
// In HeroSection.tsx or ContactSection.tsx
<ClickSpark 
  sparkCount={16}    // Number of spark particles
  sparkRadius={30}   // Distance sparks travel
  duration={800}     // Animation duration in ms
/>
```

#### Fade Animations
```tsx
// In any section
<FadeContent 
  delay={200}        // Delay before animation starts (ms)
  duration={1000}    // Animation duration (ms)
  blur={true}        // Enable blur effect
/>
```

### Typography Changes

#### Headline Font
Currently using **Orbitron**. To change:

1. Update the Google Fonts import in `src/styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

2. Update the heading styles:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'YourFont', sans-serif;
}
```

#### Body Font
Currently using **Inter**. Change in `globals.css`:
```css
body {
  font-family: 'YourFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`:
```tsx
// src/components/NewSection.tsx
import React from 'react';
import FadeContent from './FadeContent';

export default function NewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeContent>
          {/* Your content here */}
        </FadeContent>
      </div>
    </section>
  );
}
```

2. Import and add to `src/pages/index.tsx`:
```tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewSection />  {/* Add your new section */}
      <AboutSection />
      {/* ... other sections */}
    </main>
  );
}
```

### Modifying Responsive Breakpoints

Tailwind uses these default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use them in your components:
```tsx
<div className="text-2xl lg:text-5xl">  {/* Small on mobile, large on desktop */}
  Responsive Text
</div>
```

### Custom Utility Classes

Add to `src/styles/globals.css`:
```css
@layer utilities {
  .your-custom-class {
    /* Your styles */
  }
}
```

## 🎭 Animation Tips

### Performance

1. **Use `will-change` sparingly**: Already added to animated elements
2. **Limit particle counts**: Reduce on mobile for better performance
3. **Disable animations on mobile** if needed:
```tsx
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

{!isMobile && <Particles />}
```

### Timing Coordination

For sequential animations, use increasing delays:
```tsx
<FadeContent delay={0}>First</FadeContent>
<FadeContent delay={200}>Second</FadeContent>
<FadeContent delay={400}>Third</FadeContent>
```

## 🐛 Troubleshooting

### WebGL Not Working

If Aurora or Particles don't appear:
1. Check browser WebGL support: [webglreport.com](https://webglreport.com)
2. Try a different browser
3. Check console for errors

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Styling Issues

```bash
# Regenerate Tailwind classes
pnpm dev
# Then hard refresh browser (Ctrl+Shift+R)
```

## 📱 Mobile Optimization

The site is fully responsive. Key mobile features:
- Stacked layouts on small screens
- Reduced particle counts
- Simplified animations
- Touch-friendly buttons (min 44x44px)
- Optimized font sizes

Test on multiple devices or use browser DevTools.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static export:
```bash
pnpm build
```

Deploy the `.next` folder to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Your own server with Node.js

## 💡 Best Practices

1. **Keep animations subtle**: Don't overwhelm users
2. **Test on real devices**: Emulators aren't enough
3. **Optimize images**: Use WebP format, proper sizing
4. **Monitor performance**: Use Lighthouse in Chrome DevTools
5. **Accessibility**: Ensure keyboard navigation works

## 🔐 Security

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Validate all form inputs on the server
- Implement CSRF protection for forms

## 📊 Analytics (Optional)

To add analytics:

1. Install package:
```bash
pnpm add @vercel/analytics
```

2. Add to `_app.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

---

For more help, refer to the main README.md or contact support.

