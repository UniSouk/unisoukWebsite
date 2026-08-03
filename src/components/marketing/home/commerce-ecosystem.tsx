import type { CSSProperties } from "react";
import Image from "next/image";

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
                        <Image
                          src={node.logo}
                          alt=""
                          width={96}
                          height={96}
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
        <Image
          src="/unisouk-mark-on-dark.svg"
          width={52}
          height={26}
          alt=""
        />
      </div>
    </section>
  );
}
