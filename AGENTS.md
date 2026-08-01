# UTMFSA Website — Agent Guidelines & Instructions

This document provides guidelines, architectural conventions, and commands for AI agents working in the `website/` codebase.

---

## 🚀 Core Technical Principles

1. **Semantic Design Tokens (STRICT)**:
   - **Never** hardcode raw color utility classes like `slate-900`, `blue-700`, or `red-600` inside component templates.
   - **Always** use semantic design token classes defined in `src/styles/tailwind.config.css`:
     - `text-text-main`, `text-text-muted`, `text-text-inverse`
     - `bg-bg-main`, `bg-bg-subtle`, `bg-bg-card`
     - `bg-primary`, `text-primary`, `bg-primary-light`
     - `bg-secondary`, `text-secondary`, `bg-secondary-light`
     - `border-border-subtle`
     - `font-headline`, `font-body`

2. **Container Spacing**:
   - Use the opinionated `@utility container` class from Stardrive (`margin-inline: auto`, responsive horizontal padding `px-4` to `px-8`). Avoid adding ad-hoc horizontal margin wrappers.

3. **Image & Asset Optimization**:
   - Sponsor logo images belong in `src/assets/sponsors/`.
   - Use Astro's `<Image />` component from `astro:assets` for automatic WebP optimization.
   - Maintain fallback icon rendering for sponsors without dedicated logo files.
   - **Do NOT mutate or overwrite `const sponsors` array data** unless explicitly requested by the user.

4. **Logo & Favicon Usage**:
   - Use `/favicon.ico` as the official UTMFSA logo icon in Header, VIP card, and Footer.

---

## 🛠️ Project Structure & Key Files

- **`src/styles/tailwind.config.css`**: Centralized Tailwind CSS v4 `@theme` design tokens and `@utility container`.
- **`src/styles/global.css`**: Global base resets, smooth scrolling, link utilities, and `.btn-primary` / `.btn-subtle` component definitions.
- **`src/components/SponsorRibbon.astro`**: Minimalist logo-only marquee ribbon.
- **`src/components/SponsorRibbonDeals.astro`**: Standalone detailed sponsor deals component with category and discount pills.
- **`src/components/MembershipCard3D.astro`**: Interactive 3D scroll-tilt VIP card.

---

## ⚙️ Development Commands

| Command | Usage |
| :--- | :--- |
| `npm run dev` | Start dev server (`http://localhost:4321`) |
| `npm run build` | Build static production assets to `./dist/` |
| `npm run preview` | Test production build locally |

Always run `npm run build` after making modifications to verify zero Astro / TypeScript / CSS compilation errors.
