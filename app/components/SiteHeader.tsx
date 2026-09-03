export default function SiteHeader() {
  return (
    <header className="topbar">
      <a className="wordmark" href="/" aria-label="Ritika Radhakrishnan home">
        <span>ЯR</span>
        <small>RITIKA RADHAKRISHNAN</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#experience">EXPERIENCE</a>
        <a href="/#research">RESEARCH</a>
        <a href="/#education">EDUCATION</a>
      </nav>
      <div className="connect-menu">
        <button type="button" aria-haspopup="true">
          LET&apos;S CONNECT <span aria-hidden="true">＋</span>
        </button>
        <div className="connect-panel" aria-label="Connect links">
          <a className="mobile-section-link" href="/#experience"><span>EXPERIENCE</span><span>↓</span></a>
          <a className="mobile-section-link" href="/#research"><span>RESEARCH</span><span>↓</span></a>
          <a className="mobile-section-link" href="/#education"><span>EDUCATION</span><span>↓</span></a>
          <a href="https://github.com/ritikaradhakrishnan" target="_blank" rel="noreferrer"><span>GITHUB</span><span>↗</span></a>
          <a href="https://www.linkedin.com/in/ritika-radhakrishnan" target="_blank" rel="noreferrer"><span>LINKEDIN</span><span>↗</span></a>
          <a href="https://www.youtube.com/@shivnchips" target="_blank" rel="noreferrer"><span>YOUTUBE</span><span>↗</span></a>
          <a href="/contact"><span>CONTACT</span><span>→</span></a>
        </div>
      </div>
    </header>
  );
}
