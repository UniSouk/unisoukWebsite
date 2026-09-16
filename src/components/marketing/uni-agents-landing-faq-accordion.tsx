"use client";

import { useState } from "react";

import { UNI_AGENTS_FAQ } from "@/constants/uni-agents";

/**
 * Reproduces the static reference's single-open-at-a-time FAQ accordion
 * (script.js `.faq-item button` click handler). The first item is open by
 * default, matching `index.html`'s `.faq-item.open` default state.
 */
export function UniAgentsFaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    UNI_AGENTS_FAQ[0]?.question ?? null,
  );

  return (
    <div className="ual-accordion">
      {UNI_AGENTS_FAQ.map((item, index) => {
        const isOpen = openQuestion === item.question;
        const panelId = `ual-faq-panel-${index}`;
        return (
          <article
            className={`ual-faq-item${isOpen ? " is-open" : ""}`}
            key={item.question}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpenQuestion(isOpen ? null : item.question)
              }
            >
              <span>{item.question}</span>
              <i />
            </button>
            <div className="ual-faq-answer" id={panelId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
