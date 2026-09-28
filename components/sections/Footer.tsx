export default function Footer() {
  return (
    <footer className="bf-footer">
      <div className="container">
        <div className="bf-foot-card">
          <div className="bf-foot">
            <div className="bf-foot-brand">
              <a className="brand" href="#" aria-label="PrismaTech home">
                <img src="/images/logo.png" alt="" width={42} height={46} />
                <span>
                  PrismaTech<small>Inc</small>
                </span>
              </a>
              <h2>
                Driving digital growth <span>with</span>
                <br />
                innovation & strategy
              </h2>
              <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement</p>
            </div>
            <nav aria-label="Quick links">
              <h3>Quick Links</h3>
              <a href="#">Home</a>
              <a href="#why-prisma">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact Us</a>
            </nav>
            <nav aria-label="Services">
              <h3>Services</h3>
              <a href="#services">Merchant Services</a>
              <a href="#services">Social Media Marketing</a>
              <a href="#services">PPC Advertising</a>
              <a href="#services">Content Marketing</a>
            </nav>
            <div className="bf-foot-contact">
              <h3>Contact Info</h3>
              <a href="mailto:info@prismatechinc.com">info@prismatechinc.com</a>
              <a href="tel:+1629877543">+1 (62) 987 7543</a>
              <p>949 Brandon Way,<br />Fairfield, CA 94533</p>
              <h3>Social Media</h3>
              <div className="bf-social">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden={true}><path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" /></svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden={true}><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" /></svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden={true}><path fill="currentColor" d="M6.5 9H4v11h2.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.8-.8-2.4-1.8-2.4s-2 .8-2 2.5V20H11V9h2.4v1.5c.5-.8 1.6-1.7 3.3-1.7 2.2 0 3.3 1.4 3.3 4.2z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bf-legal">
            <p>© Copyright 2026 <strong>PrismaTech Inc.</strong> All Rights Reserved.</p>
            <p>
              <a href="#contact">Terms of Service</a>
              <a href="#contact">Privacy Policy</a>
            </p>
            <button id="motion-toggle" className="bf-visually-hidden" type="button" aria-pressed={false}>
              Pause animations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
