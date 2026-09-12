import { ArrowUpRightIcon, ShieldCheckIcon } from "@/components/ui/icon";

type CaseStudy = {
  index: string;
  brand: string;
  category: string;
  work: string;
  result: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    index: "01",
    brand: "Tessoro",
    category: "Fine jewellery ecommerce",
    work: "Commerce build shaped around catalogue clarity and considered product discovery.",
    result: "+XX%",
    href: "https://tessoro.in/",
  },
  {
    index: "02",
    brand: "Mamta Creation",
    category: "Fashion ecommerce",
    work: "Fashion ecommerce shaped for visual merchandising and mobile-first browsing.",
    result: "XX hrs",
    href: "https://www.mamtacreation.com/",
  },
  {
    index: "03",
    brand: "Vedic Vita",
    category: "Food and wellness ecommerce",
    work: "Food and wellness ecommerce structured for product education and confident checkout.",
    result: "X ch.",
    href: "https://vedicvita.com/",
  },
];

export function CustomerProof({ privacyPolicyUrl }: { privacyPolicyUrl: string }) {
  return (
    <section
      className="customer-proof"
      id="customer-proof"
      aria-labelledby="customer-proof-title"
    >
      <div className="container customer-proof__inner">
        <header className="customer-proof__header">
          <div className="customer-proof__headline">
            <p className="customer-proof__eyebrow">Customer proof</p>
            <h2 id="customer-proof-title">Proof, not promises.</h2>
          </div>
          <p className="customer-proof__lede">
            Real commerce builds, paired with the outcomes customers approve for
            publication.
          </p>
        </header>

        <div className="customer-proof__ledger" role="table">
          <div className="customer-proof__labels" role="row">
            <span role="columnheader">Story</span>
            <span role="columnheader">The work</span>
            <span role="columnheader">Approved result</span>
          </div>
          {caseStudies.map((study) => (
            <a
              key={study.index}
              className="customer-proof__row"
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              role="row"
              aria-label={`Visit ${study.brand} website (opens in a new tab)`}
            >
              <span className="customer-proof__story" role="cell">
                <span className="customer-proof__index">{study.index}</span>
                <span className="customer-proof__brand">
                  <span className="customer-proof__brand-name">
                    {study.brand}
                  </span>
                  <span className="customer-proof__brand-category">
                    {study.category}
                  </span>
                </span>
              </span>
              <span className="customer-proof__work" role="cell">
                {study.work}
              </span>
              <span className="customer-proof__result-group" role="cell">
                <span className="customer-proof__result">
                  <span className="customer-proof__result-label">
                    Approved result
                  </span>
                  <span className="customer-proof__result-value">
                    {study.result}
                  </span>
                </span>
                <span className="customer-proof__view" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="customer-proof__privacy">
          <p className="customer-proof__privacy-note">
            <ShieldCheckIcon className="customer-proof__privacy-icon" />
            Privacy note: UniSouk uses commercially acceptable means to protect
            personal data.
          </p>
          <a className="customer-proof__privacy-link" href={privacyPolicyUrl}>
            Read privacy policy
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
