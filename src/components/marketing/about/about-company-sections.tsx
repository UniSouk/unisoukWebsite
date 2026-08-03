import { siteContainerClass } from "@/components/layout/site-shell-styles";

const headingClass =
  "m-0 !text-[length:var(--text-section-heading)] !leading-[var(--leading-heading)] !tracking-[var(--tracking-heading)] [text-wrap:balance]";
const mutedLeadClass =
  "m-0 text-[length:var(--text-lead)] leading-[1.65] text-[var(--text-muted)] [text-wrap:pretty]";
const subtleRuleClass =
  "border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)]";

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-[var(--white)]" id="top" aria-labelledby="about-title">
      <div
        className={`${siteContainerClass} grid min-h-0 animate-[about-copy-in_0.7s_var(--ease-out-expo)_both] grid-cols-[minmax(0,1fr)] content-center place-items-center gap-[clamp(1.5rem,3vw,2.5rem)] py-[var(--page-hero-space)] text-center motion-reduce:animate-none max-[47.99rem]:py-11`}
      >
        <p className="m-0 font-semibold text-[var(--orange-ink)]">About Us</p>
        <h1
          className="!m-0 w-full !max-w-full text-center !text-[length:var(--text-hero-heading)] !leading-[1.15] !font-medium !tracking-[-0.038em] max-[47.99rem]:!text-[44px] max-[47.99rem]:!leading-[1.18]"
          id="about-title"
        >
          <span className="block whitespace-normal text-[var(--ink)]">
            Empowering Indian Ecommerce
          </span>
          <span className="block whitespace-normal text-[var(--orange-ink)]">
            with a Unified Seller Platform
          </span>
        </h1>
        <a
          className="inline-flex min-h-11 items-center font-semibold underline decoration-[var(--orange)] decoration-2 underline-offset-[0.2em] transition-colors duration-150 hover:decoration-[3px] motion-reduce:transition-none"
          href="#about-unisouk"
        >
          Discover UniSouk
        </a>
      </div>
    </section>
  );
}

const visionItems = [
  {
    label: "Our Vision",
    title: "Removing the complexity from modern commerce.",
    copy: "We envision a digital economy where every Indian brand, a startup, or a market leader, can sell effortlessly and grow exponentially. Our platform is designed to break down barriers and open up new opportunities for entrepreneurs across India.",
  },
  {
    label: "Our Mission",
    title: "Enabling smarter commerce through automation.",
    copy: "We aim to make online commerce simpler and more accessible by replacing manual processes with intelligent automation. By connecting every part of the commerce journey, we enable businesses to save time, operate more efficiently, and focus on sustainable growth.",
  },
];

export function VisionMission() {
  return (
    <section className="bg-[var(--white)]" aria-label="Our vision and mission">
      <div className={`${siteContainerClass} grid grid-cols-2 pb-[clamp(5rem,10vw,8rem)] max-[55rem]:grid-cols-1`}>
        {visionItems.map((item, index) => (
          <article
            className={`grid min-h-[34rem] content-start border-y border-[var(--ink)] p-[clamp(2rem,5vw,4.5rem)] max-[55rem]:min-h-0 max-[55rem]:px-0 max-[55rem]:py-12 ${
              index > 0 ? "border-l max-[55rem]:border-t-0 max-[55rem]:border-l-0" : ""
            }`}
            key={item.label}
          >
            <span className="font-semibold text-[var(--orange-ink)]">{item.label}</span>
            <h2 className={`${headingClass} mt-8 min-h-[3.92em] max-w-[12ch] max-[55rem]:min-h-0`}>
              {item.title}
            </h2>
            <p className={`${mutedLeadClass} max-w-[48ch] pt-12 max-[55rem]:mt-16`}>
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section className="bg-[var(--mist)] text-[var(--ink)]" aria-labelledby="story-title">
      <div
        className={`${siteContainerClass} grid grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.3fr)] items-start gap-[clamp(4rem,10vw,10rem)] py-[var(--page-section-space)] max-[67.99rem]:grid-cols-1 max-[47.99rem]:gap-12`}
      >
        <h2
          className={`${headingClass} sticky top-[calc(var(--header-height)+2rem)] max-w-[6ch] max-[67.99rem]:static`}
          id="story-title"
        >
          Our Story
        </h2>
        <div className="border-t border-[var(--ink)]">
          <p className={`${mutedLeadClass} ${subtleRuleClass} max-w-[64ch] border-b py-8`}>
            In today&apos;s evolving digital market landscape, sellers often struggle with fragmented tools, complex integrations, and the overwhelming challenge of scaling online. Recognizing this gap, our founders came together with a shared purpose:
          </p>
          <strong className="block max-w-[22ch] py-[clamp(3rem,7vw,5.5rem)] font-[family-name:var(--font-heading)] text-[clamp(2.35rem,4.4vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.03em] text-[var(--orange-ink)] [text-wrap:balance]">
            To create a unified platform that simplifies every step of the ecommerce journey.
          </strong>
          <p className={`${mutedLeadClass} ${subtleRuleClass} max-w-[64ch] border-b py-8`}>
            Today, UniSouk, one of the best ecommerce solution providers, stands as a trusted growth partner for brands across India, offering seamless listings, live inventory management, payment integrations, logistics support, and deep analytics through one intuitive dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutIntro() {
  return (
    <section className="bg-[var(--mist)]" id="about-unisouk" aria-labelledby="about-intro-title">
      <div
        className={`${siteContainerClass} grid grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] items-start gap-[clamp(4rem,10vw,10rem)] py-[var(--page-section-space)] max-[67.99rem]:grid-cols-1 max-[47.99rem]:gap-12`}
      >
        <h2
          className={`${headingClass} sticky top-[calc(var(--header-height)+2rem)] max-w-[12ch] max-[67.99rem]:static`}
          id="about-intro-title"
        >
          The future of commerce is online, and it should be accessible to everyone.
        </h2>
        <div className="border-t border-[var(--ink)]">
          {[
            "At UniSouk, a leading ecommerce service provider in India, we believe that the future of commerce is online, and it should be accessible to everyone at their fingertips. Founded with a vision to simplify online selling, UniSouk is India’s first truly unified ecommerce SaaS platform developed for D2C brands and marketplace sellers.",
            "Whether you're a new entrepreneur or a market leader, we offer the complete solutions needed to scale effortlessly across digital platforms like Amazon, ONDC, Flipkart, Meesho, and many more.",
            "UniSouk is proudly built by a seasoned team that understands the complexities of modern ecommerce and is passionate about eliminating them for Indian businesses of all kinds.",
          ].map((copy) => (
            <p className={`${mutedLeadClass} ${subtleRuleClass} max-w-[62ch] border-b py-[1.7rem]`} key={copy}>
              {copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
