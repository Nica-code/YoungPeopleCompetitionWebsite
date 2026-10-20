import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
import { runInNewContext } from "node:vm";

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

test("client-rendered assets retain the configured hosting base without server environment variables", async () => {
  const configSource = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
  const pathsSource = await readFile(new URL("../lib/paths.ts", import.meta.url), "utf8");
  const compile = (source) => ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  for (const [pages, hostingPath, expected] of [["true", undefined, "/YoungPeopleCompetitionWebsite"], ["true", "", ""], ["true", "/YoungPeopleCompetitionWebsite", "/YoungPeopleCompetitionWebsite"], [undefined, undefined, ""]]) {
    const config = { exports: {}, process: { env: { GITHUB_PAGES: pages, PAGES_BASE_PATH: hostingPath } } };
    runInNewContext(compile(configSource), config);
    assert.equal(config.exports.default.basePath, expected);
    // Only explicitly exposed build-time values reach the browser bundle.
    const browser = { exports: {}, process: { env: config.exports.default.env ?? {} } };
    runInNewContext(compile(pathsSource), browser);
    assert.equal(browser.exports.assetBase, expected);
    assert.equal(`${browser.exports.assetBase}/icons/x.svg`, `${expected}/icons/x.svg`);
    assert.equal(browser.exports.applicationPdf, `${expected}/2027-young-peoples-competition-application.pdf`);
  }
});

test("homepage section destinations can receive keyboard and screen-reader focus", async () => {
  const home = await page("");
  for (const id of ["recent-past-winners", "contact"]) {
    const section = home.match(new RegExp(`<section[^>]*id="${id}"[^>]*>`))?.[0];
    assert.ok(section);
    assert.match(section, /tabindex="-1"/i);
    assert.match(section, /aria-labelledby=/);
  }
});

test("custom-domain exports use root-relative assets and the correct public URLs", { skip: !process.env.PAGES_SITE_URL }, async () => {
  const expected = `${process.env.PAGES_SITE_URL.replace(/\/$/, "")}/`;
  const home = await page("");
  assert.ok(home.includes(`<link rel="canonical" href="${expected}"`));
  const sitemap = await readFile(new URL("sitemap.xml", siteRoot), "utf8");
  assert.ok(sitemap.includes(`<loc>${expected}apply/</loc>`));
  const robots = await readFile(new URL("robots.txt", siteRoot), "utf8");
  assert.ok(robots.includes(`Sitemap: ${expected}sitemap.xml`));
  if (process.env.PAGES_BASE_PATH === "") {
    for (const html of await Promise.all(routes.map(page))) {
      assert.doesNotMatch(html, /(?:src|href)="\/YoungPeopleCompetitionWebsite\//);
    }
    assert.match(home, /src="\/partners\/marshall-school-of-music\.png"/);
    assert.match(await page("apply/"), /href="\/2027-young-peoples-competition-application\.pdf"/);
  }
});

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

test("makes the cash prizes and winner-only orchestra performance clear", async () => {
  const [home, competition, faq] = await Promise.all([
    page(""),
    page("competition/"),
    page("faq/"),
  ]);

  for (const html of [home, competition, faq]) {
    assert.match(html, /\$175/);
    assert.match(html, /\$75/);
  }

  assert.match(competition, /Second prize[\s\S]{0,120}\$175/i);
  assert.match(competition, /Third prize[\s\S]{0,120}\$75/i);
  assert.match(competition, /Only the winner performs with the orchestra/i);
  assert.match(faq, /second.+\$175.+third.+\$75/i);
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

  assert.match(apply, /Complete, print, and mail/i);
  assert.match(form, /Print or save as PDF/i);
  assert.match(form, /Download blank PDF/i);
  assert.match(form, /href="(?:\/YoungPeopleCompetitionWebsite)?\/2027-young-peoples-competition-application\.pdf"/i);
  assert.match(form, /Nothing entered here is sent to or stored/i);
  assert.ok(pdf.subarray(0, 5).equals(Buffer.from("%PDF-")));
  assert.match(pdf.toString("latin1"), /%%EOF\s*$/);
});

test("publishes four recent winners and applicant safeguards", async () => {
  const [winners, privacy, accessibility] = await Promise.all([
    page("winners/"),
    page("privacy/"),
    page("accessibility/"),
  ]);

  for (const [year, name, instrument] of [
    [2026, "Harin Lee", "Violin"],
    [2025, "Liam Toney", "Violin"],
    [2024, "Soleil Gloss", "Piano"],
    [2023, "Isaiah Biele", "Violin"],
  ]) {
    assert.match(winners, new RegExp(`<li[^>]*>[^<]*<span[^>]*>${year}<\\/span>[^<]*<strong>${name}<\\/strong>[^<]*<span>${instrument}<\\/span>[^<]*<\\/li>`, "i"));
  }

  assert.match(winners, /Recent past winners/i);
  for (const olderWinner of ["Armâan Karimpour", "Haleigh Frail", "Olivia Hay", "Erica Shen", "Sesil Dikener"]) {
    assert.doesNotMatch(winners, new RegExp(olderWinner));
  }
  assert.doesNotMatch(winners, /Award|Orchestra|Portrait pending|View source|archive checklist/i);
  assert.doesNotMatch(winners, /Raleigh Frail/i);
  assert.match(privacy, /minor/i);
  assert.match(privacy, /\$30 check/i);
  assert.match(accessibility, /WCAG 2\.2 AA/i);
});

test("the homepage presents the competition and Apply opens a dedicated application", async () => {
  const home = await page("");
  assert.doesNotMatch(home, /<input\b|role="form"|id="application"/i);
  assert.match(home, /href="(?:\/YoungPeopleCompetitionWebsite)?\/apply\/"/);
  for (const route of ["apply/", "application-form/"]) {
    const html = await page(route);
    assert.match(html, /id="application"/);
    assert.match(html, /href="(?:\/YoungPeopleCompetitionWebsite)?\/apply\/"/);
    const application = html.match(/<section\b[^>]*id="application"[\s\S]*?<\/section>/i)?.[0];
    assert.ok(application, `Missing application on ${route || "homepage"}`);
    const fields = [...application.matchAll(/<input\b[^>]*name="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(fields, ["applicant-name", "applicant-email", "applicant-phone", "grade", "applicant-address", "school", "teacher-name", "teacher-email", "teacher-phone", "teacher-address", "selection", "composer", "duration", "instrument", "accompanist"]);
    assert.match(application, /role="form"/);
    assert.doesNotMatch(application, /<form\b|action=|type="submit"/i);
    assert.match(application, /121 Elwood Avenue/);
    assert.doesNotMatch(html, /Open application form|Review mailing instructions/i);
  }
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

test("homepage partners appear presenter-first without dropping existing logos", async () => {
  const home = await page("");
  const group = home.slice(home.indexOf('class="partner-marks"'));
  const marks = [...group.matchAll(/class="partner-mark partner-mark-([a-z]+)"/g)].map((match) => match[1]);
  assert.deepEqual(marks, ["presenter", "marshall", "hso", "cabell"]);
  for (const image of ["marshall-school-of-music.png", "huntington-symphony.png", "cabell-county-schools.png"]) {
    assert.ok(group.includes(image));
  }
});

test("homepage puts the location below its title and omits the redundant introduction label", async () => {
  const home = await page("");
  const heading = home.match(/<section class="presentation-heading"[\s\S]*?<\/section>/)?.[0];
  assert.ok(heading);
  assert.match(heading, /<\/h1><p class="presentation-location">Huntington, West Virginia<\/p>/);
  const introduction = home.match(/<section class="presentation-intro"[\s\S]*?<\/section>/)?.[0];
  assert.ok(introduction);
  assert.doesNotMatch(introduction, /class="eyebrow"/);
  assert.match(introduction, /Your moment with the orchestra/);
});

test("omits internal-process language from public pages", async () => {
  const pages = await Promise.all(routes.map(page));
  for (const html of pages) {
    assert.doesNotMatch(html, /Current source|Provisional|Confirmation needed|The first build|refund policy|organizer-decision checklist|Recommended naming|brand architecture|verified archive|source document/i);
  }
});

test("every page includes a linked designer credit within the footer", async () => {
  for (const route of routes) {
    const html = await page(route);
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
    assert.ok(footer, `Missing footer on ${route || "homepage"}`);
    assert.match(footer, /Designed by <a href="https:\/\/alexmalaimare\.com\/">Alex Malaimare<\/a>/);
    assert.equal((footer.match(/Alex Malaimare/g) ?? []).length, 1);
  }
});
