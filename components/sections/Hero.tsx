export default function Hero() {
  return (
      <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-backdrop" aria-hidden={true}></div><div className="container hero-inner">
      <div className="hero-copy">
      <h1 id="hero-heading">No tricks.<br />Just smarter<br /><em>payments.</em></h1>
      <p>Keep the thrills in the season.<br className="desktop-break" /> Keep your checkout simple.</p>
      <p className="hero-description">Power every sale with reliable payment processing and a POS that works the way your business does.</p>
      <div className="hero-actions"><button className="button" data-action="finder">Find my perfect POS <span aria-hidden={true}>↗</span></button><a className="text-link" href="#solutions">Explore the devices <span aria-hidden={true}>↓</span></a></div>
      <div className="hero-proof"><span>✓ &nbsp; In-store & online</span><span>✓ &nbsp; Human support</span></div>
      </div>
      <div className="hero-product"><div className="product-orbit" aria-hidden={true}></div><img className="floating-flex" src="/images/clover-flex.png" width={426} height={357} alt="Clover Flex handheld payment terminal with touchscreen and built-in receipt printer" />
      <div className="floating-note"><span className="contactless-icon" aria-hidden={true}><svg viewBox="0 0 28 28" fill="none"><path d="M8 10a9 9 0 0 1 0 8m5-12a17 17 0 0 1 0 16m5-20a25 25 0 0 1 0 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><div><strong>Tap. Pay. Keep moving.</strong><small>Contactless checkout, wherever you are.</small></div></div>
      <div className="hero-device-label"><div><strong>CLOVER FLEX</strong><small>Small device.<br />More possibilities.</small></div><span className="device-label-rule" aria-hidden={true}></span></div>
      </div></div><div className="container hero-bottom"><span>BUILT FOR BUSINESS. READY FOR THE RUSH.</span><a href="#why-prisma" aria-label="Scroll to why PrismaTech">SCROLL TO EXPLORE <span aria-hidden={true}>↓</span></a></div>
      </section>
  );
}
