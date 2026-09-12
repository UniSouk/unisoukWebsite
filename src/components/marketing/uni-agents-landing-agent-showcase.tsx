"use client";

import Image from "next/image";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

import {
  UNI_AGENTS_AGENT_DATA,
  UNI_AGENTS_AGENT_ORDER,
  UNI_AGENTS_INSIGHTS_DEMO,
  UNI_AGENTS_OPTIMIZE_DEMO,
  type UniAgentsAgentKey,
} from "@/constants/uni-agents";

const AUTOPLAY_INTERVAL_MS = 4200;

/**
 * Reproduces the static reference's agent selector + showcase
 * (script.js `showAgent`, autoplay with visibility/hover/focus pausing,
 * keyboard navigation, and the WAAPI content-swap animations).
 */
export function UniAgentsAgentShowcase() {
  const [activeKey, setActiveKey] = useState<UniAgentsAgentKey>("audit");
  const [isCycling, setIsCycling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const layoutRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const iconImgRef = useRef<HTMLImageElement | null>(null);
  const demoRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<HTMLUListElement | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const autoplayTimerRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);
  const isPausedRef = useRef(false);
  const reducedMotionRef = useRef(false);

  const agent = UNI_AGENTS_AGENT_DATA[activeKey];

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  function animateSwitch() {
    if (reducedMotionRef.current) return;
    contentRef.current?.animate(
      [
        { opacity: 0.35, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 460, easing: "cubic-bezier(.16,1,.3,1)" },
    );
    iconImgRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(12px) scale(.88)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 560, easing: "cubic-bezier(.16,1,.3,1)" },
    );
    const sceneItems = [
      ...(demoRef.current ? Array.from(demoRef.current.children) : []),
      ...(pointsRef.current ? Array.from(pointsRef.current.children) : []),
    ];
    sceneItems.forEach((item, index) => {
      item.animate?.(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 420,
          delay: 90 + index * 55,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "both",
        },
      );
    });
    setIsSwitching(false);
    window.requestAnimationFrame(() => setIsSwitching(true));
  }

  function stopTimer() {
    if (autoplayTimerRef.current !== null) {
      window.clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    setIsCycling(false);
  }

  function startTimer() {
    stopTimer();
    if (
      reducedMotionRef.current ||
      !isVisibleRef.current ||
      isPausedRef.current ||
      UNI_AGENTS_AGENT_ORDER.length < 2
    ) {
      return;
    }
    setIsCycling(true);
    autoplayTimerRef.current = window.setInterval(() => {
      setActiveKey((current) => {
        const currentIndex = UNI_AGENTS_AGENT_ORDER.indexOf(current);
        const next =
          UNI_AGENTS_AGENT_ORDER[
            (currentIndex + 1) % UNI_AGENTS_AGENT_ORDER.length
          ];
        animateSwitch();
        return next;
      });
    }, AUTOPLAY_INTERVAL_MS);
  }

  function showAgent(key: UniAgentsAgentKey, userInitiated = false) {
    setActiveKey(key);
    animateSwitch();
    if (userInitiated) {
      stopTimer();
      startTimer();
    }
  }

  useEffect(() => {
    const layout = layoutRef.current;
    if (!layout || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current) startTimer();
        else stopTimer();
      },
      { threshold: 0.28 },
    );
    observer.observe(layout);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setPaused(paused: boolean) {
    isPausedRef.current = paused;
    setIsPaused(paused);
    if (paused) stopTimer();
    else startTimer();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      return;
    }
    event.preventDefault();
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const nextIndex =
      (index + (forward ? 1 : -1) + UNI_AGENTS_AGENT_ORDER.length) %
      UNI_AGENTS_AGENT_ORDER.length;
    buttonRefs.current[nextIndex]?.focus();
    showAgent(UNI_AGENTS_AGENT_ORDER[nextIndex], true);
  }

  const layoutClassName = [
    "ual-agents-layout",
    isCycling ? "is-cycling" : "",
    isPaused ? "is-paused" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={layoutClassName}
      ref={layoutRef}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!layoutRef.current?.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="ual-agents-intro">
        <h2>
          One workspace.
          <br />
          Four ways forward.
        </h2>
        <p>
          Each agent owns one clear seller outcome and keeps the product
          context that started the work.
        </p>
        <div
          className="ual-agent-selector"
          role="tablist"
          aria-label="Explore Uni Agents capabilities"
        >
          {UNI_AGENTS_AGENT_ORDER.map((key, index) => {
            const item = UNI_AGENTS_AGENT_DATA[key];
            const active = key === activeKey;
            return (
              <button
                key={key}
                className={`ual-agent-select${active ? " is-active" : ""}`}
                role="tab"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                type="button"
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                onClick={() => showAgent(key, true)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{item.index}</span>
                {item.navLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`ual-agent-showcase${isSwitching ? " is-switching" : ""}`}
        aria-label="Selected agent details"
      >
        <div className="ual-showcase-chrome">
          <span>{agent.eyebrow}</span>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="ual-showcase-content" ref={contentRef}>
          <div className="ual-showcase-title">
            <div>
              <small>{agent.label}</small>
              <h3>{agent.title}</h3>
            </div>
            <span className="ual-showcase-icon">
              <Image
                src={agent.icon}
                alt=""
                width={80}
                height={80}
                ref={iconImgRef}
              />
            </span>
          </div>
          <p>{agent.description}</p>
          <AgentDemo demo={agent.demo} ref={demoRef} />
          <ul className="ual-showcase-points" ref={pointsRef}>
            {agent.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface AgentDemoProps {
  demo: string;
}

const AgentDemo = forwardRef<HTMLDivElement, AgentDemoProps>(function AgentDemo(
  { demo },
  ref,
) {
  if (demo === "audit") {
    return (
      <div className="ual-showcase-demo" ref={ref}>
        <div className="ual-mini-score">
          <strong>82</strong>
          <span>Listing score</span>
        </div>
        <div className="ual-mini-bars">
          {[88, 72, 70, 95].map((value) => (
            <i
              key={value}
              style={{ "--w": `${value}%` } as CSSProperties}
            />
          ))}
        </div>
        <div className="ual-mini-result">
          <span>Top opportunity</span>
          <strong>Improve description clarity</strong>
          <small>Evidence and next action included</small>
        </div>
      </div>
    );
  }

  if (demo === "optimize") {
    return (
      <div className="ual-showcase-demo" ref={ref}>
        <div className="ual-mini-copy-card">
          <span>Current</span>
          <p>{UNI_AGENTS_OPTIMIZE_DEMO.current}</p>
        </div>
        <div className="ual-mini-arrow">→</div>
        <div className="ual-mini-copy-card is-improved">
          <span>Suggested</span>
          <p>{UNI_AGENTS_OPTIMIZE_DEMO.suggested}</p>
        </div>
      </div>
    );
  }

  if (demo === "images") {
    return (
      <div className="ual-showcase-demo" ref={ref}>
        <div className="ual-mini-image">
          <span>Source</span>
          <i />
        </div>
        <div className="ual-mini-image is-lifestyle">
          <span>Lifestyle</span>
          <i />
        </div>
        <div className="ual-mini-image is-detail">
          <span>Detail</span>
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className="ual-showcase-demo" ref={ref}>
      <div className="ual-mini-chart">
        {UNI_AGENTS_INSIGHTS_DEMO.bars.map((value, index) => (
          <i
            key={value}
            className={
              index === UNI_AGENTS_INSIGHTS_DEMO.focusIndex ? "is-focus" : ""
            }
            style={{ "--h": `${value}%` } as CSSProperties}
          />
        ))}
      </div>
      <div className="ual-mini-market-result">
        <span>{UNI_AGENTS_INSIGHTS_DEMO.resultLabel}</span>
        <strong>{UNI_AGENTS_INSIGHTS_DEMO.resultTitle}</strong>
        <small>{UNI_AGENTS_INSIGHTS_DEMO.resultNote}</small>
      </div>
    </div>
  );
});
