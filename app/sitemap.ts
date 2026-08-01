import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

// Required by `output: "export"`: render this metadata route at build time.
export const dynamic = "force-static";

// Static build date keeps <lastmod> stable between deploys until content changes.
const lastModified = "2026-07-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  for (const s of services) {
    entries.push({
      url: `${site.url}/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  return entries;
}
