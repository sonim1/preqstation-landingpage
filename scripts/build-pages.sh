#!/usr/bin/env bash
set -euo pipefail

pnpm build

rm -rf .cf-pages-dist
mkdir -p .cf-pages-dist/guide

cp -R apps/landing/dist/. .cf-pages-dist/
find apps/guide/dist -mindepth 1 -maxdepth 1 ! -name '_headers' -exec cp -R {} .cf-pages-dist/guide/ \;

cat > .cf-pages-dist/sitemap.xml <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://preqstation.com/sitemap-0.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://preqstation.com/guide/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
EOF

cp .cf-pages-dist/guide/sitemap-index.xml .cf-pages-dist/guide/sitemap.xml
