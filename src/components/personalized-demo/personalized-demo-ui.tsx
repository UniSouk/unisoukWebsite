import type { FormEvent, Ref } from "react";
import Image from "next/image";

import { ArrowRightIcon, CloseIcon } from "@/components/ui/icon";

import { CategorySelect } from "./category-select";

const demoFormClass =
  "grid gap-3 [&_label]:flex [&_label]:items-baseline [&_label]:justify-between [&_label]:gap-3 [&_label]:text-xs [&_label]:leading-[1.4] [&_label]:font-semibold [&_label]:text-[var(--ink)] [&_label_span]:font-normal [&_label_span]:text-[var(--text-muted)]";
const spinnerClass =
  "inline-block h-[1.125rem] w-[1.125rem] shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none";

type DemoLauncherProps = {
  launcherRef: Ref<HTMLButtonElement>;
  onOpen: () => void;
};

export function DemoLauncher({ launcherRef, onOpen }: DemoLauncherProps) {
  return (
    <aside
      className="fixed right-[max(1.5rem,env(safe-area-inset-right))] bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+4.55rem)] z-90 max-[74.99rem]:right-[calc(max(1.25rem,env(safe-area-inset-right))+4.05rem)] max-[74.99rem]:bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
      aria-label="Personalized demo"
    >
      <button
        ref={launcherRef}
        type="button"
        className="flex min-h-[3.3rem] cursor-pointer items-center gap-4 rounded-full border-0 bg-[var(--ink)] py-3 pr-3 pl-4 text-[0.8rem] font-medium text-[var(--white)] max-[74.99rem]:h-[3.3rem] max-[74.99rem]:w-[3.3rem] max-[74.99rem]:justify-center max-[74.99rem]:gap-0 max-[74.99rem]:p-0"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label="Get your personalized demo"
      >
        <span aria-hidden="true" className="max-[74.99rem]:hidden">
          Get your personalized demo
        </span>
        <span
          className="grid h-8 w-8 place-items-center rounded-full bg-[var(--orange)] text-[var(--ink)]"
          aria-hidden="true"
        >
          <ArrowRightIcon />
        </span>
      </button>
    </aside>
  );
}

type DemoDialogContentProps = {
  category: string;
  categoryMode: "detected" | "fallback";
  error: string;
  isDetecting: boolean;
  personalizedUrl: string;
  step: "website" | "category";
  website: string;
  onCategoryChange: (category: string) => void;
  onChooseCategory: () => void;
  onClose: () => void;
  onContinue: () => void;
  onReset: () => void;
  onSubmitWebsite: (event: FormEvent<HTMLFormElement>) => void;
  onWebsiteChange: (website: string) => void;
};

export function DemoDialogContent({
  category,
  categoryMode,
  error,
  isDetecting,
  personalizedUrl,
  step,
  website,
  onCategoryChange,
  onChooseCategory,
  onClose,
  onContinue,
  onReset,
  onSubmitWebsite,
  onWebsiteChange,
}: DemoDialogContentProps) {
  return (
    <div className="grid max-h-[calc(100dvh-2rem)] grid-rows-[auto_minmax(0,1fr)] max-[47.99rem]:max-h-[calc(100dvh-2.5rem)]">
      <header className="flex min-h-18 items-center justify-between gap-4 border-b border-[var(--grey)] bg-[var(--white)] py-4 px-6 max-[47.99rem]:min-h-16 max-[47.99rem]:py-3 max-[47.99rem]:px-4">
        <Image
          className="h-auto w-[7.75rem]"
          src="/unisouk-logo.svg"
          alt="UniSouk"
          width={165}
          height={42}
        />
        <button
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[var(--grey-dark)] bg-[var(--white)] text-2xl text-[var(--ink)] transition-colors duration-[180ms] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--white)] motion-reduce:transition-none"
          type="button"
          onClick={onClose}
          aria-label="Close personalized demo chat"
        >
          <CloseIcon />
        </button>
      </header>
      <div
        className="grid content-start gap-6 overflow-y-auto overscroll-contain bg-[var(--white)] p-6 max-[47.99rem]:gap-4 max-[47.99rem]:p-4"
        aria-live="polite"
      >
        <div className="grid gap-2 border-b border-[var(--ink)] pb-6 max-[47.99rem]:pb-4">
          <span className="text-xs leading-[1.2] font-semibold tracking-[0.08em] text-[var(--orange-ink)] uppercase">
            Personalized demo
          </span>
          <h2
            className="m-0 max-w-[14ch] !text-[1.75rem] !leading-[1.05] !tracking-[var(--tracking-heading)] max-[47.99rem]:!text-2xl"
            id="native-personalized-demo-title"
          >
            See UniSouk for your business.
          </h2>
          <p className="m-0 max-w-[39ch] text-base leading-[1.55] text-[var(--text-muted)] max-[47.99rem]:text-[0.9375rem]">
            Share your website and we’ll suggest the best category for your demo.
          </p>
        </div>
        {step === "website" && (
          <form onSubmit={onSubmitWebsite} className={demoFormClass}>
            <label htmlFor="native-demo-website">
              Business website <span>Optional</span>
            </label>
            <div className="grid grid-cols-[minmax(0,1fr)_3.5rem] overflow-hidden rounded-[var(--radius-sm)] border border-[var(--grey-dark)] bg-[var(--white)] transition-[border-color,box-shadow] duration-150 focus-within:border-[var(--orange-ink)] focus-within:shadow-[0_0_0_2px_var(--orange-ink)] motion-reduce:transition-none [&_input]:min-h-14 [&_input]:min-w-0 [&_input]:rounded-none [&_input]:border-0 [&_input]:bg-[var(--white)] [&_input]:py-3 [&_input]:px-4 [&_input]:text-base [&_input]:text-[var(--ink)] [&_input]:outline-0 [&_button]:cursor-pointer [&_button]:rounded-none [&_button]:border-0 [&_button]:bg-[var(--ink)] [&_button]:text-[var(--orange)] [&_button]:transition-colors [&_button]:duration-[180ms] hover:[&_button]:bg-[var(--orange)] hover:[&_button]:text-[var(--ink)] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-65 motion-reduce:[&_button]:transition-none">
              <input
                id="native-demo-website"
                type="text"
                inputMode="url"
                value={website}
                onChange={(event) => onWebsiteChange(event.target.value)}
                autoComplete="url"
                placeholder="yourstore.com"
                disabled={isDetecting}
              />
              <button
                className="grid place-items-center"
                type="submit"
                aria-label={
                  isDetecting
                    ? "Identifying category from website"
                    : "Identify category from website"
                }
                aria-busy={isDetecting}
                disabled={isDetecting}
              >
                {isDetecting ? (
                  <span className={spinnerClass} aria-hidden="true" />
                ) : (
                  <ArrowRightIcon />
                )}
              </button>
            </div>
            <button
              className="inline-flex min-h-11 cursor-pointer items-center justify-start gap-2 border-0 bg-transparent py-2 px-0 text-left text-[0.8125rem] leading-[1.4] text-[var(--text-muted)] underline decoration-[var(--grey-dark)] underline-offset-[0.22em] disabled:cursor-wait disabled:opacity-55 [&_.ui-icon]:text-base [&_.ui-icon]:text-[var(--orange-ink)]"
              type="button"
              onClick={onChooseCategory}
              disabled={isDetecting}
            >
              No website? Choose a category manually <ArrowRightIcon />
            </button>
            {isDetecting && (
              <div
                className="mt-2 flex items-center gap-3 border-l-[3px] border-[var(--orange)] bg-[var(--mist)] py-3 px-4 text-[0.8125rem] leading-[1.45] text-[var(--text-muted)]"
                role="status"
              >
                <span className={spinnerClass} aria-hidden="true" />
                <span>Analyzing your website and finding its category…</span>
              </div>
            )}
          </form>
        )}
        {step === "category" && website && (
          <p className="m-0 border-l-[3px] border-[var(--orange)] bg-[var(--mist)] py-3 px-4 text-[0.8125rem] leading-[1.45] text-[var(--text-muted)] [overflow-wrap:anywhere]">
            {website}
          </p>
        )}
        {step === "category" && (
          <div className={demoFormClass}>
            <div className="grid gap-3 [&>input]:min-h-14 [&>input]:w-full [&>input]:rounded-[var(--radius-sm)] [&>input]:border [&>input]:border-[var(--grey-dark)] [&>input]:bg-[var(--white)] [&>input]:py-3 [&>input]:px-4 [&>input]:text-base [&>input]:text-[var(--ink)] [&>input]:transition-[border-color,box-shadow] [&>input]:duration-150 [&>input:focus]:border-[var(--orange-ink)] [&>input:focus]:outline-0 [&>input:focus]:shadow-[0_0_0_2px_var(--orange-ink)] motion-reduce:[&>input]:transition-none">
              {categoryMode === "detected" ? (
                <>
                  <label htmlFor="native-demo-category">
                    Confirm or edit your business category
                  </label>
                  <input
                    id="native-demo-category"
                    value={category}
                    onChange={(event) => onCategoryChange(event.target.value)}
                    placeholder="For example: beauty or fashion"
                  />
                </>
              ) : (
                <>
                  <label htmlFor="native-demo-category">
                    Select your business category
                  </label>
                  <CategorySelect value={category} onChange={onCategoryChange} />
                </>
              )}
            </div>
            <div className="flex flex-wrap items-stretch justify-between gap-3 pt-2 max-[47.99rem]:flex-col-reverse">
              <button
                className="min-h-12 cursor-pointer rounded-[var(--radius-sm)] border border-[var(--grey-dark)] bg-[var(--white)] py-3 px-4 text-[0.875rem] font-medium text-[var(--ink)] hover:border-[var(--ink)] max-[47.99rem]:w-full"
                type="button"
                onClick={onReset}
              >
                Reset
              </button>
              {category.trim() && (
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-sm)] border-0 bg-[var(--ink)] py-3 px-4 text-center text-[0.875rem] leading-[1.25] font-medium text-[var(--white)] no-underline max-[47.99rem]:w-full [&_.ui-icon]:text-[var(--orange)]"
                  href={personalizedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onContinue}
                >
                  Continue to your personalized demo <ArrowRightIcon />
                </a>
              )}
            </div>
          </div>
        )}
        {error && (
          <p className="m-0 text-xs leading-[1.45] text-[#9f220f]">{error}</p>
        )}
        {step === "category" && category.trim() && (
          <p className="m-0 border-t border-[var(--grey)] pt-2 text-left text-xs leading-[1.5] text-[var(--text-muted)]">
            Your selection is used only to personalize your UniSouk demo.
          </p>
        )}
      </div>
    </div>
  );
}
