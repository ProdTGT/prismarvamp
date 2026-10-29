import { LegalDocumentShell, LegalH2, LegalP, LegalUl } from "./LegalDocumentShell";

const linkClass =
  "font-semibold text-white underline decoration-[#bc13fe]/50 underline-offset-2 hover:decoration-[#bc13fe]";

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentShell
      title="Privacy Policy"
      subtitle="How PrismaTech Inc. collects, uses, and shares information when you visit prismatechinc.com or contact us."
      updated="October 28, 2026"
    >
      <section className="space-y-4">
        <LegalH2>1. Who we are</LegalH2>
        <LegalP>
          PrismaTech Inc. (“PrismaTech,” “we,” “us,” or “our”) provides merchant services, payment processing, pricing
          programs and point-of-sale (POS) equipment to businesses in the United States. Our address is 949 Brandon Way,
          Fairfield, CA 94533. This Privacy Policy explains how we collect, use and share information when you visit
          prismatechinc.com, submit a form, or communicate with us by phone, email or text message.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>2. Information we collect</LegalH2>
        <LegalUl>
          <li>
            <span className="font-semibold text-[#e8e8e8]">Contact and business information:</span> name, business name,
            business email, phone and mobile number, business address, industry, and the details you include in a
            request.
          </li>
          <li>
            <span className="font-semibold text-[#e8e8e8]">Merchant application information:</span> if you apply for
            merchant services, information needed for underwriting and onboarding, such as business ownership, tax
            identification, processing volume and bank details. This information is collected through secure application
            forms and shared only with the processors and banks needed to review and set up your account.
          </li>
          <li>
            <span className="font-semibold text-[#e8e8e8]">Consent records:</span> whether you agreed to receive emails
            or text messages, with the date, time, IP address and page where you gave consent.
          </li>
          <li>
            <span className="font-semibold text-[#e8e8e8]">Technical information:</span> IP address, browser and device
            type, pages viewed, referring page and timestamps, collected through cookies, server logs and analytics
            tools.
          </li>
          <li>
            <span className="font-semibold text-[#e8e8e8]">Communications:</span> emails, calls, texts and support
            requests you send to us.
          </li>
        </LegalUl>
      </section>

      <section className="space-y-4">
        <LegalH2>3. How we use information</LegalH2>
        <LegalUl>
          <li>To respond to inquiries, provide rate reviews and consultations, and process merchant applications.</li>
          <li>To set up, support and service POS equipment and merchant accounts.</li>
          <li>To send service messages, such as confirmations, onboarding steps and account notices.</li>
          <li>
            To send marketing emails and, if you opted in, marketing text messages about our services and offers.
          </li>
          <li>To operate, secure and improve our website, and to prevent fraud.</li>
          <li>To comply with legal, card network and regulatory requirements.</li>
        </LegalUl>
      </section>

      <section className="space-y-4">
        <LegalH2>4. Email communications</LegalH2>
        <LegalP>
          You can unsubscribe from marketing emails at any time with the unsubscribe link in any email, or by contacting{" "}
          <a href="mailto:info@prismatechinc.com" className={linkClass}>
            info@prismatechinc.com
          </a>
          . We process unsubscribe requests within 10 business days. We may still send service emails related to an
          active request or account.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>5. Text messaging (SMS)</LegalH2>
        <LegalP>
          If you opt in, PrismaTech Inc. will send recurring marketing and informational text messages to the mobile
          number you provide. Message frequency varies. Message and data rates may apply. Consent to receive texts is
          not a condition of any purchase.
        </LegalP>
        <LegalP>
          Reply STOP to any message to opt out, or HELP for help. You can also contact{" "}
          <a href="mailto:info@prismatechinc.com" className={linkClass}>
            info@prismatechinc.com
          </a>{" "}
          or{" "}
          <a href="tel:+17074398264" className={linkClass}>
            +1 707 439 8264
          </a>
          . Carriers are not liable for delayed or undelivered messages.
        </LegalP>
        <LegalP>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
          Text messaging originator opt-in data and consent will not be shared with any third parties. Information may
          be shared only with the service providers that deliver our text messages, such as our messaging platform and
          its carriers.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>6. How we share information</LegalH2>
        <LegalP>We do not sell or rent your personal information. We share information only:</LegalP>
        <LegalUl>
          <li>
            With payment processors, acquiring banks and equipment providers when needed to review, open or service your
            merchant account.
          </li>
          <li>
            With service providers that work for us, such as website hosting, email and SMS delivery, CRM and analytics,
            under contracts that limit their use of the data.
          </li>
          <li>
            When required by law, subpoena or card network rules, or to protect our rights, customers or others from
            fraud or harm.
          </li>
          <li>With a buyer or successor if PrismaTech is involved in a merger, acquisition or sale of assets.</li>
        </LegalUl>
      </section>

      <section className="space-y-4">
        <LegalH2>7. Cookies and analytics</LegalH2>
        <LegalP>
          We use cookies and similar technologies to remember preferences, measure site traffic and improve our pages.
          You can block or delete cookies in your browser settings; some site features may not work without them.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>8. Data security and retention</LegalH2>
        <LegalP>
          We use reasonable administrative, technical and physical safeguards, including encrypted connections (HTTPS).
          Payment card data processed through merchant accounts is handled by our PCI-compliant processing partners. We
          keep information only as long as needed for the purposes above or as required by law, then delete or anonymize
          it.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>9. Your California privacy rights</LegalH2>
        <LegalP>
          If you are a California resident, you may have the right to know what personal information we collect, request
          deletion or correction of it, and opt out of its sale or sharing. We do not sell personal information. To make
          a request, email{" "}
          <a href="mailto:info@prismatechinc.com" className={linkClass}>
            info@prismatechinc.com
          </a>{" "}
          or call{" "}
          <a href="tel:+17074398264" className={linkClass}>
            +1 707 439 8264
          </a>
          . We will verify your request and respond within 45 days. We will not discriminate against you for exercising
          these rights.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>10. Children</LegalH2>
        <LegalP>
          Our services are for businesses and are not directed to anyone under 18. We do not knowingly collect
          information from children.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>11. Changes to this policy</LegalH2>
        <LegalP>
          We may update this Privacy Policy. We will post the new version on this page and change the “Last updated”
          date.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>12. Contact us</LegalH2>
        <LegalP>
          PrismaTech Inc., 949 Brandon Way, Fairfield, CA 94533
          <br />
          Email:{" "}
          <a href="mailto:info@prismatechinc.com" className={linkClass}>
            info@prismatechinc.com
          </a>
          {" · "}
          Phone:{" "}
          <a href="tel:+17074398264" className={linkClass}>
            +1 707 439 8264
          </a>
        </LegalP>
      </section>
    </LegalDocumentShell>
  );
}
