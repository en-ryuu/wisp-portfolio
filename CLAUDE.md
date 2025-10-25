# Wisp Technologies Portfolio - Claude Development Guide

## 🏗️ **Project Architecture**

### **Tech Stack**
- **Framework**: Next.js 15 with App Router
- **React**: Version 19.1.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Animations**: GSAP 3.13.0 with @gsap/react
- **Theme System**: next-themes for light/dark mode switching
- **Page TransiItions**: next-transition-router for animated route changes
- **State Management**: React hooks and context (no external state library)

### **Build Configuration**
- Uses Turbopack for faster development and builds
- PostCSS with Tailwind CSS 4
- ESLint for code quality
- TypeScript strict mode enabled

## 📁 **Project Structure & Organization**

### **Directory Layout**
```
src/
├── app/
│   ├── (pages)/              # Route groups for pages
│   │   ├── (main)/           # Home page
│   │   │   ├── _sections/    # Page-specific sections
│   │   │   └── page.tsx      # Page entry point
│   │   ├── about/            # About page
│   │   ├── projects/         # Projects page
│   │   │   └── [id]/         # Dynamic project detail pages
│   │   └── services/         # Services page
│   ├── layout.tsx            # Root layout with theme provider
│   ├── providers.tsx         # App providers and transition router
│   └── globals.css           # Global styles and CSS variables
├── components/
│   ├── ui/                   # shadcn/ui components (button, badge, etc.)
│   ├── Navbar.tsx            # Main navigation
│   ├── Footer.tsx            # Footer component
│   ├── Loading.tsx           # Loading screen
│   ├── wisp-cursor.tsx       # Custom cursor component
│   ├── theme-toggle.tsx      # Theme switcher
│   └── theme-provider.tsx    # Theme context provider
├── hooks/
│   ├── useTextReveal.ts      # GSAP text reveal animation
│   ├── useSmoothReveal.ts    # Intersection observer based reveal
│   ├── useGSAPStagger.ts     # Stagger animations for containers
│   ├── useIntersectionReveal.ts # Intersection observer utilities
│   ├── useCustomImageReveal.ts  # Image reveal animations
│   └── useParallaxProjects.ts   # Parallax effects
├── config/
│   ├── main.ts               # Home page configuration data
│   └── about.ts              # About page configuration data
├── data/
│   └── projects.ts           # Project data
└── lib/
    └── utils.ts              # Utility functions (cn helper)
```

### **File Naming Conventions**
- **Components**: PascalCase (e.g., `HeroSection.tsx`, `Navbar.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useTextReveal.ts`)
- **Config/Data**: camelCase (e.g., `main.ts`, `projects.ts`)
- **Sections**: Organized in `_sections/` folders within page directories
- **Pages**: Use `page.tsx` for route segments

### **Import Patterns**
- **Always use direct imports**: Never use index.ts barrel exports
- **Use path aliases**: `@/` maps to `src/`
- **Example imports**:
  ```typescript
  import { Button } from "@/components/ui/button";
  import { useTextReveal } from "@/hooks/useTextReveal";
  import { featuredProjects } from "@/config/main";
  import Navbar from "@/components/Navbar";
  ```

## 🎨 **Design System**

### **Design Philosophy**
- **Minimal & Clean**: No borders, generous whitespace, crisp typography
- **Modern & Futuristic**: Clean lines, subtle gradients, contemporary feel
- **Professional**: Text-only approach, no emojis in UI/code
- **Wisp Theme**: Light guiding through darkness, illuminating technology
- **Accessibility**: Proper contrast ratios, semantic HTML, ARIA labels

### **Color System**
- Uses **oklch color space** for consistent, perceptually uniform colors
- All colors defined as CSS variables in `src/app/globals.css`
- Supports automatic light/dark mode switching

#### **CSS Variables Usage**
```css
/* Primary Colors */
--background: oklch(1 0 0);           /* Light: white */
--foreground: oklch(0.145 0 0);       /* Light: near-black */

/* Dark Mode Overrides (in .dark class) */
--background: oklch(0.145 0 0);       /* Dark: near-black */
--foreground: oklch(0.985 0 0);       /* Dark: near-white */

/* Semantic Colors */
--primary, --secondary, --accent, --muted, --destructive
--card, --popover, --border, --input, --ring
```

#### **Opacity Variations**
Use Tailwind opacity modifiers for depth:
- `/10` - 10% opacity (subtle backgrounds)
- `/20` - 20% opacity (borders, dividers)
- `/60` - 60% opacity (secondary text)
- `/70` - 70% opacity (muted text)
- `/90` - 90% opacity (primary text)

**Example usage**:
```tsx
<div className="bg-foreground/10 text-foreground/70 border-foreground/20">
```

#### **Gradient Patterns**
```tsx
// Subtle background gradient
className="bg-gradient-to-br from-background via-background to-muted/20"

// Alternative gradient
className="bg-gradient-to-tl from-background via-background to-muted/10"

// Radial gradient (inline style)
style={{
  background: "radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(0,0,0,0.05) 100%)"
}}
```

### **Typography**
- **Fonts**:
  - Geist Sans (`--font-geist-sans`) for UI and headings
  - Geist Mono (`--font-geist-mono`) for technical text/code
- **Headings**: Large, thin fonts with tight tracking
  ```tsx
  <h1 className="text-8xl font-thin tracking-tight text-foreground">
  ```
- **Body**: Clean, readable text with proper line height
  ```tsx
  <p className="text-lg text-foreground/60 leading-relaxed">
  ```
- **Hierarchy**: Clear visual hierarchy with size and weight variations

### **Spacing & Layout**
- **Generous whitespace**: Large margins and padding
- **Consistent spacing scale**: 6, 8, 12, 16, 20, 24px (Tailwind: 1.5, 2, 3, 4, 5, 6)
- **Grid layouts**: Clean grid systems with proper gaps
- **No borders**: Avoid border classes, use spacing and backgrounds instead
- **Responsive**: Mobile-first approach with breakpoints (sm, md, lg, xl)

### **Component Style Patterns**

#### **Button Styles**
```tsx
// Primary Button
<button className="px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">

// Secondary Button
<button className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
```

#### **Section Layouts**
```tsx
// Standard section container
<section className="min-h-screen px-6 py-20 relative">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>

// Hero section pattern
<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
  <div className="text-center max-w-5xl">
    {/* Hero content */}
  </div>
</div>
```

## 🎭 **Animation System**

### **Animation Philosophy**
- **Smooth & Subtle**: Power easing curves, appropriate durations
- **Performance First**: Use transform and opacity for 60fps animations
- **Intersection Observer**: Trigger animations on scroll
- **Cleanup**: Always clean up GSAP animations in useEffect returns
- **Loading States**: Provide visual feedback during transitions

### **Animation Hooks**

#### **1. useTextReveal**
Basic text reveal animation for single elements.

```typescript
import { useTextReveal } from "@/hooks/useTextReveal";

// In component
const titleRef = useTextReveal<HTMLHeadingElement>({
  delay: 0.2,        // Delay before animation starts (seconds)
  duration: 1.2,     // Animation duration (seconds)
  from: "bottom",    // Direction: "bottom" | "top" | "left" | "right"
});

// Usage
<h1 ref={titleRef}>Animated Title</h1>
```

**Options**:
- `delay?: number` - Default: 0
- `duration?: number` - Default: 0.8
- `ease?: string` - Default: "power2.out"
- `from?: "bottom" | "top" | "left" | "right"` - Default: "bottom"

#### **2. useStaggeredTextReveal**
Animate multiple elements with stagger effect.

```typescript
import { useStaggeredTextReveal } from "@/hooks/useTextReveal";

// Create refs for multiple elements
const contentRefs = useStaggeredTextReveal<HTMLDivElement>(3, {
  delay: 0.8,
  stagger: 0.3,      // Delay between each element
  duration: 0.8,
  from: "bottom",
});

// Usage
{items.map((item, index) => (
  <div key={item.id} ref={contentRefs[index]}>
    {item.content}
  </div>
))}
```

#### **3. useSmoothReveal**
Intersection observer based reveal animations.

```typescript
import { useSmoothReveal } from "@/hooks/useSmoothReveal";

const cardRef = useSmoothReveal<HTMLDivElement>({
  delay: 0,
  duration: 1.2,
  ease: "power3.out",
  from: "bottom",
  threshold: 0.15,              // Percentage of element visible to trigger
  rootMargin: "0px 0px -50px 0px", // Offset from viewport
  reverse: false,               // Animate out when leaving viewport
  scale: 0.95,                  // Initial scale
});

<div ref={cardRef}>Content that animates on scroll</div>
```

#### **4. useGSAPStagger**
Container-based stagger animations using data attributes.

```typescript
import { useGSAPStagger } from "@/hooks/useGSAPStagger";

const containerRef = useGSAPStagger<HTMLDivElement>({
  delay: 0.2,
  duration: 1.0,
  stagger: 0.1,
  from: "bottom",
  threshold: 0.1,
  y: 60,            // Vertical offset
  x: 60,            // Horizontal offset (for left/right)
});

// Usage
<div ref={containerRef}>
  <div data-stagger-item>Item 1</div>
  <div data-stagger-item>Item 2</div>
  <div data-stagger-item>Item 3</div>
</div>
```

### **Animation Timing Guidelines**
- **Text reveals**: 800ms - 1200ms duration
- **Interactions**: 300ms duration
- **Hover effects**: 300ms with power2 easing
- **Loading states**: 2000ms+ for meditative feel
- **Stagger delays**: 100ms - 300ms between items
- **Page transitions**: 400ms out, 1200ms in

### **Animation Best Practices**
1. **Always cleanup**: Return cleanup function in useEffect
   ```typescript
   useEffect(() => {
     const tl = gsap.timeline();
     // ... animations
     return () => {
       tl.kill();
     };
   }, []);
   ```

2. **Use GSAP's useGSAP hook**: For better performance and automatic cleanup
   ```typescript
   import { useGSAP } from "@gsap/react";

   useGSAP(() => {
     gsap.to(element, { ... });
   }, { dependencies: [dep1, dep2] });
   ```

3. **Set initial states**: Use `gsap.set()` before animations
   ```typescript
   gsap.set(element, { y: 50, opacity: 0 });
   gsap.to(element, { y: 0, opacity: 1, duration: 0.8 });
   ```

4. **Smooth easing**: Prefer power2/power3 easing curves
   - `power2.out` - Smooth deceleration
   - `power3.out` - More pronounced deceleration
   - `power2.in` - Acceleration for exit animations

## ⚛️ **Component Development**

### **Client vs Server Components**
- **Default to Server Components**: Unless you need:
  - Browser APIs (window, document)
  - Event handlers (onClick, onChange)
  - React hooks (useState, useEffect, etc.)
  - Context consumers
- **Use "use client" directive**: At the top of client components
  ```typescript
  "use client";

  import { useState } from "react";
  ```

### **Component Patterns**

#### **Page Component Structure**
```typescript
"use client";
import Section1 from "./_sections/Section1";
import Section2 from "./_sections/Section2";

export default function PageName() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Section1 />
      <Section2 />
    </div>
  );
}
```

#### **Section Component Structure**
```typescript
"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { TransitionLink } from "next-transition-router";

export default function HeroSection() {
  // Animation hooks
  const titleRef = useTextReveal({ delay: 0.2, duration: 1.2, from: "bottom" });

  return (
    <section className="min-h-screen px-6 py-20 relative">
      {/* Background graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
        {/* Grid pattern, gradients, etc. */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 ref={titleRef}>Title</h1>
      </div>
    </section>
  );
}
```

#### **Data-Driven Components**
Separate data from components using config files:

```typescript
// src/config/main.ts
export const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export const featuredProjects = [
  {
    id: "1",
    title: "Project Name",
    description: "Project description...",
    image: "/project-image.png",
    technologies: ["React", "Node.js"],
  },
  // ... more projects
];

// In component
import { navigationLinks } from "@/config/main";

{navigationLinks.map((link) => (
  <Link key={link.href} href={link.href}>
    {link.label}
  </Link>
))}
```

### **shadcn/ui Component Integration**

#### **Installing Components**
```bash
npx shadcn@latest add button
npx shadcn@latest add dropdown-menu
npx shadcn@latest add badge
```

#### **Using shadcn Components**
```typescript
// Always import directly from component file
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Usage
<Button variant="default" size="lg">
  Click Me
</Button>

<Button variant="ghost" size="icon">
  <Icon />
</Button>
```

#### **Customizing shadcn Components**
- Modify in `src/components/ui/[component].tsx`
- Use CSS variables for theming
- Use `cn()` utility for conditional classes
- Maintain consistent variant patterns

#### **Utility Function: cn()**
Merge Tailwind classes properly:

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  "more-classes"
)}>
```

## 🌙 **Theme System**

### **Theme Setup**
Theme provider configured in `src/app/layout.tsx`:

```typescript
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={false}
  disableTransitionOnChange={false}
  storageKey="wisp-theme"
>
  {children}
</ThemeProvider>
```

### **Theme Toggle Component**
Located at `src/components/theme-toggle.tsx`:

```typescript
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled>
      <Sun className="h-4 w-4" />
    </Button>;
  }

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}
```

### **Theme-Aware Components**
Always use CSS variables instead of hardcoded colors:

```tsx
// ✅ Good - Uses CSS variables
<div className="bg-background text-foreground border-border">

// ❌ Bad - Hardcoded colors
<div className="bg-white text-black border-gray-200">

// ✅ Good - With opacity
<p className="text-foreground/60">

// ✅ Good - Theme-aware inline styles
<div style={{
  backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
}}>
```

### **Testing Themes**
Always test new components in both light and dark modes:
1. Check contrast ratios for accessibility
2. Verify opacity variations look good
3. Test hover/active states
4. Check gradient visibility

## 🎯 **WispCursor Component**

### **Features**
- **Desktop Only**: Automatically disabled on mobile (< 768px)
- **Error Detection**: Disables when Next.js errors present
- **Magnetic Effect**: Snaps to interactive elements on hover
- **Theme Aware**: Different styles for light/dark mode
- **Smooth Animations**: GSAP-powered cursor movement

### **Cursor Behavior**
- **Dark Mode**: White glowing wisp with blur effects
- **Light Mode**: Black outlined circle with ultra blur
- **Hover State**: Transforms into rounded rectangle framing the element
- **Click State**: Scale down effect on mousedown

### **Implementation Details**
```typescript
// Cursor is disabled when:
// 1. On mobile devices (width < 768px)
// 2. Touch interfaces detected
// 3. Next.js build/runtime errors present

// In globals.css
cursor: none !important;  // Hide default cursor

// Component mounts only when:
const shouldShow = mounted && !isMobile && !hasError;
```

### **Customization Props**
```typescript
interface WispCursorProps {
  targetSelector?: string;    // CSS selector for interactive elements
  hideDefaultCursor?: boolean; // Hide system cursor
  magneticStrength?: number;   // Strength of magnetic effect
}
```

## 🔄 **Navigation & Routing**

### **TransitionRouter**
Page transitions configured in `src/app/providers.tsx`:

```typescript
import { TransitionRouter } from "next-transition-router";

<TransitionRouter
  auto={true}
  leave={(next) => {
    // Fade out animation
    gsap.to(element, { opacity: 0, y: -30, duration: 0.4 });
    next();
  }}
  enter={(next) => {
    // Slide in animation
    gsap.fromTo(element,
      { y: "100vh", opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    );
    next();
  }}
>
  {children}
</TransitionRouter>
```

### **Navigation Links**
Always use `TransitionLink` from next-transition-router:

```typescript
import { Link as TransitionLink } from "next-transition-router";

<TransitionLink href="/about">
  <button className="...">Navigate</button>
</TransitionLink>
```

### **Hash Navigation**
For same-page scroll navigation:

```typescript
// Navigate to hash
router.push("/#contact");

// Scroll to element
const element = document.getElementById("contact");
element?.scrollIntoView({ behavior: "smooth" });

// In useEffect for hash on mount
useEffect(() => {
  if (window.location.hash === "#contact") {
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 1000); // Wait for animations
  }
}, []);
```

### **Navbar Pattern**
Configuration-driven navigation:

```typescript
const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

// Desktop nav
<div className="hidden md:flex items-center space-x-8">
  {navigationLinks.map((link) => (
    <TransitionLink key={link.href} href={link.href}>
      {link.label}
    </TransitionLink>
  ))}
</div>

// Mobile nav with state
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

## 📱 **Responsive Design**

### **Breakpoints**
```
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Laptops
xl: 1280px  - Desktops
```

### **Mobile-First Approach**
```tsx
// Base styles = mobile
// Add larger screens with prefixes
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">

<div className="flex-col sm:flex-row gap-6">

<div className="hidden md:flex">  {/* Desktop only */}
<div className="md:hidden">       {/* Mobile only */}
```

### **Responsive Patterns**

#### **Typography Scaling**
```tsx
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin">
<p className="text-base sm:text-lg md:text-xl lg:text-2xl">
```

#### **Layout Adaptations**
```tsx
// Grid: 1 column mobile, 2-3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Flex: column mobile, row desktop
<div className="flex flex-col sm:flex-row gap-6">

// Padding/Margin: smaller mobile, larger desktop
<section className="px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
```

#### **Navigation**
```tsx
// Desktop navigation
<div className="hidden md:flex items-center space-x-8">

// Mobile menu toggle
<button className="md:hidden">
  <MenuIcon />
</button>

// Mobile menu
{isMobileMenuOpen && (
  <div className="md:hidden">
    {/* Mobile menu content */}
  </div>
)}
```

## ✅ **Code Quality & Best Practices**

### **TypeScript**
- Use strict type checking
- Define interfaces for props and data
- Use generic types for reusable hooks
- Avoid `any` type - use `unknown` or specific types

```typescript
// ✅ Good - Typed props interface
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSection({ title, subtitle, className }: HeroSectionProps) {
  // ...
}

// ✅ Good - Generic hook
export function useTextReveal<T extends HTMLElement = HTMLElement>(
  options: TextRevealOptions = {}
) {
  const ref = useRef<T>(null);
  return ref;
}
```

### **React Best Practices**

#### **Hooks Rules**
- Only call hooks at top level
- Only call hooks in React functions
- Use dependency arrays correctly

```typescript
// ✅ Good - Proper dependency array
useEffect(() => {
  // Effect code
}, [dependency1, dependency2]);

// ❌ Bad - Missing dependencies
useEffect(() => {
  doSomething(prop); // Uses prop but not in deps
}, []);

// ✅ Good - GSAP cleanup
useEffect(() => {
  const tl = gsap.timeline();
  tl.to(element, { ... });

  return () => {
    tl.kill(); // Cleanup
  };
}, []);
```

#### **State Management**
```typescript
// ✅ Good - Local state for UI
const [isOpen, setIsOpen] = useState(false);

// ✅ Good - Derived state
const isActive = pathname === href;

// ✅ Good - Refs for DOM access
const elementRef = useRef<HTMLDivElement>(null);

// ❌ Bad - State for derived values
const [isActive, setIsActive] = useState(false);
useEffect(() => {
  setIsActive(pathname === href);
}, [pathname, href]);
```

#### **Performance Optimization**
```typescript
// ✅ Good - Memoize expensive calculations
const processedData = useMemo(() => {
  return expensiveOperation(data);
}, [data]);

// ✅ Good - Memoize callbacks
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);

// ✅ Good - Code splitting
const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <Loading />,
});
```

### **Hydration Safety**
Prevent hydration mismatches:

```typescript
// ✅ Good - Mount detection
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return <Skeleton />; // or null
}

// ✅ Good - Suppress hydration warning
<html lang="en" suppressHydrationWarning>

// ✅ Good - Client-only rendering
if (typeof window === "undefined") return null;
```

### **Accessibility**

```tsx
// ✅ Good - Semantic HTML
<nav>
  <button aria-label="Toggle menu">
    <span className="sr-only">Menu</span>
    <MenuIcon />
  </button>
</nav>

// ✅ Good - Keyboard navigation
<div role="button" tabIndex={0} onKeyDown={handleKeyDown}>

// ✅ Good - Focus management
<Button autoFocus>Primary Action</Button>

// ✅ Good - Screen reader text
<span className="sr-only">Toggle theme</span>
```

### **Code Organization**

#### **Imports Order**
```typescript
// 1. React imports
import { useState, useEffect } from "react";

// 2. Third-party libraries
import { gsap } from "gsap";
import { Link } from "next-transition-router";

// 3. Internal components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

// 4. Hooks
import { useTextReveal } from "@/hooks/useTextReveal";

// 5. Config/Data
import { navigationLinks } from "@/config/main";

// 6. Types
import type { Project } from "@/types";
```

#### **Component Structure**
```typescript
"use client"; // If needed

// Imports

// Types/Interfaces
interface ComponentProps {
  // ...
}

// Constants (if used only in this file)
const ANIMATION_DURATION = 0.8;

// Helper functions (if used only in this file)
function formatData(data: Data) {
  // ...
}

// Main component
export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState();
  const ref = useRef();

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    // JSX
  );
}
```

### **Naming Conventions**

```typescript
// ✅ Components - PascalCase
function HeroSection() {}
function ProjectCard() {}

// ✅ Hooks - camelCase with "use"
function useTextReveal() {}
function useScrollProgress() {}

// ✅ Utils - camelCase
function formatDate() {}
function calculateTotal() {}

// ✅ Constants - UPPER_SNAKE_CASE
const MAX_ITEMS = 10;
const API_BASE_URL = "https://api.example.com";

// ✅ Props interfaces - PascalCase with "Props"
interface ButtonProps {}
interface HeroSectionProps {}

// ✅ Type aliases - PascalCase
type User = {};
type Project = {};
```

## 🚀 **Development Workflow**

### **Commands**
```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npx tsc --noEmit

# Install shadcn component
npx shadcn@latest add [component-name]
```

### **Adding New Pages**
1. Create page directory: `src/app/(pages)/new-page/`
2. Create `page.tsx` file
3. Create `_sections/` folder for sections
4. Add to navigation in `src/components/Navbar.tsx`
5. Create config file in `src/config/new-page.ts` if needed

### **Adding New Components**
1. Create component file in appropriate directory
2. Use PascalCase for filename
3. Add "use client" if client-side features needed
4. Export as default for page-level components
5. Export named for utility components

### **Adding Animations**
1. Import appropriate hook (`useTextReveal`, `useSmoothReveal`, etc.)
2. Create ref with hook options
3. Attach ref to element
4. Test animation timing and easing
5. Ensure cleanup in useEffect

### **Testing Checklist**
- [ ] Test in both light and dark themes
- [ ] Test on mobile, tablet, and desktop
- [ ] Test with keyboard navigation
- [ ] Check animations are smooth (60fps)
- [ ] Verify links and navigation work
- [ ] Check for console errors/warnings
- [ ] Test with slow network (animations during transitions)
- [ ] Verify accessibility (screen reader, keyboard)

## 🔄 **Dynamic Requirements**

**IMPORTANT**: This CLAUDE.md file should be treated as a living document. When new requirements or patterns emerge:

### **Update This File When:**
1. **New coding patterns established**: Add to best practices
2. **New libraries integrated**: Add to tech stack and usage guide
3. **New component patterns created**: Add to component development
4. **New animation patterns**: Add to animation system
5. **New design patterns**: Add to design system
6. **User mentions specific requirements**: Add relevant section

### **Example Updates:**
- User says "use axios with best practices" → Add HTTP client section
- User requests new animation pattern → Add to animation hooks
- User wants new color scheme → Update color system
- User adds new utility functions → Add to code organization

### **Maintaining This File:**
- Keep examples concise and practical
- Update outdated patterns immediately
- Remove deprecated approaches
- Add cross-references between related sections
- Keep tech stack versions current

## 📚 **Key Dependencies Reference**

```json
{
  "dependencies": {
    "@gsap/react": "^2.1.2",           // GSAP React integration
    "gsap": "^3.13.0",                 // Animation library
    "next": "15.5.4",                  // Framework
    "next-themes": "^0.4.6",           // Theme management
    "next-transition-router": "^0.2.11", // Route transitions
    "react": "19.1.0",                 // React library
    "@radix-ui/react-*": "latest",     // UI primitives
    "class-variance-authority": "^0.7.1", // CVA for variants
    "tailwind-merge": "^3.3.1",        // Merge Tailwind classes
    "lucide-react": "^0.544.0"         // Icons
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",      // Tailwind v4
    "tailwindcss": "^4",               // CSS framework
    "typescript": "^5"                 // Type checking
  }
}
```

## 🎓 **Learning Resources**

- **Next.js 15 Docs**: https://nextjs.org/docs
- **GSAP Docs**: https://gsap.com/docs/v3/
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Radix UI**: https://www.radix-ui.com/
- **next-themes**: https://github.com/pacocoursey/next-themes

---

**Last Updated**: Generated from codebase analysis
**Maintainers**: Keep this file in sync with actual codebase patterns
**Version**: 1.0.0
