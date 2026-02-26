import { headers } from "next/headers";
import GsapProvider from "@/components/GsapProvider";
import Preloader from "@/components/Preloader";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import TopPanel from "@/components/TopPanel";
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Highlights from "@/components/Blog";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

function buildJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nurul Islam Tipu",
    url: siteUrl,
    image: `${siteUrl}/images/nurul.jpeg`,
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Navana Group",
    },
    description:
      "Passionate Full Stack Developer with expertise in React, Next.js, Node.js, Go, and cloud technologies.",
    knowsAbout: [
      "JavaScript", "TypeScript", "React", "Next.js", "Angular",
      "Node.js", "Express.js", "NestJS", "Go", "MongoDB", "PostgreSQL",
      "Redis", "Docker", "GraphQL", "RESTful API", "AWS", "Vercel",
    ],
    sameAs: [
      "https://github.com/nurul-islam01",
      "https://x.com/islam_nuru1598",
      "https://www.facebook.com/nurul.islam001",
      "https://www.linkedin.com/in/nurul-islam01/",
    ],
    telephone: "+8801727946384",
    email: "nurul.islam3f@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "Prothom Alo",
    },
  };
}

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host") || "www.nurul.dev";
  const siteUrl = `https://${host}`;
  const jsonLd = buildJsonLd(siteUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GsapProvider>
        <Preloader />
        <CursorFollower />
        <ScrollProgress />
        <TopPanel />
        <Sidebar />

        <div id="smooth-content" className="mil-content">
          <div className="mil-content-frame" id="home">
            <Banner />
            <Services />
            <About />
            <Portfolio />
            <Highlights />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </div>
      </GsapProvider>
    </>
  );
}
