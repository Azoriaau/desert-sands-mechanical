import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required by `output: "export"`: render this metadata route at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/shop"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
