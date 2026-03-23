# Cloudflare Pages Deployment

This monorepo should deploy to Cloudflare Pages as one public site:

- `https://preqstation.com/` for the landing site
- `https://preqstation.com/guide` for the guide

That matches the current code:

- landing already uses `site: 'https://preqstation.com'`
- guide already uses `base: '/guide'`
- guide content already links with `/guide/...` paths

## Recommended Topology

Use one Cloudflare Pages project that publishes a merged static artifact.

| Setting | Value |
|---|---|
| Framework preset | `None` |
| Root directory | `/` |
| Build command | `pnpm run build:pages` |
| Build output directory | `.cf-pages-dist` |
| Node version | `22` |
| pnpm version | `10.6.5` |

Environment variables:

```text
NODE_VERSION=22
PNPM_VERSION=10.6.5
```

Recommended build watch paths:

```text
apps/landing/*
apps/guide/*
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
turbo.json
.node-version
```

## How The Merged Artifact Works

`pnpm run build:pages` does this:

1. Builds both Astro apps
2. Copies `apps/landing/dist` to `.cf-pages-dist/`
3. Copies `apps/guide/dist` to `.cf-pages-dist/guide/`
4. Preserves the root `_headers` file from landing

Expected output:

```text
.cf-pages-dist/index.html
.cf-pages-dist/guide/index.html
.cf-pages-dist/_headers
```

## Local Verification

```bash
pnpm install
pnpm run build:pages
```

Optional checks:

```bash
pnpm --filter @preqstation/landing build
pnpm --filter @preqstation/guide build
rg -n "https://preqstation.com/guide" apps/guide/dist/index.html apps/guide/dist/api/task-lifecycle/index.html
```

## Why This Is The Default

The guide is path-coupled today:

- `apps/guide/astro.config.mjs` sets `base: '/guide'`
- guide docs use absolute `/guide/...` links
- the built HTML outputs `/guide/...` asset and route paths

Because of that, a single Pages project is simpler than running a second Pages project plus proxy rules.

## Alternative: Two Pages Projects

Only use this if you intentionally want a separate docs host such as `guide.preqstation.com`.

If you do that, you must also revisit:

- `apps/guide/astro.config.mjs`
- guide absolute `/guide/...` links
- canonical URLs and sitemap host
- preview deployment behavior across both projects
