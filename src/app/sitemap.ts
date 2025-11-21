import { MetadataRoute } from "next";
import { portfolioData } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mohamedgshoaib.vercel.app";

  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Add project pages if you have individual project pages
  const projectRoutes = portfolioData.projects.featured.map((project) => ({
    url: `${siteUrl}/projects#${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}

