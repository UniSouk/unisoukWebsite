"use client";

import { useEffect } from "react";

export function SiteHeaderInteractions() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-native-header]");
    if (!header) return;

    const disclosures = Array.from(
      header.querySelectorAll<HTMLDetailsElement>("[data-native-disclosure]"),
    );
    const mobile = header.querySelector<HTMLDetailsElement>(
      "[data-native-mobile-navigation]",
    );
    const desktopHover = window.matchMedia(
      "(min-width: 75rem) and (hover: hover) and (pointer: fine)",
    );
    const closeTimers = new WeakMap<HTMLDetailsElement, number>();

    const cleanups: Array<() => void> = [];

    for (const disclosure of disclosures) {
      const onToggle = () => {
        if (!disclosure.open) return;
        for (const other of disclosures) {
          if (other !== disclosure) other.open = false;
        }
      };
      const onPointerEnter = () => {
        if (!desktopHover.matches) return;
        const timer = closeTimers.get(disclosure);
        if (timer) window.clearTimeout(timer);
        disclosure.open = true;
      };
      const onPointerLeave = () => {
        if (!desktopHover.matches) return;
        closeTimers.set(
          disclosure,
          window.setTimeout(() => {
            disclosure.open = false;
          }, 140),
        );
      };
      const summary = disclosure.querySelector("summary");
      const onSummaryClick = (event: Event) => {
        if (!desktopHover.matches) return;
        event.preventDefault();
        disclosure.open = true;
      };

      disclosure.addEventListener("toggle", onToggle);
      disclosure.addEventListener("pointerenter", onPointerEnter);
      disclosure.addEventListener("pointerleave", onPointerLeave);
      summary?.addEventListener("click", onSummaryClick);
      cleanups.push(() => {
        disclosure.removeEventListener("toggle", onToggle);
        disclosure.removeEventListener("pointerenter", onPointerEnter);
        disclosure.removeEventListener("pointerleave", onPointerLeave);
        summary?.removeEventListener("click", onSummaryClick);
        const timer = closeTimers.get(disclosure);
        if (timer) window.clearTimeout(timer);
      });
    }

    const closeMenus = () => {
      for (const disclosure of disclosures) disclosure.open = false;
      if (mobile) mobile.open = false;
    };
    
    const syncBodyScroll = () => {
      document.documentElement.style.overflow = mobile?.open ? "hidden" : "";
    };

    if (mobile) {
      mobile.addEventListener("toggle", syncBodyScroll);
      syncBodyScroll();
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!header.contains(event.target as Node)) closeMenus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      for (const cleanup of cleanups) cleanup();
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      if (mobile) {
        mobile.removeEventListener("toggle", syncBodyScroll);
        document.documentElement.style.overflow = "";
      }
    };
  }, []);

  return null;
}

export function SiteFooterInteractions() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("[data-native-footer]");
    if (!footer) return;

    const groups = Array.from(
      footer.querySelectorAll<HTMLDetailsElement>("[data-native-footer-group]"),
    );
    const mobile = window.matchMedia("(max-width: 47.99rem)");
    const shell = footer.querySelector<HTMLElement>(
      "[data-native-footer-shell]",
    );
    const syncGroups = () => {
      for (const group of groups) group.open = !mobile.matches;
    };

    syncGroups();
    mobile.addEventListener("change", syncGroups);

    const reveal = () => {
      if (shell) shell.dataset.visible = "true";
    };
    let observer: IntersectionObserver | null = null;
    if (shell && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          reveal();
          observer?.disconnect();
        },
        { threshold: 0.12 },
      );
    }

    if (observer) {
      observer.observe(footer);
    } else {
      reveal();
    }

    return () => {
      mobile.removeEventListener("change", syncGroups);
      observer?.disconnect();
    };
  }, []);

  return null;
}
