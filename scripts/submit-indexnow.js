import { readFileSync, existsSync } from "fs";
import { join } from "path";

// IndexNow configuration for ARIN IT Solutions
const key = "a6c5b4d3e2f1a0b9c8d7e6f5a4b3c2d1";
const host = "www.arinits.com";
const keyLocation = `https://${host}/${key}.txt`;

async function submitToIndexNow() {
  try {
    const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
    if (!existsSync(sitemapPath)) {
      console.error("❌ sitemap.xml not found! Please generate it first.");
      process.exit(1);
    }
    
    console.log("📄 Reading sitemap...");
    const sitemap = readFileSync(sitemapPath, "utf-8");
    
    // Extract URLs cleanly by parsing the XML loc tags
    const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
    const urlList = urlMatches.map(match => match.replace(/<\/?loc>/g, ""));

    if (urlList.length === 0) {
      console.error("❌ No URLs found securely in sitemap.");
      process.exit(1);
    }

    const payload = {
      host,
      key,
      keyLocation,
      urlList
    };

    console.log(`🚀 Submitting ${urlList.length} URLs dynamically to IndexNow APIs...`);
    
    // Native fetch works in Node.js v15+
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log("✅ Successfully pinged the global IndexNow API endpoint.");
      console.log("✅ Participating search engines (Bing, Yandex, Seznam, Naver, etc.) will crawl instantly!");
    } else {
      console.error(`❌ HTTP Error: Status code ${response.status}`);
      const text = await response.text();
      console.error("Response:", text);
    }

  } catch (error) {
    console.error("❌ Fatal error executing IndexNow pipeline:", error);
  }
}

submitToIndexNow();
