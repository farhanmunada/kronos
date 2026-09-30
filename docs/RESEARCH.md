# Riset Landing Page Kronos KD

## 1. Intent Terurai
**Tujuan:** Showcase kredibilitas engineering, sistem modular prefabrikasi presisi, portofolio eksklusif untuk HNWI & resort developers.

**Audience:**
- High-net-worth individuals mencari luxury modern dwelling
- Resort developers & real estate firms di terrain ekstrem
- Engineering enthusiasts / arch-tech community

**Brand Positioning:** Industrial Brutalism + High-Precision Luxury. Anti-AI-slop: crisp grid, editorial layout, monospace data, micro-interaction refined.

---

## 2. Aesthetic Pillars & Constraint

### Palette
| Role | Color | Usage |
|---|---|---|
| BG | #0E0F11 (Deep Graphite) | Page base |
| Surface | #22252A (Dark Titanium) | Cards, sections |
| Accent | #CEF443 (Acid Lime) / #FF6B35 (Amber) | CTA, status only |
| Text | #EDEDED (Off-White) | Primary; #7D828A (Muted Mono) for data |

### Typography Stack
- **Display:** Syne, Clash Display, PP Neue Montreal (bold technical sans)
- **Body/Data:** JetBrains Mono, Geist Mono, Space Mono (monospace for coordinates, metadata)

### Interaction Rules
- ✗ Blob gradient, rounded pill buttons, fade-in-up standard
- ✓ Clip-path reveals, cursor-based parallax (blueprint layers), sticky scroll (assembly viz)
- ✓ Micro-borders (1px solid rgba(255,255,255,0.08)), crisp corners (border-radius 2–4px)
- ✓ Tabular metadata layout (HUD / data-sheet aesthetic)

---

## 3. Asset Strategy

### Hero Split Visual
**Requirement:** 50% blueprint wireframe (interactive), 50% photorealistic rendering.

**Source:**
- **Blueprint:** AI-generated (Midjourney / Gemini 3.1 Pro) — architectural wireframe, technical line-art style, isometric modul pod
- **Photorealistic:** AI-generated architectural rendering — luxury brutalist dwelling, modern prefab context
- **Fallback:** Hand-curated Unsplash/Pexels brutalist architecture + modern luxury interior (royalty-free)

### Pod Showcase (Vapour-Line & Monolith-X)
**Requirement:** Carousel/tab with diagram layer-by-layer per pod.

**Source:**
- AI-rendered 3D pod mockup per pod (Midjourney)
- Technical spec sheet as overlay (dark background, monospace metric)
- Fallback: Abstract architectural render

### Portfolio Gallery (Volcanic Atrium, Fjäll Sanctuary)
**Requirement:** Asimetris editorial layout, monokromatik dengan metadata.

**Source:**
- AI-generated photorealistic architectural shoot per project (location + aesthetic)
- Metadata overlay: luas, rakitan time, efisiensi energi
- Fallback: Dezeen/Archello-style editorial imagery (royalty-free or licensed)

### Workflow Phase Visuals (Topo-Scan, Fabrication, Rigging)
**Requirement:** Horizontal process flow, setiap fase visual + explainer text.

**Source:**
- AI-rendered technical process diagram per phase (isometric, wireframe)
- Fallback: SVG icon system atau simplified diagram

---

## 4. Motion & Animation Library

### Lightweight Stack
| Library | Use | Reason |
|---|---|---|
| **Tailwind CSS** + `animate-*` | Fade, slide, pulse (CSS-native) | Zero JS overhead, performant |
| **Framer Motion** (optional) | Clip-path reveals, cursor parallax | Declarative, smooth React integration |
| **Intersection Observer** (native) | Sticky scroll, reveal-on-scroll | Native browser, no lib needed |
| **CSS Grid + `position: sticky`** | Section pin, horizontal scroll | Native layout, responsive |

**Motion Philosophy:** Micro-interactions only. Clip-path stagger for section reveal, cursor parallax on hero blueprint (if scroll-dependent), sticky scroll on workflow phase. No juice—precision.

---

## 5. Section Breakdown

| Section | Key Elements | Motion | Asset |
|---|---|---|---|
| **Hero** | Nav + headline + split visual + dual CTA | Clip-path reveal on load | Blueprint (AI) + render (AI) |
| **Metrics** | Bento HUD: 4 metric cards, monospace data | Stagger slide-in on scroll | Typography-heavy, no image |
| **Pod Explorer** | Carousel/tabs, 2 pods, diagram layers | Tab transition + smooth scroll | Pod renders (AI) × 2 |
| **Workflow** | 3-phase horizontal, sticky scroll | Phase fade-in per scroll depth | Process diagram (AI/SVG) |
| **Portfolio** | 2 projects, asimetris gallery layout | Hover parallax, image zoom | Renders (AI) × 2 + metadata |
| **Footer/Form** | Input fields, CLI-style metadata, footer links | Focus ring, subtle input highlight | Typography-only |

---

## 6. Tech Stack (Confirmed)

- **React** 18+ with hooks
- **Tailwind CSS** v3+
- **Framer Motion** for clip-path & parallax
- **Intersection Observer** native API
- **Build:** Vite (fast HMR, minimal config)
- **Fonts:** Google Fonts (Geist Mono, system-stack fallback for display)
- **Hosting:** Static (Vercel recommended)

---

## 7. Asset Generation Plan

1. **Generate 4 hero/pod renders** via Midjourney or Gemini 3.1 Pro (total: blueprint, render, pod1, pod2)
2. **Generate 2 portfolio imagery** (Volcanic Atrium, Fjäll Sanctuary)
3. **Create workflow diagrams** (3 phases) as SVG or simplified AI render
4. **Fallback:** Royalty-free Unsplash/Pexels brutalist architecture if AI fails
5. **Timeline:** 2–4h with iteration

---

## 8. Risks & Knowns

1. **Asset timing:** AI-gen 30–60m per image, prompt iteration required
2. **Clip-path support:** Modern browsers; fallback to opacity fade
3. **Cursor parallax:** Hero-only, requestAnimationFrame overhead acceptable
4. **Monospace fonts:** Google Fonts Geist Mono + system stack
5. **Responsive:** Horizontal scroll & sticky sections need mobile safeguard

---

## 9. Gerbang 1: PRD & Approval

Waiting approval before detailed section spec, component breakdown, or code.
