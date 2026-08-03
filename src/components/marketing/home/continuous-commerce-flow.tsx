import { CommerceGrowthLayers } from "./continuous-commerce-growth-layers";
import { CommerceOperationsLayers } from "./continuous-commerce-layers";

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
          <CommerceOperationsLayers />
          <CommerceGrowthLayers />
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

