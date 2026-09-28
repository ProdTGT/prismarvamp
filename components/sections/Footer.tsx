export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <a className="brand" href="#" aria-label="PrismaTech home">
            <img src="/images/logo.png" alt="" width={42} height={46} />
            <span>
              PrismaTech<small>MERCHANT SERVICES</small>
            </span>
          </a>
          <p>
            Practical technology.
            <br />
            Payments with possibility.
          </p>
          <nav aria-label="Footer navigation">
            <a href="#solutions">POS solutions</a>
            <a href="#contact">Contact us</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 PrismaTech Inc. All rights reserved.</span>
          <button id="motion-toggle" type="button" aria-pressed={false}>
            Pause animations
          </button>
        </div>
      </div>
    </footer>
  );
}
