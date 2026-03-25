# Flowllet – Landing Page

> **Track Your Money Flow** — The official marketing landing page for [Flowllet](https://flowllet.com), a free personal finance app by [Syscomatic LLC](https://syscomatic.com).

---

## ✨ About

Flowllet is a lightweight, free personal finance app available on **Android** (Google Play). This repository contains the **landing page** — a modern, animated marketing site built with React + Vite.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [TypeScript](https://typescriptlang.org) |
| Build Tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Routing | [React Router DOM v6](https://reactrouter.com) |
| SEO | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Testing | [Vitest](https://vitest.dev) + [Playwright](https://playwright.dev) |

---

## 📁 Project Structure

```
src/
├── components/
│   └── landing/          # All landing page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ValueProposition.tsx
│       ├── MultiWallet.tsx
│       ├── AppScreenshots.tsx
│       ├── LoanTracking.tsx
│       ├── LanguageCurrency.tsx
│       ├── LightweightApp.tsx
│       ├── PrivacyTrust.tsx
│       ├── FinancialReports.tsx
│       ├── DownloadCTA.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── pages/
│   ├── Index.tsx           # Main landing page
│   └── ComingSoon.tsx      # Flowllet Web coming soon page
├── hooks/
│   └── useScrollAnimation.ts
└── index.css               # Global styles + font imports
public/
├── purplelogo.png          # Navbar logo
├── whitelogo.png           # Footer / dark bg logo
└── sitemap.xml
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or bun

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧪 Testing

```bash
# Unit tests (Vitest)
npm run test

# E2E tests (Playwright)
npx playwright test
```

---

## 🌍 Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/web` | "Coming Soon" page for Flowllet Web |

---

## 📲 Download Flowllet

<a href="https://play.google.com/store/apps/details?id=com.zahed.flowllet">
  <img src="https://img.shields.io/badge/Google_Play-Download-3DDC84?style=for-the-badge&logo=google-play&logoColor=white" />
</a>

> iOS (App Store) — **Coming Soon**

---

## 📬 Contact

For support or inquiries: [myflowllet@syscomatic.com](mailto:myflowllet@syscomatic.com)

---

## 🏢 Built by

**Syscomatic LLC** — Making personal finance simple and accessible for everyone.

---

© 2025 Flowllet by Syscomatic LLC. All rights reserved.
