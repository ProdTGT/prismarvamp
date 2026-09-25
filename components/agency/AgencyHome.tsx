"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "Merchant Services",
    copy: "Accept payments easily with secure, fast, and reliable processing solutions designed for modern businesses.",
    icon: "/home/svc-b.png",
  },
  {
    title: "Social Media Marketing",
    copy: "Grow your brand with strategic content, targeted campaigns, and consistent engagement across all major platforms.",
    icon: "/home/svc-a.png",
  },
  {
    title: "Content Marketing",
    copy: "Create impactful content that attracts, educates, and converts your audience into loyal customers.",
    icon: "/home/svc-c.png",
  },
  {
    title: "PPC Advertising",
    copy: "Drive instant traffic and maximize ROI with data-driven paid ad campaigns across Google, Meta, and more.",
    icon: "/home/proc-d.png",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Consult",
    copy: "We customize strategies to fit your brand's specific needs, ensuring alignment.",
    icon: "/home/proc-a.png",
  },
  {
    n: "02",
    title: "Strategy & Planning",
    copy: "Combines industry knowledge and creativity to exceptional results for your brand.",
    icon: "/home/proc-b.png",
  },
  {
    n: "03",
    title: "Execution & Optimize",
    copy: "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
    icon: "/home/proc-c.png",
  },
  {
    n: "04",
    title: "Result & Growth",
    copy: "We provide continuous support and maintenance to keep your digital assets at best",
    icon: "/home/proc-d.png",
  },
];

const reviews = [
  {
    name: "Emma Richard",
    role: "CEO Nexatech",
    photo: "/home/img-12.png",
    quote:
      "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months.",
  },
  {
    name: "David Mont",
    role: "Marketing Director",
    photo: "/home/img-14.png",
    quote:
      "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors.",
  },
  {
    name: "Sophia Lewis",
    role: "Founder",
    photo: "/home/img-15.png",
    quote:
      "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="pt-eyebrow">
      <img src="/home/icon-6.svg" alt="" width={19} height={19} />
      {children}
    </p>
  );
}

function PillLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="pt-pill" href={href}>
      <span>{children}</span>
      <span className="pt-pill-go" aria-hidden="true">
        <img src="/home/icon-2.svg" alt="" width={18} height={18} />
      </span>
    </a>
  );
}

export default function AgencyHome({ fontClass }: { fontClass: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get("email") || "").includes("@")) return;
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <div className={`pt ${fontClass}`}>
      <header className="pt-nav">
        <a className="pt-logo" href="#top" aria-label="PrismaTech home">
          <img src="/home/img-16.png" alt="" width={52} height={42} />
          <span>PRISMATECH</span>
        </a>
        <button
          className="pt-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main">
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <div
            className={`pt-drop ${servicesOpen ? "open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
            </button>
            <div className="pt-drop-panel">
              {services.map((service) => (
                <a key={service.title} href="#services" onClick={() => setMenuOpen(false)}>
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>
        <a className="pt-phone" href="tel:+1629877543">
          <span aria-hidden="true">☎</span>
          +1 (62) 987 7543
        </a>
      </header>

      <main id="top">
        <section className="pt-hero" aria-labelledby="hero-title">
          <img className="pt-hero-photo" src="/home/hero-a.png" alt="" />
          <img className="pt-hero-wave" src="/home/img-11.png" alt="" />
          <div className="pt-hero-shade" />
          <div className="pt-hero-copy">
            <h1 id="hero-title">
              <span>Amplify Your Brand with</span>
              <span>Cutting-Edge Digital</span>
              <span>Services</span>
            </h1>
            <div className="pt-hero-bottom">
              <div className="pt-watch">
                <button className="pt-play" aria-label="Play video reviews">
                  <img src="/home/icon-1.svg" alt="" width={18} height={20} />
                </button>
                <p>
                  Watch our video reviews and see how businesses achieve success with Marko&apos;s
                  digital marketing solutions.
                </p>
              </div>
              <div className="pt-hero-side">
                <p>
                  At PrismaTech, we bring your ideas to life by crafting engaging, impactful digital
                  experiences that captivate audiences and drive results. From innovative web design
                  to compelling content and cutting-edge digital strategies.
                </p>
                <div className="pt-hero-cta">
                  <PillLink href="#contact">Get Started</PillLink>
                  <div className="pt-faces" aria-hidden="true">
                    <img src="/home/img-04.png" alt="" />
                    <img src="/home/img-13.png" alt="" />
                    <img src="/home/img-02.png" alt="" />
                  </div>
                  <strong>
                    2.7k Positive
                    <br />
                    Reviews
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-expertise" id="about">
          <div className="pt-expertise-visual">
            <img src="/home/team-a.png" alt="Team collaborating around a laptop" />
            <article className="pt-consult">
              <h2>
                Ready to Elevate Your
                <br />
                Digital Presence?
              </h2>
              <p>Let&apos;s create a custom strategy that fits your business goals.</p>
              <a href="#contact">
                Get Free Consultation <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
          <div className="pt-expertise-copy">
            <Eyebrow>Our Expertise</Eyebrow>
            <h2>
              Data Driven Strategies,
              <br />
              Measurable Results
            </h2>
            <p>
              At Prisma, we specialize in crafting innovative digital marketing strategies that drive
              real business growth. Our expertise ensures your brand stays ahead in the competitive
              digital landscape.
            </p>
            <div className="pt-expertise-split">
              <div>
                <h3>What We Do Best</h3>
                <ul>
                  <li>Performance Marketing</li>
                  <li>Social Media Growth</li>
                  <li>Content Marketing</li>
                </ul>
              </div>
              <article className="pt-years">
                <p className="pt-years-num">
                  21<span>+</span>
                </p>
                <p>Years of Experience on Digital Marketing Services</p>
                <small>
                  We measure our success by the success of our clients. With a focus on results and a
                  dedication to quality.
                </small>
              </article>
            </div>
          </div>
        </section>

        <section className="pt-banner">
          <img src="/home/img-07.png" alt="" />
          <div>
            <Eyebrow>We Help Brands Grow</Eyebrow>
            <h2>Transform Your Business with Prisma!</h2>
            <p>
              Take your digital marketing to the next level with data-driven strategies and innovative
              solutions. Let&apos;s create something amazing together!
            </p>
          </div>
        </section>

        <section className="pt-services" id="services">
          <div className="pt-center">
            <Eyebrow>Our Core Services</Eyebrow>
            <h2>
              Digital Solutions That Drive
              <br />
              Real Results
            </h2>
          </div>
          <div className="pt-service-row">
            {services.map((service) => (
              <article key={service.title}>
                <div className="pt-service-top">
                  <span className="pt-icon">
                    <img src={service.icon} alt="" width={48} height={48} />
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.copy}</p>
                <PillLink href="#contact">View Details</PillLink>
              </article>
            ))}
          </div>
          <p className="pt-service-note">
            Need a custom solution? Let&apos;s create a strategy tailored for your business.{" "}
            <a href="#contact">Get a Free Strategy Call</a>
          </p>
        </section>

        <section className="pt-process" id="process">
          <div className="pt-process-head">
            <div>
              <Eyebrow>How it Work</Eyebrow>
              <h2>
                Simple Steps to
                <br />
                Digital Success
              </h2>
            </div>
            <div>
              <p>
                Our proven process combines research, strategy, and creativity to deliver tailored
                solutions that drive measurable results.
              </p>
              <a href="#contact">
                Get Started Now <img src="/home/icon-2.svg" alt="" width={18} height={18} />
              </a>
            </div>
          </div>
          <div className="pt-steps">
            {steps.map((step) => (
              <article key={step.n}>
                <div className="pt-step-top">
                  <img src={step.icon} alt="" width={48} height={48} />
                  <span>{step.n}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-stories">
          <div className="pt-story-top">
            <article className="pt-stats">
              <div className="pt-stats-head">
                <div className="pt-faces" aria-hidden="true">
                  <img src="/home/img-04.png" alt="" />
                  <img src="/home/img-13.png" alt="" />
                  <img src="/home/img-02.png" alt="" />
                  <img src="/home/img-15.png" alt="" />
                </div>
                <strong>
                  2.7k Positive
                  <br />
                  Reviews
                </strong>
              </div>
              <div className="pt-stat-row">
                <p>
                  <b>90%</b>
                  <span>Improved Project</span>
                </p>
                <p>
                  <b>100+</b>
                  <span>New Project</span>
                </p>
              </div>
              <ul>
                <li>Social Media Growth</li>
                <li>Content Marketing</li>
                <li>PPC Advertising</li>
              </ul>
            </article>
            <article className="pt-story-intro">
              <Eyebrow>What Our Client Says</Eyebrow>
              <h2>
                Hear from Our Satisfied
                <br />
                Clients, Real Success
                <br />
                Stories
              </h2>
              <p>
                Discover how businesses like yours achieved outstanding growth with Marko&apos;s expert
                digital marketing solutions.
              </p>
            </article>
          </div>
          <div className="pt-reviews">
            {reviews.map((review) => (
              <article key={review.name}>
                <div className="pt-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <div className="pt-reviewer">
                  <img src={review.photo} alt="" />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                  <span className="pt-quote" aria-hidden="true">
                    ”
                  </span>
                </div>
                <p>“{review.quote}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-news" id="contact">
          <h2>Stay Ahead in Digital Marketing</h2>
          <p>
            Get exclusive insights, trends, and strategies delivered straight to your inbox. Subscribe
            now!
          </p>
          <form onSubmit={onSubscribe}>
            <label className="sr" htmlFor="pt-email">
              Email
            </label>
            <input id="pt-email" name="email" type="email" required placeholder="Give your best email" />
            <button type="submit">
              Subscribe
              <span aria-hidden="true">
                <img src="/home/icon-2.svg" alt="" width={16} height={16} />
              </span>
            </button>
          </form>
          {subscribed ? <p className="pt-thanks">You&apos;re on the list.</p> : null}
        </section>
      </main>

      <footer>
        <div className="pt-foot">
          <div>
            <a className="pt-logo pt-foot-logo" href="#top" aria-label="PrismaTech home">
              <img src="/home/img-16.png" alt="" width={58} height={46} />
              <span>
                PRISMATECH
                <small>INC</small>
              </span>
            </a>
            <h2>
              Driving Digital Growth with
              <br />
              Innovation & Strategy
            </h2>
            <p>
              Our digital services empower brands with innovative strategies and solutions for
              sustainable growth and engagement
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#services">Merchant Services</a>
            <a href="#services">Social Media Marketing</a>
            <a href="#services">PPC Advertising</a>
            <a href="#services">Content Marketing</a>
          </div>
          <div>
            <h3>Contact Info</h3>
            <a href="mailto:info@prismatechinc.com">info@prismatechinc.com</a>
            <a href="tel:+1629877543">+1 (62) 987 7543</a>
            <p>949 Brandon Way, Fairfield, CA 94533</p>
            <h3>Social Media</h3>
            <div className="pt-social">
              <a href="https://facebook.com" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M6.5 9H4v11h2.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.8-.8-2.4-1.8-2.4s-2 .8-2 2.5V20H11V9h2.4v1.5c.5-.8 1.6-1.7 3.3-1.7 2.2 0 3.3 1.4 3.3 4.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-legal">
          <p>
            © Copyright 2026 <strong>PrismaTech Inc.</strong> All Rights Reserved.
          </p>
          <p>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
