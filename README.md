# Tanmay Chaudhari Portfolio

Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Font**: Geist Sans / Geist Mono
- **Contact**: EmailJS (`@emailjs/browser` v4)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://emailjs.com) → Email Services / Email Templates / Account.

### EmailJS template variables

| Variable | Value |
|---|---|
| `{{name}}` | Sender's name |
| `{{from_name}}` | Sender's name (From Name field) |
| `{{email}}` | Sender's email (Reply To field) |
| `{{from_email}}` | Sender's email (From Email field) |
| `{{message}}` | Message body |
| `{{title}}` | Auto-generated subject line |

## Project Structure

```
port/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Page orchestrator (theme, scroll, modal, command palette)
│   └── globals.css             # Global styles and CSS variables
├── components/
│   ├── Hero.tsx                # Intro section with photo
│   ├── About.tsx               # About section
│   ├── Education.tsx           # Education section
│   ├── Projects.tsx            # Featured projects (entire card links to GitHub)
│   ├── Experience.tsx          # Work experience
│   ├── Research.tsx            # Published research
│   ├── Skills.tsx              # Tech stack
│   ├── Contact.tsx             # Contact form (EmailJS)
│   ├── ResumeModal.tsx         # In-page resume viewer modal
│   ├── Nav.tsx                 # Sticky nav (tc. links to top, intersection observer)
│   ├── CommandPalette.tsx      # Ctrl+K / Cmd+K navigation
│   ├── Footer.tsx
│   ├── Icons.tsx               # SVG icon library
│   └── visuals/                # Animated SVG visuals per project card
│       ├── RAGVisual.tsx
│       ├── BrowserIsolationVisual.tsx
│       ├── MockInterviewVisual.tsx
│       ├── VideoStreamVisual.tsx
│       └── TrustIDVisual.tsx
├── public/
│   ├── resume.pdf              # Resume served at /resume.pdf
│   └── me.jpg                  # Profile photo
├── .env.local                  # EmailJS keys (not committed)
└── .gitignore
```

## Sections

| # | Section | Component |
|---|---|---|
| 01 | About | `About.tsx` |
| 02 | Education | `Education.tsx` |
| 03 | Projects | `Projects.tsx` |
| 04 | Experience | `Experience.tsx` |
| 05 | Research | `Research.tsx` |
| 06 | Skills | `Skills.tsx` |
| 07 | Contact | `Contact.tsx` |

## Projects

| # | Title | Repo |
|---|---|---|
| 01 | RAG Pipeline | `tanmay-devhub/RAG` |
| 02 | Mini Browser Isolation System | `tanmay-devhub/Mini-Browser-Isolation` |
| 03 | AI Mock Interview App | `tanmay-devhub/AI-Mock-Intervire-App` |
| 04 | StreamVault — Video Streaming Platform | `tanmay-devhub/streamvault` |
| 05 | TrustID — Decentralized Identity Verification | `tanmay-devhub/Trust-ID` |

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Features

- Dark / light theme toggle with localStorage persistence
- Command palette (Ctrl+K / Cmd+K) for keyboard navigation
- Scroll-spy active nav with IntersectionObserver
- `tc.` brand logo scrolls back to top
- In-page resume viewer modal (blur backdrop, Escape to close, download button)
- Contact form via EmailJS, no backend required
- Entire project card clickable to GitHub repo
- Animated SVG visuals per project card
- Green accent left-border on all card types (About, Education, Experience, Research, Skills)
- Profile photo in hero with circular accent frame
- Fully responsive (mobile breakpoint at 720px)

## Deployment

Push to `main` Vercel auto-deploys on every commit. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in Vercel project settings under Environment Variables.
