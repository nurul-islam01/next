import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/style-light.css";

async function getSiteUrl() {
  const headersList = await headers();
  const host = headersList.get("host") || "www.nurul.dev";
  return `https://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Nurul Islam Tipu – Full Stack Developer | React, Next.js, Node.js, Go",
      template: "%s | Nurul Islam Tipu",
    },
    description:
      "I am Nurul Islam Tipu, a passionate Full Stack Developer with expertise in React, Next.js, Angular, Node.js, Express, NestJS, Go, MongoDB, PostgreSQL, Docker, and cloud deployment. Currently Deputy Manager at Navana Group.",
    keywords: [
      "Nurul Islam Tipu", "Full Stack Developer", "React Developer",
      "Next.js Developer", "Node.js Developer", "Angular Developer",
      "Express.js", "NestJS", "Go Developer", "MongoDB", "PostgreSQL",
      "TypeScript", "JavaScript", "Docker", "DevOps", "Bangladesh",
      "Web Developer", "Software Engineer", "Prothom Alo", "Navana Group",
    ],
    authors: [{ name: "Nurul Islam Tipu", url: siteUrl }],
    creator: "Nurul Islam Tipu",
    publisher: "Nurul Islam Tipu",
    icons: {
      icon: [
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon/favicon.ico" },
      ],
      apple: [
        { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
        { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
        { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
        { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
        { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
        { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
        { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
        { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
        { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
      ],
    },
    manifest: "/favicon/manifest.json",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: "Nurul Islam Tipu",
      title: "Nurul Islam Tipu – Full Stack Developer",
      description:
        "Passionate Full Stack Developer with expertise in React, Next.js, Node.js, Go, and cloud technologies. Deputy Manager at Navana Group, formerly Senior Developer at Prothom Alo.",
      images: [
        {
          url: `${siteUrl}/images/nurul-islam-pro-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Nurul Islam Tipu – Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nurul Islam Tipu – Full Stack Developer",
      description:
        "Passionate Full Stack Developer with expertise in React, Next.js, Node.js, Go, and cloud technologies.",
      images: [`${siteUrl}/images/nurul-islam-pro-og.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sacramento&family=Unbounded:wght@200..900&display=swap"
        />
        <link rel="stylesheet" href="/css/bootstrap-grid.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
      </head>
      <body>
        {children}

        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTo.min.js" strategy="beforeInteractive" />
        <Script src="/js/swiper.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
