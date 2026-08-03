export const siteContainerClass =
  "mx-auto w-full max-w-[var(--container)] px-[var(--gutter)]";

const buttonBase =
  "inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-transparent px-[1.65rem] py-[0.85rem] font-medium leading-none no-underline transition-all duration-[180ms] [&_.ui-icon]:h-[1.35rem] [&_.ui-icon]:w-[1.35rem] [&_.ui-icon]:shrink-0 [&_.ui-icon]:text-[var(--orange)] [&_.ui-icon]:transition-transform [&_.ui-icon]:duration-[180ms] hover:-translate-y-0.5 hover:[&_.ui-icon]:translate-x-1 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:[&_.ui-icon]:transition-none";

export const buttonPrimaryClass = `${buttonBase} bg-[var(--ink)] text-[var(--white)] hover:bg-[oklch(25%_0_0)]`;
export const buttonSecondaryClass = `${buttonBase} border-[var(--grey)] bg-[var(--white)] text-[var(--grey-dark)] hover:border-[var(--orange-ink)] hover:text-[var(--ink)]`;
