import GsapProvider from "@/components/GsapProvider";
import Preloader from "@/components/Preloader";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import TopPanel from "@/components/TopPanel";
import Sidebar from "@/components/Sidebar";

export default function NotFound() {
  return (
    <GsapProvider>
      <Preloader />
      <CursorFollower />
      <ScrollProgress />
      <TopPanel />
      <Sidebar />

      <div id="smooth-content" className="mil-content">
        <div className="mil-content-frame" id="home">
          <div className="mil-container">
            <div className="mil-404-frame">
              <div className="row">
                <div className="col-xl-12">
                  <div className="mil-jcs mil-aie">
                    <p className="mil-suptitle mil-fs14">Page Not Found</p>
                    <p className="mil-error">error</p>
                  </div>
                  <h1 className="mil-404 mil-tac mil-992-tal mil-mb20">404</h1>
                  <div className="row">
                    <div className="col-0 col-lg-7"></div>
                    <div className="col-sm-5">
                      <p className="mil-soft mil-fs16">
                        The page you are looking for does not exist, it may have
                        been moved or removed altogether.{" "}
                        <a href="/" className="mil-text-link">
                          Back to Home
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GsapProvider>
  );
}
