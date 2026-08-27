"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires a GTM "pageview" dataLayer event on every client-side route change.
 * The initial GTM bootstrap script only records the first page load, so this
 * component covers subsequent App Router navigations. Renders no markup.
 */
export function GtmPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !window.dataLayer) return;

    const query = searchParams.toString();
    const page = query ? `${pathname}?${query}` : pathname;

    window.dataLayer.push({ event: "pageview", page });
  }, [pathname, searchParams]);

  return null;
}
