import fs from "fs";
import path from "path";

// 🧠 Smart CMS URL Detection Function
function getSiteUrl() {
  try {
    // 1. Read the CMS configuration file
    const configPath = path.join(process.cwd(), "public", "admin", "config.yml");
    const configContent = fs.readFileSync(configPath, "utf-8");

    // 2. Search for the "site_url:" line using regex
    const match = configContent.match(/site_url:\s*(https?:\/\/[^\s]+)/);

    if (match && match[1]) {
      let url = match[1].trim();
      
      // 3. Strip any trailing slash so we don't get double slashes in our paths
      if (url.endsWith("/")) {
        url = url.slice(0, -1);
      }
      return url;
    }
  } catch (error) {
    console.warn("⚠️ Could not read config.yml for site_url.");
  }

  // 4. Fallbacks (Just in case the config file is missing)
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  console.warn(
    "⚠️ WARNING: Could not auto-detect URL from config.yml. Using fallback for robots.txt."
  );
  return "https://YOUR-URL-HERE.com";
}

const finalUrl = getSiteUrl();

const robots = `
User-agent: *
Allow: /

Sitemap: ${finalUrl}/sitemap.xml
`;

const outputPath = path.join(process.cwd(), "public", "robots.txt");
fs.writeFileSync(outputPath, robots.trim());

console.log(`✅ robots.txt generated successfully for: ${finalUrl}`);
