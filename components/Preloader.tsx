export default function Preloader() {
  return (
    <div className="mil-preloader">
      <div className="mil-h1 mil-fs24">
        Loading<span className="mil-accent">...</span>
      </div>
      <div className="mil-curtain"></div>
      <div className="mil-load"></div>
    </div>
  );
}
