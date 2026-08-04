import Image from "next/image";

import { ContactForm } from "@/components/marketing/contact-form";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DisclosureIcons,
} from "@/components/ui/icon";
import {
  OFFICE_MAP_URL,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_E164,
} from "@/constants/contact";
import { DEMO_BOOKING_URL } from "@/constants/site";

const supportAreas = [
  ["Seller registration & onboarding", "Get guidance when preparing your business and sales channels for UniSouk."],
  ["Marketplace integrations", "Talk to us about connecting Amazon, ONDC, Meesho, Flipkart and other commerce channels."],
  ["Inventory automation & analytics", "Understand how connected inventory and clearer performance insights can improve daily operations."],
  ["Unique business requirements", "Discuss workflows, channel combinations or operating needs that do not fit a standard setup."],
  ["Ecommerce fulfilment support", "Get help understanding the operational flow from incoming order to fulfilment."],
];

const faqs = [
  ["How can I reach UniSouk’s support team?", "You can email us, call during business hours or send a message using the contact form on this page."],
  ["Do you provide dedicated account managers?", "Yes. Eligible managed service engagements can include a dedicated account manager for onboarding, growth and day to day commerce support."],
  ["How long does it take to get a response?", "We usually respond within 24 to 72 hours on business days. For urgent queries, call our support number directly."],
  ["Can I schedule a demo of UniSouk’s platform?", "Yes. Book a free demo and our team will arrange a walkthrough around your business and current commerce setup."],
  ["What information should I provide when contacting support?", "Include your business name, registered email address and a brief description of the query so our team can help you faster."],
];

export function ContactReference() {
  return (
    <>
      <section className="contact-hero" id="top" aria-labelledby="contact-title">
        <div className="container contact-hero__inner">
          <div className="contact-hero__copy">
            <h1 id="contact-title">Let’s build your ecommerce <span>success story together.</span></h1>
            <p>Whether you are launching your first product or growing across multiple marketplaces, the UniSouk team is here to help you move forward.</p>
            <div className="contact-hero__actions">
              <a className="button button--primary" href="#contact-form">Send us a message <ArrowRightIcon /></a>
              <a className="text-link" href={DEMO_BOOKING_URL}>Book a free demo <ArrowRightIcon /></a>
            </div>
          </div>
          <address className="contact-directory" aria-label="UniSouk contact information">
            <header><span>Get in touch</span><em>We’d love to hear from you</em></header>
            <a href={`mailto:${SUPPORT_EMAIL}`}><span>Email us</span><strong>{SUPPORT_EMAIL}</strong><i aria-hidden="true"><ArrowUpRightIcon /></i></a>
            <a href={`tel:${SUPPORT_PHONE_E164}`}><span>Call us</span><strong>{SUPPORT_PHONE_DISPLAY}</strong><small>Monday to Friday · 10:00 AM to 6:00 PM</small><i aria-hidden="true"><ArrowUpRightIcon /></i></a>
            <a href={OFFICE_MAP_URL} target="_blank" rel="noreferrer"><span>Visit us</span><strong>Solaris Cube, Vesu, Surat</strong><small>Seventh Floor, Office No. 701 · Gujarat 395007</small><i aria-hidden="true"><ArrowUpRightIcon /></i></a>
            <div className="flex justify-between pt-4">
              <Image src="/unisouk-mark-on-dark.svg" width={52} height={26} alt="" /><span>List. Sell. Grow.</span>
            </div>
          </address>
        </div>
      </section>

      <section className="message-section" id="contact-form" aria-labelledby="message-title">
        <div className="container message-section__inner">
          <div className="message-section__intro">
            <h2 id="message-title">Tell us how we can help.</h2>
            <p>Share a little about your business and what you want to improve. Your message will be sent directly to our support team.</p>
            <div className="response-note"><i aria-hidden="true" /><span>Typical response time</span><strong>24 to 72 business hours</strong></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="support-scope" aria-labelledby="support-title">
        <div className="container support-scope__inner">
          <div className="support-scope__intro">
            <h2 id="support-title">Why contact UniSouk?</h2>
            <p>No question is too small and no commerce challenge needs to be explained in technical language. Tell us what is happening in the business, and we’ll help identify the relevant next step.</p>
          </div>
          <div className="support-list">
            {supportAreas.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="contact-faq" aria-labelledby="faq-title">
        <div className="container contact-faq__inner">
          <div><h2 id="faq-title">A few useful answers.</h2><p>Support, demos and the information that helps us respond faster.</p></div>
          <div className="contact-faq__list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<DisclosureIcons /></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="container contact-cta__inner">
          <h2 id="contact-cta-title">Ready to simplify your online selling journey<span>?</span></h2>
          <div className="contact-cta__copy"><p>Reach out today and see how UniSouk can help you simplify operations, expand your reach and prepare for the next stage of growth.</p></div>
        </div>
      </section>
    </>
  );
}
