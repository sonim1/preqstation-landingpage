# PREQSTATION Landingpage

This repository contains the public PREQSTATION website monorepo:

- `apps/landing` — the landing page served at `/`
- `apps/guide` — the Astro Starlight guide served at `/guide`

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
