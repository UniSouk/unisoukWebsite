import type { CSSProperties } from "react";

import { PLATFORM_LOGOS } from "@/constants/platforms";

export const marketplaces = [
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


export function CommerceOperationsLayers() {
  return (<>
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
  </>);
}
