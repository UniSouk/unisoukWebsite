export function UnifiedCommerceBoard() {
  return (
<div
  className="commerce-board"
 
  role="img"
  aria-label="Amazon, Shopify, Meesho and ONDC connect to one UniSouk workspace for listings, inventory, orders, shipping and growth"
>
  <svg className="commerce-board__canvas" viewBox="0 0 640 540" aria-hidden="true">
    <defs>
      <linearGradient id="board-surface" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#f7f7f7" />
      </linearGradient>
      <linearGradient id="board-module" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#f3f3f4" />
      </linearGradient>
      <linearGradient id="board-scan" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff8a00" stopOpacity="0" />
        <stop offset=".5" stopColor="#ff8a00" stopOpacity=".12" />
        <stop offset="1" stopColor="#ff8a00" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="board-ambient">
        <stop offset="0" stopColor="#a8abb2" stopOpacity=".12" />
        <stop offset=".72" stopColor="#ff8a00" stopOpacity=".035" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <filter id="board-shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#18191d" floodOpacity=".12" />
      </filter>
      <filter id="board-chip-shadow" x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#18191d" floodOpacity=".1" />
      </filter>
      <filter id="board-pulse-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <clipPath id="board-clip"><rect x="126" y="55" width="454" height="430" rx="18" /></clipPath>
      <path id="channel-path-one" d="M95 157H140" />
      <path id="channel-path-two" d="M95 223H140" />
      <path id="channel-path-three" d="M95 289H140" />
      <path id="channel-path-four" d="M95 355H140" />
    </defs>

    <ellipse cx="330" cy="270" rx="306" ry="246" fill="url(#board-ambient)" />

    <g className="commerce-board__channel-dock" filter="url(#board-chip-shadow)">
      <rect x="32" y="109" width="86" height="294" rx="16" fill="#f4f4f5" />
      <text x="75" y="91" fill="#6f7279" fontSize="11" textAnchor="middle">Sales channels</text>

      <g className="commerce-board__channel" transform="translate(48 132)">
        <rect width="54" height="50" rx="12" fill="#fff" />
        <image href="/ecosystem-logos/amazon-app-icon-clean.png" x="12" y="10" width="30" height="30" preserveAspectRatio="xMidYMid meet" />
      </g>
      <g className="commerce-board__channel" transform="translate(48 198)">
        <rect width="54" height="50" rx="12" fill="#fff" />
        <image href="/ecosystem-logos/shopify-mark.svg" x="13" y="9" width="28" height="32" preserveAspectRatio="xMidYMid meet" />
      </g>
      <g className="commerce-board__channel" transform="translate(48 264)">
        <rect width="54" height="50" rx="12" fill="#fff" />
        <image href="/ecosystem-logos/meesho.png" x="10" y="10" width="34" height="30" preserveAspectRatio="xMidYMid meet" />
      </g>
      <g className="commerce-board__channel" transform="translate(48 330)">
        <rect width="54" height="50" rx="12" fill="#fff" />
        <image href="/ecosystem-logos/ondc.svg" x="7" y="15" width="40" height="20" preserveAspectRatio="xMidYMid meet" />
      </g>
    </g>

    <g className="commerce-board__channel-lines" fill="none" stroke="#c9cbd0" strokeDasharray="2 5" strokeLinecap="round" strokeWidth="1">
      <use href="#channel-path-one" /><use href="#channel-path-two" /><use href="#channel-path-three" /><use href="#channel-path-four" />
    </g>
    <g className="commerce-board__channel-pulses" fill="#ff8a00" filter="url(#board-pulse-glow)">
      <circle r="3"><animateMotion dur="9s" repeatCount="indefinite"><mpath href="#channel-path-one" /></animateMotion></circle>
      <circle r="3"><animateMotion begin="-2.25s" dur="9s" repeatCount="indefinite"><mpath href="#channel-path-two" /></animateMotion></circle>
      <circle r="3"><animateMotion begin="-4.5s" dur="9s" repeatCount="indefinite"><mpath href="#channel-path-three" /></animateMotion></circle>
      <circle r="3"><animateMotion begin="-6.75s" dur="9s" repeatCount="indefinite"><mpath href="#channel-path-four" /></animateMotion></circle>
    </g>

    <g className="commerce-board__workspace" filter="url(#board-shadow)">
      <rect x="126" y="55" width="454" height="430" rx="18" fill="url(#board-surface)" />
      <path d="M126 121H580" stroke="#dedfe2" />
      <rect x="140" y="136" width="3" height="327" rx="1.5" fill="#ff8a00" opacity=".82" />

      <g className="commerce-board__header">
        <rect x="151" y="74" width="42" height="30" rx="8" fill="#fff" />
        <image href="/unisouk-mark.svg" x="158" y="81" width="28" height="16" preserveAspectRatio="xMidYMid meet" />
        <text x="205" y="88" fill="#1c1d21" fontSize="15" fontWeight="500">UniSouk</text>
        <text x="205" y="103" fill="#73767d" fontSize="9.5">One commerce operating view</text>
        <circle cx="455" cy="89" r="3" fill="#ff8a00" />
        <text x="465" y="93" fill="#55585f" fontSize="10">All channels connected</text>
      </g>

      <g clipPath="url(#board-clip)">
        <rect className="commerce-board__scan" x="106" y="122" width="78" height="345" fill="url(#board-scan)">
          <animate attributeName="x" values="106;554;106" dur="11s" repeatCount="indefinite" />
        </rect>
      </g>

      <g className="commerce-board__module commerce-board__module--listings">
        <rect x="158" y="143" width="180" height="126" rx="13" fill="url(#board-module)" />
        <text x="174" y="165" fill="#74777e" fontSize="9.5">Listings</text>
        <text x="174" y="190" fill="#202126" fontSize="19" fontWeight="500">2,814 live</text>
        <text x="174" y="207" fill="#6f7279" fontSize="9.5">98% listing health</text>
        <rect x="174" y="222" width="44" height="31" rx="7" fill="#fff" />
        <path d="m185 237 6-4 7 4-7 4-6-4Zm0 0v7l6 4 7-4v-7" fill="none" stroke="#55585f" strokeLinejoin="round" strokeWidth="1" />
        <rect x="226" y="222" width="44" height="31" rx="7" fill="#fff" />
        <path d="m237 237 6-4 7 4-7 4-6-4Zm0 0v7l6 4 7-4v-7" fill="none" stroke="#55585f" strokeLinejoin="round" strokeWidth="1" />
        <rect x="278" y="222" width="44" height="31" rx="7" fill="#fff7ec" />
        <path d="m289 237 6-4 7 4-7 4-6-4Zm0 0v7l6 4 7-4v-7" fill="none" stroke="#ff8a00" strokeLinejoin="round" strokeWidth="1" />
      </g>

      <g className="commerce-board__module commerce-board__module--inventory">
        <rect x="351" y="143" width="203" height="126" rx="13" fill="url(#board-module)" />
        <text x="367" y="165" fill="#74777e" fontSize="9.5">Inventory</text>
        <text x="367" y="190" fill="#202126" fontSize="19" fontWeight="500">98.6% synced</text>
        <text x="367" y="207" fill="#6f7279" fontSize="9.5">Across connected channels</text>
        <g transform="translate(367 224)">
          <rect width="169" height="5" rx="2.5" fill="#dedfe1" />
          <rect width="148" height="5" rx="2.5" fill="#ff8a00" />
          <rect y="14" width="169" height="5" rx="2.5" fill="#dedfe1" />
          <rect y="14" width="128" height="5" rx="2.5" fill="#9b9ea5" />
          <rect y="28" width="169" height="5" rx="2.5" fill="#dedfe1" />
          <rect y="28" width="155" height="5" rx="2.5" fill="#babdc3" />
        </g>
      </g>

      <g className="commerce-board__module commerce-board__module--orders">
        <rect x="158" y="282" width="396" height="74" rx="13" fill="url(#board-module)" />
        <text x="174" y="304" fill="#74777e" fontSize="9.5">Orders</text>
        <text x="174" y="331" fill="#202126" fontSize="17" fontWeight="500">428 ready to fulfil</text>
        <g transform="translate(340 298)">
          <rect width="58" height="31" rx="8" fill="#fff" /><text x="12" y="13" fill="#777a80" fontSize="8">New</text><text x="12" y="25" fill="#202126" fontSize="10" fontWeight="500">428</text>
          <rect x="66" width="70" height="31" rx="8" fill="#fff7ec" /><text x="78" y="13" fill="#9b620f" fontSize="8">Packed</text><text x="78" y="25" fill="#202126" fontSize="10" fontWeight="500">193</text>
          <rect x="144" width="66" height="31" rx="8" fill="#fff" /><text x="156" y="13" fill="#777a80" fontSize="8">Shipped</text><text x="156" y="25" fill="#202126" fontSize="10" fontWeight="500">235</text>
        </g>
      </g>

      <g className="commerce-board__module commerce-board__module--shipping">
        <rect x="158" y="369" width="180" height="94" rx="13" fill="url(#board-module)" />
        <text x="174" y="391" fill="#74777e" fontSize="9.5">Shipping</text>
        <text x="174" y="416" fill="#202126" fontSize="17" fontWeight="500">94% on schedule</text>
        <path d="M174 442c18-10 29 6 46-4s27 5 43-5 31 5 56-9" fill="none" stroke="#ff8a00" strokeLinecap="round" strokeWidth="1.6" />
        <circle cx="319" cy="424" r="3" fill="#ff8a00" />
      </g>

      <g className="commerce-board__module commerce-board__module--growth">
        <rect x="351" y="369" width="203" height="94" rx="13" fill="url(#board-module)" />
        <text x="367" y="391" fill="#74777e" fontSize="9.5">Growth</text>
        <text x="367" y="416" fill="#202126" fontSize="17" fontWeight="500">One complete picture</text>
        <g transform="translate(367 430)">
          <rect y="13" width="12" height="15" rx="2" fill="#c8cad0" />
          <rect x="19" y="7" width="12" height="21" rx="2" fill="#a8abb2" />
          <rect x="38" width="12" height="28" rx="2" fill="#ff8a00" />
          <path d="M67 24c14-12 25-5 37-14s24 1 38-8" fill="none" stroke="#55585f" strokeLinecap="round" strokeWidth="1.4" />
          <circle cx="142" cy="2" r="3" fill="#ff8a00" />
        </g>
      </g>
    </g>

    <g className="commerce-board__sync-note">
      <rect x="447" y="470" width="112" height="38" rx="12" fill="#fff" filter="url(#board-chip-shadow)" />
      <circle cx="465" cy="489" r="6" fill="#fff7ec" stroke="#ff8a00" />
      <path d="m462 489 2 2 4-5" fill="none" stroke="#ff8a00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      <text x="479" y="493" fill="#3e4045" fontSize="10.5">Everything in sync</text>
    </g>
  </svg>
</div>
  );
}
