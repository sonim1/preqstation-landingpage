#!/usr/bin/env bash
set -euo pipefail

pnpm build

rm -rf .cf-pages-dist
mkdir -p .cf-pages-dist/guide

cp -R apps/landing/dist/. .cf-pages-dist/
find apps/guide/dist -mindepth 1 -maxdepth 1 ! -name '_headers' -exec cp -R {} .cf-pages-dist/guide/ \;
