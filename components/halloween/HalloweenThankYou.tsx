"use client";

import { useEffect, useState } from "react";
import "@/app/lp/halloween/thank-you/thanks.css";

type RequestDetails = {
  name: string;
  email: string;
  business: string;
  businessType: string;
  request: string;
  interestedIn: string;
  message: string;
};

const empty: RequestDetails = {
  name: "",
  email: "",
  business: "",
  businessType: "",
  request: "",
  interestedIn: "",
  message: "",
};

const steps = [
  {
    icon: "/lp/thanks/step-review.svg",
    kicker: "01 / REVIEW",
    title: "We Review Your Details.",
    copy: "We look at your business, your request and the setup you’re interested in.",
  },
  {
    icon: "/lp/thanks/step-connect.svg",
    kicker: "02 / CONNECT",
    title: "A Real Person Reaches Out.",
    copy: "A PrismaTech representative will contact you to discuss your needs.",
  },
  {
    icon: "/lp/thanks/step-plan.svg",
    kicker: "03 / PLAN",
    title: "Find Your Right Setup.",
    copy: "Talk through your options, ask questions and decide on your next steps.",
  },
];

function shown(value: string) {
  const text = value.trim();
  return text || "—";
}

export default function HalloweenThankYou({ fontClass }: { fontClass: string }) {
  const [details, setDetails] = useState<RequestDetails>(empty);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("pt-halloween-request");
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<RequestDetails>;
        setDetails({ ...empty, ...parsed });
      }
    } catch {
      setDetails(empty);
    }

    const started = performance.now();
    let timer = 0;
    const finish = () => {
      const wait = Math.max(0, 700 - (performance.now() - started));
      timer = window.setTimeout(() => setReady(true), wait);
    };
    const image = new Image();
    image.src = "/lp/thanks/bg.png";
    if (image.complete) finish();
    else {
      image.onload = finish;
      image.onerror = finish;
    }
    const cap = window.setTimeout(finish, 1800);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(cap);
    };
  }, []);

  const rows = [
    ["Name", details.name],
    ["Email", details.email],
    ["Business", details.business],
    ["Business Type", details.businessType],
    ["Request", details.request],
    ["Interested In", details.interestedIn],
  ];

  return (
    <div className={`ty ${fontClass}`}>
      <div className={`ty-loader${ready ? " is-done" : ""}`} role="status" aria-live="polite" aria-hidden={ready}>
        <span className="ty-loader-spin" aria-hidden="true" />
        <p>Loading</p>
      </div>
      <div className="ty-bg" aria-hidden="true">
        <img src="/lp/thanks/bg.png" alt="" />
        <div className="ty-shade" />
      </div>
      <header className="ty-nav">
        <a className="ty-brand" href="/" aria-label="PrismaTech home">
          <img src="/lp/thanks/mark.png" alt="" width={58} height={46} />
          <span>
            PRISMATECH
            <small>INC</small>
          </span>
        </a>
        <a className="ty-back" href="/">
          Back To PrismaTech
        </a>
      </header>
      <main className="ty-main">
        <section className="ty-top">
          <div className="ty-copy">
            <div className="ty-check" aria-hidden="true">
              <img className="ty-check-ring" src="/lp/thanks/check-ring.svg" alt="" width={119} height={119} />
              <img className="ty-check-mark" src="/lp/thanks/check.png" alt="" width={70} height={46} />
            </div>
            <p className="ty-pill">
              <img src="/lp/thanks/dot.svg" alt="" width={14} height={14} />
              Your request is in good hands
            </p>
            <h1>
              <span>Thank You.</span>
              <span>We’ll Be In Touch.</span>
            </h1>
            <p className="ty-lead">
              We’ve received your request. A PrismaTech representative will contact you to discuss
              your business, your payment setup and the next steps.
            </p>
            <div className="ty-inbox">
              <img src="/lp/thanks/mail.svg" alt="" width={26} height={19} />
              <div>
                <h2>Check Your Inbox</h2>
                <p>
                  {details.email.trim()
                    ? `A confirmation is on its way to ${details.email.trim()}. It includes the details of your request.`
                    : "A confirmation is on its way. It includes the details of your request."}
                </p>
              </div>
            </div>
            <div className="ty-reach">
              <a className="ty-talk" href="tel:+17074398264">
                Talk To Us
                <img src="/lp/thanks/arrow.svg" alt="" width={21} height={15} />
              </a>
              <p>
                <span>Questions or a change to your request?</span>
                <a href="mailto:info@prismatechinc.com">info@prismatechinc.com</a>
                <span aria-hidden="true"> · </span>
                <a href="tel:+17074398264">+1 (707) 439-8264</a>
              </p>
            </div>
          </div>
          <aside className="ty-card" aria-label="Your request">
            <p className="ty-pill ty-pill-center">
              <img src="/lp/thanks/dot.svg" alt="" width={14} height={14} />
              Request Recieved
            </p>
            <h2>Your Request, At A Glance.</h2>
            <dl>
              {rows.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{shown(value)}</dd>
                </div>
              ))}
              <div className="ty-message">
                <dt>Your Message</dt>
                <dd>{shown(details.message)}</dd>
              </div>
            </dl>
            <p className="ty-note">
              <img src="/lp/thanks/shield.svg" alt="" width={14} height={17} />
              Your details help us prepare for a useful conversation.
            </p>
          </aside>
        </section>
        <section className="ty-next">
          <p className="ty-pill">
            <img src="/lp/thanks/dot.svg" alt="" width={14} height={14} />
            Here’s what happens next
          </p>
          <h2>A Clear Path Forward.</h2>
          <div className="ty-steps">
            {steps.map((step) => (
              <article key={step.kicker}>
                <img src={step.icon} alt="" width={76} height={74} />
                <p>{step.kicker}</p>
                <h3>{step.title}</h3>
                <span>{step.copy}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
