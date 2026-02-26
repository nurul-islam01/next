export default function Contact() {
  return (
    <>
      <div className="mil-container" id="contact">
        <div className="row">
          <div className="col-xl-8 mil-mb60">
            <h2 className="mil-fs24 mil-mb30 mil-up">Contact</h2>
            <p className="mil-fs18 mil-up">
              I believe that{" "}
              <span className="mil-accent">collaboration and creativity</span>{" "}
              are the cornerstones of progress. Let&apos;s build something great
              together.
            </p>
          </div>
        </div>
        <div className="mil-divider mil-mb60 mil-up"></div>
        <div className="row mil-mb30">
          <div className="col-md-3 mil-mb60">
            <h6 className="mil-fs16 mil-mb10 mil-up">Email</h6>
            <p className="mil-fs16 mil-soft mil-up">nurul.islam3f@gmail.com</p>
          </div>
          <div className="col-md-3 mil-mb60">
            <h6 className="mil-fs16 mil-mb10 mil-up">Phone</h6>
            <p className="mil-fs16 mil-soft mil-up">
              <a href="tel:+8801727946384">+880 1727-946384</a>
            </p>
          </div>
          <div className="col-md-3 mil-mb60">
            <h6 className="mil-fs16 mil-mb10 mil-up">Location</h6>
            <p className="mil-fs16 mil-soft mil-up">Bangladesh</p>
          </div>
          <div className="col-md-3 mil-mb60">
            <h6 className="mil-fs16 mil-mb10 mil-up">Website</h6>
            <p className="mil-fs16 mil-soft mil-up">www.nurul.com.bd</p>
          </div>
        </div>
      </div>
      <div className="mil-container-out">
        <div className="mil-about-banner">
          <div className="mil-image-frame mil-up">
            <img
              src="/images/IMG-20220328-WA0095-contact.jpg"
              alt="Nurul Islam Tipu"
              className="mil-scale-img"
              data-value-1="1"
              data-value-2="1.25"
            />
          </div>
        </div>
      </div>
      <div className="mil-container mil-p-90-90">
        <form>
          <div className="row">
            <div className="col-md-6 mil-mb60">
              <input type="text" placeholder="What's your name" />
            </div>
            <div className="col-md-6 mil-mb60">
              <input type="email" placeholder="Your email" />
            </div>
            <div className="col-lg-12 mil-mb60">
              <textarea rows={10} placeholder="Tell me about your project"></textarea>
            </div>
            <div className="mil-jcb mil-aic">
              <p
                className="mil-fs14 mil-soft"
                style={{ paddingRight: "15px" }}
              >
                * I promise not to disclose your personal information to third
                parties.
              </p>
              <div className="mil-c-gone">
                <button type="submit" className="mil-btn">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
