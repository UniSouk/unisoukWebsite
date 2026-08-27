"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

import {
  UNI_AGENTS_AUDIT,
  UNI_AGENTS_DEMO_TABS,
  UNI_AGENTS_IMPROVE,
  type UniAgentsDemoTabId,
} from "@/constants/uni-agents";

const AUTOPLAY_INTERVAL_MS = 4800;
const SCENE_ANIMATION_DURATION_MS = 440;
const SCENE_ANIMATION_STAGGER_MS = 65;

interface UniAgentsHeroDemoProps {
  product: {
    sku: string;
    name: string;
    price: string;
    originalPrice: string;
    rating: string;
    reviews: string;
    category: string;
  };
}

/**
 * Reproduces the static reference's synchronized demo tabs
 * (script.js `showDemo`, autoplay interval, keyboard nav, and the WAAPI
 * staged scene-entry animation) as a Client Component.
 */
export function UniAgentsHeroDemo({ product }: UniAgentsHeroDemoProps) {
  const [activeTab, setActiveTab] = useState<UniAgentsDemoTabId>("ready");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const sceneRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const rootRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const activeIndex = UNI_AGENTS_DEMO_TABS.findIndex(
    (tab) => tab.id === activeTab,
  );

  function stopAutoplay() {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function animateScene(id: UniAgentsDemoTabId) {
    if (reducedMotionRef.current) return;
    const scene = sceneRefs.current[id];
    if (!scene) return;
    Array.from(scene.children).forEach((child, index) => {
      child.animate?.(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: SCENE_ANIMATION_DURATION_MS,
          delay: index * SCENE_ANIMATION_STAGGER_MS,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "both",
        },
      );
    });
    const appWindow = rootRef.current?.closest(".ual-app-window");
    if (appWindow) {
      appWindow.classList.remove("is-syncing");
      window.requestAnimationFrame(() => appWindow.classList.add("is-syncing"));
    }
  }

  function showTab(id: UniAgentsDemoTabId, userInitiated = false) {
    setActiveTab(id);
    animateScene(id);
    if (userInitiated) stopAutoplay();
  }

  useEffect(() => {
    if (reducedMotionRef.current || UNI_AGENTS_DEMO_TABS.length < 2) {
      return;
    }
    autoplayRef.current = window.setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = UNI_AGENTS_DEMO_TABS.findIndex(
          (tab) => tab.id === current,
        );
        const next =
          UNI_AGENTS_DEMO_TABS[
            (currentIndex + 1) % UNI_AGENTS_DEMO_TABS.length
          ];
        animateScene(next.id);
        return next.id;
      });
    }, AUTOPLAY_INTERVAL_MS);
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + direction + UNI_AGENTS_DEMO_TABS.length) %
      UNI_AGENTS_DEMO_TABS.length;
    tabRefs.current[nextIndex]?.focus();
    showTab(UNI_AGENTS_DEMO_TABS[nextIndex].id, true);
  }

  return (
    <div className="ual-app-main" ref={rootRef}>
      <div
        className="ual-demo-tabs"
        role="tablist"
        aria-label="Product workflow demo"
        style={{ "--ual-demo-index": activeIndex } as CSSProperties}
      >
        {UNI_AGENTS_DEMO_TABS.map((tab, index) => (
          <button
            key={tab.id}
            className={`ual-demo-tab${tab.id === activeTab ? " is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            tabIndex={tab.id === activeTab ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => showTab(tab.id, true)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
          className="ual-demo-scene"
          data-demo-scene="ready"
          hidden={activeTab !== "ready"}
          ref={(node) => {
            sceneRefs.current.ready = node;
          }}
        >
          <div className="ual-product-identity">
            <div className="ual-product-photo" aria-hidden="true">
              <span className="ual-sandal ual-sandal-one" />
              <span className="ual-sandal ual-sandal-two" />
            </div>
            <div className="ual-product-copy">
              <div className="ual-product-meta">
                <span className="ual-market-mark">F</span>
                <code>{product.sku}</code>
                <span className="ual-status-ready">
                  <i /> Ready
                </span>
              </div>
              <h2>{product.name}</h2>
              <p>
                {product.price} <s>{product.originalPrice}</s>{" "}
                <strong>{product.rating}</strong> ({product.reviews}) ·{" "}
                {product.category}
              </p>
            </div>
            <button
              className="ual-icon-button"
              type="button"
              tabIndex={-1}
              aria-label="Refresh demo product"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20 6v5h-5M4 18v-5h5M6.1 9A7 7 0 0 1 18 6l2 5M4 13l2 5a7 7 0 0 0 11.9-3" />
              </svg>
            </button>
          </div>
          <div className="ual-next-action-card">
            <div>
              <span className="ual-mini-label">Recommended next action</span>
              <h3>Your free Listing Audit is ready</h3>
              <p>
                See what is working and where shoppers may need more
                clarity.
              </p>
            </div>
            <button type="button" tabIndex={-1}>
              Run free audit <span>→</span>
            </button>
          </div>
        </div>

        <div
          className="ual-demo-scene"
          data-demo-scene="audit"
          hidden={activeTab !== "audit"}
          ref={(node) => {
            sceneRefs.current.audit = node;
          }}
        >
          <div className="ual-audit-heading">
            <div>
              <span className="ual-mini-label">Listing audit</span>
              <h2>Healthy, with two clear opportunities</h2>
            </div>
            <span className="ual-audit-time">{UNI_AGENTS_AUDIT.time}</span>
          </div>
          <div className="ual-audit-grid">
            <div className="ual-score-card">
              <div className="ual-score-ring">
                <strong>{UNI_AGENTS_AUDIT.score}</strong>
                <span>/ 100</span>
              </div>
              <p>{UNI_AGENTS_AUDIT.summary}</p>
              <small>{UNI_AGENTS_AUDIT.source}</small>
            </div>
            <div className="ual-axis-list">
              {UNI_AGENTS_AUDIT.axes.map((axis) => (
                <div className="ual-axis-row" key={axis.label}>
                  <span>{axis.label}</span>
                  <strong>{axis.value}%</strong>
                  <div className="ual-axis-bar">
                    <i style={{ "--score": `${axis.value}%` } as CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="ual-demo-scene"
          data-demo-scene="improve"
          hidden={activeTab !== "improve"}
          ref={(node) => {
            sceneRefs.current.improve = node;
          }}
        >
          <div className="ual-audit-heading">
            <div>
              <span className="ual-mini-label">What to improve next</span>
              <h2>Start with buyer clarity</h2>
            </div>
            <span className="ual-priority-pill">
              {UNI_AGENTS_IMPROVE.priority}
            </span>
          </div>
          <div className="ual-opportunity-list">
            {UNI_AGENTS_IMPROVE.opportunities.map((item) => (
              <article key={item.index}>
                <div className={`ual-opportunity-icon ${item.tone}`}>
                  {item.index}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span>{item.action}</span>
              </article>
            ))}
          </div>
          <p className="ual-safe-note">
            <i /> {UNI_AGENTS_IMPROVE.note}
          </p>
        </div>
    </div>
  );
}
