export default function Banner() {
  return (
    <div className="mil-banner mil-container-out-right">
      <div className="row mil-aic">
        <div className="col-xl-6">
          <div className="mil-banner-text">
            <p className="mil-suptitle mil-fs16 mil-mb50">
              Full Stack <span className="mil-accent">Developer</span>
            </p>
            <h1 className="mil-fs90 mil-upper mil-mb40">
              <span className="mil-text-bg">Hello I<span className="mil-accent">&apos;</span>m</span>{" "}
              <span className="mil-text-bg">
                <span className="mil-accent">
                  <br />
                  Nurul
                </span>{" "}
                Islam
              </span>
            </h1>
            <p className="mil-fs16 mil-shortened mil-soft mil-mb60">
              I am a passionate Full Stack Developer, dedicated to crafting
              seamless and efficient web solutions. With expertise in both
              front-end and back-end technologies, I bring creativity and
              technical prowess to every project I undertake.
            </p>
            <div className="mil-c-gone">
              <a href="#portfolio" className="mil-btn mil-btn-border">
                Explore my work
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="mil-banner-image">
            <img
              src="/images/nurul-contact.jpeg"
              alt="Nurul Islam Tipu"
              className="mil-scale-img"
              data-value-1=".73"
              data-value-2="1.11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
