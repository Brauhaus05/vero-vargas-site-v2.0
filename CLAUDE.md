# CLAUDE.md — Vero Vargas Site v2.0

## Project Overview

Personal brand and portfolio site for **Vero Vargas** — strategic consultant and breathwork facilitator. Tagline: "Strategy, but fun."

**Stack:** React 19 · Vite 6 · TypeScript · Framer Motion · Tailwind CSS (CDN) · Lucide React

Single-page static site. No routing, no backend.

---

## Key Commands

```bash
npm run dev       # Dev server at localhost:3000
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm install       # Install dependencies
```

---

## Architecture

```
App.tsx           # Root: composes all sections in order
index.tsx         # React DOM entry point
constants.ts      # ALL page content lives here — edit copy here, not in components
index.html        # HTML template: loads Tailwind CDN + Google Fonts (DM Sans)
vite.config.ts    # Port 3000, @ path alias, GEMINI_API_KEY env var (unused)
vite-env.d.ts     # TypeScript declarations for image asset imports (.png, .jpg, .svg)
```

### Component Render Order (in App.tsx)

```
Navbar → Hero → Work → Philosophy → Framework → Practice → Story → Footer
```

### Component Map

| File | Purpose |
|------|---------|
| `components/Navbar.tsx` | Fixed nav, scroll-triggered background, mobile hamburger menu |
| `components/Hero.tsx` | Intro text + portrait image (vero.png) |
| `components/Work.tsx` | Services grid (4 items) |
| `components/Philosophy.tsx` | 6 core values, dark bg section |
| `components/Framework.tsx` | Strategy framework with animated word sequence |
| `components/Practice.tsx` | Breathwork/wellness, grayscale image (vero2.png) with hover |
| `components/Story.tsx` | Professional background, 5 experience items |
| `components/Footer.tsx` | Logo + copyright |
| `components/Section.tsx` | **Reusable:** `<Section>` wrapper, `AnimatedTitle`, `FadeIn` motion utils |
| `components/Button.tsx` | **Reusable:** CTA button with ArrowRight icon |

---

## Content / Data

All text content is centralized in [constants.ts](constants.ts):

- `NAV_LINKS` — navigation items with anchor hrefs
- `WORK_ITEMS` — 4 service descriptions for Work section
- `PHILOSOPHY_ITEMS` — 6 core values with titles + descriptions
- `STORY_ITEMS` — 5 professional experience areas

**To change copy:** edit `constants.ts`, not the component files.

---

## Design System

### Colors (used as Tailwind arbitrary values — no config file)

| Token | Hex | Usage |
|-------|-----|-------|
| Beige | `#F5F2EA` | Primary page background |
| Dark | `#3D4236` | Text, dark section backgrounds |
| Olive | `#7C8356` | Section backgrounds (Hero, Footer) |
| Accent | `#E6E888` | Highlights, borders, CTA buttons |

Example usage: `bg-[#7C8356]`, `text-[#E6E888]`, `border-[#E6E888]`

### Typography

- **Font:** DM Sans, loaded via Google Fonts in `index.html` (not an npm package)
- Weights used: 100–900, set globally via `font-family: 'DM Sans'` on body
- No custom Tailwind font config — use `font-['DM_Sans']` or inline style if needed

### Animations

Use the shared utilities from `components/Section.tsx`:

```tsx
import { AnimatedTitle, FadeIn } from './Section';

// Fade + slide-up when scrolled into view (once)
<AnimatedTitle>My heading</AnimatedTitle>

// Configurable delay
<FadeIn delay={0.2}>Content</FadeIn>
```

- Both use `whileInView`, `once: true` — animate once on scroll
- For custom Framer Motion: import from `framer-motion` directly

---

## Assets

Images live in `assets/` and are imported as ES modules (not `public/`):

```tsx
import veroImg from '@/assets/vero.png';
import vero2Img from '@/assets/vero2.png';
import logoSvg from '@/assets/logo.svg';
```

TypeScript support for these imports is declared in `vite-env.d.ts`.

Path alias `@` maps to the project root (configured in `vite.config.ts` and `tsconfig.json`).

---

## Adding a New Section

1. Create `components/MySection.tsx` using `AnimatedTitle`/`FadeIn` from `Section.tsx`
2. Add content to `constants.ts`
3. Import and add to the section order in `App.tsx`

---

## Gotchas

- **Tailwind is CDN-loaded** — there is no `tailwind.config.js`. Custom colors must be passed as arbitrary values (`bg-[#hex]`). JIT/purge does not apply.
- **No routing** — all sections are anchor-linked (`#work`, `#philosophy`, etc.)
- **`GEMINI_API_KEY`** is referenced in `vite.config.ts` env config but is not used anywhere in the current codebase.
- **`experimentalDecorators: true`** is set in `tsconfig.json` for legacy compatibility.
- **React 19** — uses the new JSX transform (`react-jsx`), no need to import React in every file.
