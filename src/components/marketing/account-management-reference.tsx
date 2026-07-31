const consultationUrl = "https://calendar.app.google/kxxzKiyEfoWJzmTU6";

const responsibilities = [
  {
    title: "Catalogue and listings",
    copy: "Keep product information complete, channel ready and consistent as catalogues grow.",
    items: [
      "Listing creation and optimization",
      "Attribute and category checks",
      "Content and image coordination",
    ],
  },
  {
    title: "Daily marketplace operations",
    copy: "Give routine account work a clear owner so issues are handled before they slow sales.",
    items: [
      "Inventory and order monitoring",
      "Account health and issue follow up",
      "Marketplace coordination",
    ],
  },
  {
    title: "Campaigns and visibility",
    copy: "Plan promotions around commercial goals instead of treating every marketplace event as a last minute task.",
    items: [
      "Promotion planning",
      "Advertising coordination",
      "Offer and availability checks",
    ],
  },
  {
    title: "Performance and settlement support",
    copy: "Turn channel reports into a clear view of what moved, what needs attention and what happens next.",
    items: [
      "Sales and return reviews",
      "Settlement support",
      "Action led performance reporting",
    ],
  },
];

const deskItems = [
  {
    image: "/ecosystem-logos/amazon-app-icon-clean.png",
    alt: "Amazon",
    title: "Listing improvements",
    copy: "12 priority SKUs reviewed",
    state: "In progress",
  },
  {
    image: "/ecosystem-logos/meesho.png",
    alt: "Meesho",
    title: "Campaign readiness",
    copy: "Offers and inventory checked",
    state: "Ready",
  },
  {
    image: "/ecosystem-logos/myntra.png",
    alt: "Myntra",
    title: "Account health",
    copy: "Exceptions assigned and tracked",
    state: "Monitored",
  },
];

export function AccountManagementReference() {
  return (
    <>
      <section
        className="management-hero"
        aria-labelledby="management-title"
      >
        <div className="container management-hero__inner">
          <div className="management-hero__copy">
            <h1 id="management-title">
              Your commerce accounts. Properly managed.
            </h1>
            <p>
              A dedicated UniSouk team runs the work behind your marketplace
              and quick commerce growth, from catalogue quality to daily
              operations and performance.
            </p>
            <div className="management-hero__actions">
              <a className="button button--primary" href={consultationUrl}>
                Book a free consultation
              </a>
              <a
                className="text-link text-link--arrow text-link--black"
                href="#responsibility"
              >
                See what we manage
              </a>
            </div>
          </div>
          <div
            className="account-desk"
            aria-label="Illustration of a UniSouk account management desk"
          >
            <header>
              <div className="account-desk__identity">
                <img src="/unisouk-mark.svg" width="42" height="22" alt="" />
                <div>
                  <strong>Account desk</strong>
                  <span>One team across every channel</span>
                </div>
              </div>
              <span className="account-desk__live">
                <i /> Active this week
              </span>
            </header>
            <div className="account-desk__summary">
              <div>
                <span>Catalogue</span>
                <strong>Quality review</strong>
              </div>
              <div>
                <span>Operations</span>
                <strong>Monitored daily</strong>
              </div>
              <div>
                <span>Growth</span>
                <strong>Next actions ready</strong>
              </div>
            </div>
            <div className="account-desk__queue">
              {deskItems.map((item) => (
                <article key={item.title}>
                  <span className="channel-mark">
                    <img src={item.image} alt={item.alt} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.copy}</span>
                  </div>
                  <em>{item.state}</em>
                </article>
              ))}
              <article>
                <span className="channel-mark channel-mark--word">QC</span>
                <div>
                  <strong>Quick commerce expansion</strong>
                  <span>Catalogue requirements mapped</span>
                </div>
                <em>Planning</em>
              </article>
            </div>
            <div className="account-desk__pulse" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="coverage" id="coverage" aria-labelledby="coverage-title">
        <div className="container coverage__inner">
          <div className="coverage__intro">
            <h2 id="coverage-title">
              We Manage the Operations. You Scale the Business.
            </h2>
            <p>
              Use UniSouk account management for established marketplaces, fast
              moving quick commerce channels, or both.
            </p>
          </div>
          <div className="coverage-lanes">
            <article>
              <header>
                <span>Marketplace commerce</span>
                <h3>
                  Build consistency across the channels customers already
                  trust.
                </h3>
              </header>
              <p>
                We coordinate catalogue, operations, campaigns and reporting
                across marketplaces such as Amazon, Flipkart, Myntra and
                Meesho.
              </p>
              <ul className="channel-list" aria-label="Marketplace channels">
                <li>
                  <img
                    className="channel-logo--amazon"
                    src="/ecosystem-logos/amazon-app-icon-clean.png"
                    alt="Amazon"
                  />
                </li>
                <li>
                  <img
                    className="channel-logo--flipkart"
                    src="/ecosystem-logos/flipkart-mark.svg"
                    alt="Flipkart"
                  />
                </li>
                <li>
                  <img
                    className="channel-logo--myntra"
                    src="/ecosystem-logos/myntra.png"
                    alt="Myntra"
                  />
                </li>
                <li>
                  <img
                    className="channel-logo--meesho"
                    src="/ecosystem-logos/meesho.png"
                    alt="Meesho"
                  />
                </li>
              </ul>
            </article>
            <article>
              <header>
                <span>Quick commerce</span>
                <h3>
                  Operate at the pace that rapid delivery channels demand.
                </h3>
              </header>
              <p>
                We help prepare and manage the catalogue, inventory discipline,
                promotions and reporting needed for quick commerce growth.
              </p>
              <ul
                className="channel-list channel-list--quick"
                aria-label="Quick commerce channels"
              >
                <li>
                  <img
                    className="channel-logo--blinkit"
                    src="/ecosystem-logos/blinkit.svg"
                    alt="Blinkit"
                  />
                </li>
                <li>
                  <img
                    className="channel-logo--wide"
                    src="/ecosystem-logos/zepto.svg"
                    alt="Zepto"
                  />
                </li>
                <li>
                  <img
                    className="channel-logo--jiomart"
                    src="/ecosystem-logos/jiomart.png"
                    alt="JioMart"
                  />
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        className="responsibility"
        id="responsibility"
        aria-labelledby="responsibility-title"
      >
        <div className="container responsibility__inner">
          <div className="responsibility__intro">
            <h2 id="responsibility-title">
              Managed Commerce. Maximum Growth.
            </h2>
            <p>
              Your account manager coordinates the moving parts instead of
              passing disconnected tasks back to you.
            </p>
          </div>
          <div className="responsibility-list">
            {responsibilities.map((item) => (
              <article key={item.title}>
                <header>
                  <h3>{item.title}</h3>
                  <span aria-hidden="true">↗</span>
                </header>
                <div>
                  <p>{item.copy}</p>
                  <ul>
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="management-cta" aria-labelledby="management-cta-title">
        <div className="container management-cta__inner">
          <div>
            <h2 id="management-cta-title">
              Give every commerce channel a clear owner
            </h2>
            <p>
              Tell us where you sell and where the work is getting stuck.
              We&apos;ll show you how UniSouk can take it forward.
            </p>
          </div>
          <a className="button button--primary" href={consultationUrl}>
            Book a free consultation
          </a>
        </div>
      </section>
    </>
  );
}
