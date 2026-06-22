import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yathiraj.co.in",
      lastModified: new Date(),
    },
  ];
}