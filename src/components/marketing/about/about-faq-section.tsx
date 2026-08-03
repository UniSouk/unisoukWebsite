import { siteContainerClass } from "@/components/layout/site-shell-styles";
import { DisclosureIcons } from "@/components/ui/icon";

type AboutFaq = {
  question: string;
  answer: string;
};

export function AboutFaqSection({ faqs }: { faqs: AboutFaq[] }) {
  return (
    <section className="bg-[var(--white)]" aria-labelledby="faq-title">
      <div
        className={`${siteContainerClass} grid grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.3fr)] items-start gap-[clamp(4rem,10vw,10rem)] py-[var(--page-section-space)] max-[67.99rem]:grid-cols-1 max-[47.99rem]:gap-12`}
      >
        <div className="sticky top-[calc(var(--header-height)+2rem)] max-[67.99rem]:static">
          <h2
            className="m-0 max-w-[10ch] !text-[length:var(--text-section-heading)] !leading-[var(--leading-heading)] !tracking-[var(--tracking-heading)] [text-wrap:balance]"
            id="faq-title"
          >
            Frequently asked questions
          </h2>
          <p className="mt-6 mb-0 max-w-[38ch] text-[length:var(--text-lead)] leading-[1.65] text-[var(--text-muted)] [text-wrap:pretty]">
            At UniSouk, a leading ecommerce service provider in India, we believe that the future of commerce is online and it should be accessible to everyone at their fingertips.
          </p>
        </div>
        <div className="border-t border-[var(--ink)]">
          {faqs.map((faq, index) => (
            <details
              className="border-b border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)]"
              open={index === 0}
              key={faq.question}
            >
              <summary className="relative min-h-20 cursor-pointer list-none py-6 pr-12 font-[family-name:var(--font-heading)] text-[length:var(--text-lead)] leading-[1.35] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-ink)] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <DisclosureIcons />
              </summary>
              <p className="mt-[-0.25rem] mb-[1.6rem] max-w-[62ch] leading-[1.65] text-[var(--text-muted)] [text-wrap:pretty]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
