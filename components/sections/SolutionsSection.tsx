export default function SolutionsSection() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <div className="section-intro solutions-intro reveal">
          <div className="solutions-copy">
            <p className="why-pill"><i aria-hidden={true}></i>The Right Hardware. The Right Fit</p>
            <p>Power every sale with reliable payment processing and a POS that works the way your business does.</p>
            <p className="solutions-prompt">Not sure where to start?</p>
            <button className="button" data-action="finder" type="button">Find My Device</button>
          </div>
          <h2>Three ways to<br />make every<br />sale count.</h2>
        </div>
        <div className="device-grid">
          <article className="device-card reveal">
            <div className="device-image flex-image">
              <span className="pill"><MoveIcon />ON THE MOVE</span>
              <img src="/images/clover-flex.png" width={426} height={357} alt="Clover Flex handheld POS" loading="lazy" />
            </div>
            <div className="device-copy">
              <span className="device-for">RESTAURANTS · POP-UPS · MOBILE SALES</span>
              <h3>Clover Flex</h3>
              <p>Bring checkout to your customer. This handheld POS combines card payments, barcode scanning and a built-in receipt printer in one compact device.</p>
              <ul>
                <li>Tap, chip and swipe payments</li>
                <li>Built-in printer and scanner</li>
                <li>Portable, all-in-one checkout</li>
              </ul>
              <a className="device-cta" href="#contact" data-device="Clover Flex">Get a Clover Flex Quote <span aria-hidden={true}>↗</span></a>
            </div>
          </article>
          <article className="device-card reveal">
            <div className="device-image mini-image">
              <span className="pill"><CounterIcon />AT THE COUNTER</span>
              <img src="/images/clover-mini-device.png" width={456} height={249} alt="Clover Mini compact countertop POS" loading="lazy" />
            </div>
            <div className="device-copy">
              <span className="device-for">CAFÉS · BOUTIQUES · SALONS</span>
              <h3>Clover Mini</h3>
              <p>A capable checkout in a smaller footprint. Accept payments at your counter and bring sales and inventory into your everyday workflow.</p>
              <ul>
                <li>Space-saving countertop design</li>
                <li>Contactless and chip payments</li>
                <li>Sales and inventory tools*</li>
              </ul>
              <a className="device-cta" href="#contact" data-device="Clover Mini">Get a Clover Mini Quote <span aria-hidden={true}>↗</span></a>
            </div>
          </article>
          <article className="device-card reveal">
            <div className="device-image petro-image">
              <span className="pill"><FuelIcon />FUEL + STORE</span>
              <img src="/images/nrs-petro-device.png" width={432} height={324} alt="NRS Petro POS bundle with register, customer display, scanner, cash drawer and printer" loading="lazy" />
            </div>
            <div className="device-copy">
              <span className="device-for">GAS STATIONS · CONVENIENCE STORES</span>
              <h3>NRS Petro</h3>
              <p>Connect the forecourt with the front counter. A POS solution designed around fuel sales, convenience retail and the rhythm of shift changes.</p>
              <ul>
                <li>Compatible pump integration*</li>
                <li>Fuel and in-store sales workflow</li>
                <li>Cashier and shift reporting</li>
              </ul>
              <a className="device-cta" href="#contact" data-device="NRS Petro">Get an NRS Petro Quote <span aria-hidden={true}>↗</span></a>
            </div>
          </article>
        </div>
        {/* <p className="product-note">*Features, software plans, connectivity and pump compatibility depend on your selected configuration. Confirm availability and pricing with PrismaTech.</p> */}
      </div>
    </section>
  );
}

function MoveIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden={true}>
      <rect x="4" y="1.5" width="8" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 12.5h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CounterIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden={true}>
      <rect x="2" y="3" width="12" height="8" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 13.5h6M8 11v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden={true}>
      <rect x="2.5" y="2" width="7" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.5 6.5h1.2a2 2 0 0 1 2 2V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
