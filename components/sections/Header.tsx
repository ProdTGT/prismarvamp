export default function Header() {
  return (
    <header className="site-header"><div className="container nav-inner">
      <a className="brand" href="#" aria-label="PrismaTech home"><img src="/images/logo.png" alt="" width={42} height={46} /><span>PrismaTech<small>MERCHANT SERVICES</small></span></a>
      <button className="menu-toggle" aria-label="Open navigation" aria-expanded={false} aria-controls="main-nav"><span></span><span></span></button>
      <nav id="main-nav" aria-label="Main navigation"><a href="#why-prisma">Why PrismaTech</a><a href="#solutions">POS solutions</a><a href="#how-it-works">How it works</a></nav>
      <button className="button button-small header-cta" data-action="call">Let’s talk <span aria-hidden={true}>↗</span></button>
    </div></header>
  );
}
