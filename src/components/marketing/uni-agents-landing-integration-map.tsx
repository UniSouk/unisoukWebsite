"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { UNI_AGENTS_INTEGRATIONS } from "@/constants/uni-agents";

/**
 * Reproduces the static reference's integration connection map
 * (script.js hover-to-highlight + one-time path-draw-on-entry). This
 * section is hidden by default (matching `sectionVisibility.integrations`
 * = false in the static reference) but remains fully functional if a
 * future change re-enables it.
 */
export function UniAgentsIntegrationMap() {
  const [activeConnection, setActiveConnection] = useState<string | null>(
    null,
  );
  const mapRef = useRef<HTMLDivElement | null>(null);
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const coreRef = useRef<HTMLDivElement | null>(null);
  const hasDrawnRef = useRef(false);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasDrawnRef.current) return;
        hasDrawnRef.current = true;
        UNI_AGENTS_INTEGRATIONS.sources.forEach((source, index) => {
          const path = pathRefs.current[source.id];
          if (!path) return;
          const length = path.getTotalLength();
          const animation = path.animate(
            [
              {
                stroke: "#ff9600",
                strokeDasharray: `${length}`,
                strokeDashoffset: `${length}`,
              },
              {
                stroke: "#ff9600",
                strokeDasharray: `${length}`,
                strokeDashoffset: "0",
              },
            ],
            { duration: 760, delay: index * 130, easing: "cubic-bezier(.25,1,.5,1)" },
          );
          animation.onfinish = () => {
            path.style.strokeDasharray = "5 6";
            path.style.strokeDashoffset = "0";
          };
        });
        coreRef.current?.animate(
          [
            { transform: "translate(-50%, -50%) scale(.94)" },
            { transform: "translate(-50%, -50%) scale(1)" },
          ],
          { duration: 620, delay: 480, easing: "cubic-bezier(.16,1,.3,1)" },
        );
        observer.unobserve(map);
      },
      { rootMargin: "0px 0px -16%", threshold: 0.2 },
    );

    observer.observe(map);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`ual-integration-map${activeConnection ? " has-active-source" : ""}`}
      ref={mapRef}
    >
      {UNI_AGENTS_INTEGRATIONS.sources.map((source) => (
        <div
          className={`ual-integration-source ual-source-${source.modifier}${
            activeConnection === source.id ? " is-active" : ""
          }`}
          key={source.id}
          onPointerEnter={() => setActiveConnection(source.id)}
          onPointerLeave={() => setActiveConnection(null)}
        >
          <span>
            <Image src={source.logo} alt="" width={40} height={40} />
          </span>
          <div>
            <strong>{source.name}</strong>
            <small>{source.copy}</small>
          </div>
        </div>
      ))}
      <div
        className={`ual-integration-core${activeConnection ? " is-linked" : ""}`}
        ref={coreRef}
      >
        <Image src="/unisouk-mark-on-dark.svg" alt="" width={46} height={46} />
        <strong>Uni Agents</strong>
        <small>One seller workspace</small>
      </div>
      <svg viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
        {UNI_AGENTS_INTEGRATIONS.sources.map((source) => (
          <path
            d={source.path}
            className={activeConnection === source.id ? "is-active" : ""}
            key={source.id}
            ref={(node) => {
              pathRefs.current[source.id] = node;
            }}
          />
        ))}
      </svg>
    </div>
  );
}
