import type { MetadataRoute } from "next";
import { episodes } from "../lib/data/seed";
import { siteUrl } from "../lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
    },
    {
      url: `${siteUrl}/feed`,
      lastModified,
    },
    {
      url: `${siteUrl}/episodes/1`,
      lastModified,
    },
  ];

  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${siteUrl}/player/${episode.id}`,
    lastModified,
  }));

  return [...staticRoutes, ...episodeRoutes];
}
