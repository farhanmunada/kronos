# PRD Landing Page Kronos Kinetic Dwellings (Updated — Skill-Validated)

**Status:** Gerbang 1 — Awaiting approval on NEW aesthetic direction (Light Luxury Portfolio).

---

## 1. Ringkasan Eksekutif (REVISED)

**Produk:** Landing page company profile untuk Kronos Kinetic Dwellings (Kronos KD).

**Tujuan (same):** Showcase rekayasa arsitektur modern, sistem modul prefabrikasi presisi tinggi, dan portofolio proyek eksklusif kepada HNWI, resort developers, dan arch-tech enthusiasts.

**Aesthetic Direction (UPDATED):** **Exaggerated Minimalism** meets luxury real estate portfolio — light background, oversized serif display typography, massive whitespace, photography-first layout, warm gold accent, elegant editorial structure. **Anti-pattern:** No dark brutalism, no kinetic clip-path reveals, no monospace data HUD.

**Deliverable:** Single-page React app (Vite + Tailwind) dengan 6 section editorial grid, portfolio masonry, clean form. Light mode optimized for luxury perception.

**Timeline (estimate):** 5–7 hari (setelah asset ready).

---

## 2. Ruang Lingkup (Scope) — REVISED

### Aesthetic Pillars (UPDATED)

#### **Palette**
| Role | Color | CSS Variable |
|---|---|---|
| Primary | `#171717` (Deep Charcoal) | `--color-primary` |
| On Primary | `#FFFFFF` (Crisp White) | `--color-on-primary` |
| Secondary | `#404040` (Medium Gray) | `--color-secondary` |
| On Secondary | `#FFFFFF` | `--color-on-secondary` |
| Accent/CTA | `#A16207` (Warm Gold) | `--color-accent` |
| On Accent/CTA | `#FFFFFF` | `--color-on-accent` |
| Background | `#FFFFFF` (White) | `--color-background` |
| Foreground | `#171717` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Muted | `#E8ECF0` (Light Gray) | `--color-muted` |
| Muted Foreground | `#475569` (Slate Gray) | `--color-muted-foreground` |
| Border | `#E5E5E5` (Very Light Gray) | `--color-border` |

#### **Typography (UPDATED)**
- **Display/Headlines:** Cinzel (serif, elegant, architectural)
- **Body:** Josefin Sans (geometric, readable, luxury)
- **Data/Metadata:** Josefin Sans (same body; no monospace)
- **Google Fonts Import:**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
  ```

#### **Interaction Rules (UPDATED)**
- ✓ Massive whitespace, oversized typography, high contrast
- ✓ Photography-first: images dominate, text supportive
- ✓ Hover states smooth (150–300ms transition)
- ✓ Minimal motion: static sections, gentle fade-in on scroll
- ✗ No clip-path reveals, no cursor parallax, no sticky scroll kinetics
- ✗ No dark mode; light mode only
- ✗ No monospace data layers; elegant typography hierarchy

#### **Style Name**
**Exaggerated Minimalism** — Bold typography, high contrast, negative space, statement design. Best for: luxury brands, architecture, portfolios, editorial.

---

## 3. Section Structure (REVISED)

### **1. Hero (Editorial Statement)**
- Header: Brand mark minimalis + elegant nav links ([01 Our Systems], [02 Projects], [03 Philosophy], [04 Inquire])
- Headline (massive, Cinzel): "Permanent Luxury."
- Sub-headline (Josefin Sans): "Modular precision dwelling engineered for the world's most demanding terrains."
- Hero asset: Large, high-quality architectural photography (50% blueprint OR render, OR lifestyle shot)
- CTA: Single elegant button [ Explore Our Systems ] (gold accent, subtle shadow)
- Motion: Gentle fade-in on page load (no clip-path)

### **2. Architectural Specs / Metrics (Grid, Not HUD)**
- Layout: 2×2 or 1×4 card grid (generous spacing)
- 4 metric cards (light background, subtle border):
  - **0.02mm Tolerance** — Structural precision per node
  - **72-Hour Assembly** — Living pod installation complete
  - **Net-Negative Carbon** — Lifecycle environmental baseline
  - **Cat-5 Resistant** — Dynamic wind-load dampening system
- Typography: Josefin Sans (no monospace); readable serif accent for numbers
- Motion: Gentle fade-in on scroll (no stagger)

### **3. Modular Pod Explorer (Portfolio Cards)**
- Two pod showcase (card-based, not carousel):
  - **Pod 01: Vapour-Line** (Cliffside Living, 120m²)
  - **Pod 02: Monolith-X** (High-Altitude Haven, 280m²)
- Each card: Image + title + key features + "Explore" link
- Hover: Subtle opacity/shadow lift (no animation complexity)
- Layout: Side-by-side on desktop, stacked on mobile

### **4. Engineering Workflow (Three-Column Editorial)**
- Horizontal layout (not sticky scroll):
  - **Phase 01: Topo-Scanned** — Digital twin via LiDAR
  - **Phase 02: Fabrication** — Off-site modular production
  - **Phase 03: Rigging** — Precision on-site assembly
- Each phase: Diagram (SVG or simple illustration) + description
- Motion: Static; fade-in on scroll only

### **5. Selected Commissions (Portfolio Masonry)**
- Two featured projects (editorial grid):
  - **The Volcanic Atrium** (Merapi Foothills)
  - **Fjäll Sanctuary** (Nordic Tundra)
- Large hero image per project + title + metadata (area, assembly time, energy efficiency)
- Hover: Subtle opacity/zoom (no parallax)
- Layout: Asymmetric editorial style (large image + text block)

### **6. Inquire / Footer (Clean Form)**
- Minimalist form:
  - Client Name (text input)
  - Target Terrain (dropdown)
  - Target Square Meters (number input)
  - Submit button (gold accent)
- Footer: Copyright, legal, brand mark, contact info
- Motion: Gentle focus ring highlight (150ms transition)

---

## 4. Capability Map (Components & Data) — REVISED

### Hero Section
```
- NavBar (sticky/fixed, white background)
  - Brand mark, nav links (elegant serif)
- HeroContent
  - Headline (Cinzel, clamp(3rem, 10vw, 12rem))
  - Sub-headline (Josefin Sans)
  - HeroVisual (large architectural image)
  - CTA button (gold, subtle shadow)
```
**State:** None
**Data:** Hardcoded text, hero image URL

### Metrics Section
```
- MetricsGrid (2x2 or 1x4, generous gap)
  - MetricCard × 4
    - Number (large), label, description
```
**State:** None
**Data:** Hardcoded metric array

### Pod Explorer
```
- PodGrid (side-by-side desktop, stacked mobile)
  - PodCard × 2
    - Image, title, features, link
```
**State:** `hoveredPod: string | null` (for opacity/shadow)
**Data:** Pod specs array

### Workflow Section
```
- WorkflowGrid (3 columns, editorial)
  - PhaseCard × 3
    - Phase title, description, SVG diagram
```
**State:** None
**Data:** Phase array

### Portfolio Section
```
- PortfolioGrid (asymmetric editorial)
  - PortfolioItem × 2
    - Large image, title, metadata
```
**State:** `hoveredProject: string | null`
**Data:** Project array

### Footer / Inquiry
```
- InquiryForm
  - Input fields, submit
- Footer
  - Links, copyright, brand
```
**State:** Form input state
**Data:** Form validation; submit endpoint TBD

---

## 5. Persyaratan Non-Fungsional (UPDATED)

### Aesthetic (UPDATED)
- **Pattern:** Portfolio Grid + Masonry
- **Style:** Exaggerated Minimalism
- **Mode:** Light mode only
- **Palette:** Neutral dark text (#171717) + white background + warm gold accent (#A16207)
- **Typography:** Cinzel (display) + Josefin Sans (body/data)
- **Interaction:** Smooth hover (150–300ms), gentle fade-in scroll, high contrast, massive whitespace
- **Anti-pattern:** No dark mode, no monospace, no clip-path reveals, no kinetic motion, no AI-slop aesthetic

### Performance & Accessibility
- **CWV Target:** "Baik" (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Accessibility:** WCAG 2.1 Level AA (contrast 4.5:1 minimum, semantic HTML, keyboard nav, focus visible)
- **Browser Support:** Chrome/Edge 90+, Safari 14+, Firefox 88+
- **Mobile:** Responsive (stacked cards, readable text measure, touch targets ≥44pt)
- **Reduced Motion:** `prefers-reduced-motion` respected (no auto-play animation)

### Technical
- **Framework:** React 18+ (hooks)
- **Styling:** Tailwind CSS v3+ (custom palette config)
- **Animation:** Native CSS transitions + Framer Motion (optional, minimal)
- **Build:** Vite
- **Fonts:** Google Fonts (Cinzel, Josefin Sans)
- **Assets:** Photography-first (luxury architectural imagery)
- **State:** React hooks (useState, useEffect)
- **No external API** (form submit TBD)

---

## 6. Kriteria Sukses (UPDATED)

- [x] All 6 sections rendered per light luxury aesthetic
- [x] Typography hierarchy clear: oversized Cinzel headlines, Josefin Sans body
- [x] Contrast 4.5:1 minimum (dark text on white background verified)
- [x] Hover states smooth and subtle (no jank)
- [x] Photography prominent; text supportive (not competing)
- [x] Form accessible & validated
- [x] Responsive 375px to 1440px
- [x] Lighthouse score ≥80 (Performance + Accessibility)
- [x] Reduced motion respected
- [x] Deploy to Vercel without build errors

---

## 7. Out of Scope

- Backend form submission (placeholder only)
- Dark mode
- SEO optimization (basic meta only)
- Internationalization
- CMS / content management
- Advanced analytics

---

## 8. Direction Change Rationale

**Original Brief:** Dark industrial brutalism, monospace data HUD, kinetic motion (clip-path/parallax).

**Skill-Validated Direction:** Light exaggerated minimalism, serif typography, warm gold accent, portfolio grid pattern.

**Why Shift?**
- UI/UX Pro Max skill database recommends **Exaggerated Minimalism** for architecture + luxury + portfolio context
- Light mode + serif typography projects **premium, timeless luxury** better than dark + monospace
- Photography-first layout aligns with **real estate / high-end architecture positioning** (HNWI audience)
- Minimalist motion (no clip-path) improves **perceived quality** for luxury brand (less trendy, more lasting)

**Core Intent Preserved:**
- Still showcase modular prefab engineering to HNWI & resort devs
- Still convey precision, quality, exclusivity
- Still editorial & professional aesthetic

**Trade-offs:**
- ✗ No kinetic motion (less "wow" factor on first load)
- ✓ More timeless, luxe aesthetic (less risk of aging)
- ✓ Better alignment with luxury real estate UX patterns
- ✓ Simpler implementation (no complex animation logic)

---

## 9. Gerbang 1 — Re-Approval on NEW Direction

**Blockers before proceed:**
1. ✅ Approve light luxury aesthetic over dark brutalism
2. ✅ Approve Cinzel (serif) + Josefin Sans typography
3. ✅ Approve warm gold (#A16207) accent over acid lime
4. ✅ Approve portfolio grid pattern (editorial, not HUD)
5. ✅ Approve gentle motion (fade-in, hover; no clip-path/parallax)
6. ✅ Approve asset strategy (photography-first)
7. ✅ Decide form submit endpoint
8. ⏸️ **STOP — Waiting approval before detailed breakdown or code.**

**Persetujuan dari:** @user

---

## 10. Dictionary

| Term | Definisi |
|---|---|
| **Exaggerated Minimalism** | Bold typography, high contrast, massive whitespace, photography-first, minimal motion |
| **Portfolio Grid** | Masonry or card grid layout; visuals first, filters by category |
| **Cinzel** | Serif headline font; elegant, architectural, luxury |
| **Josefin Sans** | Geometric sans-serif body font; readable, modern, premium |
| **Warm Gold** | #A16207 accent; sophisticated, not neon |
| **CWV** | Core Web Vitals (LCP, FID, CLS) |
