export default function About() {
  return (
    <>
      <div className="mil-container" id="about">
        <div className="row">
          <div className="col-lg-8 col-xl-6 mil-mb90">
            <h2 className="mil-fs24 mil-mb30 mil-up">About</h2>
            <p className="mil-fs18 mil-up">
              Hello there! I&apos;m{" "}
              <span className="mil-accent">Nurul Islam Tipu</span>, a Full Stack
              Developer and Web Team Supervisor currently working as Deputy
              Manager at Navana Group.
            </p>
          </div>
        </div>
      </div>
      <div className="mil-container-out">
        <div className="mil-about-banner">
          <div className="mil-up" style={{ position: "relative", zIndex: 2 }}>
            <div className="mil-sign">Nurul</div>
          </div>
          <div className="mil-image-frame mil-up">
            <img
              src="/images/20221106_192237.webp"
              alt="Nurul Islam Tipu"
              className="mil-scale-img"
              data-value-1="1"
              data-value-2="1.25"
            />
          </div>
        </div>
      </div>
      <div className="mil-container mil-p-90-90 mil-1200-p-30-90">
        <div className="row flex-sm-row-reverse">
          <div className="col-xl-6" style={{ position: "relative" }}>
            <ul className="mil-contact-info mil-mb30 mil-up">
              <li>
                <h6 className="mil-fs16 mil-mb10 mil-up">Email</h6>
                <p className="mil-fs16 mil-soft mil-up">nurul.islam3f@gmail.com</p>
              </li>
              <li>
                <h6 className="mil-fs16 mil-mb10 mil-up">Role</h6>
                <p className="mil-fs16 mil-soft mil-up">
                  Deputy Manager, Brand Communication
                </p>
              </li>
              <li>
                <h6 className="mil-fs16 mil-mb10 mil-up">Location</h6>
                <p className="mil-fs16 mil-soft mil-up">Bangladesh</p>
              </li>
              <li>
                <h6 className="mil-fs16 mil-mb10 mil-up">Resume</h6>
                <div className="mil-up mil-c-gone">
                  <a href="/cv/nurul-Islam-cv.pdf" target="_blank" rel="noopener noreferrer" className="mil-text-link mil-fs16">
                    Download CV
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-6">
            <p className="mil-soft mil-fs16 mil-mb30 mil-up">
              I am a passionate Full Stack Developer with expertise across
              JavaScript, TypeScript, React, Next.js, Angular, Node.js, NestJS,
              Go, and modern cloud technologies. I bring both frontend finesse
              and backend robustness to every project I undertake.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="mil-soft mil-fs16 mil-mb30 mil-up">
              Currently serving as Deputy Manager at Navana Group, I lead the
              web team and oversee full stack development, VPS server
              management, and end-to-end digital solutions. Previously, I
              spent four years as a Senior Fullstack Developer at Prothom Alo,
              Bangladesh&apos;s largest newspaper.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="mil-soft mil-fs16 mil-mb30 mil-up">
              I was honored with the Prothom Alo Best Newcomer 2022 award in
              the Information Technology department — a recognition of my
              dedication to delivering high-quality digital experiences and
              innovative solutions at scale.
            </p>
          </div>
          <div className="col-lg-12">
            <p className="mil-soft mil-fs16 mil-up">
              Whether it&apos;s building responsive web applications with React
              and Next.js, designing scalable APIs with NestJS and Go, managing
              databases across MongoDB, PostgreSQL and Redis, or setting up
              Docker and CI/CD pipelines — I thrive on transforming ideas into
              impactful digital products. Let&apos;s build something great
              together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
