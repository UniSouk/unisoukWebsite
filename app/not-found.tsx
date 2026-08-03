import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <main
      className="grid min-h-svh place-content-center justify-items-start gap-6 bg-[var(--mist,#f5f5f5)] p-[var(--gutter,1.5rem)] text-[var(--ink,#171717)] [&>p]:m-0 [&>p]:font-bold [&>p]:text-[var(--orange-ink,#b85a00)]"
      id="main-content"
    >
      <p>404</p>
      <h1 className="m-0 max-w-[12ch] font-[family-name:var(--font-heading,sans-serif)] text-[clamp(2.5rem,7vw,5rem)] !leading-[0.98]">
        That page could not be found.
      </h1>
      <Link
        className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-transparent bg-[var(--ink)] py-[0.85rem] px-[1.65rem] font-medium leading-none text-[var(--white)] no-underline [&_.ui-icon]:h-[1.35rem] [&_.ui-icon]:w-[1.35rem] [&_.ui-icon]:text-[var(--orange)]"
        href="/"
      >
        Return home
        <ArrowRightIcon />
      </Link>
    </main>
  );
}
