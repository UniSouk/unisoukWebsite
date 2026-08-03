"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CloseIcon,
} from "@/components/ui/icon";
import {
  INTEGRATION_CATEGORY_META,
  INTEGRATION_CATEGORY_ORDER,
  INTEGRATIONS,
  type Integration,
  type IntegrationCategory,
} from "@/constants/integrations";
import { DEMO_BOOKING_URL } from "@/constants/site";

type Filter = "all" | IntegrationCategory;

export function IntegrationDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Integration | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return INTEGRATIONS.filter((integration) => {
      if (filter !== "all" && integration.category !== filter) return false;
      if (!normalized) return true;
      return [
        integration.name,
        integration.description,
        INTEGRATION_CATEGORY_META[integration.category].name,
        ...integration.capabilities,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    });
  }, [filter, query]);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        INTEGRATION_CATEGORY_ORDER.map((category) => [
          category,
          INTEGRATIONS.filter((integration) => integration.category === category).length,
        ]),
      ) as Record<IntegrationCategory, number>,
    [],
  );

  const openIntegration = (integration: Integration) => {
    setSelected(integration);
    window.requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  return (
    <>
      <div className="directory-tools">
        <div className="integration-search-wrap">
          <label className="integration-search">
            <span className="sr-only">Search integration channels</span>
            <input
              type="search"
              value={query}
              placeholder="Search integrations"
              autoComplete="off"
              aria-controls="integration-channel-results"
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button type="button" onClick={() => setQuery("")}>Clear</button>
            )}
          </label>
          <div className="integration-search-results" id="integration-channel-results" role="listbox" aria-label="Matching integration channels" hidden={!query}>
            {matches.map((integration) => (
              <button type="button" role="option" aria-selected="false" onClick={() => document.getElementById(`integration-${integration.slug}`)?.focus()} key={integration.slug}>
                <span className={`search-result__logo${integration.logo ? "" : " search-result__logo--mark"}`}>
                  {integration.logo ? <Image src={integration.logo} alt="" width={48} height={48} /> : integration.mark}
                </span>
                <span className="search-result__copy"><strong>{integration.name}</strong><small>{INTEGRATION_CATEGORY_META[integration.category].name}</small></span>
                <span aria-hidden="true"><ArrowUpRightIcon /></span>
              </button>
            ))}
            {matches.length === 0 && <p>No channels found. Try another name.</p>}
          </div>
        </div>
        <div className="category-filters" aria-label="Filter integrations by category">
          <button className={filter === "all" ? "is-active" : ""} type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All <span>{INTEGRATIONS.length}</span></button>
          {INTEGRATION_CATEGORY_ORDER.map((category) => (
            <button className={filter === category ? "is-active" : ""} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)} key={category}>
              {INTEGRATION_CATEGORY_META[category].name} <span>{counts[category]}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="directory-status" aria-live="polite" aria-atomic="true">
        {matches.length === INTEGRATIONS.length
          ? `Showing all ${INTEGRATIONS.length} integrations`
          : `${matches.length} channel${matches.length === 1 ? "" : "s"} found`}
      </p>

      {matches.length > 0 ? (
        <div className="directory-groups">
          {INTEGRATION_CATEGORY_ORDER.map((category) => {
            const items = matches.filter((integration) => integration.category === category);
            if (items.length === 0) return null;
            return (
              <section className="directory-group" aria-labelledby={`category-${category}`} key={category}>
                <header><h3 id={`category-${category}`}>{INTEGRATION_CATEGORY_META[category].name}</h3><p>{INTEGRATION_CATEGORY_META[category].description}</p></header>
                <div className="integration-grid">
                  {items.map((integration) => (
                    <article id={`integration-${integration.slug}`} className="integration-card" tabIndex={-1} key={integration.slug}>
                      <div className="integration-card__top">
                        <span className={`integration-logo${integration.logo ? "" : " integration-logo--mark"}`}>
                          {integration.logo ? <Image src={integration.logo} width={48} height={48} alt="" /> : integration.mark}
                        </span>
                        <div className="integration-card__meta"><span>{INTEGRATION_CATEGORY_META[integration.category].name}</span></div>
                      </div>
                      <div><h4>{integration.name}</h4><p>{integration.description}</p></div>
                      <ul aria-label={`${integration.name} capabilities`}>
                        {integration.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                      </ul>
                      <button className="integration-card__action" type="button" onClick={() => openIntegration(integration)}>
                        View integration <span aria-hidden="true"><ArrowUpRightIcon /></span>
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="directory-empty">
          <h3>No integration matches that search.</h3>
          <p>Try a broader term, choose another category, or tell us which connection you need.</p>
          <button className="button button--secondary" type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Show all integrations <ArrowRightIcon /></button>
        </div>
      )}

      <dialog className="integration-dialog" ref={dialogRef} aria-labelledby="integration-dialog-title" onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}>
        <div className="integration-dialog__shell">
          <header><span>{selected ? INTEGRATION_CATEGORY_META[selected.category].name : "Integration"}</span><button type="button" aria-label="Close integration details" onClick={() => dialogRef.current?.close()}><CloseIcon /></button></header>
          <div className="integration-dialog__body">
            <span className="integration-logo integration-dialog__logo">
              {selected?.logo ? <Image src={selected.logo} alt="" width={48} height={48} /> : <i>{selected?.mark}</i>}
            </span>
            <h2 className="section-heading--compact" id="integration-dialog-title">{selected?.name ?? "Integration"}</h2>
            <p>{selected?.description}</p>
            <div><span>UniSouk capabilities</span><ul>{selected?.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>
          </div>
          <footer><p>Want to understand how this fits your current workflow?</p><a className="button button--primary" href={DEMO_BOOKING_URL}>Book a free demo <ArrowRightIcon /></a></footer>
        </div>
      </dialog>
    </>
  );
}
