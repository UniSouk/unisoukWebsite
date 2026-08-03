import { ContinuousCommerceFlow } from "@/components/marketing/home-reference-sections";
import { ArrowRightIcon } from "@/components/ui/icon";
import { PLATFORM_LOGOS } from "@/constants/platforms";
import { SIGN_UP_URL } from "@/constants/site";

const accountManagementUrl = "/solutions/account-management/";
const integrationLogos = [
  { name: "Amazon", src: PLATFORM_LOGOS.amazon, modifier: "amazon" },
  { name: "ONDC", src: PLATFORM_LOGOS.ondc, modifier: "ondc" },
  { name: "Meesho", src: PLATFORM_LOGOS.meesho, modifier: "meesho" },
  { name: "Shopify", src: PLATFORM_LOGOS.shopify, modifier: "shopify" },
  { name: "Wix", src: PLATFORM_LOGOS.wix, modifier: "wix" },
  {
    name: "WooCommerce",
    src: PLATFORM_LOGOS.woocommerce,
    modifier: "woocommerce",
  },
];


export function HomeHero() {
  return (
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title" id="hero-title">
                <span className="hero-title__line">
                  List<span className="hero-title__dot">.</span> Sell
                  <span className="hero-title__dot">.</span> Grow
                  <span className="hero-title__dot">.</span>
                </span>
              </h1>
              <p className="hero-lede">
                Improve every listing. Sell across every channel. Know your
                next move.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={SIGN_UP_URL}>
                  Start selling
                  <ArrowRightIcon />
                </a>
                <a
                  className="button button--secondary"
                  href={accountManagementUrl}
                >
                  Explore account management
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <ContinuousCommerceFlow />
            </div>
          </div>
          <div
            className="integration-strip"
            aria-label="Supported commerce channels"
          >
            <div className="container integration-logo-rail">
              <div className="integration-logo-track">
                {[0, 1].map((copy) => (
                  <div
                    className="integration-logo-group"
                    role={copy === 0 ? "list" : undefined}
                    aria-hidden={copy === 1 ? "true" : undefined}
                    key={copy}
                  >
                    {integrationLogos.map((logo) => (
                      <div
                        className={`integration-logo integration-logo--${logo.modifier}`}
                        role={copy === 0 ? "listitem" : undefined}
                        key={`${copy}-${logo.name}`}
                      >
                        <img
                          src={logo.src}
                          alt={copy === 0 ? logo.name : ""}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}
