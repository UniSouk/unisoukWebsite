"use client";

import { FormEvent, useRef, useState } from "react";
import {
  DEFAULT_DEMO_API_URL,
  DEFAULT_DEMO_APP_URL,
  DEMO_PROFILE_STORAGE_KEY,
} from "@/constants/demo";
import {
  createPersonalizedDemoUrl,
  normalizeWebsiteUrl,
  toDemoCategory,
} from "@/lib/demo";

import { DemoDialogContent, DemoLauncher } from "./personalized-demo-ui";

const demoAppUrl =
  process.env.NEXT_PUBLIC_DEMO_APP_URL || DEFAULT_DEMO_APP_URL;
const demoApiUrl =
  process.env.NEXT_PUBLIC_DEMO_API_URL || DEFAULT_DEMO_API_URL;
const demoScrapeEndpoint = new URL("/api/demo/scrape", demoApiUrl).href;
const dialogBodyClass = "overflow-hidden";

type CategoryMode = "detected" | "fallback";

export function PersonalizedDemoChat() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [step, setStep] = useState<"website" | "category">("website");
  const [categoryMode, setCategoryMode] =
    useState<CategoryMode>("fallback");
  const [error, setError] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.dataset.motionState = "opening";
    dialog.showModal();
    dialog.focus({ preventScroll: true });
    document.body.classList.add(dialogBodyClass);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (dialog.open && dialog.dataset.motionState === "opening") {
          dialog.dataset.motionState = "open";
        }
      });
    });
  };
  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.dataset.motionState === "closing") return;
    dialog.dataset.motionState = "closing";
    const closeDelay = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 0
      : 280;
    window.setTimeout(() => {
      dialog.close();
      delete dialog.dataset.motionState;
      document.body.classList.remove(dialogBodyClass);
      launcherRef.current?.focus();
    }, closeDelay);
  };
  const saveDemoProfile = (identifiedCategory: string) => {
    try {
      sessionStorage.setItem(
        DEMO_PROFILE_STORAGE_KEY,
        JSON.stringify({
          website: website.trim() || undefined,
          category: identifiedCategory,
        }),
      );
    } catch {
      // The demo remains usable when browser storage is unavailable.
    }
  };
  const resetCategoryFlow = () => {
    setWebsite("");
    setCategory("");
    setCategoryMode("fallback");
    setError("");
    setIsDetecting(false);
    setStep("website");
    try {
      sessionStorage.removeItem(DEMO_PROFILE_STORAGE_KEY);
    } catch {
      // The form can still reset when browser storage is unavailable.
    }
  };
  const submitWebsite = async (event: FormEvent) => {
    event.preventDefault();
    const submittedWebsite = website.trim();
    if (!submittedWebsite) {
      setCategory("");
      setCategoryMode("fallback");
      setError("");
      setStep("category");
      return;
    }

    const normalizedWebsite = normalizeWebsiteUrl(submittedWebsite);
    setWebsite(normalizedWebsite);
    setError("");
    setIsDetecting(true);

    try {
      const response = await fetch(demoScrapeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: normalizedWebsite }),
        signal: AbortSignal.timeout(50000),
      });
      const payload = (await response.json()) as {
        identifiedCategory?: string;
        message?: string;
      };
      if (!response.ok || !payload.identifiedCategory) {
        throw new Error(payload.message || "Category could not be identified");
      }

      const identifiedCategory = payload.identifiedCategory
        .trim()
        .replace(/-+/g, " ");
      setCategory(identifiedCategory);
      setCategoryMode("detected");
      setStep("category");
    } catch {
      setCategory("");
      setCategoryMode("fallback");
      setError(
        "We couldn’t identify your website category. Choose a category manually.",
      );
      setStep("category");
    } finally {
      setIsDetecting(false);
    }
  };
  const personalizedUrl = createPersonalizedDemoUrl(demoAppUrl, category);

  return (
    <>
      <DemoLauncher launcherRef={launcherRef} onOpen={open} />
      <dialog
        ref={dialogRef}
        className="fixed inset-auto right-4 bottom-4 m-0 h-auto max-h-[calc(100dvh-2rem)] w-[min(30rem,calc(100vw-2rem))] translate-y-12 rounded-[var(--radius-md)] border border-[var(--grey)] bg-[var(--white)] p-0 text-[var(--ink)] opacity-0 shadow-[0_1.5rem_4rem_rgb(17_17_17/24%)] transition-[opacity,transform] duration-[560ms] [transform-origin:bottom_right] will-change-[opacity,transform] focus:outline-0 data-[motion-state=open]:translate-y-0 data-[motion-state=open]:opacity-100 data-[motion-state=closing]:translate-y-6 data-[motion-state=closing]:opacity-0 data-[motion-state=closing]:duration-[280ms] backdrop:bg-transparent backdrop:transition-colors backdrop:duration-[420ms] data-[motion-state=open]:backdrop:bg-black/40 data-[motion-state=closing]:backdrop:bg-transparent data-[motion-state=closing]:backdrop:duration-240 max-[47.99rem]:right-5 max-[47.99rem]:bottom-[max(1.25rem,env(safe-area-inset-bottom))] max-[47.99rem]:left-5 max-[47.99rem]:max-h-[calc(100dvh-2.5rem)] max-[47.99rem]:w-auto motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:backdrop:transition-none"
        aria-labelledby="native-personalized-demo-title"
        tabIndex={-1}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <DemoDialogContent
          category={category}
          categoryMode={categoryMode}
          error={error}
          isDetecting={isDetecting}
          personalizedUrl={personalizedUrl.href}
          step={step}
          website={website}
          onCategoryChange={(value) => {
            setCategory(value);
            setError("");
          }}
          onChooseCategory={() => {
            setCategory("");
            setCategoryMode("fallback");
            setError("");
            setStep("category");
          }}
          onClose={close}
          onContinue={() => saveDemoProfile(toDemoCategory(category))}
          onReset={resetCategoryFlow}
          onSubmitWebsite={submitWebsite}
          onWebsiteChange={(value) => {
            setWebsite(value);
            setError("");
          }}
        />
      </dialog>
    </>
  );
}
