import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const en = readFileSync("apps/landing/src/i18n/en.ts", "utf8");
const ko = readFileSync("apps/landing/src/i18n/ko.ts", "utf8");
const pageContent = readFileSync("apps/landing/src/components/PageContent.tsx", "utf8");

test("landing CTAs target Quick Start for both locales", () => {
  assert.match(pageContent, /getGuideDocPath\(locale, "getting-started\/quick-start"\)/);
  assert.match(en, /value: "\/guide\/getting-started\/quick-start\/?"/);
  assert.match(ko, /value: "\/guide\/ko\/getting-started\/quick-start\/?"/);
});

test("landing proof shows the current PREQ CLI operator-host flow", () => {
  for (const expected of [
    "npx -y @sonim1/preqstation@latest install",
    "preqstation doctor",
    "preqstation setup auto",
    "preqstation run --project-key PROJ --task-key PROJ-123 --engine codex",
    "Review notes, tests, branch, or PR evidence in PreqStation",
  ]) {
    assert.match(en, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("audience paths distinguish setup modes in English and Korean", () => {
  for (const expected of [
    "First-time local operator",
    "Self-hosting the web app",
    "Worker-only fallback",
    "Advanced dispatcher host",
  ]) {
    assert.match(en, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const expected of [
    "처음 설정하는 로컬 운영자",
    "웹 앱을 셀프 호스팅하는 경우",
    "워커 전용 fallback",
    "고급 디스패처 호스트",
  ]) {
    assert.match(ko, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("landing no longer frames direct dispatch as Claude-only", () => {
  const combined = `${en}\n${ko}`;
  assert.doesNotMatch(combined, /Use Claude for direct dispatch/);
  assert.doesNotMatch(combined, /Claude can direct-dispatch/);
  assert.doesNotMatch(combined, /Codex and Gemini stay on the worker path/);
  assert.doesNotMatch(combined, /Codex\uc640 Gemini\ub294 worker \uacbd\ub85c/);
});

test("guide documents only the unified preqstation slash command surface", () => {
  const guideFiles = [
    "apps/guide/src/content/docs/skill/installation.mdx",
    "apps/guide/src/content/docs/skill/mcp-tools.mdx",
    "apps/guide/src/content/docs/web-app/telegram.mdx",
    "apps/guide/src/content/docs/ko/skill/installation.mdx",
    "apps/guide/src/content/docs/ko/web-app/telegram.mdx",
  ];
  const combinedGuide = guideFiles.map((file) => readFileSync(file, "utf8")).join("\n");

  assert.match(combinedGuide, /\/preqstation setup/);
  assert.match(combinedGuide, /\/preqstation dispatch/);
  assert.doesNotMatch(combinedGuide, /\/preqstation:/);
  assert.doesNotMatch(combinedGuide, /\/preqstation_dispatch/);
  assert.doesNotMatch(combinedGuide, /\/preq_dispatch/);
  assert.doesNotMatch(combinedGuide, /\/skill preqstation/);
});

test("guide no longer publishes GBrain as a supported product command surface", () => {
  assert.equal(existsSync("apps/guide/src/content/docs/advanced/gbrain.mdx"), false);
  assert.equal(existsSync("apps/guide/src/content/docs/ko/advanced/gbrain.mdx"), false);

  const guideConfig = readFileSync("apps/guide/astro.config.mjs", "utf8");
  assert.doesNotMatch(guideConfig, /GBrain/);
  assert.doesNotMatch(guideConfig, /advanced\/gbrain/);
});
