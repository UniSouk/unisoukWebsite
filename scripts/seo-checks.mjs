import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const SITE_URL = "https://www.unisouk.com";
const APP_OUTPUT_DIRECTORY = join(process.cwd(), ".next", "server", "app");
const runtimeBaseUrl = process.env.SEO_CHECK_BASE_URL?.replace(/\/$/, "");
const failures = [];

function fail(check, detail) {
  failures.push(`${check}: ${detail}`);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function routeFromHtmlPath(filePath) {
  const outputPath = relative(APP_OUTPUT_DIRECTORY, filePath)
    .replace(/\\/g, "/")
    .replace(/\.html$/, "");

  if (outputPath === "index") return "/";
  return `/${outputPath.replace(/\/index$/, "")}/`;
}

function extractAttribute(tag, attribute) {
  return tag.match(new RegExp(`\\b${attribute}="([^"]*)"`, "i"))?.[1];
}

function canonicalUrls(html) {
  return (html.match(/<link\b[^>]*>/gi) || [])
    .filter((tag) => /\brel="canonical"/i.test(tag))
    .map((tag) => extractAttribute(tag, "href"))
    .filter(Boolean);
}

function isNoindex(html) {
  return (html.match(/<meta\b[^>]*>/gi) || []).some(
    (tag) =>
      /\bname="robots"/i.test(tag) &&
      /\bcontent="[^"]*noindex/i.test(tag),
  );
}

function headingLevels(html) {
  return [...html.matchAll(/<h([1-6])(?:\s|>)/gi)].map((match) =>
    Number(match[1]),
  );
}

function countMatches(value, expression) {
  return [...value.matchAll(expression)].length;
}

if (!existsSync(APP_OUTPUT_DIRECTORY)) {
  console.error("SEO output is missing. Run npm run build before npm run seo:check.");
  process.exit(1);
}

const htmlByRoute = new Map();
for (const filePath of walk(APP_OUTPUT_DIRECTORY).filter((filePath) =>
  filePath.endsWith(".html"),
)) {
  if (filePath.endsWith("/_not-found.html")) continue;

  const html = readFileSync(filePath, "utf8");
  if (html.includes('<html id="__next_error__">')) continue;

  const route = routeFromHtmlPath(filePath);
  const canonicals = canonicalUrls(html);

  if (canonicals.length === 0) {
    if (!/<meta\b[^>]*http-equiv="refresh"/i.test(html)) {
      fail("canonical", `${route} has no canonical URL`);
    }
    continue;
  }

  if (isNoindex(html)) continue;

  htmlByRoute.set(route, html);

  if (canonicals.length !== 1) {
    fail("canonical", `${route} has ${canonicals.length} canonical URLs`);
  } else if (canonicals[0] !== `${SITE_URL}${route}`) {
    fail(
      "canonical",
      `${route} canonical is ${canonicals[0]}, expected ${SITE_URL}${route}`,
    );
  }

  const headings = headingLevels(html);
  if (headings.filter((level) => level === 1).length !== 1) {
    fail("h1", `${route} must contain exactly one h1`);
  }
  if (headings[0] !== 1) {
    fail("heading order", `${route} must start with h1`);
  }
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] > headings[index - 1] + 1) {
      fail(
        "heading order",
        `${route} skips h${headings[index - 1]} to h${headings[index]}`,
      );
    }
  }

  for (const phrase of [
    "never share your data",
    "one of the best",
    "first truly",
    "seasoned",
    "****",
    "+91+91",
  ]) {
    if (html.toLowerCase().includes(phrase)) {
      fail("banned phrase", `${route} contains ${JSON.stringify(phrase)}`);
    }
  }
}

const home = htmlByRoute.get("/");
if (!home) {
  fail("homepage", "generated homepage HTML is missing");
} else {
  const preloadCount = countMatches(home, /rel="preload" as="image"/g);
  if (preloadCount !== 2) {
    fail("image preload", `homepage has ${preloadCount} image preloads, expected 2`);
  }

  const highPriorityImages = countMatches(
    home,
    /<img\b[^>]*fetchPriority="high"[^>]*>/g,
  );
  if (highPriorityImages !== 1) {
    fail(
      "image priority",
      `homepage has ${highPriorityImages} high-priority img elements, expected 1`,
    );
  }

  if (countMatches(home, /loading="eager"/g) !== 0) {
    fail("image loading", "homepage contains an eagerly loaded image");
  }
  if (/<link\b[^>]*ecosystem-logos[^>]*>/i.test(home)) {
    fail("image preload", "an ecosystem logo is preloaded on the homepage");
  }
}

for (const route of [
  "/",
  "/solutions/unified-commerce/",
  "/solutions/performance-marketing/",
]) {
  const html = htmlByRoute.get(route);
  if (!html) {
    fail("demo label", `${route} generated HTML is missing`);
  } else if (!html.includes("Illustrative product interface; not customer results.")) {
    fail("demo label", `${route} is missing the illustrative-interface label`);
  }
}

const sitemapPath = join(APP_OUTPUT_DIRECTORY, "sitemap.xml.body");
if (!existsSync(sitemapPath)) {
  fail("sitemap", "generated sitemap.xml.body is missing");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );

  if (/changefreq|priority/i.test(sitemap)) {
    fail("sitemap", "contains ignored changefreq or priority tags");
  }
  if (locations.length !== new Set(locations).size) {
    fail("sitemap", "contains duplicate loc values");
  }
  for (const location of locations) {
    if (
      !location.startsWith(`${SITE_URL}/`) ||
      !location.endsWith("/") ||
      /[?#]/.test(location)
    ) {
      fail("sitemap", `invalid loc ${location}`);
    }
  }
}

async function verifyRedirects() {
  const routeFile = readFileSync(
    join(process.cwd(), "src", "constants", "legacy-routes.ts"),
    "utf8",
  );
  const redirects = [...routeFile.matchAll(
    /source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g,
  )].map((match) => ({ source: match[1], destination: match[2] }));
  const sources = new Set(redirects.map(({ source }) => source));

  for (const { source, destination } of redirects) {
    if (sources.has(destination.replace(/\/$/, ""))) {
      fail("redirect contract", `${destination} is also a redirect source`);
    }

    for (const requestedPath of [source, `${source}/`]) {
      const response = await fetch(`${runtimeBaseUrl}${requestedPath}`, {
        redirect: "manual",
      });
      const location = response.headers.get("location");
      if (!response.status.toString().startsWith("30") || !location) {
        fail("redirect contract", `${requestedPath} did not return a redirect`);
        continue;
      }

      const resolvedDestination = new URL(location, runtimeBaseUrl);
      if (resolvedDestination.pathname !== destination) {
        fail(
          "redirect contract",
          `${requestedPath} redirects to ${resolvedDestination.pathname}, expected ${destination}`,
        );
        continue;
      }

      const destinationResponse = await fetch(resolvedDestination, {
        redirect: "manual",
      });
      if (destinationResponse.status !== 200) {
        fail(
          "redirect contract",
          `${destination} returned ${destinationResponse.status} after ${requestedPath}`,
        );
      }
    }
  }
}

if (runtimeBaseUrl) {
  await verifyRedirects();
} else {
  console.warn(
    "Skipping preview redirect assertions; set SEO_CHECK_BASE_URL to validate one-hop redirect contracts.",
  );
}

if (failures.length > 0) {
  console.error("SEO checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`SEO checks passed for ${htmlByRoute.size} indexable generated routes.`);
}
