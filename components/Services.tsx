export default function Services() {
  return (
    <div className="mil-container mil-p-0-30" id="services">
      <div className="row">
        <div className="col-lg-8 mil-mb90">
          <h2 className="mil-fs24 mil-mb30 mil-up">Services</h2>
          <p className="mil-fs18 mil-up">
            From crafting <span className="mil-accent">robust backends</span> to
            developing seamless frontends and managing cloud infrastructure, I
            deliver end-to-end digital solutions.
          </p>
        </div>
        <div className="col-12">
          <div className="mil-service-item mil-mb60">
            <div className="mil-icon-part mil-mb30">
              <img src="/images/icons/1.svg" alt="Frontend Development" className="mil-up" />
              <h3 className="mil-fs20 mil-up">Frontend Development</h3>
            </div>
            <div className="mil-text-part">
              <p className="mil-fs16 mil-soft mil-mb30 mil-up">
                Building fast, responsive, and interactive user interfaces with
                modern JavaScript frameworks and pixel-perfect attention to
                detail.
              </p>
              <ul className="mil-fs16">
                <li className="mil-up">React &amp; Next.js</li>
                <li className="mil-up">Angular &amp; Redux</li>
                <li className="mil-up">TypeScript &amp; Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <div className="mil-divider mil-mb60 mil-up"></div>
          <div className="mil-service-item mil-mb60">
            <div className="mil-icon-part mil-mb30">
              <img src="/images/icons/2.svg" alt="Backend Development" className="mil-up" />
              <h3 className="mil-fs20 mil-up">Backend Development</h3>
            </div>
            <div className="mil-text-part">
              <p className="mil-fs16 mil-soft mil-mb30 mil-up">
                Designing and building scalable server-side applications and APIs
                that power seamless communication between systems.
              </p>
              <ul className="mil-fs16">
                <li className="mil-up">Node.js, Express.js &amp; NestJS</li>
                <li className="mil-up">Go</li>
                <li className="mil-up">GraphQL &amp; RESTful API</li>
              </ul>
            </div>
          </div>
          <div className="mil-divider mil-mb60 mil-up"></div>
          <div className="mil-service-item mil-mb60">
            <div className="mil-icon-part mil-mb30">
              <img src="/images/icons/3.svg" alt="Database Management" className="mil-up" />
              <h3 className="mil-fs20 mil-up">Database Management</h3>
            </div>
            <div className="mil-text-part">
              <p className="mil-fs16 mil-soft mil-mb30 mil-up">
                Expertise in both NoSQL and relational databases, with a keen
                focus on optimized data structures, performance, and security.
              </p>
              <ul className="mil-fs16">
                <li className="mil-up">MongoDB</li>
                <li className="mil-up">PostgreSQL, MySQL &amp; SQLite</li>
                <li className="mil-up">Redis, Firebase &amp; Firestore</li>
              </ul>
            </div>
          </div>
          <div className="mil-divider mil-mb60 mil-up"></div>
          <div className="mil-service-item mil-mb60">
            <div className="mil-icon-part mil-mb30">
              <img src="/images/icons/4.svg" alt="Mobile Development" className="mil-up" />
              <h3 className="mil-fs20 mil-up">Mobile Development</h3>
            </div>
            <div className="mil-text-part">
              <p className="mil-fs16 mil-soft mil-mb30 mil-up">
                Building cross-platform mobile experiences and progressive web
                apps that work seamlessly across all devices.
              </p>
              <ul className="mil-fs16">
                <li className="mil-up">Android</li>
                <li className="mil-up">Progressive Web Apps</li>
                <li className="mil-up">Offline Capabilities</li>
              </ul>
            </div>
          </div>
          <div className="mil-divider mil-mb60 mil-up"></div>
          <div className="mil-service-item mil-mb60">
            <div className="mil-icon-part mil-mb30">
              <img src="/images/icons/1.svg" alt="DevOps and Server Management" className="mil-up" />
              <h3 className="mil-fs20 mil-up">DevOps &amp; Server Management</h3>
            </div>
            <div className="mil-text-part">
              <p className="mil-fs16 mil-soft mil-mb30 mil-up">
                Streamlining deployment pipelines, managing VPS servers, and
                maintaining robust cloud infrastructure for production
                environments.
              </p>
              <ul className="mil-fs16">
                <li className="mil-up">Docker &amp; CI/CD</li>
                <li className="mil-up">VPS, AWS &amp; Vercel</li>
                <li className="mil-up">GitHub Actions &amp; CircleCI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
