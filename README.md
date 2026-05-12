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

## Quick Start

```bash
pnpm install
pnpm dev
```

Typical local URLs are `http://localhost:4321/` for the landing page and `http://localhost:4322/guide` for the guide.

## Documentation

- [Development](DEVELOPMENT.md) — requirements, local dev commands, and build commands
- [Deployment](DEPLOY.md) — Cloudflare Pages target and full deployment notes
- [Repository Layout](REPOSITORY_LAYOUT.md) — workspace structure

## License

MIT. See [LICENSE](./LICENSE).
