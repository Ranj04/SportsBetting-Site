# 🏆 SUSSWEATSHOP - Premium Sports Betting Platform

<div align="center">

![SUSSWEATSHOP](https://img.shields.io/badge/SUSSWEATSHOP-Premium%20Sports%20Betting-red?style=for-the-badge&logo=sportsbet)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

**Your premier destination for expert sports betting insights, picks, and community engagement**

[Live Demo](#) • [Documentation](#getting-started) • [Twitter](#) • [Discord](#)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **🏅 Multi-League Coverage**: Expert picks and insights for MLB, NFL, NBA, and NHL
- **📊 Real-Time Updates**: Live Twitter feed integration for instant news and picks
- **💬 Community Hub**: Direct links to Discord, Twitter, TikTok, Instagram, and DubClub
- **🎨 Premium Design**: Sleek carbon fiber aesthetic with metallic gold and red accents
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices

### 🚀 Technical Excellence
- **⚡ Next.js 14**: Built with the latest React framework for optimal performance
- **🔒 Type-Safe**: Full TypeScript implementation for reliability
- **🎨 Modern UI**: Tailwind CSS with custom design system
- **🔄 Real-Time Data**: Twitter API v2 integration for live content
- **🌐 SEO Optimized**: Server-side rendering for better search visibility

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Twitter Developer Account** (for live feed - [Get Started](https://developer.twitter.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sussweatshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment** (see [Twitter API Setup](#twitter-api-setup) below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔧 Twitter API Setup

To enable the live Twitter feed:

1. **Create a Twitter Developer Account**
   - Visit [Twitter Developer Portal](https://developer.twitter.com/)
   - Sign in and apply for developer access

2. **Create a New App**
   - Go to [Developer Portal Dashboard](https://developer.twitter.com/en/portal/dashboard)
   - Click "Create Project" or "Create App"
   - Name: "Sussweatshop Website"

3. **Generate Bearer Token**
   - Navigate to "Keys and Tokens" tab
   - Under "Bearer Token", click "Generate"
   - **Important**: Copy the token immediately!

4. **Add to Environment Variables**
   ```env
   TWITTER_BEARER_TOKEN=your_bearer_token_here
   TWITTER_USERNAME=your_twitter_handle
   ```

---

## 🌐 Deployment to Vercel

### Quick Deploy

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variables:
     - `TWITTER_BEARER_TOKEN`
     - `TWITTER_USERNAME`
   - Click "Deploy"

3. **Your site is live!** 🎉

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## 📁 Project Structure

```
sussweatshop/
├── app/
│   ├── api/twitter/route.ts      # Twitter API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── Hero.tsx                   # Hero section
│   ├── SocialLinks.tsx            # Social media links
│   ├── SportsLeagues.tsx          # Sports showcase
│   └── TwitterFeed.tsx            # Twitter feed
└── package.json
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📞 Support

- **Twitter**: [@YourHandle](#)
- **Discord**: [Join Server](#)
- **Email**: support@sussweatshop.com

---

<div align="center">

**Built with ❤️ by the SUSSWEATSHOP team**

</div>
