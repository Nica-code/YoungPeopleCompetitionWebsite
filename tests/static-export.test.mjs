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

test("renders a concise homepage with the current competition essentials", async () => {
  const html = await page("");

  assert.match(html, /Young People(?:’|&#x27;)s Competition/i);
  assert.match(html, /Huntington, West Virginia/i);
  assert.match(html, /December 14, 2026/i);
  assert.match(html, /January 10, 2027/i);
  assert.match(html, /Harin Lee/i);
  assert.match(html, /Marshall University/i);
  assert.match(html, /joined by members of the Huntington Symphony Orchestra/i);
  assert.match(html, /Huntington Symphony Orchestra also sponsors the prizes/i);
  assert.match(html, /Skip to main content/i);
  assert.match(html, /summary_large_image/i);

  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
  assert.doesNotMatch(html, /Starter Project/i);
  assert.doesNotMatch(html, /Current source|Portrait pending|Visit the verified archive/i);
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
  assert.match(competition, /three copies of the score/i);
  assert.match(competition, /three judges/i);
  assert.match(competition, /joined by members of the Huntington Symphony Orchestra/i);
  assert.match(apply, /Young People(?:’|&#x27;)s Concert Committee/i);
  assert.match(apply, /121 Elwood Avenue/i);
  assert.match(contact, /cathwayjcs@yahoo\.com/i);
  assert.match(contact, /href="tel:\+13046173367"/i);
  assert.match(form, /2027 audition application/i);
  assert.match(form, /Teacher(?:’|&#x27;)s name/i);
  assert.match(form, /Nothing entered here is sent to or stored/i);
  assert.doesNotMatch(apply, /Zelle|application ID/i);
});

test("contact page offers email and call buttons without showing the contact details", async () => {
  const contact = await page("contact/");

  assert.match(contact, /href="mailto:cathwayjcs@yahoo\.com"[^>]*>Email Judith<\/a>/i);
  assert.match(contact, /href="tel:\+13046173367"[^>]*>Call Judith<\/a>/i);
  assert.doesNotMatch(contact, />cathwayjcs@yahoo\.com<\/a>/i);
  assert.doesNotMatch(contact, />304-617-3367<\/a>/i);
});

test("offers a local print option and a downloadable blank application", async () => {
  const [apply, form, pdf] = await Promise.all([
    page("apply/"),
    page("application-form/"),
    readFile(new URL("2027-young-peoples-competition-application.pdf", siteRoot)),
  ]);

  assert.match(apply, /Fill out on this page, then print or save as PDF/i);
  assert.match(form, /Print or save as PDF/i);
  assert.match(form, /Download blank PDF/i);
  assert.match(form, /href="\.\.\/2027-young-peoples-competition-application\.pdf"/i);
  assert.match(form, /Nothing entered here is sent to or stored/i);
  assert.ok(pdf.subarray(0, 5).equals(Buffer.from("%PDF-")));
  assert.match(pdf.toString("latin1"), /%%EOF\s*$/);
});

test("publishes a simple winners list and applicant safeguards", async () => {
  const [winners, privacy, accessibility] = await Promise.all([
    page("winners/"),
    page("privacy/"),
    page("accessibility/"),
  ]);

  for (const winner of [
    "Harin Lee",
    "Liam Toney",
    "Isaiah Biele",
    "Armâan Karimpour",
    "Haleigh Frail",
    "Olivia Hay",
    "Erica Shen",
    "Sesil Dikener",
  ]) {
    assert.match(winners, new RegExp(winner));
  }

  assert.doesNotMatch(winners, /Award|Orchestra|Portrait pending|View source|archive checklist/i);
  assert.match(winners, /2024/);
  assert.doesNotMatch(winners, /Raleigh Frail/i);
  assert.match(privacy, /minor/i);
  assert.match(privacy, /\$30 check/i);
  assert.match(accessibility, /WCAG 2\.2 AA/i);
});

test("shows the side-by-side partnership and organization identities", async () => {
  const [home, competition] = await Promise.all([page(""), page("competition/")]);

  for (const html of [home, competition]) {
    assert.match(html, /professional (?:HSO|Huntington Symphony Orchestra) musicians/i);
    assert.match(html, /School of Music logo/i);
    assert.match(html, /Huntington Symphony Orchestra logo/i);
    assert.match(html, /The Woman(?:’|&#x27;)s Club of Huntington/i);
    assert.match(html, /Cabell County Schools logo/i);
  }

  for (const asset of [
    "partners/marshall-school-of-music.png",
    "partners/huntington-symphony.png",
    "partners/cabell-county-schools.png",
  ]) {
    await access(new URL(asset, siteRoot));
  }
});

test("omits internal-process language from public pages", async () => {
  const pages = await Promise.all(routes.map(page));
  for (const html of pages) {
    assert.doesNotMatch(html, /Current source|Provisional|Confirmation needed|The first build|refund policy|organizer-decision checklist|Recommended naming|brand architecture|verified archive|source document/i);
  }
});
