# AETHER


AETHER is a premium concept landing page for an ambient AI operating system. It offers a cinematic, architectural web experience with a restrained motion system, polished glass surfaces, and intelligent visual rhythm.

## Overview

AETHER is designed to feel less like a product brochure and more like an immersive reveal of a future OS. The project showcases a premium dark brand identity, motion-led storytelling, and a modern Next.js architecture.

## Features

- Cinematic landing experience with premium motion and subtle transitions
- Ambient gradient mesh, glassmorphism surfaces, and floating luminous blobs
- Slow, intentional scroll choreography and section reveal animations
- Mouse-reactive lighting and atmospheric particle effects
- 3D hero element powered by React Three Fiber
- Modern UI with refined typography and spacious layout
- Smooth local scrolling with Lenis and Framer Motion

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber
- @react-three/drei
- Lenis
- GSAP

## Installation

Install dependencies:

```bash
npm install
```

## Local Development

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Usage

- `src/app/page.tsx` contains the main page structure
- `src/components/` holds modular visual sections and interactive components
- `src/app/globals.css` defines the dark theme, glass utilities, and cinematic textures
- `src/components/ambient-background.tsx` provides the reusable animated environment

## Folder Structure

```text
.
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components
│       ├── ambient-background.tsx
│       ├── architecture-section.tsx
│       ├── command-center.tsx
│       ├── cta-section.tsx
│       ├── footer.tsx
│       ├── hero.tsx
│       ├── monolith-scene.tsx
│       ├── navbar.tsx
│       ├── trust-ribbon.tsx
│       └── ui
│           └── words-pull-up.tsx
├── package.json
├── README.md
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── video.mp4
```


## Future Improvements

- Add a fully interactive onboarding sequence
- Introduce adaptive AI-driven states in the UI
- Enhance accessibility and keyboard navigation support
- Add deployment presets for Vercel and other hosts
- Expand the design system with reusable brand tokens

## License

This project does not include a license file. Add a `LICENSE` to define usage and distribution terms.
