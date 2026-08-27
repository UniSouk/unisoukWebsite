import Image from "next/image";

import { ArrowRightIcon } from "@/components/ui/icon";
import { DEMO_BOOKING_URL } from "@/constants/site";
import {
  UNI_AGENTS_HERO,
  UNI_AGENTS_HERO_PRODUCT,
  UNI_AGENTS_MARKETPLACE_RAIL,
} from "@/constants/uni-agents";
import { UniAgentsHeroDemo } from "./uni-agents-landing-hero-demo";
import { UniAgentsHeroTilt } from "./uni-agents-landing-hero-tilt";
import { UniAgentsReveal } from "./uni-agents-landing-reveal";

export function UniAgentsLandingHero() {
  return (
    <section className="ual-hero" id="top">
      <div className="ual-container ual-hero-grid">
        <UniAgentsReveal className="ual-hero-copy" as="div">
          <p className="ual-eyebrow">{UNI_AGENTS_HERO.eyebrow}</p>
          <h1>
            {UNI_AGENTS_HERO.lines.map((line, index) => (
              <span
                className={
                  index === 1
                    ? "ual-hero-line ual-hero-line-accent"
                    : "ual-hero-line"
                }
                key={line}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="ual-hero-lede">{UNI_AGENTS_HERO.lede}</p>
          <div className="ual-hero-actions">
            <a
              className="ual-button ual-button-primary ual-button-large"
              href={DEMO_BOOKING_URL}
            >
              Book a free demo
              <ArrowRightIcon />
            </a>
            <a className="ual-hero-text-link" href="#agents">
              Meet the agents <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="ual-hero-proof" aria-label="Product highlights">
            {UNI_AGENTS_HERO.proof.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span> {item.copy}
              </li>
            ))}
          </ul>
        </UniAgentsReveal>

        <UniAgentsHeroTilt className="ual-hero-product">
          <div className="ual-product-halo" aria-hidden="true" />
          <div className="ual-app-window">
            <div className="ual-app-topbar">
              <div className="ual-app-brand">
                <Image
                  src="/unisouk-mark.svg"
                  alt=""
                  width={50}
                  height={25}
                />
                <span>Uni Agents</span>
              </div>
              <div className="ual-window-actions" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="ual-app-layout">
              <aside className="ual-app-sidebar" aria-label="Demo navigation">
                <div className="ual-sidebar-label">Workspace</div>
                <button
                  className="ual-side-item is-active"
                  type="button"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5zM12 12l8-4.5M12 12 4 7.5M12 12v9" />
                  </svg>
                  My Portfolio
                </button>
                <button className="ual-side-item" type="button" tabIndex={-1}>
                  <svg viewBox="0 0 24 24">
                    <path d="m13 2-9 12h7l-1 8 10-13h-7z" />
                  </svg>
                  My Agents
                </button>
                <button className="ual-side-item" type="button" tabIndex={-1}>
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19V9m5 10V5m5 14v-7m5 7V3" />
                  </svg>
                  Business Intel
                </button>
                <div className="ual-sidebar-pulse">
                  <span />
                  1 agent working
                </div>
              </aside>

              <UniAgentsHeroDemo product={UNI_AGENTS_HERO_PRODUCT} />
            </div>
          </div>
        </UniAgentsHeroTilt>
      </div>

      <div
        className="ual-container ual-marketplace-rail"
        aria-label="Supported seller workflows"
      >
        <span>{UNI_AGENTS_MARKETPLACE_RAIL.label}</span>
        {UNI_AGENTS_MARKETPLACE_RAIL.platforms.map((platform) => (
          <div key={platform.name}>
            <b className="ual-platform-logo">
              <Image
                src={platform.logo}
                alt=""
                width={platform.width}
                height={platform.height}
              />
            </b>
            {platform.name}
          </div>
        ))}
        <div>
          <b className="ual-schedule-dot">↻</b> {UNI_AGENTS_MARKETPLACE_RAIL.scheduled}
        </div>
      </div>
    </section>
  );
}
