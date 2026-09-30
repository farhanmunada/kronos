# ARCHITECTURE Landing Page Kronos Kinetic Dwellings

**Status:** Gerbang 2 — Architecture documented. **STOP before code** — awaiting approval.

---

## 1. Tech Stack (Confirmed)

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | React 18 + Vite | Fast HMR, minimal config, ESM-native |
| **Styling** | Tailwind CSS v3 | Utility-first, custom palette config, light-mode optimized |
| **Forms** | React Hook Form | Lightweight, accessible, minimal rerenders |
| **Email** | Resend API | Next.js-friendly, Node.js serverless support, professional |
| **Fonts** | Google Fonts (Cinzel, Josefin Sans) | Web-optimized, no self-hosting complexity |
| **Animation** | Native CSS (transitions only) | Framer Motion deferred; minimal motion philosophy reduces bundle |
| **State** | React hooks (useState, useEffect) | No Redux/Context needed; component-scoped state sufficient |
| **Scroll Detection** | Intersection Observer (native) | Fade-in on scroll; no Scroll Behavior library needed |
| **Deploy** | Vercel | Edge Functions for Resend API integration, static hosting fallback |

---

## 2. Project Structure

```
kronos-kd/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Metrics.tsx
│   │   │   ├── PodExplorer.tsx
│   │   │   ├── Workflow.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Inquiry.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── FormField.tsx
│   ├── hooks/
│   │   ├── useScrollReveal.ts (Intersection Observer wrapper)
│   │   └── useFormState.ts (React Hook Form logic)
│   ├── data/
│   │   ├── metrics.ts
│   │   ├── pods.ts
│   │   ├── workflow.ts
│   │   └── projects.ts
│   ├── lib/
│   │   ├── resend.ts (Resend API client)
│   │   └── cn.ts (Tailwind classname merge utility)
│   ├── styles/
│   │   └── globals.css (Tailwind imports, Google Fonts)
│   ├── App.tsx (main component)
│   └── main.tsx (React entry)
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── pods/
│   │   ├── projects/
│   │   └── workflow/
│   └── fonts/ (if needed)
├── tailwind.config.js (palette config)
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .env.example (Resend API key placeholder)
```

---

## 3. Component Tree

```
App
├── Header
│   ├── BrandMark
│   ├── Navigation
│   │   ├── NavLink × 4
│   │   └── Inquiry CTA
│   └── Sticky/Fixed Logic
├── Hero
│   ├── Headline (Cinzel, clamp)
│   ├── SubHeadline
│   ├── HeroImage (large photography)
│   └── CTAButton (gold accent)
├── Metrics
│   ├── MetricCard × 4
│   │   ├── Number (large)
│   │   ├── Label
│   │   └── Description
│   └── useScrollReveal (fade-in)
├── PodExplorer
│   ├── PodCard × 2 (Vapour-Line, Monolith-X)
│   │   ├── Image
│   │   ├── Title
│   │   ├── FeatureList
│   │   └── ExploreLink
│   ├── useState (hoveredPod)
│   └── Hover state (opacity/shadow)
├── Workflow
│   ├── PhaseCard × 3
│   │   ├── PhaseNumber
│   │   ├── Title
│   │   ├── Description
│   │   └── SVG Diagram
│   └── useScrollReveal
├── Portfolio
│   ├── PortfolioItem × 2
│   │   ├── LargeImage
│   │   ├── Title
│   │   ├── Metadata (area, time, energy)
│   │   └── HoverState (opacity)
│   └── useState (hoveredProject)
├── Inquiry
│   ├── Form
│   │   ├── NameInput
│   │   ├── TerrainSelect (Coastal/Alpine/Forest/Urban)
│   │   ├── SqmInput
│   │   └── SubmitButton
│   ├── useFormState (React Hook Form)
│   ├── Resend API call on submit
│   └── Success/Error message
└── Footer
    ├── Copyright
    ├── LegalLinks
    ├── BrandMark
    └── ContactInfo
```

---

## 4. Data Flow

### Metrics Section
```typescript
// src/data/metrics.ts
export const metrics = [
  { id: 'tolerance', number: '0.02mm', label: 'Tolerance', description: 'Structural precision per node' },
  { id: 'assembly', number: '72 Hours', label: 'Assembly Time', description: 'Living pod installation complete' },
  { id: 'carbon', number: 'Net-Negative', label: 'Carbon Baseline', description: 'Lifecycle environmental impact' },
  { id: 'wind', number: 'Cat-5 Resistant', label: 'Wind Rating', description: 'Dynamic load dampening system' },
];

// Metrics.tsx: map over array, apply useScrollReveal hook to each card
```

### Pods Section
```typescript
// src/data/pods.ts
export const pods = [
  {
    id: 'vapour',
    name: 'Vapour-Line',
    size: '120m²',
    location: 'Cliffside Living',
    image: '/images/pods/vapour.jpg',
    features: ['Cantilevered carbon deck', 'Electrochromic glass facade', 'Off-grid water generator'],
  },
  {
    id: 'monolith',
    name: 'Monolith-X',
    size: '280m²',
    location: 'High-Altitude Haven',
    image: '/images/pods/monolith.jpg',
    features: ['Sub-zero thermal envelope', 'Integrated photovoltaic skin', 'Seismic decoupling base'],
  },
];

// PodExplorer.tsx: useState(hoveredPod), map over pods, apply hover class on hover
```

### Workflow Section
```typescript
// src/data/workflow.ts
export const phases = [
  {
    id: 'topo',
    number: '01',
    title: 'Topo-Scanned',
    description: 'Digital twin via LiDAR terrain scanning.',
    icon: 'LiDAR diagram (SVG)',
  },
  {
    id: 'fabrication',
    number: '02',
    title: 'Fabrication',
    description: 'Off-site modular production, aerospace precision, zero field waste.',
    icon: 'Assembly diagram (SVG)',
  },
  {
    id: 'rigging',
    number: '03',
    title: 'Rigging',
    description: 'Precision on-site assembly without vegetation disturbance.',
    icon: 'Installation diagram (SVG)',
  },
];
```

### Projects Section
```typescript
// src/data/projects.ts
export const projects = [
  {
    id: 'volcanic',
    title: 'The Volcanic Atrium',
    location: 'Merapi Foothills',
    image: '/images/projects/volcanic.jpg',
    metadata: { area: '450m²', time: '8 days', energy: '95% efficient' },
  },
  {
    id: 'fjall',
    title: 'Fjäll Sanctuary',
    location: 'Nordic Tundra',
    image: '/images/projects/fjall.jpg',
    metadata: { area: '320m²', time: '6 days', energy: '98% efficient' },
  },
];
```

### Form Submission (Inquiry)
```typescript
// src/lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(data: { name: string; terrain: string; sqm: number }) {
  const result = await resend.emails.send({
    from: 'inquiries@kronos-kd.com',
    to: process.env.INQUIRY_EMAIL || 'contact@kronos-kd.com',
    subject: `New Inquiry from ${data.name}`,
    html: `
      <h2>New Inquiry Received</h2>
      <p><strong>Client Name:</strong> ${data.name}</p>
      <p><strong>Target Terrain:</strong> ${data.terrain}</p>
      <p><strong>Target Size:</strong> ${data.sqm} m²</p>
    `,
  });
  return result;
}

// Inquiry.tsx: useFormState, call sendInquiry on submit via API route
```

### API Route (Next.js or Vite serverless fallback)
```typescript
// If Vite + Vercel: src/api/send-inquiry.ts (Vercel Functions)
// If Next.js: app/api/send-inquiry/route.ts

export async function POST(req: Request) {
  const body = await req.json();
  const result = await sendInquiry(body);
  return result.ok ? Response.json({ success: true }) : Response.json({ error: true }, { status: 500 });
}

// Inquiry.tsx: fetch('/api/send-inquiry', { method: 'POST', body: JSON.stringify(formData) })
```

---

## 5. Styling Strategy

### Tailwind Config (tailwind.config.js)
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#171717',
      'on-primary': '#FFFFFF',
      secondary: '#404040',
      'on-secondary': '#FFFFFF',
      accent: '#A16207',
      'on-accent': '#FFFFFF',
      background: '#FFFFFF',
      foreground: '#171717',
      card: '#FFFFFF',
      'card-foreground': '#171717',
      muted: '#E8ECF0',
      'muted-foreground': '#475569',
      border: '#E5E5E5',
      destructive: '#DC2626',
      'on-destructive': '#FFFFFF',
      ring: '#171717',
    },
    spacing: {
      // 8px scale (4px × multiplier)
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      48: '12rem',
      64: '16rem',
    },
    fontFamily: {
      serif: ['Cinzel', 'serif'],
      sans: ['Josefin Sans', 'sans-serif'],
    },
    fontSize: {
      // Responsive type scale
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      // Clamp for hero headline (responsive across viewports)
      headline: ['clamp(3rem, 10vw, 6rem)', '1.1'],
    },
  },
  plugins: [],
};
```

### Global Styles (src/styles/globals.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Light mode only (no dark: prefix) */
body {
  @apply bg-background text-foreground;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Smooth transitions globally */
* {
  transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

---

## 6. Hooks (Custom Logic)

### useScrollReveal.ts
```typescript
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
```

**Usage in Metrics.tsx:**
```tsx
const { ref, isVisible } = useScrollReveal();
return (
  <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>
    {/* Content fades in on scroll */}
  </div>
);
```

### useFormState.ts
```typescript
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export function useFormState() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting, submitStatus };
}
```

---

## 7. Styling Approach (Per-Section)

| Section | Layout | Motion | Key Classes |
|---------|--------|--------|-------------|
| **Hero** | Full-width, centered text + image | Fade-in on load (CSS opacity) | `text-headline font-serif`, `max-w-6xl mx-auto` |
| **Metrics** | 2×2 grid, generous gap | Fade-in on scroll (useScrollReveal) | `grid grid-cols-1 md:grid-cols-2 gap-12` |
| **Pod Explorer** | Flex side-by-side, hover lift | Hover: `hover:shadow-lg hover:opacity-95` | `flex gap-8 md:flex-col` |
| **Workflow** | 3-column grid, editorial | Fade-in on scroll | `grid grid-cols-1 md:grid-cols-3 gap-8` |
| **Portfolio** | Asymmetric editorial (image + text) | Hover: subtle opacity | `grid md:grid-cols-2 gap-16` |
| **Inquiry** | Centered form, clean inputs | Focus ring on inputs | `max-w-md mx-auto` |
| **Footer** | Horizontal flex, centered | None | `flex justify-between items-center` |

---

## 8. Environment Variables (.env.example)

```
VITE_RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
VITE_INQUIRY_EMAIL=contact@kronos-kd.com
```

---

## 9. Build & Deployment

### Vite Build
```bash
vite build  # outputs dist/
```

### Deploy to Vercel
1. Connect GitHub repo to Vercel
2. Set env vars (`RESEND_API_KEY`, `INQUIRY_EMAIL`)
3. Deploy (automatic on push to main)

### Fallback (Static + Serverless Functions)
- Vite: builds static HTML/JS
- Vercel Functions: wraps `/api/*` routes (Resend integration)

---

## 10. Implementation Order (Task Breakdown)

**Phase 1: Setup (Day 1)**
- [ ] Create Vite + React project
- [ ] Configure Tailwind + Google Fonts
- [ ] Setup git + .env
- [ ] Install dependencies (react-hook-form, resend)

**Phase 2: Layout & Components (Days 2–3)**
- [ ] Build Header + Navigation component
- [ ] Build Hero section (static content + placeholder image)
- [ ] Build Metrics section + useScrollReveal hook
- [ ] Build PodExplorer section
- [ ] Build Workflow section
- [ ] Build Portfolio section
- [ ] Build Footer

**Phase 3: Form & Submission (Day 4)**
- [ ] Build Inquiry form + useFormState hook
- [ ] Create API route (/api/send-inquiry)
- [ ] Integrate Resend API
- [ ] Test form submission

**Phase 4: Polish & Assets (Day 5)**
- [x] Replace placeholder images with real stock photography (Unsplash — see `src/data/media.ts`)
- [ ] Fine-tune spacing, hover states, transitions
- [ ] Accessibility audit (contrast, focus, semantic HTML)
- [ ] Responsive test (375px, 768px, 1440px)

**Phase 5: Performance & Deploy (Days 6–7)**
- [ ] Lighthouse audit (target ≥80)
- [ ] Test `prefers-reduced-motion`
- [ ] Deploy to Vercel
- [ ] QA on live URL

---

## 11. Files to Create (Summary)

**Total: ~20 files**
- 6 section components + 4 layout components + 4 UI primitives = 14 components
- 5 data files (metrics, pods, workflow, projects, form config)
- 2 hooks (useScrollReveal, useFormState)
- 1 lib (resend client + API route)
- 2 config (tailwind, vite)
- 1 global CSS
- 1 main App.tsx

---

## 12. Gerbang 2 Status

**Architecture complete.** 

**Blockers before implementation:**

1. ✅ Component tree locked
2. ✅ Data structure finalized
3. ✅ Styling strategy (Tailwind config) approved
4. ✅ Form + Resend integration planned
5. ✅ Task order prioritized
6. ⏸️ **STOP — Awaiting approval before code.**

**Next step (after approval):** Begin Phase 1 (Setup). Implement task-by-task with verification (build + visual check) after each phase.

