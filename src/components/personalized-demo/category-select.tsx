import { useRef, useState } from "react";

import { BUSINESS_CATEGORIES } from "@/constants/demo";

type CategorySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (preferredIndex?: number) => {
    const selectedIndex = BUSINESS_CATEGORIES.findIndex(
      (category) => category === value,
    );
    const optionIndex =
      preferredIndex ?? (selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
    window.requestAnimationFrame(() => optionRefs.current[optionIndex]?.focus());
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const selectCategory = (category: string) => {
    onChange(category);
    closeMenu(true);
  };

  return (
    <div
      className="grid gap-2"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <button
        ref={triggerRef}
        id="native-demo-category"
        className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--grey-dark)] bg-[var(--white)] py-3 px-4 text-left text-base text-[var(--ink)] transition-[background-color,border-color,box-shadow] duration-150 aria-expanded:border-[var(--ink)] aria-expanded:bg-[var(--mist)] focus-visible:border-[var(--orange-ink)] focus-visible:outline-0 focus-visible:shadow-[0_0_0_2px_var(--orange-ink)] motion-reduce:transition-none [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 [&_svg]:fill-none [&_svg]:stroke-[var(--orange-ink)] [&_svg]:stroke-[1.8] [&_svg]:transition-transform [&_svg]:duration-[180ms] aria-expanded:[&_svg]:rotate-180 motion-reduce:[&_svg]:transition-none"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="native-demo-category-options"
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openMenu(
              event.key === "ArrowUp" ? BUSINESS_CATEGORIES.length - 1 : 0,
            );
          }
        }}
      >
        <span
          className="data-[placeholder=true]:text-[var(--text-muted)]"
          data-placeholder={!value}
        >
          {value || "Choose a category"}
        </span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="m6 8 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <div
          id="native-demo-category-options"
          className="grid max-h-[min(15rem,38dvh)] overflow-y-auto overscroll-contain rounded-[var(--radius-sm)] border border-[var(--ink)] bg-[var(--white)] p-2 shadow-[0_0.75rem_2rem_rgb(17_17_17/12%)] [scrollbar-width:thin]"
          role="listbox"
          aria-label="Business category"
        >
          {BUSINESS_CATEGORIES.map((category, index) => (
            <button
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-[calc(var(--radius-sm)-2px)] border-0 bg-transparent py-[0.65rem] px-3 text-left text-[0.875rem] leading-[1.3] text-[var(--ink)] hover:bg-[var(--mist)] focus-visible:bg-[var(--mist)] focus-visible:outline-0 aria-selected:bg-[var(--ink)] aria-selected:text-[var(--white)] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:fill-none [&_svg]:stroke-[var(--orange-ink)] [&_svg]:stroke-2 [&_svg]:opacity-0 aria-selected:[&_svg]:opacity-100"
              type="button"
              role="option"
              aria-selected={value === category}
              key={category}
              onClick={() => selectCategory(category)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                  event.preventDefault();
                  const direction = event.key === "ArrowDown" ? 1 : -1;
                  const nextIndex =
                    (index + direction + BUSINESS_CATEGORIES.length) %
                    BUSINESS_CATEGORIES.length;
                  optionRefs.current[nextIndex]?.focus();
                } else if (event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  optionRefs.current[
                    event.key === "Home" ? 0 : BUSINESS_CATEGORIES.length - 1
                  ]?.focus();
                } else if (event.key === "Escape") {
                  event.preventDefault();
                  closeMenu(true);
                }
              }}
            >
              <span>{category}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m5 10 3 3 7-7" />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
