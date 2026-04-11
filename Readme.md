# Quiet Craft

> A curated collection of animated UI components and design experiments — built with Next.js, TypeScript, and Tailwind CSS.

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/MDX-1B1F24?logo=mdx&logoColor=white" alt="MDX" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
</p>

---

## Overview

**Quiet Craft** is a personal UI component library and design documentation site. Each component is handcrafted with attention to animation, accessibility, and visual polish — serving as both a learning journal and a portfolio of production-ready UI work.

The project covers animations, styling systems, Figma-to-code workflows, and interactive component design — all documented with live previews and usage examples via MDX.

---

## Features

- **Animated Components** — Smooth, purposeful micro-animations built with Framer Motion
- **MDX Documentation** — Every component has a dedicated doc page with live preview and usage notes
- **Dark Mode** — Full dark/light theme support with Tailwind CSS
- **Responsive Design** — Mobile-first layouts that work across all screen sizes
- **Type-Safe** — Written entirely in TypeScript with strict types throughout
- **Figma-Inspired Layouts** — Components designed with real-world design system principles

---

## Tech Stack

| Technology              | Purpose                 |
| ----------------------- | ----------------------- |
| Next.js 14 (App Router) | Framework & routing     |
| TypeScript              | Type safety             |
| Tailwind CSS            | Styling                 |
| Framer Motion           | Animations              |
| MDX + next-mdx-remote   | Component documentation |
| shadcn/ui               | Base UI primitives      |

---

## Getting Started

### Prerequisites

- Node.js `18+`
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/isuzwal/Quiet-Craft.git
   cd Quiet-Craft
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
quiet-craft/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── docs/
│       └── [...slug]/
│           └── page.tsx      # Dynamic MDX doc pages
├── components/
│   └── ui/                   # All UI components
├── content/
│   └── docs/                 # MDX documentation files
├── public/                   # Static assets
├── README.md
└── package.json
```

---

## Component Docs

Each component lives in `content/docs/` as an `.mdx` file with frontmatter metadata:

```mdx
---
name: Animation Card
description: A clean card component with smooth hover animations.
tags: [card, animation, ui]
author: Uzwal
---
```

Pages are rendered dynamically at `/docs/[component-name]` with live previews.

---

## Author

**Uzwal** — [@isuzwal](https://github.com/isuzwal) · [uzwal.dev](https://uzwal.dev)

---

## License

This project is open for learning and inspiration. If you use any components in your own work, a credit is appreciated but not required.
