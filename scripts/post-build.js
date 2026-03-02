import { copyFileSync } from "fs";
import { join } from "path";

try {
  const indexFile = join(process.cwd(), "dist", "index.html");
  const fallbackFile = join(process.cwd(), "dist", "404.html");
  
  copyFileSync(indexFile, fallbackFile);
  console.log("✅ Successfully duplicated index.html to 404.html for SPA routing.");
} catch (e) {
  console.error("❌ Failed to create 404.html fallback:", e);
  process.exit(1);
}
