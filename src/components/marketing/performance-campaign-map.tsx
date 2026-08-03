import type { CSSProperties } from "react";
import Image from "next/image";

const leftCampaigns = [
  { name: "Meta Ads", spend: "₹1,25,400", roas: "5.8×", logo: "/ecosystem-logos/meta.png" },
  { name: "Google Ads", spend: "₹98,600", roas: "4.7×", logo: "/ecosystem-logos/google-ads.svg" },
  { name: "Instagram Ads", spend: "₹47,300", roas: "6.3×", logo: "/ecosystem-logos/instagram.svg" },
];

const rightCampaigns = [
  { name: "Amazon Ads", spend: "₹1,65,200", roas: "6.1×", logo: "/ecosystem-logos/amazon-app-icon-clean.png" },
  { name: "Flipkart Ads", spend: "₹68,900", roas: "5.2×", logo: "/ecosystem-logos/flipkart-mark.svg" },
  { name: "YouTube Ads", spend: "₹36,800", roas: "4.4×", logo: "/ecosystem-logos/youtube.svg" },
];

type Campaign = (typeof leftCampaigns)[number];

function CampaignColumn({ campaigns, side }: { campaigns: Campaign[]; side: "left" | "right" }) {
  return (
    <div className={`campaign-map__column campaign-map__column--${side}`}>
      {campaigns.map((campaign, index) => (
        <article
          className="campaign-node"
          style={{ "--node-index": index } as CSSProperties}
          key={campaign.name}
        >
          <span className="campaign-node__mark" aria-hidden="true"><Image src={campaign.logo} alt="" width={48} height={48} /></span>
          <div className="campaign-node__details">
            <strong>{campaign.name}</strong>
            <span>Spend <b>{campaign.spend}</b></span>
          </div>
          <div className="campaign-node__return"><span>ROAS</span><strong>{campaign.roas}</strong></div>
        </article>
      ))}
    </div>
  );
}

export function PerformanceCampaignMap() {
  return (
    <div className="campaign-map" aria-label="Meta and Google campaigns connected through one growth plan managed by UniSouk">
      <svg className="campaign-map__routes" viewBox="0 0 760 430" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="campaign-arrow-meta" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#7567E8" /></marker>
          <marker id="campaign-arrow-google" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#4285F4" /></marker>
          <marker id="campaign-arrow-instagram" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#D946A0" /></marker>
          <marker id="campaign-arrow-amazon" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#F07F4F" /></marker>
          <marker id="campaign-arrow-flipkart" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#E89B19" /></marker>
          <marker id="campaign-arrow-youtube" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#FF375F" /></marker>
        </defs>
        <g className="campaign-route campaign-route--meta">
          <circle cx="264" cy="130" r="3.25" /><path d="M264 130 C280 130 288 170 306 186" markerEnd="url(#campaign-arrow-meta)" /><circle cx="306" cy="186" r="2.5" />
        </g>
        <g className="campaign-route campaign-route--google">
          <circle cx="264" cy="216" r="3.25" /><path d="M264 216 H294" markerEnd="url(#campaign-arrow-google)" /><circle cx="294" cy="216" r="2.5" />
        </g>
        <g className="campaign-route campaign-route--instagram">
          <circle cx="264" cy="303" r="3.25" /><path d="M264 303 C280 303 288 260 306 244" markerEnd="url(#campaign-arrow-instagram)" /><circle cx="306" cy="244" r="2.5" />
        </g>
        <g className="campaign-route campaign-route--amazon">
          <circle cx="454" cy="186" r="2.5" /><path d="M454 186 C472 170 480 130 496 130" markerEnd="url(#campaign-arrow-amazon)" /><circle cx="496" cy="130" r="3.25" />
        </g>
        <g className="campaign-route campaign-route--flipkart">
          <circle cx="466" cy="216" r="2.5" /><path d="M466 216 H496" markerEnd="url(#campaign-arrow-flipkart)" /><circle cx="496" cy="216" r="3.25" />
        </g>
        <g className="campaign-route campaign-route--youtube">
          <circle cx="454" cy="244" r="2.5" /><path d="M454 244 C472 260 480 303 496 303" markerEnd="url(#campaign-arrow-youtube)" /><circle cx="496" cy="303" r="3.25" />
        </g>
      </svg>
      <CampaignColumn campaigns={leftCampaigns} side="left" />
      <div className="campaign-map__core">
        <span className="campaign-map__megaphone" aria-hidden="true">
          <svg viewBox="0 0 32 32"><path d="M5 14v4c0 1.1.9 2 2 2h3l2 6h4l-2-6h2l9 4V8l-9 4H7c-1.1 0-2 .9-2 2Z" /><path d="M25 13c1.5.8 2.5 2.1 2.5 3.5S26.5 19.2 25 20" /></svg>
        </span>
        <strong>Your Campaign</strong>
        <span className="campaign-map__status"><i /> Optimizing</span>
      </div>
      <CampaignColumn campaigns={rightCampaigns} side="right" />
    </div>
  );
}
