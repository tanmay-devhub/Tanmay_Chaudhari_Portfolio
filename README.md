# Tanmay Chaudhari — Portfolio

Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Font**: Geist Sans / Geist Mono
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Page orchestrator (theme, scroll, command palette)
  globals.css       # Global styles and CSS variables
components/
  Hero.tsx          # Intro section
  About.tsx         # About section
  Education.tsx     # Education section
  Projects.tsx      # Featured projects with live visuals
  Experience.tsx    # Work experience
  Research.tsx      # Published research
  Skills.tsx        # Tech stack
  Contact.tsx       # Contact form (mailto)
  Nav.tsx           # Sticky nav with intersection observer
  CommandPalette.tsx # ⌘K / Ctrl+K navigation
  Footer.tsx
  Icons.tsx         # SVG icon library
  visuals/          # Animated project card visuals
public/
  resume.pdf        # Resume served at /resume.pdf
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Features

- Dark / light theme toggle with localStorage persistence
- Command palette (⌘K / Ctrl+K) for keyboard navigation
- Scroll-spy active nav state via IntersectionObserver
- Contact form via native `mailto:` integration
- Animated project visuals per card
- Fully responsive (mobile breakpoint at 720px)
- Resume download + preview

## Deployment

Push to `main` — Vercel auto-deploys on every commit.
