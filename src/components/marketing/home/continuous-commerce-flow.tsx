import Image from "next/image";

import { IllustrativeInterfaceLabel } from "@/components/marketing/illustrative-interface-label";

import { CommerceGrowthLayers } from "./continuous-commerce-growth-layers";
import { CommerceOperationsLayers } from "./continuous-commerce-layers";

export function ContinuousCommerceFlow() {
  return (
    <div className="continuous-flow">
      <section
        className="flow-dashboard"
        role="img"
        aria-label="UniSouk continuously creates and optimizes a product, publishes it to connected marketplaces, manages orders, inventory and payments, and turns activity into growth insights"
      >
        <Image
          className="flow-dashboard__base"
          src="/unisouk-dashboard-command-center-1280.webp"
          alt=""
          width={1280}
          height={800}
          sizes="(max-width: 48rem) 100vw, 50vw"
          priority
          fetchPriority="high"
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
      <IllustrativeInterfaceLabel className="absolute right-[6%] bottom-[6%] z-20 max-w-[24ch] rounded-[0.25rem] bg-white/90 px-2 py-1 text-[0.5rem] shadow-[0_2px_6px_rgb(0_0_0_/_0.12)]" />
    </div>
  );
}
