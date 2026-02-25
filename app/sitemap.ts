import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.nurul.dev";
  const siteUrl = `https://${host}`;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/nurul.jpeg`,
        `${siteUrl}/images/nurul-islam-pro.jpeg`,
        `${siteUrl}/images/nurul-islam-pro-og.jpg`,
        `${siteUrl}/images/nurul-contact.jpeg`,
        `${siteUrl}/images/nurul-about.jpeg`,
        `${siteUrl}/images/nurul-portrait-5.jpeg`,
        `${siteUrl}/images/20221107_151410.webp`,
        `${siteUrl}/images/20221106_192237.webp`,
        `${siteUrl}/images/20221107_164459.webp`,
        `${siteUrl}/images/IMG-20220328-WA0041.jpg`,
        `${siteUrl}/images/IMG-20220328-WA0095.jpg`,
        `${siteUrl}/images/IMG-20220508-WA0003.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0011.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0014.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0018.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0019.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0031.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0061.jpg`,
        `${siteUrl}/images/IMG-20221106-WA0062.jpg`,
        `${siteUrl}/images/IMG-20221107-WA0007.jpg`,
        `${siteUrl}/images/IMG-20221107-WA0008.jpg`,
        `${siteUrl}/images/IMG_20221212_211029.jpg`,
      ],
    },
  ];
}
