export default function Header() {
  return (
    <header className="site-header bf-header">
      <div className="nav-inner bf-nav">
        <a className="brand bf-brand" href="#" aria-label="PrismaTech home">
          <img src="/images/logo.png" alt="" width={42} height={46} />
          <span>PrismaTech<small>Inc</small></span>
        </a>
        <button className="menu-toggle" aria-label="Open navigation" aria-expanded={false} aria-controls="main-nav">
          <span></span>
          <span></span>
        </button>
        <nav id="main-nav" aria-label="Main navigation">
          <a href="#why-prisma">Why Prisma Tech</a>
          <a href="#solutions">POS Solutions</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
        <button className="header-cta bf-talk" data-action="call">
          Let’s Talk <span aria-hidden={true}>→</span>
        </button>
      </div>
    </header>
  );
}
