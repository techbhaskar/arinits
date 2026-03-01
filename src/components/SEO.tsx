import React from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  robots?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = "",
  keywords = "",
  image = "/logo.png",
  type = "website",
  publishedTime,
  modifiedTime,
  robots = "index, follow",
}) => {
  const siteUrl = "https://www.arinits.com";
  const fullUrl = `${siteUrl}${path}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      if (!content) return;
      
      const attribute = isProperty ? "property" : "name";
      const selector = `meta[${attribute}="${name}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Standard meta
    updateMetaTag("robots", robots);
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);

    // Open Graph / Facebook
    updateMetaTag("og:site_name", "ARIN IT Solutions", true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:image", fullImageUrl, true);
    updateMetaTag("og:image:secure_url", fullImageUrl, true);

    // Article Specific Data (if applicable)
    if (type === "article") {
      if (publishedTime) updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime, true);
    }

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImageUrl);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [title, description, fullUrl, keywords, image, type, publishedTime, modifiedTime, fullImageUrl, robots]);

  return null;
};

export default SEO;
