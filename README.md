# Tanmay Chaudhari — Portfolio

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

Your EmailJS template must use these variable names:

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
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Page orchestrator (theme, scroll, command palette)
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Hero.tsx            # Intro section
│   ├── About.tsx           # About section
│   ├── Education.tsx       # Education section
│   ├── Projects.tsx        # Featured projects with live visuals
│   ├── Experience.tsx      # Work experience
│   ├── Research.tsx        # Published research
│   ├── Skills.tsx          # Tech stack
│   ├── Contact.tsx         # Contact form (EmailJS)
│   ├── Nav.tsx             # Sticky nav with intersection observer
│   ├── CommandPalette.tsx  # ⌘K / Ctrl+K navigation
│   ├── Footer.tsx
│   ├── Icons.tsx           # SVG icon library
│   └── visuals/            # Animated project card visuals
├── public/
│   └── resume.pdf          # Resume served at /resume.pdf
├── .env.local              # EmailJS keys (not committed)
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

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Features

- Dark / light theme toggle with localStorage persistence
- Command palette (⌘K / Ctrl+K) for keyboard navigation
- Scroll-spy active nav state via IntersectionObserver
- Contact form via EmailJS (no backend required)
- Animated project visuals per card
- Fully responsive (mobile breakpoint at 720px)
- Resume download + preview

## Deployment

Push to `main` — Vercel auto-deploys on every commit. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
