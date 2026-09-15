import { writeFileSync } from "fs";
import { join } from "path";
import { seoRoutes, siteUrl } from "./seo-routes.js";
const currentDate = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${seoRoutes
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
