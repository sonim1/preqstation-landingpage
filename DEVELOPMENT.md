# Development

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
