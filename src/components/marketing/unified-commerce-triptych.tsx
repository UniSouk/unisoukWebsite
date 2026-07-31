import {
  OperationIcon,
  type OperationName,
} from "@/components/marketing/operation-icon";

const channels = [
  { name: "Amazon", src: "/platform-logos/amazon.svg" },
  { name: "Meesho", src: "/platform-logos/meesho.png" },
  { name: "Shopify", src: "/platform-logos/shopify.svg" },
  { name: "Wix", src: "/platform-logos/wix.svg" },
  { name: "WooCommerce", src: "/platform-logos/woocommerce.svg" },
  { name: "ONDC", src: "/platform-logos/ondc.svg" },
];

const stages: Array<{
  id: string;
  icon: OperationName | null;
  title: string;
  lineOne: string;
  lineTwo: string;
}> = [
  {
    id: "products",
    icon: "listings",
    title: "Products",
    lineOne: "Create once.",
    lineTwo: "Publish everywhere.",
  },
  {
    id: "orders",
    icon: "orders",
    title: "Orders",
    lineOne: "All orders.",
    lineTwo: "One inbox.",
  },
  {
    id: "fulfilment",
    icon: "fulfilment",
    title: "Fulfilment",
    lineOne: "Pick. Pack. Ship.",
    lineTwo: "On time. Every time.",
  },
  {
    id: "analytics",
    icon: "analytics",
    title: "Analytics",
    lineOne: "Real time insights.",
    lineTwo: "Smarter decisions.",
  },
  {
    id: "customer",
    icon: null,
    title: "Customer",
    lineOne: "Happy customers.",
    lineTwo: "Stronger business.",
  },
];

const benefits: Array<{
  icon: OperationName;
  title: string;
  text: string;
}> = [
  {
    icon: "inventory",
    title: "Everything in sync",
    text: "Products, inventory and orders stay updated across every connected channel.",
  },
  {
    icon: "listings",
    title: "Less manual work",
    text: "Automate repetitive tasks and reduce errors across daily operations.",
  },
  {
    icon: "orders",
    title: "Save time",
    text: "Run the business from one workflow instead of switching tools.",
  },
  {
    icon: "analytics",
    title: "Full visibility",
    text: "See the complete business picture in real time, from anywhere.",
  },
  {
    icon: "fulfilment",
    title: "Grow faster",
    text: "Use connected data to make better decisions and scale with confidence.",
  },
];

export function UnifiedCommerceTriptych() {
  return (

<section className="commerce-demo" aria-labelledby="commerce-demo-title">
  <header className="commerce-demo__intro">
    <h2 id="commerce-demo-title">One platform. Every step. In perfect sync<span>.</span></h2>
    <p>From product to customer, UniSouk keeps your entire commerce journey moving together.</p>
  </header>

  <div
    className="commerce-demo__viewport"
    tabIndex={0}
    aria-label="Connected commerce workflow. Swipe horizontally on smaller screens to explore."
  >
    <div className="commerce-demo__canvas">
      <div className="commerce-demo__ecosystem">
        <aside className="channel-rail" aria-label="Connected sales channels">
          <h3>Sales channels</h3>
          <ul>
            {channels.map((channel) => (
              <li key={channel.name}>
                <img src={channel.src} alt={channel.name} loading="lazy" />
                <span><i aria-hidden="true"></i> Live</span>
              </li>
            ))}
          </ul>
        </aside>

        <svg className="channel-links" viewBox="0 0 112 410" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 38C62 38 44 184 112 184"></path>
          <path d="M0 104C62 104 42 193 112 193"></path>
          <path d="M0 170C58 170 48 202 112 202"></path>
          <path d="M0 236C58 236 48 211 112 211"></path>
          <path d="M0 302C62 302 42 220 112 220"></path>
          <path d="M0 368C62 368 44 229 112 229"></path>
          {[38, 104, 170, 236, 302, 368].map((y) => <circle cx="2" cy={y} r="3" key={`start-${y}`} />)}
          {[184, 193, 202, 211, 220, 229].map((y) => <circle cx="109" cy={y} r="2.5" key={`end-${y}`} />)}
        </svg>

        <div className="journey-field">
          <svg className="journey-road" viewBox="0 0 1000 280" preserveAspectRatio="none" aria-hidden="true">
            <path className="journey-road__edge" d="M20 169C110 98 192 235 292 169S474 103 573 169s178 67 276 0 109-61 131-12"></path>
            <path className="journey-road__surface" d="M20 169C110 98 192 235 292 169S474 103 573 169s178 67 276 0 109-61 131-12"></path>
            <path className="journey-road__markings" d="M20 169C110 98 192 235 292 169S474 103 573 169s178 67 276 0 109-61 131-12"></path>
            <path className="journey-road__pulse" d="M20 169C110 98 192 235 292 169S474 103 573 169s178 67 276 0 109-61 131-12"></path>
          </svg>

          <ol className="journey-stages">
            {stages.map((stage) => (
              <li
                className={`journey-stage journey-stage--${stage.id}`}
                key={stage.id}
              >
                <div className="journey-stage__heading">
                  <span className="journey-stage__icon">
                    {stage.icon ? (
                      <OperationIcon name={stage.icon} />
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 20c.4-4.3 2.7-6.5 7-6.5s6.6 2.2 7 6.5"></path>
                      </svg>
                    )}
                  </span>
                  <h3>{stage.title}</h3>
                  <p>{stage.lineOne}<br />{stage.lineTwo}</p>
                  <span className="journey-stage__stem" aria-hidden="true"><i></i></span>
                </div>

                {stage.id === "products" && (
                  <div className="journey-station journey-station--product">
                    <div className="listing-symbol listing-symbol--sheet" aria-hidden="true">
                      <svg viewBox="0 0 48 48"><path d="M13 7h16l7 7v27H13z"></path><path d="M29 7v8h7M19 21h11M19 27h11M19 33h7"></path><circle cx="35" cy="35" r="6"></circle><path className="listing-symbol__accent" d="m32.5 35 1.7 1.8 3.3-3.6"></path></svg>
                    </div>
                    <div><strong>Channel ready</strong><span>Product content</span></div>
                    <i className="parcel" aria-hidden="true"></i>
                  </div>
                )}

                {stage.id === "orders" && (
                  <div className="journey-station journey-station--order">
                    <span>New order</span>
                    <strong>#2258</strong>
                    <b>Confirmed</b>
                    <small><i aria-hidden="true"></i> Online</small>
                  </div>
                )}

                {stage.id === "fulfilment" && (
                  <div className="journey-station journey-station--shipping">
                    <span>In transit</span>
                    <strong>Order #2258</strong>
                    <div className="shipping-progress" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
                    <small>Out for delivery</small>
                  </div>
                )}

                {stage.id === "analytics" && (
                  <div className="journey-station journey-station--analytics" aria-label="Rising sales and performance analytics">
                    <div className="analytics-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
                    <span className="analytics-pie" aria-hidden="true"></span>
                    <strong>+18.4%</strong>
                  </div>
                )}

                {stage.id === "customer" && (
                  <div className="journey-station journey-station--customer">
                    <span className="shopping-bag" aria-hidden="true"><i>U</i></span>
                    <strong>Delivered</strong>
                    <small>Customer updated</small>
                  </div>
                )}
              </li>
            ))}
          </ol>

          <span className="route-vehicle route-vehicle--one" aria-hidden="true"><OperationIcon name="fulfilment" /></span>
          <span className="route-vehicle route-vehicle--two" aria-hidden="true"><OperationIcon name="fulfilment" /></span>
        </div>
      </div>

      <ul className="commerce-benefits" aria-label="Benefits of unified commerce">
        {benefits.map((benefit) => (
          <li key={benefit.title}>
            <span><OperationIcon name={benefit.icon} /></span>
            <div><strong>{benefit.title}</strong><p>{benefit.text}</p></div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
  );
}
