export default function IndustrySection() {
  return (
    <section className="section container industry-section" id="industries">
      <div className="section-intro reveal">
        <h2>Different businesses.<br />A better fit for each.</h2>
        <div className="industry-copy">
          <p className="why-pill"><i aria-hidden={true}></i>Your Business Sets The Brief</p>
          <p>The right checkout should follow your workflow. Explore a starting point for your industry, then talk through the details with our team.</p>
        </div>
      </div>
      <div className="industry-tabs reveal" role="tablist" aria-label="Business industries">
        <button id="tab-restaurants" role="tab" aria-selected={true} aria-controls="industry-panel" data-industry="restaurants"><UtensilsIcon />Restaurants & cafes</button>
        <button id="tab-retail" role="tab" aria-selected={false} aria-controls="industry-panel" tabIndex={-1} data-industry="retail"><StoreIcon />Retail</button>
        <button id="tab-salons" role="tab" aria-selected={false} aria-controls="industry-panel" tabIndex={-1} data-industry="salons"><ScissorsIcon />Salons & spas</button>
        <button id="tab-fuel" role="tab" aria-selected={false} aria-controls="industry-panel" tabIndex={-1} data-industry="fuel"><FuelIcon />Fuel & convenience</button>
      </div>
      <div id="industry-panel" className="industry-panel reveal" role="tabpanel" aria-labelledby="tab-restaurants" tabIndex={0}>
        <div>
          <div className="eyebrow bf-visually-hidden" id="industry-kicker">FROM FIRST ORDER TO FINAL BILL</div>
          <h3 id="industry-title">More hospitality.<br />Less back-and-forth.</h3>
          <p id="industry-description">Take payments to the table with Clover Flex, or keep counter service compact with Clover Mini. Build a setup around the way your guests order and pay.</p>
          <ul id="industry-benefits">
            <li>Tableside or counter checkout</li>
            <li>Contactless payment options</li>
            <li>Receipt and reporting workflows</li>
          </ul>
          <button className="button" data-action="call">Book a 15-minute call <span aria-hidden={true}>↗</span></button>
        </div>
        <div className="industry-device">
          <span id="industry-device-label" className="bf-visually-hidden">A FLEXIBLE STARTING POINT</span>
          <div className="industry-photo">
            <img id="industry-image" src="/images/scene-restaurants.webp" width={1536} height={1024} alt="Waiter presenting a Clover Flex to a customer at a café table" loading="lazy" decoding="async" />
          </div>
          <small id="industry-note" className="bf-visually-hidden">Clover Flex · Take checkout to the table</small>
        </div>
      </div>
    </section>
  );
}

function UtensilsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={true}>
      <path d="M7 4 17 20M17 4 7 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={true}>
      <path d="M4 10.5 12 4l8 6.5V20H4V10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={true}>
      <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m9 8.4 11 9.2M9 15.6 20 6.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={true}>
      <path d="M6 20V6h7v14M6 11h7M13 8h2.2a1.8 1.8 0 0 1 1.8 1.8V15a1.4 1.4 0 0 0 2.8 0V9.2L17.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
