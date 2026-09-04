import { ArrowRightIcon } from "@/components/ui/icon";

type BriefingCard = {
  index: string;
  eyebrow: string;
  title: string;
  rows: { title: string; copy: string }[];
};

const briefingCards: BriefingCard[] = [
  {
    index: "01",
    eyebrow: "Included",
    title: "What\u2019s included",
    rows: [
      {
        title: "Catalogue and listings",
        copy: "Quality, structure, and readiness",
      },
      {
        title: "Daily operations",
        copy: "Channel activity and issue follow-up",
      },
      {
        title: "Growth and settlements",
        copy: "Campaigns, performance, reconciliation",
      },
    ],
  },
  {
    index: "02",
    eyebrow: "Cadence",
    title: "Typical cadence",
    rows: [
      { title: "Daily", copy: "Monitoring and operational follow-up" },
      { title: "Weekly", copy: "Priorities and action plan" },
      { title: "Monthly", copy: "Performance review and next moves" },
    ],
  },
  {
    index: "03",
    eyebrow: "Eligibility",
    title: "Who it suits",
    rows: [
      { title: "Indian brands", copy: "Building a repeatable channel operation" },
      { title: "Marketplace sellers", copy: "Already live or preparing to launch" },
      { title: "One or more channels", copy: "Marketplace or quick commerce" },
    ],
  },
  {
    index: "04",
    eyebrow: "Commercial",
    title: "Commercial model",
    rows: [
      { title: "Separate service", copy: "Not bundled into the software plan" },
      { title: "Tailored scope", copy: "Based on channels and catalogue size" },
      { title: "Tailored quote", copy: "Aligned to operating requirements" },
    ],
  },
];

export function ManagedServiceClarity({
  scopeUrl,
}: {
  scopeUrl: string;
}) {
  return (
    <section
      className="managed-clarity"
      id="managed-clarity"
      aria-labelledby="managed-clarity-title"
    >
      <div className="container managed-clarity__inner">
        <header className="managed-clarity__intro">
          <div className="managed-clarity__title-block">
            <span className="managed-clarity__pill">
              Managed service • Made clear
            </span>
            <h2 id="managed-clarity-title">
              Know exactly how the service works.
            </h2>
          </div>
          <p className="managed-clarity__lede">
            A clear operating model for Indian brands and marketplace sellers
            who want one accountable team across their commerce channels.
          </p>
        </header>

        <div className="managed-clarity__strip">
          <div className="managed-clarity__strip-lead">
            <span className="managed-clarity__badge" aria-hidden="true">
              01
            </span>
            <div className="managed-clarity__strip-copy">
              <p className="managed-clarity__strip-title">
                A separate, hands-on Account Management service
              </p>
              <p className="managed-clarity__strip-sub">
                Use it alongside UniSouk software when your team needs
                operational ownership.
              </p>
            </div>
          </div>
          <span className="managed-clarity__tag">Tailored to your channels</span>
        </div>

        <div className="managed-clarity__cards">
          {briefingCards.map((card) => (
            <article key={card.index} className="managed-clarity__card">
              <header className="managed-clarity__card-head">
                <span className="managed-clarity__badge" aria-hidden="true">
                  {card.index}
                </span>
                <span className="managed-clarity__card-titles">
                  <span className="managed-clarity__card-eyebrow">
                    {card.eyebrow}
                  </span>
                  <span className="managed-clarity__card-title">
                    {card.title}
                  </span>
                </span>
              </header>
              <ul className="managed-clarity__rows">
                {card.rows.map((row) => (
                  <li key={row.title} className="managed-clarity__row">
                    <span
                      className="managed-clarity__dot"
                      aria-hidden="true"
                    />
                    <span className="managed-clarity__row-copy">
                      <span className="managed-clarity__row-title">
                        {row.title}
                      </span>
                      <span className="managed-clarity__row-sub">
                        {row.copy}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="managed-clarity__close">
          <div className="managed-clarity__close-copy">
            <p className="managed-clarity__close-title">
              Start with your channels. We&apos;ll define the right scope
              together.
            </p>
            <p className="managed-clarity__close-sub">
              Final cadence, service depth, and pricing are confirmed during
              scoping.
            </p>
          </div>
          <a className="managed-clarity__cta" href={scopeUrl}>
            Discuss your scope
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
