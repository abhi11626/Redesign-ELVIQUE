# Elvique (Redesign)

> Modern marketing and discovery site for Elvique — an apparel-led direct selling platform.

<!-- Badges -->

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-6366F1)](https://github.com/shadcn)

## Overview

This repository contains a Next.js 16 application (app router) for the Elvique redesign. It provides marketing pages, product listings, contact workflows, and a set of reusable UI primitives (shadcn + Radix-based components).

The project is implemented using React (app directory), Tailwind CSS for styling, and the shadcn component primitives backed by Radix UI.

## Features

- Multi-page marketing site built with the Next.js app router
- Reusable UI primitives (Dialog, Sheet, Card, Inputs, Buttons) under `src/components/ui`
- Responsive layout components (`Navbar`, `Footer`, layout sections)
- Contact and lead capture forms using `react-hook-form` and native validation
- Lightweight form handling and placeholder submission handlers ready to be wired to APIs

## Tech Stack

- Next.js 16 (app router)
- React 19
- Tailwind CSS v4
- shadcn UI (component primitives)
- Radix UI primitives (via `radix-ui`)
- react-hook-form for form handling
- Zod (present as a dependency for schema validation)
- Other libraries: `lucide-react`, `react-icons`, `framer-motion`, `embla-carousel-react`, `sonner`

## Folder Structure

Top-level (important files and folders):

```
.
├─ app/                      # Next.js app routes and pages
│  ├─ globals.css
│  ├─ layout.js
│  └─ (page files for routes: about, contact, faq, products, etc.)
├─ src/
│  ├─ app/                   # application pages (same as root app folder view)
│  ├─ components/
│  │  ├─ layout/              # Navbar, Footer
│  │  ├─ sections/            # page sections (Hero, CTA, FAQ, LeadCapture...)
│  │  └─ ui/                  # shadcn + Radix UI primitives (Dialog, Sheet, Button...)
│  ├─ constants/              # site constants (faq, products, footerLinks)
│  └─ lib/                    # small utilities
├─ public/                    # public assets (images)
├─ package.json
├─ next.config.mjs
├─ postcss.config.mjs
└─ README.md
```

Note: The project is primarily organized under `src/` and `src/app` (Next's app router pages are in `src/app`).

## Installation

Prerequisites:

- Node.js 18+ (recommended)
- npm (or use yarn/pnpm)

Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

## Environment Variables

There are no required environment variables checked into the repository. If you integrate backend APIs (contact form, analytics, auth), add appropriate variables in a `.env.local` file at the project root. Examples you may add:

```
# Example environment variables (only if needed)
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
API_KEY=your-secret-api-key
```

Do not commit secrets to the repository.

## Running the Project Locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build Commands

Build for production:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

Linting:

```bash
npm run lint
```

## Deployment Instructions

This is a standard Next.js application and can be deployed to any platform supporting Next.js (Vercel, Netlify with adapter, or custom Node server).

Example: Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel and use the default build command `npm run build` and output directory handled by Next.js.
3. Add any required environment variables in the Vercel dashboard.

For other hosts, follow their Next.js deployment guides.

## Available Scripts

- `npm run dev` — Run dev server
- `npm run build` — Build production bundle
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## API Integrations

There are no external API integrations wired by default in the codebase. Forms in `src/components/sections/LeadCapture.jsx` and `src/app/contact/page.js` contain placeholder submission logic (timeouts or optional `onSubmit` callbacks) you can replace with `fetch`/`axios` calls to your API endpoints.

## Project Architecture

- UI primitives in `src/components/ui` provide a centralized design system based on shadcn + Radix primitives.
- Page-level content lives under `src/app` using the Next.js app router conventions (layout.js, page.js per route).
- Shared constants live under `src/constants`.
- Utilities are placed in `src/lib`.

This architecture favors composability: pages assemble layout and section components while UI primitives provide consistent, accessible components.

## Screenshots

Add screenshots to `public/images/screenshots/` and reference them here. Example markdown placeholders:

![Homepage](public/images/screenshots/homepage.png)
![Contact](public/images/screenshots/contact.png)

If you want, I can generate a small set of screenshot placeholders and add them to the `public/images/screenshots` folder.

## Contributing

Thanks for wanting to contribute! Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-change`
3. Run and test locally
4. Open a pull request with a clear description

Coding guidelines:

- Follow existing code style (React + Tailwind + shadcn conventions)
- Keep changes minimal and focused
- Respect accessibility — dialogs, form labels, and semantic HTML

## License

This repository does not include a LICENSE file. Add an appropriate open source license (MIT, Apache-2.0, etc.) if you plan to share publicly.

## Author

Elvique / Vonkeller Apparels

---

If you want, I can also:

- Add a short `DEVELOPMENT.md` with local dev tips
- Wire the contact forms to a sample API endpoint
- Add screenshots or CI/CD config for Vercel/GitHub Actions

Feel free to tell me which follow-up you'd like.
