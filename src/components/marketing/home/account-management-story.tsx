import { ArrowRightIcon } from "@/components/ui/icon";

const benefits = [
  {
    title: "Planning that fits your business",
    copy: "Your products, sales channels, priorities, and business stage come together in a clear plan built around your specific needs.",
    icon: (
      <>
        <path d="M7 36c5-14 11-2 18-15s12-4 16-12" />
        <circle cx="7" cy="36" r="3" />
        <circle cx="25" cy="21" r="3" />
        <circle className="ams-content__benefit-accent" cx="41" cy="9" r="3" />
      </>
    ),
  },
  {
    title: "Support before problems happen",
    copy: "Possible catalogue, account, and operational issues are spotted early, before they turn into bigger problems.",
    icon: (
      <>
        <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11Z" />
        <path d="m17 24 5 5 10-11" />
        <circle className="ams-content__benefit-accent" cx="39" cy="11" r="3" />
      </>
    ),
  },
  {
    title: "Advice based on real results",
    copy: "Sales, channel, and business data are turned into clear recommendations that help you grow with confidence.",
    icon: (
      <>
        <path d="M8 39V25M18 39V19M28 39V27M38 39V11" />
        <path d="m7 18 10-5 10 4 11-9" />
        <circle className="ams-content__benefit-accent" cx="38" cy="8" r="3" />
      </>
    ),
  },
  {
    title: "Solutions built for your business",
    copy: "Your products, customers, business model, and goals shape the solution, never a one-size-fits-all approach.",
    icon: (
      <>
        <path d="M8 13h32M8 24h32M8 35h32" />
        <circle cx="18" cy="13" r="4" />
        <circle className="ams-content__benefit-accent" cx="32" cy="24" r="4" />
        <circle cx="23" cy="35" r="4" />
      </>
    ),
  },
];


export function AccountManagementStory({
  accountManagementUrl,
}: {
  accountManagementUrl: string;
}) {
  return (
    <section
      className="ams-content"
      id="account-management"
      aria-labelledby="ams-content-title"
    >
      <div className="container ams-content__inner">
        <header className="ams-content__header">
          <div>
            <p className="ams-content__label">UniSouk Account Management</p>
            <h2 id="ams-content-title">End to End Marketplace Management.</h2>
          </div>
          <div className="ams-content__intro">
            <p>
              Work with one dedicated account manager who understands your
              priorities, keeps the right work moving, and helps you make
              clearer growth decisions.
            </p>
            <a className="button button--primary" href={accountManagementUrl}>
              Talk to an account manager
              <ArrowRightIcon />
            </a>
          </div>
        </header>
        <div className="ams-content__benefits">
          <div className="ams-content__benefit-list">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <span
                  className="ams-content__benefit-visual"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 48 48">{benefit.icon}</svg>
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

