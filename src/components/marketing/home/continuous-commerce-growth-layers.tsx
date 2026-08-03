import { marketplaces } from "./continuous-commerce-layers";

export function CommerceGrowthLayers() {
  return (<>
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
  </>);
}
