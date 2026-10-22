import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { seoRoutes, siteUrl } from "./seo-routes.js";

const sitemap = readFileSync("dist/sitemap.xml", "utf8");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const canonicals = new Set();
for (const route of seoRoutes) {
  const path = route.path === "/" ? "/" : `${route.path}/`;
  const url = `${siteUrl}${path}`;
  const file = route.path === "/" ? "dist/index.html" : `dist${path}index.html`;
  const html = readFileSync(file, "utf8");
  assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1, file);
  assert(html.includes(`rel="canonical" href="${url}"`), file);
  assert(!canonicals.has(url), `Duplicate canonical ${url}`);
  canonicals.add(url);
  assert(html.includes(`<title>${escape(route.title)}</title>`), file);
  assert(html.includes(`name="description" content="${escape(route.description)}"`), file);
  assert(html.includes('name="robots" content="index, follow"'), file);
  assert(!html.includes("noindex"), file);
  assert(html.includes("<h1") && html.includes("<main"), `Missing rendered content: ${file}`);
  assert(!html.includes('id="root"></div>'), file);
  assert(sitemap.includes(`<loc>${url}</loc>`), file);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert(schemas.some(schema => schema.url === url), file);
  if (route.type === "article") {
    assert(schemas.some(schema => schema["@type"] === "BlogPosting"), file);
    assert(html.includes("<h2"), `Missing article body: ${file}`);
  }
}
const home = readFileSync("dist/index.html", "utf8");
const blog = readFileSync("dist/blog/index.html", "utf8");
const latest = seoRoutes.filter(route => route.type === "article" && route.publishedTime)
  .sort((a, b) => b.publishedTime.localeCompare(a.publishedTime)).slice(0, 3);
for (const route of latest) {
  assert(home.includes(`href="${route.path}/"`), `Homepage missing recent article ${route.path}`);
  // The blog listing may use either URL spelling; canonical heads always use a slash.
  assert(blog.includes(`href="${route.path}`), `Blog missing article ${route.path}`);
}
for (const path of ["/services/fintech-payment-solutions/", "/services/java-microservices/", "/services/ai-development/", "/services/application-modernization/"]) {
  assert(home.includes(`href="${path}"`), `Missing homepage service link ${path}`);
}
assert(home.includes('"@type":"WebSite"'), "Missing site identity schema");
const fallback = readFileSync("dist/404.html", "utf8");
assert(fallback.includes('name="robots" content="noindex, follow"'));
assert(!fallback.includes("<h1"), "Fallback must not inherit homepage content");
console.log(`SEO validation passed: ${seoRoutes.length} rendered routes, metadata, sitemap, schema, homepage discovery, and 404 fallback.`);
