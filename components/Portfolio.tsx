"use client";

const companies = [
  { logo: "/protfolios/prothoma-colored.png", name: "Prothoma" },
  { logo: "/protfolios/navana-logistics.png", name: "Navana Logistics" },
  { logo: "/protfolios/navana-realestate-logo", name: "Navana Real Estate" },
  { logo: "/protfolios/epaper-colored.png", name: "ePaper" },
  { logo: "/protfolios/trust-colored.png", name: "Trust" },
  { logo: "/protfolios/rajneete.webp", name: "Rajneete" },
  { logo: "/protfolios/gjc-glorajeanscoffeesbd.svg", name: "Gloria Jean's Coffee" },
  { logo: "/protfolios/latarte-bd", name: "La Tarte BD" },
  { logo: "/protfolios/bigganchinta-colored.png", name: "Biggan Chinta" },
  { logo: "/protfolios/bondhushava-colored.png", name: "Bondhu Shava" },
  { logo: "/protfolios/chironton71-colored.png", name: "Chiron" },
  { logo: "/protfolios/kishoralo-colored.png", name: "Kishor Alo" },
  { logo: "/protfolios/nagorik-songbad-colored.png", name: "Nagorik Songbad" },
];

export default function Portfolio() {
  return (
    <section className="mil-portfolio-section" id="portfolio">
      <div className="mil-container mil-portfolio-header">
        <p className="mil-suptitle mil-fs16 mil-mb20">Portfolio</p>
        <h2 className="mil-fs24 mil-mb20 mil-upper">
          Worked <span className="mil-accent">with</span>
        </h2>
        <p className="mil-fs16 mil-soft mil-portfolio-lead">
          Brands and teams I've partnered with to build products and digital experiences.
        </p>
      </div>

      <div className="mil-portfolio-strip">
        <div className="mil-portfolio-strip-inner">
          {companies.map((company) => (
            <a
              key={company.name}
              href="#portfolio"
              className="mil-portfolio-logo mil-c-light"
              title={company.name}
              aria-label={company.name}
            >
              <img src={company.logo} alt={company.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="mil-portfolio-footer">
        <p className="mil-portfolio-footer-text">
          From product strategy to deployment — full stack delivery for web, mobile, and cloud.
        </p>
        <a href="#contact-form" className="mil-btn mil-btn-border mil-c-gone">
          Let&apos;s work together
        </a>
      </div>
    </section>
  );
}
