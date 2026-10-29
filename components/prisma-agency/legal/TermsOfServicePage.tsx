import Link from "next/link";
import { LegalDocumentShell, LegalH2, LegalP } from "./LegalDocumentShell";

const linkClass =
  "font-semibold text-white underline decoration-[#bc13fe]/50 underline-offset-2 hover:decoration-[#bc13fe]";

export default function TermsOfServicePage() {
  return (
    <LegalDocumentShell
      title="Terms of Service"
      subtitle="Rules for using prismatechinc.com and communicating with PrismaTech Inc."
      updated="October 28, 2026"
    >
      <section className="space-y-4">
        <LegalH2>1. Agreement</LegalH2>
        <LegalP>
          These Terms of Service (“Terms”) govern your use of prismatechinc.com and your communications with PrismaTech
          Inc. (“PrismaTech,” “we,” “us”), 949 Brandon Way, Fairfield, CA 94533. By using the site or submitting a form,
          you agree to these Terms. If you do not agree, do not use the site.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>2. Our services</LegalH2>
        <LegalP>
          PrismaTech offers merchant services, payment processing, cash discount and dual pricing programs, flat fee and
          traditional pricing, POS terminals and equipment, and related support. Information on this site is general and
          does not guarantee approval, pricing or savings. Merchant accounts are subject to underwriting and approval by
          our processing and banking partners. Your merchant processing agreement, equipment agreement and any signed
          contract govern your account and take priority over this site.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>3. Pricing programs</LegalH2>
        <LegalP>
          Cash discount, dual pricing and surcharge programs must be run in line with card network rules and the laws of
          your state. Some states restrict surcharging. You are responsible for posting required signage and disclosures
          to your customers. We will provide guidance during setup, but this is not legal advice.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>4. Your submissions</LegalH2>
        <LegalP>
          You agree that information you submit through our forms is accurate and belongs to you or your business. You
          may not submit information about another person without their permission.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>5. SMS program terms</LegalH2>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Program:</span> PrismaTech Inc. marketing and informational text
          messages about merchant services, offers and account updates.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Opt-in:</span> you join by checking the SMS consent box on our
          website form. Consent is not a condition of purchase.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Frequency:</span> message frequency varies.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Cost:</span> message and data rates may apply.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Opt-out:</span> reply STOP to any message. You will receive one
          final confirmation, then no further texts unless you reply START.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Help:</span> reply HELP, email{" "}
          <a href="mailto:info@prismatechinc.com" className={linkClass}>
            info@prismatechinc.com
          </a>
          , or call{" "}
          <a href="tel:+17074398264" className={linkClass}>
            +1 707 439 8264
          </a>
          .
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Carriers:</span> carriers are not liable for delayed or
          undelivered messages.
        </LegalP>
        <LegalP>
          <span className="font-semibold text-[#e8e8e8]">Privacy:</span> see our{" "}
          <Link href="/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
          . Mobile information and opt-in data are never shared with third parties for marketing.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>6. Email communications</LegalH2>
        <LegalP>
          By submitting a form, you agree to receive emails from PrismaTech about your request and our services. You can
          unsubscribe at any time using the link in any marketing email.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>7. Acceptable use</LegalH2>
        <LegalP>
          You agree not to misuse the site, including attempting unauthorized access, sending malware or spam, scraping
          data in bulk, or misrepresenting your identity or business.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>8. Intellectual property</LegalH2>
        <LegalP>
          The site’s content, logos and design belong to PrismaTech or its licensors. Product names such as Clover and
          PAX are trademarks of their owners and are used only to describe compatible equipment.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>9. Third-party services</LegalH2>
        <LegalP>
          Our services may rely on third-party processors, equipment makers and software. Their terms apply to your use
          of their products, and we are not responsible for their content or availability.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>10. Disclaimers</LegalH2>
        <LegalP>
          The site is provided “as is” without warranties of any kind. We do not guarantee that the site will be
          uninterrupted or error-free.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>11. Limitation of liability</LegalH2>
        <LegalP>
          To the fullest extent allowed by law, PrismaTech is not liable for indirect, incidental or consequential
          damages arising from use of this site. Liability under a merchant or equipment agreement is governed by that
          agreement.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>12. Governing law</LegalH2>
        <LegalP>
          These Terms are governed by the laws of the State of California. Disputes will be heard in the state or federal
          courts located in California.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>13. Changes</LegalH2>
        <LegalP>
          We may update these Terms by posting a new version on this page and changing the “Last updated” date.
        </LegalP>
      </section>

      <section className="space-y-4">
        <LegalH2>14. Contact</LegalH2>
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
