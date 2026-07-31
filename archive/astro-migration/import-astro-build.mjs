// Archived importer retained for migration history only. Do not run it.
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = resolve(
  process.argv[2] || process.env.ASTRO_PROJECT_DIR || join(projectRoot, "../Website"),
);
const distRoot = join(sourceRoot, "dist");
const publicRoot = join(sourceRoot, "public");

if (!existsSync(join(distRoot, "index.html"))) {
  throw new Error(
    `No Astro build found at ${distRoot}. Build the Astro project first or pass its root: npm run import:astro -- /path/to/project`,
  );
}

const generatedRoot = join(projectRoot, "src/generated");
const destinationPublic = join(projectRoot, "public");
mkdirSync(generatedRoot, { recursive: true });
mkdirSync(destinationPublic, { recursive: true });

if (existsSync(publicRoot)) {
  cpSync(publicRoot, destinationPublic, {
    recursive: true,
    force: true,
    preserveTimestamps: true,
  });
}

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const getAttribute = (document, selectorPattern, attribute) => {
  const element = document.match(selectorPattern)?.[0] || "";
  const value = element.match(new RegExp(`${attribute}=["']([^"']*)["']`, "i"))?.[1];
  return value ? decodeHtml(value) : "";
};

const htmlFiles = [];
const visit = (directory) => {
  for (const name of readdirSync(directory)) {
    const absolutePath = join(directory, name);
    const stats = statSync(absolutePath);

    if (stats.isDirectory()) {
      visit(absolutePath);
    } else if (name === "index.html") {
      htmlFiles.push(absolutePath);
    }
  }
};
visit(distRoot);

const toRoute = (filePath) => {
  const directory = relative(distRoot, dirname(filePath));
  return directory ? `/${directory.split(sep).join("/")}` : "/";
};

const pages = {};
const linkedStylesheets = new Set();

for (const htmlFile of htmlFiles.sort()) {
  const document = readFileSync(htmlFile, "utf8");
  const route = toRoute(htmlFile);
  const title = decodeHtml(document.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "UniSouk");
  const description = getAttribute(
    document,
    /<meta\s+name=["']description["'][^>]*>/i,
    "content",
  );
  const canonical =
    getAttribute(document, /<link\s+rel=["']canonical["'][^>]*>/i, "href") ||
    new URL(route, "https://www.unisouk.com").href;
  const body = document.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (body === undefined) {
    throw new Error(`Could not find a body element in ${htmlFile}`);
  }

  for (const match of document.matchAll(
    /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/gi,
  )) {
    linkedStylesheets.add(match[1]);
  }

  const scripts = [];
  const html = body.replace(
    /<script([^>]*)>([\s\S]*?)<\/script>/gi,
    (fullMatch, attributes, source) => {
      if (/type=["']application\/ld\+json["']/i.test(attributes)) {
        return fullMatch;
      }

      if (/\bsrc=/i.test(attributes)) {
        const sourcePath = attributes.match(/\bsrc=["']([^"']+)["']/i)?.[1];
        if (!sourcePath?.startsWith("/_astro/") || !sourcePath.endsWith(".js")) {
          throw new Error(
            `External legacy scripts are not supported by the importer (${htmlFile}).`,
          );
        }

        const compiledScriptPath = resolve(distRoot, `.${sourcePath}`);
        const relativeScriptPath = relative(distRoot, compiledScriptPath);
        if (
          relativeScriptPath.startsWith(`..${sep}`) ||
          relativeScriptPath === ".." ||
          !existsSync(compiledScriptPath)
        ) {
          throw new Error(
            `Could not resolve compiled Astro script ${sourcePath} (${htmlFile}).`,
          );
        }

        scripts.push(readFileSync(compiledScriptPath, "utf8").trim());
        return "";
      }

      scripts.push(source.trim());
      return "";
    },
  );

  pages[route] = {
    route,
    title,
    description,
    canonical,
    html,
    scripts: scripts.filter(Boolean),
  };
}

const cssBanner = `/*
 * GENERATED ASTRO COMPATIBILITY CSS.
 *
 * Do not edit this section by hand. Run \`npm run import:astro\` while the
 * compatibility layer exists. Native Next.js styles belong in CSS Modules or
 * in the clearly marked project-owned section at the end of this file.
 */\n`;

const css = [...linkedStylesheets]
  .sort((first, second) => {
    const score = (value) =>
      value.includes("/Layout.") ? -2 : value.includes("/SiteFooter.") ? -1 : 0;
    return score(first) - score(second) || first.localeCompare(second);
  })
  .map((href) => {
    const filePath = join(distRoot, href.replace(/^\/+/, ""));
    if (!existsSync(filePath)) {
      throw new Error(`Linked stylesheet does not exist: ${filePath}`);
    }
    return `/* ${href} */\n${readFileSync(filePath, "utf8")}`;
  })
  .join("\n\n");

const projectCss = `

/* PROJECT-OWNED NEXT.JS STYLES */
.legacy-page {
  display: contents;
}

.not-found {
  display: grid;
  min-height: 100svh;
  place-content: center;
  justify-items: start;
  gap: 1.5rem;
  padding: var(--gutter, 1.5rem);
  background: var(--mist, #f5f5f5);
  color: var(--ink, #171717);
}

.not-found p,
.not-found h1 {
  margin: 0;
}

.not-found p {
  color: var(--orange-ink, #b85a00);
  font-weight: 700;
}

.not-found h1 {
  max-width: 12ch;
  font-family: var(--font-heading, sans-serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.98;
}
`;

writeFileSync(
  join(generatedRoot, "pages.json"),
  `${JSON.stringify(pages, null, 2)}\n`,
  "utf8",
);
writeFileSync(
  join(projectRoot, "app/globals.css"),
  `${cssBanner}${css}${projectCss}`,
  "utf8",
);

console.log(
  `Imported ${Object.keys(pages).length} routes, ${linkedStylesheets.size} stylesheets, and public assets from ${sourceRoot}.`,
);
