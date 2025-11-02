import { writeFileSync } from "fs";
import { join } from "path";

const siteUrl = "https://www.arinits.com";
const currentDate = new Date().toISOString().split("T")[0];

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.9" },
  { path: "/team", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  {
    path: "/services/software-development",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/it-consulting",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/web-development",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/app-development",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/technology-solutions",
    changefreq: "monthly",
    priority: "0.9",
  },
  { path: "/terms", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.5" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const outputPath = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");
console.log("✅ Sitemap generated successfully at", outputPath);
