export default function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-intro reveal">
          <div className="pricing-copy">
            <p className="why-pill"><i aria-hidden={true}></i>No Mystery In Your Next Move</p>
            <p>Start with what you pay today. A free statement review can help you ask better questions before choosing a processing plan.</p>
            <button className="button" data-action="review">Review my statement <span aria-hidden={true}>↗</span></button>
          </div>
          <h2>Know your options.<br />Understand your costs.</h2>
        </div>
        <div className="pricing-grid">
          <article className="reveal">
            <span className="icon-box" aria-hidden={true}><ListIcon /></span>
            <h3>Flat-fee pricing</h3>
            <p>Discuss a predictable pricing structure and understand the included services, limits and any additional charges.</p>
          </article>
          <article className="reveal">
            <span className="icon-box" aria-hidden={true}><ChartIcon /></span>
            <h3>Traditional processing</h3>
            <p>Explore a processing model with a detailed cost breakdown based on how your business accepts payments.</p>
          </article>
          <article className="reveal">
            <span className="icon-box" aria-hidden={true}><ReceiptIcon /></span>
            <h3>Cash-discount options</h3>
            <p>Ask whether a cash-discount program fits your business, and review its eligibility, disclosures and requirements.</p>
          </article>
        </div>
        <p className="product-note">Pricing and program availability depend on your business and agreement. A review does not guarantee savings.</p>
      </div>
    </section>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 19V5M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 15v-3M12 15V9M15.5 15V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 3.5h8l3 3V20.5H7V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 3.5V7h3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 10.5v5M10 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
