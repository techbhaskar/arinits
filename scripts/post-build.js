import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { seoRoutes, siteUrl } from "./seo-routes.js";

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const replaceMeta = (html, selector, value) => html.replace(
  new RegExp(`<meta ${selector}="[^"]+" content="[^"]*"\\s*/?>`, "i"),
  `<meta ${selector} content="${escapeHtml(value)}" />`,
);

const renderRouteHead = (template, route) => {
  const canonicalPath = route.path === "/" ? "/" : `${route.path}/`;
  const canonical = `${siteUrl}${canonicalPath}`;
  const image = `${siteUrl}/logo.png`;
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(route.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`);

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', route.description);
  html = replaceMeta(html, 'property="og:type"', route.type);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:image"', image);
  html = replaceMeta(html, 'property="og:image:secure_url"', image);
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', route.description);
  html = replaceMeta(html, 'name="twitter:image"', image);
  if (route.path !== "/" && route.path !== "/about") {
    html = html.replace(
      /\s*<script type="application\/ld\+json">\s*\{[\s\S]*?"@type"\s*:\s*"Organization"[\s\S]*?<\/script>/i,
      "",
    );
  }
  const isServicePage = ["/services/", "/solutions/", "/industries/", "/technologies/"].some(prefix => route.path.startsWith(prefix));
  const schemaType = route.type === "article"
    ? "BlogPosting"
    : route.type === "profile"
      ? "ProfilePage"
      : isServicePage
        ? "Service"
        : "WebPage";
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: route.title,
    description: route.description,
    url: canonical,
    ...(isServicePage ? {
      provider: {
        "@type": "Organization",
        name: "ARIN IT Solutions",
        url: `${siteUrl}/`,
      },
      areaServed: "Worldwide",
    } : {}),
    ...(route.type === "profile" ? {
      mainEntity: {
        "@type": "Person",
        name: "Bhaskara Rao Arani",
        jobTitle: "CTO & Co-Founder",
        worksFor: { "@type": "Organization", name: "ARIN IT Solutions", url: `${siteUrl}/` },
      },
    } : {}),
  };
  html = html.replace(
    "</head>",
    `    <script type="application/ld+json">${JSON.stringify(pageSchema)}</script>\n  </head>`,
  );
  return html;
};

try {
  const indexFile = join(process.cwd(), "dist", "index.html");
  const fallbackFile = join(process.cwd(), "dist", "404.html");
  const template = readFileSync(indexFile, "utf8");

  for (const route of seoRoutes) {
    const outputFile = route.path === "/"
      ? indexFile
      : join(process.cwd(), "dist", route.path.slice(1), "index.html");
    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, renderRouteHead(template, route));
  }

  let fallback = template.replace(
    '<meta name="robots" content="index, follow" />',
    '<meta name="robots" content="noindex, follow" />',
  );
  fallback = fallback.replace(/<title>[^<]*<\/title>/i, "<title>Page Not Found | ARIN IT Solutions</title>");
  copyFileSync(indexFile, fallbackFile);
  writeFileSync(fallbackFile, fallback);
  console.log(`✅ Generated ${seoRoutes.length} indexable route pages and a noindex SPA fallback.`);
} catch (e) {
  console.error("❌ Failed to generate static route pages:", e);
  process.exit(1);
}
