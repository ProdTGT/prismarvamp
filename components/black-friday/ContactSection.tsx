export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="why-pill"><i aria-hidden={true}></i>Your Request Is In Good Hands</p>
          <h2>Different businesses.<br />A better fit for each.</h2>
          <p className="contact-lead">Tell us what your business needs. Let’s find the right POS and payment setup, together.</p>
          <a className="contact-phone" href="tel:+17074398264">+1 (707) 439-8264 <span aria-hidden={true}>↗</span></a>
          <a className="contact-email" href="mailto:info@prismatechinc.com">info@prismatechinc.com</a>
          <span className="contact-season">Smarter payments. This season and beyond.</span>
        </div>
        <form id="consultation-form" className="contact-form reveal" method="post" action="/api/lead">
          <input type="hidden" name="request" value="POS quote" />
          <p className="contact-form-kicker">Contact form</p>
          <h3>Get your quick quote.</h3>
          <label>
            <span className="bf-visually-hidden">Your name</span>
            <input name="name" autoComplete="name" placeholder="Full name..." required maxLength={100} />
          </label>
          <label>
            <span className="bf-visually-hidden">Business name</span>
            <input name="business" autoComplete="organization" placeholder="Business name..." required maxLength={150} />
          </label>
          <label>
            <span className="bf-visually-hidden">Business type</span>
            <select name="industry" required>
              <option value="">Select your business type</option>
              <option>Restaurant or café</option>
              <option>Retail or convenience store</option>
              <option>Salon or spa</option>
              <option>Gas station</option>
              <option>Mobile or pop-up business</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <span className="bf-visually-hidden">Interested in</span>
            <select id="device-choice" name="device">
              <option value="">Interested in</option>
              <option>Help me choose</option>
              <option>Clover Flex</option>
              <option>Clover Mini</option>
              <option>NRS Petro</option>
              <option>Payment processing</option>
            </select>
          </label>
          <label>
            <span className="bf-visually-hidden">What would you like to improve? (optional)</span>
            <textarea name="message" rows={3} placeholder="Tell us a little about your current setup..." maxLength={1500}></textarea>
          </label>
          <button className="button" type="submit">Prepare my quote</button>
          <p className="form-note">We’ll show a confirmation page and a PrismaTech representative will follow up.</p>
          <p id="form-status" role="status" hidden></p>
          <a id="email-fallback" hidden>Open email draft again ↗</a>
        </form>
      </div>
    </section>
  );
}
