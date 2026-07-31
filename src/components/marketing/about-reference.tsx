import Image from "next/image";

export const aboutFaqs = [
  {
    question: "What services does UniSouk provide to sellers?",
    answer: "UniSouk is a unified ecommerce partner for Indian D2C brands and marketplace sellers. With a single dashboard, you can list products across marketplaces and your own store, manage inventory in real time, integrate payments, handle logistics, and access analytics, eliminating the hassle of using multiple tools.",
  },
  {
    question: "How can UniSouk help my business scale?",
    answer: "UniSouk simplifies online selling by syncing your inventory across Amazon, Flipkart, ONDC, Meesho and more, automating orders and shipping, and providing actionable analytics. This helps you save time, avoid overselling, and focus on scaling smoothly.",
  },
  {
    question: "Does UniSouk support sales on multiple marketplaces?",
    answer: "Yes! UniSouk lets you sell across leading platforms like Amazon, ONDC, Shopify, WooCommerce, and more. Manage everything from one dashboard, with no need to switch between apps or worry about missing an order.",
  },
  {
    question: "How secure is my data on UniSouk’s platform?",
    answer: "Your data security is our top priority. UniSouk uses trusted encryption standards and secure servers to protect your information. We never share your data with third parties, ensuring your business details remain safe and confidential.",
  },
  {
    question: "Is UniSouk suitable for new entrepreneurs?",
    answer: "Absolutely! If you're just starting your online journey or already running a brand, UniSouk is designed to meet you where you are. New sellers can set up their store in minutes, with no coding required. Experienced sellers can use our advanced features to streamline operations and maximize growth.",
  },
];

export function AboutReference() {
  return (
    <>
      <svg className="leadership-shape-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="leadership-slant-rounded" clipPathUnits="objectBoundingBox">
            <path d="M .174 0 H .986 Q 1 0 .998 .014 L .842 .986 Q .84 1 .826 1 H .014 Q 0 1 .002 .986 L .158 .014 Q .16 0 .174 0 Z" />
          </clipPath>
          <clipPath id="leadership-slant-rounded-mobile" clipPathUnits="objectBoundingBox">
            <path d="M .144 0 H .986 Q 1 0 .998 .014 L .872 .986 Q .87 1 .856 1 H .014 Q 0 1 .002 .986 L .128 .014 Q .13 0 .144 0 Z" />
          </clipPath>
          <clipPath id="team-slant-rounded-wide" clipPathUnits="objectBoundingBox">
            <path d="M .109 0 H .986 Q 1 0 .998 .014 L .907 .986 Q .905 1 .891 1 H .014 Q 0 1 .002 .986 L .093 .014 Q .095 0 .109 0 Z" />
          </clipPath>
          <clipPath id="team-slant-rounded-portrait" clipPathUnits="objectBoundingBox">
            <path d="M .204 0 H .986 Q 1 0 .998 .014 L .812 .986 Q .81 1 .796 1 H .014 Q 0 1 .002 .986 L .188 .014 Q .19 0 .204 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="about-hero" id="top" aria-labelledby="about-title">
        <div className="container about-hero__inner">
          <p className="about-hero__label">About Us</p>
          <h1 id="about-title">
            <span className="about-hero__title-line about-hero__title-line--primary">Empowering Indian Ecommerce</span>
            <span className="about-hero__title-line">with a Unified Seller Platform</span>
          </h1>
          <a className="text-link" href="#about-unisouk">Discover UniSouk</a>
        </div>
      </section>

      <section className="vision-mission" aria-label="Our vision and mission">
        <div className="container vision-mission__inner">
          <article>
            <span>Our Vision</span>
            <h2>Removing the complexity from modern commerce.</h2>
            <p>We envision a digital economy where every Indian brand, a startup, or a market leader, can sell effortlessly and grow exponentially. Our platform is designed to break down barriers and open up new opportunities for entrepreneurs across India.</p>
          </article>
          <article>
            <span>Our Mission</span>
            <h2>Enabling smarter commerce through automation.</h2>
            <p>We aim to make online commerce simpler and more accessible by replacing manual processes with intelligent automation. By connecting every part of the commerce journey, we enable businesses to save time, operate more efficiently, and focus on sustainable growth.</p>
          </article>
        </div>
      </section>

      <section className="our-story" aria-labelledby="story-title">
        <div className="container our-story__inner">
          <h2 id="story-title">Our Story</h2>
          <div className="our-story__copy">
            <p>In today&apos;s evolving digital market landscape, sellers often struggle with fragmented tools, complex integrations, and the overwhelming challenge of scaling online. Recognizing this gap, our founders came together with a shared purpose:</p>
            <strong>To create a unified platform that simplifies every step of the ecommerce journey.</strong>
            <p>Today, UniSouk, one of the best ecommerce solution providers, stands as a trusted growth partner for brands across India, offering seamless listings, live inventory management, payment integrations, logistics support, and deep analytics through one intuitive dashboard.</p>
          </div>
        </div>
      </section>

      <section className="leadership" aria-labelledby="leadership-title">
        <div className="container leadership__inner">
          <header className="leadership__header">
            <h2 id="leadership-title">The people building UniSouk.</h2>
            <p>Company direction and technology leadership stay close to the daily realities of building for Indian commerce.</p>
          </header>
          <div className="leadership__portraits">
            <figure className="leadership__portrait leadership__portrait--founder">
              <div className="leadership__image">
                <Image src="/images/nihil-parmar-founder-ceo.jpeg" alt="Nihil Parmar, Founder and CEO of UniSouk" width={1280} height={1280} />
              </div>
              <figcaption><div><h3>Nihil Parmar</h3><p>Founder, CEO</p></div></figcaption>
            </figure>
            <figure className="leadership__portrait leadership__portrait--cofounder">
              <div className="leadership__image">
                <Image src="/images/siddhant-sarkar-cofounder-cto.jpeg" alt="Siddhant Sarkar, Co-founder and CTO of UniSouk" width={1280} height={1280} />
              </div>
              <figcaption><div><h3>Siddhant Sarkar</h3><p>Co-founder, CTO</p></div></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="team-gallery" aria-labelledby="team-gallery-title">
        <div className="container team-gallery__inner">
          <header className="team-gallery__header">
            <h2 id="team-gallery-title">Meet the wider team.</h2>
            <p>Product, technology, operations and growth working side by side to build a better commerce experience.</p>
          </header>
          <div className="team-gallery__images">
            <figure className="team-gallery__image team-gallery__image--wide">
              <Image src="/images/team-office-web.jpg" alt="The UniSouk team together at the Surat office" width={2048} height={1535} />
            </figure>
            <figure className="team-gallery__image team-gallery__image--portrait">
              <Image src="/images/unisouk-team-event.jpeg" alt="The UniSouk team at the company exhibition booth" width={800} height={1200} />
            </figure>
          </div>
        </div>
      </section>

      <section className="about-intro" id="about-unisouk" aria-labelledby="about-intro-title">
        <div className="container about-intro__inner">
          <h2 id="about-intro-title">The future of commerce is online, and it should be accessible to everyone.</h2>
          <div className="about-intro__copy">
            <p>At UniSouk, a leading ecommerce service provider in India, we believe that the future of commerce is online, and it should be accessible to everyone at their fingertips. Founded with a vision to simplify online selling, UniSouk is India’s first truly unified ecommerce SaaS platform developed for D2C brands and marketplace sellers.</p>
            <p>Whether you&apos;re a new entrepreneur or a market leader, we offer the complete solutions needed to scale effortlessly across digital platforms like Amazon, ONDC, Flipkart, Meesho, and many more.</p>
            <p>UniSouk is proudly built by a seasoned team that understands the complexities of modern ecommerce and is passionate about eliminating them for Indian businesses of all kinds.</p>
          </div>
        </div>
      </section>

      <section className="about-faq" aria-labelledby="faq-title">
        <div className="container about-faq__inner">
          <div className="about-faq__intro">
            <h2 id="faq-title">Frequently asked questions</h2>
            <p>At UniSouk, a leading ecommerce service provider in India, we believe that the future of commerce is online and it should be accessible to everyone at their fingertips.</p>
          </div>
          <div className="about-faq__list">
            {aboutFaqs.map((faq, index) => (
              <details open={index === 0} key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
