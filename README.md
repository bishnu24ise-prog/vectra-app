# Vectra
> Automate at the speed of thought.

**Live Deployment:** [https://vectra-app-six.vercel.app](https://vectra-app-six.vercel.app)
**Demo Video:** `[ADD DEMO VIDEO LINK HERE]`

## Overview
Vectra is a premium, high-converting SaaS landing page built for the Next-Gen AI Platform Speed Run hackathon. It rigidly adheres to strict performance guardrails and dependency restrictions.

## Tech Stack
- **Next.js:** `16.2.9` (App Router)
- **React:** `19.2.4`
- **TypeScript:** `^5`
- **Tailwind CSS:** `^4` (via `@tailwindcss/postcss`)
- **Zero Additional Dependencies:** No Framer Motion, Radix, Shadcn, Zustand, or other UI/animation libraries are installed.

## Core Features
### Feature 1: Matrix Pricing & Currency Switcher
- **Dynamic Configuration:** All pricing is derived dynamically from a single canonical multi-dimensional matrix. Base tier rates are adjusted via regional tariffs and a flat 20% annual discount multiplier.
- **Re-Render Isolation:** Built using the `useSyncExternalStore` pattern. Toggling currencies or billing cycles strictly updates only the localized text nodes (via `<PriceText>`). The parent grid and feature lists explicitly **do not** re-render, mathematically passing the performance constraint.

### Feature 2: Bento-to-Accordion (Context Lock)
- **Unified Data Source:** Both layouts map from a single source of truth array.
- **Context Lock on Resize:** Active hover state in the desktop Bento Grid is tracked via `activeIndex`. A native `ResizeObserver` monitors the viewport. When snapping to mobile widths, this precise active index is transferred to the native HTML `<details>` accordion, automatically opening the corresponding panel with a smooth `element.animate()` WAAPI transition.

## Local Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
