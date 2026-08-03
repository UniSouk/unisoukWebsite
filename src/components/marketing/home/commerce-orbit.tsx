import type { CSSProperties } from "react";
import Image from "next/image";

import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import { SIGN_UP_URL } from "@/constants/site";

const stages = [
  {
    id: "listing",
    title: "Product Listing",
    description:
      "Create and optimize channel ready listings from one source.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Keep stock accurate across warehouses and every selling channel.",
  },
  {
    id: "orders",
    title: "Order Management",
    description: "Capture, fulfil, and track every order from one queue.",
  },
  {
    id: "shipping",
    title: "Shipping & Fulfillment",
    description: "Move every parcel from pickup to successful delivery.",
  },
  {
    id: "payments",
    title: "Payments & Settlements",
    description:
      "Track payouts, fees, refunds, and settlement activity in one view.",
  },
  {
    id: "analytics",
    title: "Analytics & Growth",
    description:
      "Turn performance data into the next confident growth move.",
  },
];


function JourneyStrip() {
  const phases = [
    {
      title: "List",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 4.5h10l4 4v11H5z" />
          <path d="M15 4.5v4h4M8.5 12h7M8.5 15.5h5" />
        </svg>
      ),
      items: [
        "Publish everywhere from one dashboard",
        "Create a store customers can find",
      ],
    },
    {
      title: "Sell",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4.5 8.5 12 4l7.5 4.5v8L12 21l-7.5-4.5z" />
          <path d="m4.5 8.5 7.5 4.4 7.5-4.4M12 12.9V21" />
        </svg>
      ),
      items: [
        "Automate inventory and order management",
        "Connect with leading marketplaces effortlessly",
      ],
    },
    {
      title: "Grow",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 19V6M5 19h14" />
          <path d="m7.5 15 3.3-3.4 2.8 2.2 4.4-5" />
          <path d="M15.3 8.8H18v2.7" />
        </svg>
      ),
      items: [
        "Make smarter decisions with AI insights",
        "Scale your business with expert support",
      ],
    },
  ];

  return (
    <div className="commerce-journey" aria-label="List, sell, and grow with UniSouk">
      <div className="container journey-strip__inner">
        <div className="sales-journey__sequence">
          {phases.map((phase) => (
            <section className="sales-journey__phase" key={phase.title}>
              <header>
                <span className="sales-journey__phase-icon" aria-hidden="true">
                  {phase.icon}
                </span>
                <div>
                  <h3>{phase.title}</h3>
                </div>
              </header>
              <ul>
                {phase.items.map((item) => (
                  <li key={item}>
                    <i aria-hidden="true"><CheckIcon /></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CommerceOrbit() {
  return (
    <section
      className="commerce-orbit section-light"
      id="platform"
      aria-labelledby="commerce-orbit-title"
    >
      <JourneyStrip />
      <div className="container commerce-orbit__inner">
        <header className="commerce-orbit__copy">
          <h2 id="commerce-orbit-title" className="commerce-orbit__headline">
            <span className="commerce-orbit__headline-static">One place to</span>
            <span className="commerce-orbit__sr-only">
              Listings, Inventory, Orders, Shipping, Returns, Payments, and
              Analytics
            </span>
            <span className="commerce-orbit__headline-action">
              <span>manage</span>
              <span className="commerce-keyword" aria-hidden="true">
                <span className="commerce-keyword__background" />
                <span className="commerce-keyword__clip">
                  <span className="commerce-keyword__word is-current">
                    Listings
                  </span>
                </span>
                <span className="commerce-keyword__measure">Listings</span>
              </span>
            </span>
          </h2>
          <p>
            UniSouk brings your catalogue, stock, and orders together so you
            can update once, sell everywhere, and stay in control.
          </p>
          <a
            className="text-link text-link--arrow"
            href={SIGN_UP_URL}
          >
            Explore the platform <span aria-hidden="true"><ArrowRightIcon /></span>
          </a>
        </header>
        <div
          className="commerce-orbit__stage-area journey-board"
          aria-label="The six stages of the UniSouk seller journey"
        >
          <div className="journey-board__shell">
            <header className="journey-board__header">
              <Image
                src="/unisouk-logo.svg"
                width={138}
                height={22}
                alt="UniSouk"
              />
              <span>
                <i /> Commerce flow live
              </span>
            </header>
            <div className="journey-board__body">
              <ol className="journey-board__rail">
                {stages.map((stage, index) => (
                  <li
                    style={{
                      "--journey-delay":
                        index === 0 ? "0s" : `${(index - stages.length) * 3}s`,
                    } as CSSProperties}
                    key={stage.id}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage.title}</strong>
                  </li>
                ))}
              </ol>
              <div className="journey-board__panels" aria-live="off">
                {stages.map((stage, index) => (
                  <article
                    className={`journey-board__panel journey-board__panel--${stage.id}`}
                    style={{
                      "--journey-delay":
                        index === 0 ? "0s" : `${(index - stages.length) * 3}s`,
                    } as CSSProperties}
                    key={stage.id}
                  >
                    <div className="journey-board__panel-topline">
                      <span>Stage {String(index + 1).padStart(2, "0")}</span>
                      <i />
                    </div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                    <div className="journey-board__artifact" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <b />
                      <b />
                      <b />
                    </div>
                    <footer>
                      <span>Synced by UniSouk</span>
                      <em>Ready</em>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
