<p align="center">
  <a href="https://preqstation.com">
    <img src="https://raw.githubusercontent.com/sonim1/preqstation-landingpage/main/apps/landing/public/brand/logo.webp" alt="PreqStation" width="96" />
  </a>
</p>

<h1 align="center">PreqStation Website & Guide</h1>

<p align="center">
  <strong>Public landing page and documentation site for the PreqStation system.</strong>
</p>

<p align="center">
  <a href="https://preqstation.com">Website</a> ·
  <a href="https://preqstation.com/guide">Guide</a> ·
  <a href="https://github.com/sonim1/preqstation">Core App</a> ·
  <a href="https://github.com/sonim1/preqstation-dispatcher">PREQ CLI</a> ·
  <a href="https://github.com/sonim1/preqstation-skill">Worker Skill</a>
</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" /></a>
  <a href="https://nodejs.org"><img alt="Node 22" src="https://img.shields.io/badge/Node-22-green.svg" /></a>
</p>

---

## What this repo owns

This repository contains the public PreqStation website monorepo:

- `apps/landing` — the landing page served at [preqstation.com](https://preqstation.com/)
- `apps/guide` — the Astro Starlight guide served at [preqstation.com/guide](https://preqstation.com/guide)

The repo uses `pnpm` workspaces and `turbo`.

## Requirements

- Node.js `22`
- `pnpm` `10.6.5`

## Local Development

Install dependencies from the repository root:

```bash
pnpm install
```

Run both apps in development:

```bash
pnpm dev
```

Typical local URLs:

- landing: `http://localhost:4321/`
- guide: `http://localhost:4322/guide`

Run a single app:

```bash
pnpm --filter @preqstation/landing dev
pnpm --filter @preqstation/guide dev
```

## Build

Build both apps:

```bash
pnpm build
```

Build the Cloudflare Pages artifact:

```bash
pnpm run build:pages
```

That command creates a merged static output in `.cf-pages-dist`:

- `.cf-pages-dist/` for the landing page
- `.cf-pages-dist/guide/` for the guide

## Deployment

The default deployment target is a single Cloudflare Pages project:

- site root: `https://preqstation.com/`
- guide: `https://preqstation.com/guide`

Recommended Pages settings:

- Root directory: `/`
- Build command: `pnpm run build:pages`
- Build output directory: `.cf-pages-dist`

See [DEPLOY.md](./DEPLOY.md) for the full deployment notes.

## Repository Layout

```text
.
├── apps/
│   ├── guide/
│   └── landing/
├── scripts/
│   └── build-pages.sh
├── DEPLOY.md
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## License

MIT. See [LICENSE](./LICENSE).
