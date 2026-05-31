# 🏆 SUSSWEATSHOP — Premium Sports Betting Picks

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Vitest](https://img.shields.io/badge/Vitest-tested-6E9F18?style=for-the-badge&logo=vitest)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

**Marketing site for a sports-betting picks community (MLB · NFL · NBA · NHL)** — with a live Twitter/X feed, a Discord-sourced testimonials wall, and a Whop membership funnel.

</div>

---

## ✨ Features

- **Animated landing page** — hero, stats bar, betting-platform showcase, "Why Choose Us," and a premium membership section, all in a custom carbon-fiber + metallic-gold theme.
- **Live Twitter/X feed** — pulls the account's recent tweets via the Twitter API v2 through a server-side proxy, with automatic fallback to demo content if the API is unconfigured or rate-limited (the page never renders broken).
- **Discord-powered testimonials** — the `/testimonials` page reads real messages and image attachments from a Discord channel and renders them as a gallery with a click-to-enlarge lightbox. A Discord channel doubles as a zero-admin CMS.
- **AI Model page** — explains the picks methodology (`/ai-model`).
- **Whop membership funnel** — outbound CTAs to a paid Whop product and a free Discord.
- **Custom animation system** — cursor-tracking spotlight cards, scroll-reveal, count-up stats, and an ambient gold-ember header effect, all hand-written in CSS and gated behind `prefers-reduced-motion`.
- **Fully responsive** and SEO-friendly (server-rendered metadata).

---

## 📸 Screenshots

> Screenshots live in [`docs/screenshots/`](docs/screenshots/). See that folder's README for how to capture them.

| Home | Testimonials (Discord) | VIP Section |
|------|------------------------|-------------|
| ![Home](docs/screenshots/home.png) | ![Testimonials](docs/screenshots/testimonials.png) | ![VIP](docs/screenshots/vip.png) |

---

## 🏗️ Architecture

This is a **Next.js 14 App Router** project. The frontend is fully static/SSR, and the two third-party integrations run as **serverless route handlers** so that API credentials stay server-side.

```
Browser
  │
  ├── /  /about  /ai-model  /testimonials      (App Router pages + React components)
  │
  ├── fetch('/api/twitter')  ─────────────►  app/api/twitter/route.ts
  │                                            └─► Twitter API v2 (Bearer token, server-only)
  │                                                · looks up user by username, then timeline
  │                                                · 5-min revalidate cache
  │                                                · falls back to [] → client shows demo tweets
  │
  └── fetch('/api/discord')  ─────────────►  app/api/discord/route.ts
                                               └─► Discord API v10 (Bot token, server-only)
                                                   · reads channel messages
                                                   · filters out bots / empty messages
                                                   · maps attachments → testimonial images
```

**Key decisions:**

- **Secrets never reach the client.** `TWITTER_BEARER_TOKEN` and `DISCORD_BOT_TOKEN` are read via `process.env` inside route handlers (`export const dynamic = 'force-dynamic'`), never bundled into client JS.
- **Graceful degradation.** The Twitter route returns an empty array on missing token/upstream failure, and `TwitterFeed.tsx` swaps in curated demo tweets — the marketing page always looks complete.
- **Discord as a CMS.** Instead of building an admin panel, the testimonials page treats a Discord channel as the content source, with bot/empty-message filtering done server-side.
- **Animation system without a library.** All motion is hand-authored CSS keyframes plus a single `IntersectionObserver`-based `ScrollReveal` component and a `CountUp` component — no Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- (Optional) **Twitter Developer** Bearer Token for the live feed
- (Optional) **Discord Bot** Token for the testimonials page

### Setup
```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

### Environment variables (`.env.local`)
```env
# Twitter feed (optional — falls back to demo tweets if omitted)
TWITTER_BEARER_TOKEN=your_bearer_token
TWITTER_USERNAME=SusSweatShop

# Discord testimonials (required for the /testimonials page)
DISCORD_BOT_TOKEN=your_bot_token
```
> The Discord channel ID is currently hardcoded in `app/api/discord/route.ts`.

---

## 🧪 Testing

Integration tests for the two API route handlers (success + fallback/error paths) using **Vitest** with a stubbed `fetch`.

```bash
npm test          # run once
npm run test:watch
```

Covered:
- `__tests__/api/twitter.test.ts` — no-token fallback, successful two-step fetch + mapping, upstream error → 500
- `__tests__/api/discord.test.ts` — no-token 500, message→testimonial mapping (bot/empty filtering, avatar URLs), upstream error passthrough

---

## 🌐 Deployment

Deployed on **Vercel** (`vercel.json` → Next.js framework, `iad1` region). Pushing to `main` on the connected GitHub repo triggers an automatic production build. Add the environment variables above under **Project → Settings → Environment Variables**.

---

## 📁 Project structure

```
sussweatshop/
├── app/
│   ├── api/
│   │   ├── twitter/route.ts        # Twitter v2 proxy (serverless)
│   │   └── discord/route.ts        # Discord v10 proxy (serverless)
│   ├── about/page.tsx
│   ├── ai-model/page.tsx
│   ├── testimonials/page.tsx       # Discord-sourced testimonials + lightbox
│   ├── layout.tsx                  # Root layout (Sidebar, ScrollReveal, Analytics)
│   ├── page.tsx                    # Home
│   └── globals.css                 # Theme + hand-written animations
├── components/                     # 15 components (Hero, WhopSection, TwitterFeed, …)
├── config/
│   └── social-links.ts             # Social links + marketing stats
├── __tests__/api/                  # Vitest integration tests
├── public/                         # Logos & images
├── tailwind.config.ts              # Custom gold/crimson/carbon theme
└── vercel.json
```

---

## 🛠️ Tech stack

| Area | Stack |
|------|-------|
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript 5.3 |
| Styling | Tailwind CSS 3.4 + custom CSS animations |
| Data | date-fns; live Twitter API v2 & Discord API v10 (no database) |
| Testing | Vitest |
| Hosting | Vercel + `@vercel/analytics` |

---

<div align="center">

Designed & developed by [**Ranjiv Jithendran**](https://www.linkedin.com/in/ranjiv-jithendran/)

*For entertainment purposes only. Please gamble responsibly. 21+.*

</div>
