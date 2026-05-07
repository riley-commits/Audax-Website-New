import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllSolutionSlugs } from "@/lib/solutions-data";
import { getAllBlogSlugs } from "@/lib/blog-data";
import { getAllGuideSlugs } from "@/lib/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://audaxventures.ca";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/success-stories`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/mvp-calculator`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionPages = getAllSolutionSlugs().map((slug) => ({
    url: `${base}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...solutionPages, ...blogPages, ...guidePages];
}
