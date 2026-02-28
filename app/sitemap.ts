import { MetadataRoute } from "next";

const baseUrl = "https://quantara.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },

    // About
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Team
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Contact
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Services
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
