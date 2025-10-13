# Wisp Technologies Design System

## 🎨 **Design Philosophy**
- **Minimal & Clean**: No borders, lots of whitespace, crisp typography
- **Modern & Futuristic**: Clean lines, subtle gradients, contemporary feel
- **No Emojis**: Professional, text-only approach
- **Wisp Theme**: Light guiding through darkness, illuminating technology

## 🎯 **Visual Guidelines**

### **Typography**
- **Headings**: Large, thin fonts with tight tracking
- **Body**: Clean, readable text with proper line height
- **Hierarchy**: Clear visual hierarchy with size and weight variations
- **Fonts**: Inter/SF Pro Display for headings, JetBrains Mono for technical text

### **Colors**
- **Background**: Clean gradients from background to muted/20
- **Text**: Foreground with opacity variations (60%, 70%, 90%)
- **Accents**: Subtle opacity variations for depth
- **No borders**: Clean, borderless design

### **Spacing**
- **Generous whitespace**: Large margins and padding
- **Grid layouts**: Clean grid systems with proper gaps
- **Consistent spacing**: 6, 8, 12, 16, 20, 24px scale

### **Animations**
- **GSAP Text Reveal**: Staggered text animations with clipPath masks
- **Smooth transitions**: 300ms duration, power2 easing
- **Hover effects**: Subtle scale and opacity changes
- **Loading states**: Ultra-slow, meditative animations

## 🧩 **Reusable Components**

### **Text Reveal Animation**
```typescript
// Use this hook for consistent text animations
const titleRef = useTextReveal({ delay: 0, duration: 0.8, from: "bottom" });
```

### **Button Styles**
```css
/* Primary Button */
.btn-primary {
  @apply px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105;
}

/* Secondary Button */
.btn-secondary {
  @apply px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5;
}
```

### **Section Layouts**
- **Hero Section**: Large typography, centered, minimal
- **Content Grid**: 2-3 columns, clean spacing
- **Stats Section**: Centered numbers with labels
- **Team Section**: Clean cards with photos and roles

## 🎭 **Animation Patterns**

### **Page Transitions**
- **Slide in from bottom**: Content slides up with opacity fade
- **Smooth loading**: Ultra-slow background animations
- **Text reveals**: Staggered clipPath animations

### **Hover Effects**
- **Scale transforms**: Subtle 1.05x scale on hover
- **Opacity changes**: Smooth opacity transitions
- **Gradient overlays**: Dynamic background changes

## 📱 **Responsive Design**
- **Mobile-first**: Clean mobile layouts
- **Breakpoints**: sm, md, lg, xl with proper scaling
- **Typography scaling**: Responsive text sizes
- **Grid adaptations**: Single column on mobile

## 🎨 **Color Palette**
```css
/* Primary Colors */
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);

/* Opacity Variations */
--foreground/10: 10% opacity
--foreground/20: 20% opacity
--foreground/60: 60% opacity
--foreground/70: 70% opacity
--foreground/90: 90% opacity

/* Gradients */
bg-gradient-to-br from-background via-background to-muted/20
bg-gradient-to-tl from-background via-background to-muted/10
```

## 🚀 **Implementation Notes**
- **No borders**: Avoid border classes, use spacing instead
- **Clean backgrounds**: Subtle gradients for depth
- **Consistent spacing**: Use Tailwind spacing scale
- **Animation timing**: 300ms for interactions, 800ms+ for reveals
- **Loading states**: Always provide visual feedback
- **Direct imports**: Always import components directly from their files, never use index.ts barrel exports

## 📝 **Content Guidelines**
- **Professional tone**: Technical but accessible
- **Wisp metaphor**: Light, guidance, illumination
- **No emojis**: Clean, professional text only
- **Clear hierarchy**: Obvious heading structure
- **Concise copy**: Clear, impactful messaging
