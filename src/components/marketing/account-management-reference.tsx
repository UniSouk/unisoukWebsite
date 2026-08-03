import Image from "next/image";

import { ArrowRightIcon } from "@/components/ui/icon";
import { CONSULTATION_BOOKING_URL } from "@/constants/site";
import { AccountManagementSections, deskItems } from "./account-management-sections";

export function AccountManagementReference() {
  return (<>
      <section
        className="management-hero"
        aria-labelledby="management-title"
      >
        <div className="container management-hero__inner">
          <div className="management-hero__copy">
            <h1 id="management-title">
              Your commerce accounts. Properly managed.
            </h1>
            <p>
              A dedicated UniSouk team runs the work behind your marketplace
              and quick commerce growth, from catalogue quality to daily
              operations and performance.
            </p>
            <div className="management-hero__actions">
              <a className="button button--primary" href={CONSULTATION_BOOKING_URL}>
                Book a free consultation
                <ArrowRightIcon />
              </a>
              <a
                className="text-link text-link--arrow text-link--black"
                href="#responsibility"
              >
                See what we manage
              </a>
            </div>
          </div>
          <div
            className="account-desk"
            aria-label="Illustration of a UniSouk account management desk"
          >
            <header>
              <div className="account-desk__identity">
                <Image src="/unisouk-mark.svg" width={42} height={22} alt="" />
                <div>
                  <strong>Account desk</strong>
                  <span>One team across every channel</span>
                </div>
              </div>
              <span className="account-desk__live">
                <i /> Active this week
              </span>
            </header>
            <div className="account-desk__summary">
              <div>
                <span>Catalogue</span>
                <strong>Quality review</strong>
              </div>
              <div>
                <span>Operations</span>
                <strong>Monitored daily</strong>
              </div>
              <div>
                <span>Growth</span>
                <strong>Next actions ready</strong>
              </div>
            </div>
            <div className="account-desk__queue">
              {deskItems.map((item) => (
                <article key={item.title}>
                  <span className="channel-mark">
                    <Image src={item.image} alt={item.alt} width={48} height={48} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.copy}</span>
                  </div>
                  <em>{item.state}</em>
                </article>
              ))}
              <article>
                <span className="channel-mark channel-mark--word">QC</span>
                <div>
                  <strong>Quick commerce expansion</strong>
                  <span>Catalogue requirements mapped</span>
                </div>
                <em>Planning</em>
              </article>
            </div>
            <div className="account-desk__pulse" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      </section>
      <AccountManagementSections />
    </>);
}
