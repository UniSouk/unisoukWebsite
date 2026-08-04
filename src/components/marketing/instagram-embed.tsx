"use client";

import { useEffect, useRef } from "react";

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
  const embedRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const embed = embedRef.current;
    if (!embed) return;

    let script: HTMLScriptElement | null = null;
    const processEmbed = () => window.instgrm?.Embeds?.process?.();
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
      return () => script?.removeEventListener("load", processEmbed);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loadEmbed();
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );
    observer.observe(embed);

    return () => {
      observer.disconnect();
      script?.removeEventListener("load", processEmbed);
    };
  }, []);

  return (
    <blockquote
      ref={embedRef}
      className="instagram-media"
      data-instgrm-permalink={`${INSTAGRAM_URL}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
    >
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        View @unisouk.in on Instagram
      </a>
    </blockquote>
  );
}
