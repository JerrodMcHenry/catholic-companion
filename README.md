# Catholic Companion

A simple, mobile-first guide to the Catholic faith: learn what the Church teaches, explore questions and objections, live the faith, and find trustworthy resources.

## Technology

- Next.js (App Router), React, TypeScript, Tailwind CSS
- Static, typed content. No database, backend API, accounts, or external services.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck  # next typegen && tsc --noEmit
npm run build
```

Use `npm run typecheck` rather than `tsc` alone: the layout uses `LayoutProps`, a type Next.js generates into the gitignored `.next/types` folder.
