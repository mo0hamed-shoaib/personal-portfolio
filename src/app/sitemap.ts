import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mohamedgshoaib.vercel.app";

  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  return routes;
}

