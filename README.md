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

## Curriculum maintenance

`docs/master-curriculum.md` is the plan for every topic. After adding topics or changing priorities or batches:

```bash
node scripts/curriculum.mjs          # check the inventory and print the counts
node scripts/curriculum.mjs --write  # also regenerate the counts and batch tables and the ✓ marks
```

The check fails if a slug is listed twice, a P1 topic is in no batch (or two), a batched topic is not P1, or a ✓ mark does not match the topics in `content/topics`. Verification and review status for each topic is recorded in `docs/content-log.md`.
