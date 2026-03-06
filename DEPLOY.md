# Cloudflare Pages Deployment

This monorepo deploys as two separate Cloudflare Pages projects.

## Projects

### Project 1: preqstation-landing (main site)

| Setting | Value |
|---|---|
| Build command | `pnpm run build --filter=@preqstation/landing` |
| Build output directory | `apps/landing/dist` |
| Root directory | `/` (repo root) |
| Node version | `22` |

**Environment variables:**
```
NODE_VERSION=22
```

**Custom domain:** `preqstation.dev`

---

### Project 2: preqstation-guide (docs)

| Setting | Value |
|---|---|
| Build command | `pnpm run build --filter=@preqstation/guide` |
| Build output directory | `apps/guide/dist` |
| Root directory | `/` (repo root) |
| Node version | `22` |

**Environment variables:**
```
NODE_VERSION=22
```

**Custom domain:** `guide.preqstation.dev`

---

## Routing /guide/* to the guide project

To serve the guide under `preqstation.dev/guide`, set up a Cloudflare Rule (Transform Rule or Page Rule) to proxy requests:

1. In the **preqstation-landing** Cloudflare Pages project, go to **Settings → Functions → Proxy**.
2. Alternatively, add a Cloudflare **Transform Rule** at the zone level:
   - Match: `http.request.uri.path matches "^/guide(/.*)?$"`
   - Action: Rewrite / proxy to `guide.preqstation.dev`

Or use a `_worker.js` / `_routes.json` in the landing app to forward `/guide/*` to the guide Pages project URL.

---

## Two-project strategy

```
preqstation.dev          → preqstation-landing Pages project
preqstation.dev/guide/*  → proxied to guide.preqstation.dev (preqstation-guide Pages project)
guide.preqstation.dev    → preqstation-guide Pages project (direct)
```

The guide app has `base: '/guide'` set in `apps/guide/astro.config.mjs`, so all its internal links and assets are prefixed correctly.

---

## Local build verification

```bash
# Build both apps
pnpm run build

# Build individually
pnpm run build --filter=@preqstation/landing
pnpm run build --filter=@preqstation/guide
```

Output directories:
- Landing: `apps/landing/dist/`
- Guide: `apps/guide/dist/`
