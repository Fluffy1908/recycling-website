const fs = require("fs");
const path = require("path");

const baseURL = "https://example.com"; // Replace with your website's URL
const languages = ["en", "ua", "ru"]; // Replace with your supported languages
const routes = [
  "/",
  "/about-us",
  "/what-we-do",
  "/our-products",
  "/crumb-rubber",
  "/rubber-mulch",
  "/metal-cord",
  "/bead-ring",
  "/textile-cord",
  "/applications",
  "/dispose-tires",
  "/contact-us",
]; // Define your routes

languages.forEach((lang) => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${baseURL}/${lang}${route}</loc>
    </url>`;
    })
    .join("")}
</urlset>`;

  // Save the sitemap for the current language
  fs.writeFileSync(
    path.join(__dirname, `public/sitemap-${lang}.xml`),
    sitemapContent
  );

  console.log(`Sitemap for ${lang} generated successfully.`);
});

console.log("All sitemaps generated successfully.");
