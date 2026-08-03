import Image from "next/image";
import type { CSSProperties } from "react";

import { IntegrationDirectory } from "@/components/marketing/integration-directory";
import { ArrowRightIcon } from "@/components/ui/icon";
import { INTEGRATIONS } from "@/constants/integrations";
import { PLATFORM_LOGOS } from "@/constants/platforms";

import styles from "./integration-orbit.module.css";
import nodeContentStyles from "./integration-orbit-node-content.module.css";
import nodeStyles from "./integration-orbit-nodes.module.css";

const orbitLogos = [
  { name: "Amazon", logo: "/ecosystem-logos/amazon-app-icon-clean.png", angle: "0deg" },
  { name: "Shopify", logo: "/ecosystem-logos/shopify-mark.svg", angle: "72deg" },
  { name: "WooCommerce", logo: "/ecosystem-logos/woocommerce.svg", angle: "144deg" },
  { name: "Meesho", logo: "/ecosystem-logos/meesho.png", angle: "216deg" },
  { name: "Shiprocket", logo: "/ecosystem-logos/shiprocket.png", angle: "288deg" },
];

const secondaryOrbitLogos = [
  { name: "ONDC", logo: "/ecosystem-logos/ondc.svg", angle: "45deg" },
  { name: "Wix", logo: PLATFORM_LOGOS.wix, angle: "135deg" },
  { name: "Cashfree Payments", logo: "/platform-logos/cashfree-logo.png", angle: "225deg" },
  { name: "Razorpay", logo: "/ecosystem-logos/razorpay.png", angle: "315deg" },
];

export function IntegrationsReference() {
  return (
    <>
      <section className="integrations-hero" id="top" aria-labelledby="integrations-title">
        <div className="container integrations-hero__inner">
          <div className="integrations-hero__copy">
            <h1 id="integrations-title">Everything connected. <span>One place</span></h1>
            <p>Explore the marketplaces, storefronts, payment gateways and fulfilment partners that fit into the UniSouk ecosystem.</p>
            <a className="text-link text-link--arrow text-link--black" href="#directory">Browse all integrations</a>
          </div>
          <figure className={`${styles.orbit} relative isolate m-0 aspect-square w-full max-w-[42rem] overflow-hidden [contain:layout_paint] [container-type:inline-size]`} aria-label="Marketplaces and commerce tools continuously connecting through UniSouk">
            <div className={styles.rings} aria-hidden="true"><i /><i /><i /></div>
            <div className={styles.signals} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className={styles.core}><span className={styles.coreMark}><Image src="/unisouk-mark.svg" alt="UniSouk" width={52} height={26} /></span></div>
            <div className={nodeStyles.satellites} aria-hidden="true">
              {orbitLogos.map((item) => (
                <span className={`${nodeStyles.node} ${nodeContentStyles.node}`} style={{ "--node-angle": item.angle } as CSSProperties} title={item.name} key={item.name}>
                  <i><Image src={item.logo} alt="" width={48} height={48} /></i>
                </span>
              ))}
            </div>
            <div className={`${nodeStyles.satellites} ${nodeStyles.satellitesSecondary}`} aria-hidden="true">
              {secondaryOrbitLogos.map((item) => (
                <span className={`${nodeStyles.node} ${nodeStyles.nodeSecondary} ${nodeContentStyles.node} ${nodeContentStyles.nodeSecondary}`} style={{ "--node-angle": item.angle } as CSSProperties} title={item.name} key={item.name}>
                  <i>{item.logo ? <Image src={item.logo} alt="" width={48} height={48} /> : <b>{item.logo}</b>}</i>
                </span>
              ))}
            </div>
            <figcaption className="sr-only">{INTEGRATIONS.length} integrations connected through one UniSouk operating view.</figcaption>
          </figure>
        </div>
      </section>

      <section className="integration-directory" id="directory" aria-labelledby="directory-title">
        <div className="container integration-directory__inner">
          <header className="directory-heading"><h2 id="directory-title">Find the connection your business needs.</h2><p>Search by platform name, category or the commerce work you want to bring together.</p></header>
          <IntegrationDirectory />
        </div>
      </section>

      <section className="request-integration !bg-[var(--ink)] !text-[var(--white)]" id="request-integration" aria-labelledby="request-title">
        <div className="container request-integration__inner">
          <div><h2 id="request-title">Can’t find the integration you need?</h2><p className="!text-white/65">Tell us what you sell through and which workflow you want UniSouk to bring together.</p></div>
          <a className="button button--orange group" href="/contact/#contact-form">Request an integration <ArrowRightIcon className="!text-black group-hover:!text-[var(--ink)]" /></a>
        </div>
      </section>
    </>
  );
}
