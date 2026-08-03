import Image from "next/image";

import { PerformanceCampaignMap } from "@/components/marketing/performance-campaign-map";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import {
  CONSULTATION_BOOKING_URL,
  DEMO_BOOKING_URL,
} from "@/constants/site";

const campaignWork = [
  ["Campaign architecture", "Structure accounts, audiences, objectives and budgets around the way your business actually sells."],
  ["Catalogue and creative", "Coordinate product feeds, offers, images and ad formats so campaigns stay commercially relevant."],
  ["Daily optimization", "Review delivery, search terms, audiences, placements and spend signals without waiting for month end."],
  ["Performance reporting", "Connect advertising activity to useful actions across products, channels and the next campaign cycle."],
];

const process = [
  ["Align", "Clarify the commercial goal, priority products, margins, audience and channel role."],
  ["Launch", "Build the campaign structure, creative system, tracking and controlled starting budget."],
  ["Learn", "Read live performance signals and separate meaningful patterns from short term noise."],
  ["Reinvest", "Move attention and budget toward the products, audiences and ideas earning the next test."],
];

export function PerformanceMarketingReference() {
  return (
    <>
      <section className="growth-hero" id="top" aria-labelledby="growth-title">
        <div className="container growth-hero__inner">
          <div className="growth-hero__copy">
            <h1 id="growth-title">Turn attention into <span>profitable growth.</span></h1>
            <p>UniSouk plans and manages Meta and Google campaigns around your catalogue, commercial priorities and real selling context.</p>
            <div className="growth-hero__actions">
              <a className="button button--primary" href={CONSULTATION_BOOKING_URL}>Book a free consultation <ArrowRightIcon /></a>
              <a className="text-link text-link--arrow text-link--black" href="#campaign-system">See how we work</a>
            </div>
          </div>
          <PerformanceCampaignMap />
        </div>
      </section>

      <section className="channel-plan" aria-labelledby="channel-plan-title">
        <div className="container channel-plan__inner">
          <div className="channel-plan__intro">
            <h2 id="channel-plan-title">Two powerful channels. One growth thesis.</h2>
            <p>Meta creates and recaptures demand. Google captures intent. We define how both should work together for your catalogue.</p>
          </div>
          <div className="channel-lanes">
            <article>
              <div className="channel-lanes__identity">
                <span className="channel-logo"><Image src="/ecosystem-logos/meta.png" alt="Meta" width={180} height={180} /></span>
                <h3>Meta advertising</h3>
              </div>
              <p>Build discovery and remarketing campaigns around audiences, product stories and creative that can keep learning.</p>
              <ul><li><CheckIcon />Prospecting and retargeting</li><li><CheckIcon />Catalogue campaigns</li><li><CheckIcon />Creative testing</li></ul>
            </article>
            <article>
              <div className="channel-lanes__identity">
                <span className="channel-logo"><Image src="/ecosystem-logos/google-shopping.png" alt="Google" width={32} height={32} /></span>
                <h3>Google advertising</h3>
              </div>
              <p>Meet existing demand with disciplined search, shopping and product feed decisions tied to commercial value.</p>
              <ul><li><CheckIcon />Search campaigns</li><li><CheckIcon />Shopping and feeds</li><li><CheckIcon />Query optimization</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="campaign-system" id="campaign-system" aria-labelledby="campaign-system-title">
        <div className="container campaign-system__inner">
          <div className="campaign-system__intro">
            <h2 id="campaign-system-title">The campaign is only as strong as the system behind it.</h2>
            <p>Media buying sits inside a wider operating rhythm that keeps catalogue, creative and decisions moving together.</p>
          </div>
          <div className="campaign-work">
            {campaignWork.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="decision-loop" aria-labelledby="decision-loop-title">
        <div className="container decision-loop__inner">
          <div className="decision-loop__copy">
            <h2 id="decision-loop-title">A calmer way to improve campaign performance.</h2>
            <p>We use a deliberate learning loop, not constant reaction, to turn live signals into stronger decisions.</p>
            <a className="button button--secondary" href={DEMO_BOOKING_URL}>Discuss your growth plan <ArrowRightIcon /></a>
          </div>
          <ol className="decision-loop__steps">
            {process.map(([title, copy], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="growth-cta" aria-labelledby="growth-cta-title">
        <div className="container growth-cta__inner">
          <div>
            <h2 id="growth-cta-title">Make every campaign part of a clearer growth plan.</h2>
            <p>Tell us where you sell, what you want to grow and how your current campaigns are performing.</p>
          </div>
          <a className="button button--primary" href={CONSULTATION_BOOKING_URL}>Book a free consultation <ArrowRightIcon /></a>
        </div>
      </section>
    </>
  );
}
