import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://v4irajvimu.github.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
