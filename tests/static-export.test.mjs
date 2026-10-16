import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const siteRoot = new URL("../out/", import.meta.url);

const routes = [
  "",
  "competition/",
  "apply/",
  "application-form/",
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
  assert.match(html, /December 14, 2026/i);
  assert.match(html, /January 10, 2027/i);
  assert.match(html, /more than six decades/i);
  assert.match(html, /Marshall University/i);
  assert.match(html, /Skip to main content/i);
  assert.match(html, /summary_large_image/i);

  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
  assert.doesNotMatch(html, /Starter Project/i);
});

test("publishes the correct 2027 requirements and mailing route", async () => {
  const [competition, apply, contact, form] = await Promise.all([
    page("competition/"),
    page("apply/"),
    page("contact/"),
    page("application-form/"),
  ]);

  assert.match(competition, /December 14, 2026/i);
  assert.match(competition, /Sunday, January 10, 2027/i);
  assert.match(competition, /12:15 p\.m\./i);
  assert.match(competition, /12 minutes/i);
  assert.match(competition, /\$300/i);
  assert.match(competition, /Mar 01/i);
  assert.match(apply, /Young People(?:’|&#x27;)s Concert Committee/i);
  assert.match(apply, /121 Elwood Avenue/i);
  assert.match(contact, /cathwayjcs@yahoo\.com/i);
  assert.match(contact, /304-617-3367/i);
  assert.match(form, /2027 audition application/i);
  assert.match(form, /Teacher(?:’|&#x27;)s name/i);
  assert.match(form, /Nothing entered here is sent to or stored/i);
  assert.doesNotMatch(apply, /Zelle|application ID/i);
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
  assert.match(privacy, /\$30 check/i);
  assert.match(accessibility, /WCAG 2\.2 AA/i);
});
