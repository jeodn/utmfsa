# UTMFSA Official Website

The official website for the **University of Toronto Mississauga Filipino Students' Association (UTMFSA)** — celebrating Filipino culture, student community, flagship events, and exclusive member perks at UTM.

---

## 📌 Background & History

This website was built to create a modern, high-performance home for UTMFSA members, incoming students, and local sponsors. 

- **Origins**: Assembled from curated UI primitives drawn from [Stardrive](https://github.com/peltmonger/stardrive) and `astro-chalet`.
- **Refactoring**: Standardized into a clean, minimal design system with zero bloat, responsive container spacing (`@utility container`), and a centralized semantic token palette.

---

## 🛠️ Technical Architecture

### Core Tech Stack
- **Framework**: [Astro 7.1](https://astro.build/) (Static Site Generation for fast page loads)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` configuration
- **Icons**: `@iconify-json/heroicons` via `astro-icon`
- **Image Optimization**: Astro `astro:assets` `<Image />` component for automatic WebP generation

### Design Token Architecture (`src/styles/tailwind.config.css`)
All colors, font families, and container utility boundaries are defined centrally in `src/styles/tailwind.config.css` using Tailwind v4 `@theme`:

| Token | CSS Variable | Default Value / Purpose |
| :--- | :--- | :--- |
| `primary` | `--color-primary` | `#0038a8` (Royal Blue) |
| `secondary` | `--color-secondary` | `#ce1126` (Crimson Red) |
| `gold` | `--color-gold` | `#f59e0b` (Sun Amber Accent) |
| `bg-main` | `--color-bg-main` | `#ffffff` (Page Background) |
| `bg-subtle` | `--color-bg-subtle` | `#f8fafc` (Section Off-White) |
| `bg-card` | `--color-bg-card` | `#ffffff` (Card Surface) |
| `text-main` | `--color-text-main` | `#0f172a` (Primary Headings & Body) |
| `text-muted` | `--color-text-muted` | `#475569` (Subtitles & Muted Text) |
| `border-subtle` | `--color-border-subtle` | `#e2e8f0` (Card & Section Dividers) |
| `font-headline` | `--font-headline` | `Playfair Display`, Georgia, serif |
| `font-body` | `--font-body` | System sans-serif |

---

## 🧩 Components Overview

- **`Header.astro`**: Glassmorphic sticky header with logo and navigation links.
- **`Hero.astro`**: Main hero section with soft radial gradients, club pill badge, and CTAs.
- **`SponsorRibbon.astro`**: Minimalist continuous logo marquee featuring local Mississauga business partners.
- **`SponsorRibbonDeals.astro`**: Standalone detailed sponsor deals component with discount badges for membership pages.
- **`AboutSection.astro`**: Editorial about section with drop-cap typography and feature highlight cards.
- **`MembershipCard3D.astro`**: Interactive 3D scroll-rotating digital VIP membership card.
- **`Footer.astro`**: Minimalist site footer with social links and copyright notices.

---

## 📁 Directory Structure

```text
website/
├── public/
│   ├── favicon.ico              # Official UTMFSA favicon/logo emblem
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── sponsors/            # Sponsor logo image files (PNG, SVG, WebP)
│   ├── components/              # Reusable Astro components
│   ├── layouts/
│   │   └── Layout.astro         # Main HTML page wrapper & metadata
│   ├── pages/
│   │   └── index.astro          # Landing page route
│   └── styles/
│       ├── tailwind.config.css  # Tailwind v4 @theme design tokens & @utility container
│       └── global.css           # Base resets, typography rules & button components
├── package.json
└── astro.config.mjs
```

---

## 💻 Development & Commands

Run all commands from the `website/` directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Install all dependencies |
| `npm run dev` | Start dev server at `http://localhost:4321` |
| `npm run build` | Build static production site to `./dist/` |
| `npm run preview` | Preview production build locally |

---

## 🎨 Palette & Customization Guide

To edit the color theme or typography site-wide, update **`src/styles/tailwind.config.css`**:

```css
@theme {
  --color-primary: #0038a8;     /* Change site primary accent */
  --color-secondary: #ce1126;   /* Change site secondary accent */
  --font-headline: "Playfair Display", Georgia, serif;
}
```

Updating these single variables immediately cascades across all components, buttons, glows, and text elements.
