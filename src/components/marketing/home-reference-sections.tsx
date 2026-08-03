import type { CSSProperties } from "react";

import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import { PLATFORM_LOGOS } from "@/constants/platforms";
import { SIGN_UP_URL } from "@/constants/site";

const marketplaces = [
  {
    name: "Amazon",
    src: PLATFORM_LOGOS.amazon,
    className: "marketplace--amazon",
  },
  {
    name: "Flipkart",
    src: "/ecosystem-logos/flipkart-mark.svg",
    className: "marketplace--flipkart",
  },
  {
    name: "Meesho",
    src: PLATFORM_LOGOS.meesho,
    className: "marketplace--meesho",
  },
  {
    name: "ONDC",
    src: PLATFORM_LOGOS.ondc,
    className: "marketplace--ondc",
  },
  {
    name: "Shopify",
    src: PLATFORM_LOGOS.shopify,
    className: "marketplace--shopify",
  },
  {
    name: "WooCommerce",
    src: PLATFORM_LOGOS.woocommerce,
    className: "marketplace--woocommerce",
  },
];

const stages = [
  {
    id: "listing",
    title: "Product Listing",
    description:
      "Create and optimize channel ready listings from one source.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Keep stock accurate across warehouses and every selling channel.",
  },
  {
    id: "orders",
    title: "Order Management",
    description: "Capture, fulfil, and track every order from one queue.",
  },
  {
    id: "shipping",
    title: "Shipping & Fulfillment",
    description: "Move every parcel from pickup to successful delivery.",
  },
  {
    id: "payments",
    title: "Payments & Settlements",
    description:
      "Track payouts, fees, refunds, and settlement activity in one view.",
  },
  {
    id: "analytics",
    title: "Analytics & Growth",
    description:
      "Turn performance data into the next confident growth move.",
  },
];

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

const ecosystemBrands = [
  { id: "amazon", logo: "/ecosystem-logos/amazon-app-icon-clean.png" },
  { id: "flipkart", logo: "/ecosystem-logos/flipkart.svg" },
  { id: "meesho", logo: "/ecosystem-logos/meesho.png" },
  { id: "ondc", logo: "/ecosystem-logos/ondc.svg", lightMark: true },
  { id: "shopify", logo: "/ecosystem-logos/shopify-mark.svg" },
  { id: "woocommerce", logo: "/ecosystem-logos/woocommerce.svg" },
  { id: "razorpay", logo: "/ecosystem-logos/razorpay.png" },
  { id: "shiprocket", logo: "/ecosystem-logos/shiprocket.png" },
];

export function ContinuousCommerceFlow() {
  return (
    <div
      className="continuous-flow"
      role="img"
      aria-label="UniSouk continuously creates and optimizes a product, publishes it to connected marketplaces, manages orders, inventory and payments, and turns activity into growth insights"
    >
      <section className="flow-dashboard" aria-hidden="true">
        <img
          className="flow-dashboard__base"
          src="/unisouk-dashboard-command-center.png"
          alt=""
        />
        <div className="flow-live">
          <i />
          <span>Commerce running</span>
        </div>
        <div className="flow-canvas">
          <article className="flow-layer product-create">
            <header>
              <div>
                <strong>Create product</strong>
                <span>Product Management</span>
              </div>
              <i>Draft</i>
            </header>
            <div className="product-create__body">
              <div className="product-image">
                <span>+</span>
                <strong>Product image</strong>
                <small>1200 × 1200 recommended</small>
              </div>
              <div className="product-fields">
                <label>
                  <span>Product title</span>
                  <strong className="typed-title">
                    Velocity Running Shoes for Men
                  </strong>
                </label>
                <div>
                  <label>
                    <span>Price</span>
                    <strong className="field-value field-value--price">
                      ₹2,499
                    </strong>
                  </label>
                  <label>
                    <span>Category</span>
                    <strong className="field-value field-value--category">
                      Running Shoes
                    </strong>
                  </label>
                </div>
                <button type="button">
                  Create product <span>→</span>
                </button>
              </div>
            </div>
          </article>
          <aside className="flow-layer ai-optimizer">
            <header>
              <span>✦</span>
              <div>
                <strong>AI listing optimizer</strong>
                <small>Improving product content</small>
              </div>
            </header>
            <ul>
              {[
                "Better product title",
                "SEO description",
                "Attributes added",
                "Keywords improved",
                "Category suggested",
              ].map((item, index) => (
                <li
                  style={{ "--item": index } as CSSProperties}
                  key={item}
                >
                  <i>✓</i>
                  <span>{item}</span>
                  <b />
                </li>
              ))}
            </ul>
            <div className="optimization-complete">
              <i>✓</i>
              <strong>AI optimization complete</strong>
            </div>
          </aside>
          <article className="flow-layer publish-flow">
            <div className="publish-product">
              <div className="shoe-mark" />
              <span>Velocity Running Shoes</span>
              <strong>₹2,499</strong>
            </div>
            <svg viewBox="0 0 620 310" preserveAspectRatio="none">
              <path d="M310 154L88 52M310 154L310 32M310 154L534 57M310 154L542 250M310 154L310 284M310 154L79 246" />
            </svg>
            <ul>
              {marketplaces.map((marketplace, index) => (
                <li
                  className={marketplace.className}
                  style={{ "--marketplace": index } as CSSProperties}
                  key={marketplace.name}
                >
                  <img src={marketplace.src} alt="" />
                  <i />
                </li>
              ))}
            </ul>
          </article>
          <article className="flow-layer orders-flow">
            <header>
              <div>
                <strong>Orders</strong>
                <span>Updating in real time</span>
              </div>
              <b>
                <i /> Live
              </b>
            </header>
            <div className="flow-metrics">
              <div>
                <span>Orders today</span>
                <strong>128</strong>
                <small>+38%</small>
              </div>
              <div>
                <span>Revenue today</span>
                <strong>₹84,260</strong>
                <small>+18%</small>
              </div>
              <div>
                <span>Ready to ship</span>
                <strong>34</strong>
                <small>Updated now</small>
              </div>
            </div>
            <div className="order-list">
              {[
                ["#USK 4821", "Amazon", "Processing"],
                ["#USK 4820", "Flipkart", "Ready to ship"],
                ["#USK 4819", "Meesho", "Shipped"],
              ].map(([order, channel, state]) => (
                <div key={order}>
                  <span>{order}</span>
                  <strong>{channel}</strong>
                  <i>Paid</i>
                  <b>{state}</b>
                </div>
              ))}
            </div>
          </article>
          <aside className="flow-layer inventory-sync">
            <header>
              <div>
                <strong>Inventory sync</strong>
                <span>One stock count across every channel</span>
              </div>
              <i>✓ Synced</i>
            </header>
            <div className="stock-total">
              <span>Available stock</span>
              <strong>
                <del>248</del> 235
              </strong>
              <small>13 units sold</small>
            </div>
            <ul>
              {[
                ["Amazon", 0.82],
                ["Flipkart", 0.68],
                ["Shopify", 0.76],
                ["ONDC", 0.61],
              ].map(([channel, stock]) => (
                <li key={String(channel)}>
                  <span>{channel}</span>
                  <i>
                    <b style={{ "--stock": stock } as CSSProperties} />
                  </i>
                  <strong>Live</strong>
                </li>
              ))}
            </ul>
          </aside>
          <article className="flow-layer payments-flow">
            <header>
              <div>
                <strong>Payments</strong>
                <span>Settlements and payouts</span>
              </div>
              <strong className="payments-total">₹1,42,860</strong>
            </header>
            <div className="payment-summary">
              <span>Available balance</span>
              <strong>₹92,430</strong>
              <i>Next payout Friday</i>
            </div>
            <ol>
              {[
                ["₹", "Settlement received", "Amazon · ₹42,680", "Now"],
                ["✓", "Commission calculated", "Flipkart · ₹3,240", "1m"],
                ["↻", "Refund processed", "Order #USK 4792", "4m"],
                ["→", "Payout scheduled", "₹92,430", "Today"],
              ].map(([icon, title, copy, time]) => (
                <li key={title}>
                  <i>{icon}</i>
                  <div>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                  <time>{time}</time>
                </li>
              ))}
            </ol>
          </article>
          <article className="flow-layer analytics-flow">
            <div className="analytics-chart">
              <header>
                <div>
                  <strong>Revenue overview</strong>
                  <span>Business performance</span>
                </div>
                <b>₹2.14L</b>
              </header>
              <svg viewBox="0 0 390 155" preserveAspectRatio="none">
                <path className="analytics-grid" d="M5 35H385M5 80H385M5 125H385" />
                <path
                  className="analytics-line"
                  d="M5 129C35 119 48 110 75 112S112 126 137 91 181 104 207 72 249 82 278 54 322 65 385 20"
                />
                <circle cx="385" cy="20" r="4" />
              </svg>
            </div>
            <aside>
              <header>
                <span>✦</span>
                <div>
                  <strong>AI insights</strong>
                  <small>Updated now</small>
                </div>
              </header>
              <ul>
                <li>
                  <span>Revenue</span>
                  <strong>+24%</strong>
                </li>
                <li>
                  <span>Orders</span>
                  <strong>+38%</strong>
                </li>
                <li>
                  <span>ROAS</span>
                  <strong>+17%</strong>
                </li>
              </ul>
              <p>Running Shoes is becoming a bestseller.</p>
            </aside>
          </article>
          <article className="flow-layer growth-peak">
            <div className="growth-stats">
              {[
                ["Revenue", "₹2.42L", "+24%"],
                ["Orders", "1,284", "+38%"],
                ["ROAS", "4.8×", "+17%"],
              ].map(([label, value, change]) => (
                <span key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                  <i>{change}</i>
                </span>
              ))}
            </div>
            <aside>
              <header>
                <span>✦</span>
                <div>
                  <strong>Recommended next move</strong>
                  <small>AI growth agent</small>
                </div>
              </header>
              <p>
                Increase ad budget for Running Shoes to maximize sales this
                week.
              </p>
              <button type="button">Apply recommendation</button>
            </aside>
            <div className="channel-health">
              {marketplaces.map((marketplace) => (
                <span key={marketplace.name}>
                  <img src={marketplace.src} alt="" />
                  <i />
                </span>
              ))}
            </div>
          </article>
        </div>
        <div className="flow-events" aria-hidden="true">
          <span className="flow-event flow-event--publish">
            <i>✓</i> Published everywhere
          </span>
          <span className="flow-event flow-event--order">
            <i>□</i> New order received
          </span>
          <span className="flow-event flow-event--inventory">
            <i>↻</i> Inventory synced
          </span>
          <span className="flow-event flow-event--payment">
            <i>₹</i> Settlement received
          </span>
          <span className="flow-event flow-event--forecast">
            <i>↗</i> Forecast updated
          </span>
        </div>
      </section>
    </div>
  );
}

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

function JourneyStrip() {
  const phases = [
    {
      title: "List",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 4.5h10l4 4v11H5z" />
          <path d="M15 4.5v4h4M8.5 12h7M8.5 15.5h5" />
        </svg>
      ),
      items: [
        "Publish everywhere from one dashboard",
        "Create a store customers can find",
      ],
    },
    {
      title: "Sell",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4.5 8.5 12 4l7.5 4.5v8L12 21l-7.5-4.5z" />
          <path d="m4.5 8.5 7.5 4.4 7.5-4.4M12 12.9V21" />
        </svg>
      ),
      items: [
        "Automate inventory and order management",
        "Connect with leading marketplaces effortlessly",
      ],
    },
    {
      title: "Grow",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 19V6M5 19h14" />
          <path d="m7.5 15 3.3-3.4 2.8 2.2 4.4-5" />
          <path d="M15.3 8.8H18v2.7" />
        </svg>
      ),
      items: [
        "Make smarter decisions with AI insights",
        "Scale your business with expert support",
      ],
    },
  ];

  return (
    <div className="commerce-journey" aria-label="List, sell, and grow with UniSouk">
      <div className="container journey-strip__inner">
        <div className="sales-journey__sequence">
          {phases.map((phase) => (
            <section className="sales-journey__phase" key={phase.title}>
              <header>
                <span className="sales-journey__phase-icon" aria-hidden="true">
                  {phase.icon}
                </span>
                <div>
                  <h3>{phase.title}</h3>
                </div>
              </header>
              <ul>
                {phase.items.map((item) => (
                  <li key={item}>
                    <i aria-hidden="true"><CheckIcon /></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CommerceOrbit() {
  return (
    <section
      className="commerce-orbit section-light"
      id="platform"
      aria-labelledby="commerce-orbit-title"
    >
      <JourneyStrip />
      <div className="container commerce-orbit__inner">
        <header className="commerce-orbit__copy">
          <h2 id="commerce-orbit-title" className="commerce-orbit__headline">
            <span className="commerce-orbit__headline-static">One place to</span>
            <span className="commerce-orbit__sr-only">
              Listings, Inventory, Orders, Shipping, Returns, Payments, and
              Analytics
            </span>
            <span className="commerce-orbit__headline-action">
              <span>manage</span>
              <span className="commerce-keyword" aria-hidden="true">
                <span className="commerce-keyword__background" />
                <span className="commerce-keyword__clip">
                  <span className="commerce-keyword__word is-current">
                    Listings
                  </span>
                </span>
                <span className="commerce-keyword__measure">Listings</span>
              </span>
            </span>
          </h2>
          <p>
            UniSouk brings your catalogue, stock, and orders together so you
            can update once, sell everywhere, and stay in control.
          </p>
          <a
            className="text-link text-link--arrow"
            href={SIGN_UP_URL}
          >
            Explore the platform <span aria-hidden="true"><ArrowRightIcon /></span>
          </a>
        </header>
        <div
          className="commerce-orbit__stage-area journey-board"
          aria-label="The six stages of the UniSouk seller journey"
        >
          <div className="journey-board__shell">
            <header className="journey-board__header">
              <img
                src="/unisouk-logo.svg"
                width="138"
                height="22"
                alt="UniSouk"
              />
              <span>
                <i /> Commerce flow live
              </span>
            </header>
            <div className="journey-board__body">
              <ol className="journey-board__rail">
                {stages.map((stage, index) => (
                  <li
                    style={{
                      "--journey-delay":
                        index === 0 ? "0s" : `${(index - stages.length) * 3}s`,
                    } as CSSProperties}
                    key={stage.id}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage.title}</strong>
                  </li>
                ))}
              </ol>
              <div className="journey-board__panels" aria-live="off">
                {stages.map((stage, index) => (
                  <article
                    className={`journey-board__panel journey-board__panel--${stage.id}`}
                    style={{
                      "--journey-delay":
                        index === 0 ? "0s" : `${(index - stages.length) * 3}s`,
                    } as CSSProperties}
                    key={stage.id}
                  >
                    <div className="journey-board__panel-topline">
                      <span>Stage {String(index + 1).padStart(2, "0")}</span>
                      <i />
                    </div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                    <div className="journey-board__artifact" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <b />
                      <b />
                      <b />
                    </div>
                    <footer>
                      <span>Synced by UniSouk</span>
                      <em>Ready</em>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommerceEcosystem() {
  const speeds = [52, 59, 55];
  const phases = [-11, -31, -39];
  const rows = Array.from({ length: 3 }, (_, row) => ({
    speed: speeds[row],
    phase: phases[row],
    reverse: row === 1,
    items: Array.from({ length: 16 }, (_, column) => {
      const index = row * 16 + column;
      const brand =
        ecosystemBrands[(row * 3 + column * 5) % ecosystemBrands.length];
      const layerValue = (index * 13 + row * 5 + column * 3) % 7;
      const layer =
        layerValue < 2
          ? "background"
          : layerValue < 4
            ? "foreground"
            : "middle";
      return { ...brand, index, layer };
    }),
  }));

  return (
    <section
      className="sliding-integrations"
      id="ecosystem-field"
      aria-hidden="true"
    >
      <div className="sliding-integrations__field">
        {rows.map((row, rowIndex) => (
          <div
            className={`sliding-integrations__viewport ${row.reverse ? "is-reverse" : ""}`}
            style={{
              "--row-duration": `${row.speed}s`,
              "--row-phase": `${row.phase}s`,
            } as CSSProperties}
            key={rowIndex}
          >
            <div className="sliding-integrations__track">
              {[0, 1].map((copy) => (
                <div className="sliding-integrations__group" key={copy}>
                  {row.items.map((node) => (
                    <div
                      className={`sliding-integrations__node is-${node.layer}`}
                      key={`${copy}-${node.index}`}
                    >
                      <div
                        className={`sliding-integrations__tile brand-${node.id} ${
                          node.lightMark ? "needs-light-mark" : ""
                        }`}
                      >
                        <img
                          src={node.logo}
                          alt=""
                          loading={
                            copy === 0 && node.index < ecosystemBrands.length
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sliding-integrations__center">
        <img
          src="/unisouk-mark-on-dark.svg"
          width="52"
          height="26"
          alt=""
        />
      </div>
    </section>
  );
}

export function VideoTestimonialPlaceholder() {
  return (
    <section
      className="video-testimonial"
      id="customer-story"
      aria-labelledby="customer-story-title"
    >
      <div className="container video-testimonial__inner">
        <div className="video-testimonial__copy">
          <h2 id="customer-story-title">
            Commerce, from the seller&apos;s side.
          </h2>
          <p>
            A customer story will live here, shared in their own words with the
            work and results behind it.
          </p>
        </div>
        <figure
          className="video-testimonial__media"
          aria-label="Video testimonial placeholder"
        >
          <div className="video-testimonial__stage">
            <div className="video-testimonial__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M9 7.5v9l7-4.5-7-4.5Z" />
              </svg>
            </div>
            <div className="video-testimonial__meta">
              <span>Customer story</span>
              <span>Video coming soon</span>
            </div>
          </div>
          <figcaption>
            Reserved for a customer video, identity and verified outcome.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
