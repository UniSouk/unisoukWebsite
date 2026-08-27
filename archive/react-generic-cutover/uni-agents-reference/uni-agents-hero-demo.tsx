"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useRef, useState } from "react";

import { UNI_AGENTS_HERO_DEMO } from "@/constants/uni-agents";
import styles from "@/components/marketing/uni-agents-hero-demo.module.css";

const { product, tabs } = UNI_AGENTS_HERO_DEMO;
type TabId = (typeof tabs)[number]["id"];

export function UniAgentsHeroDemo() {
  const [activeTab, setActiveTab] = useState<TabId>(tabs[0].id);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const surface = surfaceRef.current;
    if (!surface) return;
    const rect = surface.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relativeX * -4, y: relativeY * 4 });
  }

  function handlePointerLeave() {
    setTilt(null);
  }

  function focusTab(index: number) {
    const nextTab = tabs[(index + tabs.length) % tabs.length];
    setActiveTab(nextTab.id);
    document
      .querySelector<HTMLButtonElement>(`[data-uni-agents-tab="${nextTab.id}"]`)
      ?.focus();
  }

  return (
    <div
      className="relative"
      ref={surfaceRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--grey)] bg-[var(--white)] shadow-[0_8px_8px_rgb(17_17_17/14%)] transition-transform duration-[220ms] motion-reduce:transition-none"
        style={
          tilt
            ? ({
                transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              } as CSSProperties)
            : undefined
        }
      >
        <div
          className="flex items-center justify-between border-b border-[var(--grey)] bg-[var(--mist)] px-5 py-3"
          aria-hidden="true"
        >
          <span className="text-sm font-semibold">Uni Agents</span>
          <span className="flex gap-1.5">
            <i className="h-2 w-2 rounded-full bg-[var(--grey)]" />
            <i className="h-2 w-2 rounded-full bg-[var(--grey)]" />
            <i className="h-2 w-2 rounded-full bg-[var(--grey)]" />
          </span>
        </div>

        <div className="border-b border-[var(--grey)] px-5 pt-4 pb-3">
          <div
            className={`${styles.tabs} flex gap-1 rounded-[var(--radius-sm)] bg-[var(--mist)] p-1`}
            role="tablist"
            aria-label="Product workflow demo"
            style={
              {
                "--tab-count": tabs.length,
                "--demo-index": activeIndex,
              } as CSSProperties
            }
          >
            {tabs.map((tab, index) => (
              <button
                className={`${styles.tab} min-h-9 rounded-[calc(var(--radius-sm)-2px)] px-4 text-sm font-medium transition-colors duration-150 motion-reduce:transition-none ${
                  activeTab === tab.id
                    ? "text-[var(--ink)]"
                    : "text-[var(--text-muted)] hover:text-[var(--ink)]"
                }`}
                type="button"
                role="tab"
                id={`uni-agents-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`uni-agents-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                data-uni-agents-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    focusTab(index + 1);
                  } else if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    focusTab(index - 1);
                  }
                }}
                key={tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[22rem] p-6">
          {tabs.map((tab) =>
            tab.id === activeTab ? (
              <div
                role="tabpanel"
                id={`uni-agents-panel-${tab.id}`}
                aria-labelledby={`uni-agents-tab-${tab.id}`}
                key={tab.id}
              >
                {tab.id === "ready" && "cta" in tab && (
                  <ReadyScene tab={tab} />
                )}
                {tab.id === "audit" && "score" in tab && (
                  <AuditScene tab={tab} />
                )}
                {tab.id === "improve" && "opportunities" in tab && (
                  <ImproveScene tab={tab} />
                )}
              </div>
            ) : null,
          )}
        </div>
      </div>
      <span className="sr-only">
        Showing {tabs[activeIndex]?.label} view of the Uni Agents product
        demo.
      </span>
    </div>
  );
}

function ReadyScene({ tab }: { tab: (typeof tabs)[0] }) {
  return (
    <div className="grid gap-6">
      <div className="flex items-start gap-4">
        <div
          className="h-16 w-16 shrink-0 rounded-[var(--radius-sm)] bg-[var(--mist)]"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <span
              className="grid h-4 w-4 place-items-center rounded-full bg-[var(--orange)] text-[10px] font-bold text-[var(--white)]"
              aria-hidden="true"
            >
              {product.marketMark}
            </span>
            <code>{product.sku}</code>
            <span className="inline-flex items-center gap-1 font-medium text-[var(--orange-ink)]">
              <i
                className="h-1.5 w-1.5 rounded-full bg-[var(--orange-ink)]"
                aria-hidden="true"
              />
              Ready
            </span>
          </div>
          <h3 className="m-0 mt-1 !text-lg">{product.name}</h3>
          <p className="m-0 mt-1 text-sm text-[var(--text-muted)]">
            {product.price}{" "}
            <s className="text-[var(--grey-dark)]">
              {product.originalPrice}
            </s>{" "}
            <strong className="text-[var(--ink)]">{product.rating}</strong> (
            {product.reviews}) · {product.category}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
        <div>
          <span className="text-xs font-semibold tracking-[0.06em] text-[var(--orange-ink)] uppercase">
            Recommended next action
          </span>
          <h4 className="m-0 mt-1 !text-base">{tab.heading}</h4>
          <p className="m-0 mt-1 text-sm text-[var(--text-muted)]">
            {tab.copy}
          </p>
        </div>
        <button
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[var(--ink)] px-5 text-sm font-medium text-[var(--white)]"
          type="button"
          tabIndex={-1}
        >
          {tab.cta} <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function AuditScene({ tab }: { tab: (typeof tabs)[1] }) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold tracking-[0.06em] text-[var(--orange-ink)] uppercase">
            Listing audit
          </span>
          <h3 className="m-0 mt-1 !text-lg">{tab.heading}</h3>
        </div>
        <span className="text-xs text-[var(--text-muted)]">{tab.time}</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-8 max-[30rem]:grid-cols-1">
        <div className="grid place-items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--grey)] p-6 text-center">
          <div className="flex items-baseline gap-1">
            <strong className="!text-3xl">{tab.score}</strong>
            <span className="text-xs text-[var(--text-muted)]">/ 100</span>
          </div>
          <p className="m-0 text-xs text-[var(--text-muted)]">
            Strong foundation
          </p>
        </div>
        <div className="grid gap-3 self-center">
          {tab.axes.map((axis) => (
            <div
              className="grid grid-cols-[10rem_1fr_3rem] items-center gap-3 max-[30rem]:grid-cols-[6rem_1fr_2.5rem]"
              key={axis.label}
            >
              <span className="text-sm text-[var(--text-muted)]">
                {axis.label}
              </span>
              <span
                className="h-1.5 overflow-hidden rounded-full bg-[var(--grey)]"
                role="progressbar"
                aria-valuenow={axis.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={axis.label}
              >
                <i
                  className="block h-full rounded-full bg-[var(--orange)]"
                  style={{ width: `${axis.value}%` }}
                />
              </span>
              <strong className="text-right text-sm">{axis.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImproveScene({ tab }: { tab: (typeof tabs)[2] }) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold tracking-[0.06em] text-[var(--orange-ink)] uppercase">
            What to improve next
          </span>
          <h3 className="m-0 mt-1 !text-lg">{tab.heading}</h3>
        </div>
        <span className="rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
          {tab.priority}
        </span>
      </div>
      <div className="grid gap-4">
        {tab.opportunities.map((item) => (
          <div
            className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 rounded-[var(--radius-sm)] border border-[var(--grey)] p-4 max-[30rem]:grid-cols-[2.5rem_1fr]"
            key={item.index}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--mist)] text-xs font-semibold">
              {item.index}
            </span>
            <div>
              <h4 className="m-0 !text-base">{item.title}</h4>
              <p className="m-0 mt-1 text-sm text-[var(--text-muted)]">
                {item.copy}
              </p>
            </div>
            <span className="text-sm font-medium text-[var(--orange-ink)] max-[30rem]:col-span-2">
              {item.action} →
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 text-sm text-[var(--text-muted)]">
        <span aria-hidden="true">✓ </span>
        {tab.note}
      </p>
    </div>
  );
}
