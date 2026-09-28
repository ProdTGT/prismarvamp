export default function Hero() {
  return (
    <section className="bf-hero" aria-labelledby="hero-heading">
        <div className="bf-hero-card">
          <img
            className="bf-hero-art"
            src="/images/herosection.png"
            width={1672}
            height={941}
            alt="PAX A800 payment terminal wrapped in a Black Friday ribbon"
          />
          <div className="bf-hero-inner">
          <p className="bf-badge"><i aria-hidden={true}></i>Ready For Your Biggest Sales Day</p>
          <div className="bf-hero-grid">
            <div className="bf-hero-copy">
              <h1 id="hero-heading">Smarter<br />Payments</h1>
              <p className="bf-lead">Power every sale with reliable payment processing and a POS that works the way your business does.</p>
              <div className="bf-actions">
                <button className="bf-btn bf-btn-fill" data-action="finder" type="button">Find My Perfect POS</button>
                <a className="bf-btn bf-btn-line" href="#solutions">Explore The Devices</a>
              </div>
            </div>
            <div className="bf-hero-right">
              <h2>Black<br />Friday</h2>
              <p className="bf-kicker">Make the most of the rush.<br />Keep your checkout simple.</p>
              <div className="bf-pills">
                <span><StoreIcon /> In-store &amp; online</span>
                <span><SupportIcon /> Human support</span>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden={true}>
      <path d="M2 6.5 3.2 3h9.6L14 6.5M3 6.5V13h10V6.5M6.5 13V9h3v4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden={true}>
      <path d="M3 8a5 5 0 0 1 10 0v3.2a1.3 1.3 0 0 1-1.3 1.3H10M3 8v3.2A1.3 1.3 0 0 0 4.3 12.5H6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
