import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PersonalizedDemoChat } from "@/components/personalized-demo/personalized-demo-chat";
import { SUPPORT_WHATSAPP_NUMBER } from "@/constants/contact";

const focusWithinPage =
  "[&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-offset-3 [&_a:focus-visible]:outline-[var(--orange-ink)] [&_button:focus-visible]:outline-3 [&_button:focus-visible]:outline-offset-3 [&_button:focus-visible]:outline-[var(--orange-ink)] [&_input:focus-visible]:outline-3 [&_input:focus-visible]:outline-offset-3 [&_input:focus-visible]:outline-[var(--orange-ink)] [&_summary:focus-visible]:outline-3 [&_summary:focus-visible]:outline-offset-3 [&_summary:focus-visible]:outline-[var(--orange-ink)]";

export { siteContainerClass } from "@/components/layout/site-shell-styles";

function WhatsAppChat() {
  const message = encodeURIComponent("What services you provide");
  return (
    <aside
      className="fixed right-[max(1.5rem,env(safe-area-inset-right))] bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-90 max-[74.99rem]:right-[max(1.25rem,env(safe-area-inset-right))] max-[74.99rem]:bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
      aria-label="WhatsApp support"
    >
      <a
        className="group/whatsapp block rounded-full text-[var(--white)] no-underline"
        href={`https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with UniSouk on WhatsApp"
      >
        <span
          className="grid aspect-square w-[3.55rem] place-items-center rounded-full bg-[#25d366] shadow-[0_5px_14px_rgb(14_108_56/24%)] transition-all duration-[220ms] group-hover/whatsapp:-translate-y-0.5 group-hover/whatsapp:scale-[1.03] group-hover/whatsapp:shadow-[0_7px_18px_rgb(14_108_56/28%)] max-[47.99rem]:w-[3.3rem] motion-reduce:transition-none"
          aria-hidden="true"
        >
          <svg
            className="h-[1.95rem] w-[1.95rem] fill-current"
            viewBox="0 0 32 32"
            role="presentation"
          >
            <path d="M16 3.1A12.7 12.7 0 0 0 5.2 22.5L3.5 28.8l6.5-1.7A12.7 12.7 0 1 0 16 3.1Zm0 23.1c-2 0-3.9-.6-5.5-1.5l-.4-.2-3.8 1 1-3.7-.3-.4a10.4 10.4 0 1 1 9 4.8Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.9-.9-3.2-1.7-4.5-3.9-.3-.4.3-.4.9-1.4.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3 .9 4.1.7.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.3-.4-.4-.7-.6Z" />
          </svg>
        </span>
      </a>
    </aside>
  );
}

export function NativeSiteShell({ children }: { children: ReactNode }) {
  return (
    <div
      className={`min-h-svh bg-[var(--white)] text-[var(--ink)] ${focusWithinPage}`}
      id="top"
    >
      <a
        className="fixed top-3 left-3 z-1000 -translate-y-[calc(100%+1rem)] rounded-[var(--radius-sm)] bg-[var(--ink)] px-4 py-3 font-semibold text-[var(--white)] no-underline focus:translate-y-0 motion-reduce:transition-none"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <PersonalizedDemoChat />
      <WhatsAppChat />
    </div>
  );
}
