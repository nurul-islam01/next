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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nurul Islam Tipu",
  url: "https://www.nurul.dev",
  image: "https://www.nurul.dev/images/nurul.jpeg",
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
    "https://github.com/",
    "https://twitter.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Prothom Alo",
  },
};

export default function Home() {
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
