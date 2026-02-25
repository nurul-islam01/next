export default function Sidebar() {
  return (
    <div className="mil-sidebar">
      <ul className="mil-social mil-c-gone">
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            tw.
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            fb.
          </a>
        </li>
        <li>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            ins.
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            gh.
          </a>
        </li>
      </ul>
      <div>
        <h2 className="mil-fs24 mil-mb60">Nurul</h2>
        <ul className="mil-main-menu mil-onepage-menu mil-c-gone">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#highlights">Highlights</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <p className="mil-soft">© Nurul Islam Tipu.</p>
    </div>
  );
}
