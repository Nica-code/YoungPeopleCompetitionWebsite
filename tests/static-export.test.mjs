import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const siteRoot = new URL("../out/", import.meta.url);

const routes = [
  "",
  "competition/",
  "apply/",
  "winners/",
  "about/",
  "faq/",
  "contact/",
  "privacy/",
  "terms/",
  "accessibility/",
];

async function page(route) {
  return readFile(new URL(`${route}index.html`, siteRoot), "utf8");
}

test("exports every public route", async () => {
  await Promise.all(
    routes.map((route) => access(new URL(`${route}index.html`, siteRoot))),
  );
  await access(new URL("sitemap.xml", siteRoot));
  await access(new URL("robots.txt", siteRoot));
  await access(new URL("og.png", siteRoot));
});

test("renders the finished, source-conscious homepage", async () => {
  const html = await page("");

  assert.match(html, /Young People(?:’|&#x27;)s Competition/i);
  assert.match(html, /Huntington, West Virginia/i);
  assert.match(html, /Applications are not yet open/i);
  assert.match(html, /more than six decades/i);
  assert.match(html, /Marshall University/i);
  assert.match(html, /Skip to main content/i);
  assert.match(html, /summary_large_image/i);

  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
  assert.doesNotMatch(html, /Starter Project/i);
});

test("keeps unknown current-edition facts visibly unconfirmed", async () => {
  const [competition, apply] = await Promise.all([
    page("competition/"),
    page("apply/"),
  ]);

  assert.match(competition, /To be confirmed/i);
  assert.match(competition, /Confirmation needed/i);
  assert.match(apply, /Application not yet available/i);
  assert.match(apply, /payment has been verified/i);
  assert.doesNotMatch(apply, /payment confirmed[^<]*automatically/i);
});

test("publishes a cited winners archive and applicant safeguards", async () => {
  const [winners, privacy, accessibility] = await Promise.all([
    page("winners/"),
    page("privacy/"),
    page("accessibility/"),
  ]);

  for (const winner of [
    "Isaiah Biele",
    "Armâan Karimpour",
    "Raleigh Frail",
    "Olivia Hay",
    "Erica Shen",
    "Sesil Dikener",
  ]) {
    assert.match(winners, new RegExp(winner));
  }

  assert.match(winners, /View source/i);
  assert.match(privacy, /minor/i);
  assert.match(privacy, /Zelle/i);
  assert.match(accessibility, /WCAG 2\.2 AA/i);
});
