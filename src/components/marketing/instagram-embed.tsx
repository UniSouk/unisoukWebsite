"use client";

import { useEffect, useRef, useState } from "react";

import { INSTAGRAM_URL } from "@/constants/site";

const INSTAGRAM_EMBED_SCRIPT = "https://www.instagram.com/embed.js";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

export function InstagramEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let script: HTMLScriptElement | null = null;
    let mutationObserver: MutationObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const reveal = () => {
      setIsReady(true);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };

    const revealOnIframeLoad = () => {
      const iframe = container.querySelector("iframe");
      if (!iframe) return false;
      if (iframe.dataset.embedReadyBound) return true;
      iframe.dataset.embedReadyBound = "true";
      iframe.addEventListener("load", reveal, { once: true });
      return true;
    };

    const watchForIframe = () => {
      if (revealOnIframeLoad()) return;
      mutationObserver = new MutationObserver(() => {
        if (revealOnIframeLoad()) mutationObserver?.disconnect();
      });
      mutationObserver.observe(container, { childList: true, subtree: true });
      // Safety net: reveal even if Instagram's script fails to render an
      // iframe (blocked embed, network issue), so the fallback link and
      // reserved space don't stay hidden indefinitely.
      fallbackTimer = setTimeout(reveal, 6000);
    };

    const processEmbed = () => {
      window.instgrm?.Embeds?.process?.();
      watchForIframe();
    };
    const loadEmbed = () => {
      script = document.querySelector<HTMLScriptElement>(
        `script[src="${INSTAGRAM_EMBED_SCRIPT}"]`,
      );

      if (script) {
        if (window.instgrm?.Embeds) processEmbed();
        else script.addEventListener("load", processEmbed, { once: true });
        return;
      }

      script = document.createElement("script");
      script.async = true;
      script.src = INSTAGRAM_EMBED_SCRIPT;
      script.addEventListener("load", processEmbed, { once: true });
      document.body.append(script);
    };

    if (!("IntersectionObserver" in window)) {
      loadEmbed();
      return () => {
        script?.removeEventListener("load", processEmbed);
        mutationObserver?.disconnect();
        if (fallbackTimer) clearTimeout(fallbackTimer);
      };
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loadEmbed();
        intersectionObserver.disconnect();
      },
      { rootMargin: "500px 0px" },
    );
    intersectionObserver.observe(container);

    return () => {
      intersectionObserver.disconnect();
      mutationObserver?.disconnect();
      script?.removeEventListener("load", processEmbed);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="instagram-feed__embed"
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      <blockquote
        className="instagram-media"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,.5), 0 1px 10px 0 rgba(0,0,0,.15)",
          margin: "1px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
        data-instgrm-permalink={`${INSTAGRAM_URL}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
      >
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          View @unisouk.com_india on Instagram
        </a>
      </blockquote>
    </div>
  );
}
