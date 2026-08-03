import { PLATFORM_LOGOS } from "@/constants/platforms";
import { CONSULTATION_BOOKING_URL } from "@/constants/site";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icon";

const buildSteps = [
  ["Discover", "Clarify the audience, catalogue, operations and commercial goals before choosing a platform."],
  ["Design", "Shape the storefront hierarchy, content and buying journey around the way customers decide."],
  ["Build", "Develop the responsive experience, configure commerce workflows and connect essential tools."],
  ["Launch", "Test the complete journey, prepare your team and keep improving after the first order."],
];

const clientWork = [
  {
    name: "Tessoro",
    category: "Fine jewellery ecommerce",
    href: "https://tessoro.in/",
    image: "https://tessoro.in/cdn/shop/files/tessoro-sample-2.png?v=1781075882&width=1600",
    alt: "Tessoro fine jewellery ecommerce website homepage",
  },
  {
    name: "Mamta Creation",
    category: "Fashion ecommerce",
    href: "https://mamtacreation.com/",
    image: "https://www.mamtacreation.com/cdn/shop/files/WhatsApp_Image_2026-06-05_at_4.38.49_PM.jpg?v=1780657889&width=1600",
    alt: "Mamta Creation fashion ecommerce website homepage",
  },
  {
    name: "Vedic Vita",
    category: "Food and wellness ecommerce",
    href: "https://vedicvita.com/",
    image: "https://vedicvita.com/wp-content/uploads/2026/06/2.png",
    alt: "Vedic Vita food ecommerce website homepage",
  },
];

export function BuildWebsiteReference() {
  return (
    <>
      <section className="website-hero" id="top" aria-labelledby="website-title">
        <div className="container website-hero__intro">
          <div>
            <h1 id="website-title">Build a store worth coming back to.</h1>
          </div>
          <div className="website-hero__copy">
            <p>
              Launch a D2C storefront or custom commerce website that reflects
              your brand and stays connected to the work behind every sale.
            </p>
            <div className="website-hero__actions">
              <a className="button button--primary" href={CONSULTATION_BOOKING_URL}>
                Book a free consultation
                <ArrowRightIcon />
              </a>
              <a className="text-link text-link--arrow text-link--black" href="#build-paths">
                Explore build options
              </a>
            </div>
          </div>
        </div>

        <div className="container storefront-stage" aria-label="Responsive storefront design preview">
          <div className="storefront-browser">
            <header>
              <span className="browser-controls" aria-hidden="true"><i /><i /><i /></span>
              <span className="browser-address">yourbrand.com</span>
              <span className="browser-status">Live preview</span>
            </header>
            <div className="storefront-canvas">
              <nav aria-label="Example storefront navigation">
                <strong>FORMA</strong>
                <span>New arrivals</span><span>Objects</span><span>Journal</span>
                <i>Bag · 0</i>
              </nav>
              <div className="storefront-canvas__hero">
                <div className="storefront-statement">
                  <span>Considered essentials</span>
                  <h2 className="section-heading--compact">Objects for everyday rituals.</h2>
                  <a href="#build-paths">Explore collection <b aria-hidden="true"><ArrowRightIcon /></b></a>
                </div>
                <div className="product-composition" aria-hidden="true">
                  <span className="product-form product-form--tall" />
                  <span className="product-form product-form--round" />
                  <span className="product-form product-form--low" />
                  <i>01</i>
                </div>
              </div>
              <div className="storefront-canvas__rail">
                <span>Designed to last</span><span>Made in small runs</span><span>Delivered across India</span>
              </div>
            </div>
          </div>
          <div className="storefront-mobile" aria-hidden="true">
            <header><strong>FORMA</strong><span>Menu</span></header>
            <div className="mobile-product"><i /><i /><i /></div>
            <div className="mobile-copy">
              <small>New collection</small>
              <strong>Objects for everyday rituals.</strong>
              <span>Explore →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="client-work" id="client-work" aria-labelledby="client-work-title">
        <div className="container client-work__inner">
          <header className="client-work__intro">
            <h2 id="client-work-title">Glimpse of our work.</h2>
            <p>Commerce websites shaped for real brands, real catalogues and real customer journeys.</p>
          </header>
          <div className="client-work__grid">
            {clientWork.map((project) => (
              <a className="client-project" href={project.href} target="_blank" rel="noopener noreferrer" key={project.name}>
                <figure>
                  <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                  <figcaption className="client-project__details">
                    <div><h3>{project.name}</h3><p>{project.category}</p></div>
                    <ArrowUpRightIcon />
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="build-paths" id="build-paths" aria-labelledby="paths-title">
        <div className="container build-paths__inner">
          <div className="build-paths__intro">
            <h2 id="paths-title">The right build starts with the right level of freedom.</h2>
            <p>Use an established commerce platform when speed and simplicity matter. Choose a custom build when your business model needs something more specific.</p>
          </div>
          <div className="path-comparison">
            <article>
              <header><span>Platform storefront</span><h3>Launch confidently on a proven foundation.</h3></header>
              <p>We design and build D2C storefronts on Shopify, Wix and WooCommerce, balancing platform strengths with a brand experience that feels distinctly yours.</p>
              <ul className="platform-list" aria-label="Supported storefront platforms">
                <li className="platform-list__mark platform-list__mark--shopify" aria-label="Shopify"><img src="/ecosystem-logos/shopify-mark.svg" alt="" /></li>
                <li className="platform-list__mark platform-list__mark--wix" aria-label="Wix"><img src={PLATFORM_LOGOS.wix} alt="" /></li>
                <li className="platform-list__mark platform-list__mark--woocommerce" aria-label="WooCommerce"><img src={PLATFORM_LOGOS.woocommerce} alt="" /></li>
              </ul>
            </article>
            <article>
              <header><span>Custom commerce website</span><h3>Build around the business, not a template.</h3></header>
              <p>For specialized catalogues, workflows or customer journeys, we shape a custom commerce experience without forcing the business into a standard storefront pattern.</p>
              <ul className="custom-list">
                <li>Distinct buying journeys</li><li>Business specific workflows</li><li>Flexible operational connections</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="build-process" aria-labelledby="process-title">
        <div className="container build-process__inner">
          <div className="build-process__intro">
            <h2 id="process-title">From first conversation to first order.</h2>
            <p>A focused process keeps decisions clear and prevents the build from becoming an endless collection of preferences.</p>
          </div>
          <ol>
            {buildSteps.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="website-cta" aria-labelledby="website-cta-title">
        <div className="container website-cta__inner">
          <div>
            <h2 id="website-cta-title">Ready to give your brand a better place to sell<span>?</span></h2>
            <p>Tell us what you sell, how you operate and what the current website is holding back.</p>
          </div>
          <a className="button button--primary" href={CONSULTATION_BOOKING_URL}>Book a free consultation <ArrowRightIcon /></a>
        </div>
      </section>
    </>
  );
}
