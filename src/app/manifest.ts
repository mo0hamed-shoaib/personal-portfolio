import type { MetadataRoute } from "next";
import { portfolioData } from "@/lib/portfolio-data";

export default function manifest(): MetadataRoute.Manifest {
  const { personal } = portfolioData;
  const siteUrl = "https://mohamedgshoaib.vercel.app";

  return {
    name: `${personal.name} - Portfolio`,
    short_name: "MG Portfolio",
    description: personal.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

