import Image from "next/image";

import { siteContainerClass } from "@/components/layout/site-shell-styles";

const headingClass =
  "m-0 !text-[length:var(--text-section-heading)] !leading-[var(--leading-heading)] !tracking-[var(--tracking-heading)] [text-wrap:balance]";
const headerCopyClass =
  "m-0 text-[length:var(--text-lead)] leading-[1.65] text-[var(--text-muted)] [text-wrap:pretty]";
const imageFilterClass =
  "h-full w-full object-cover grayscale transition-[filter] duration-[420ms] group-hover:grayscale-0 group-hover:contrast-100 [@media(hover:none)]:grayscale-0 [@media(hover:none)]:contrast-100 [@media(pointer:coarse)]:grayscale-0 [@media(pointer:coarse)]:contrast-100 motion-reduce:transition-none";

export function LeadershipShapeDefinitions() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0 overflow-hidden" width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="leadership-slant-rounded" clipPathUnits="objectBoundingBox">
          <path d="M .174 0 H .986 Q 1 0 .998 .014 L .842 .986 Q .84 1 .826 1 H .014 Q 0 1 .002 .986 L .158 .014 Q .16 0 .174 0 Z" />
        </clipPath>
        <clipPath id="leadership-slant-rounded-mobile" clipPathUnits="objectBoundingBox">
          <path d="M .144 0 H .986 Q 1 0 .998 .014 L .872 .986 Q .87 1 .856 1 H .014 Q 0 1 .002 .986 L .128 .014 Q .13 0 .144 0 Z" />
        </clipPath>
        <clipPath id="team-slant-rounded-wide" clipPathUnits="objectBoundingBox">
          <path d="M .109 0 H .986 Q 1 0 .998 .014 L .907 .986 Q .905 1 .891 1 H .014 Q 0 1 .002 .986 L .093 .014 Q .095 0 .109 0 Z" />
        </clipPath>
        <clipPath id="team-slant-rounded-portrait" clipPathUnits="objectBoundingBox">
          <path d="M .204 0 H .986 Q 1 0 .998 .014 L .812 .986 Q .81 1 .796 1 H .014 Q 0 1 .002 .986 L .188 .014 Q .19 0 .204 0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

type Leader = {
  name: string;
  role: string;
  image: string;
  alt: string;
};

const leaders: Leader[] = [
  {
    name: "Nihil Parmar",
    role: "Founder, CEO",
    image: "/images/nihil-parmar-founder-ceo.jpeg",
    alt: "Nihil Parmar, Founder and CEO of UniSouk",
  },
  {
    name: "Siddhant Sarkar",
    role: "Co-founder, CTO",
    image: "/images/siddhant-sarkar-cofounder-cto.jpeg",
    alt: "Siddhant Sarkar, Co-founder and CTO of UniSouk",
  },
];

export function LeadershipSection() {
  return (
    <section className="bg-[var(--white)]" aria-labelledby="leadership-title">
      <div className={`${siteContainerClass} py-[var(--page-section-space)]`}>
        <header className="grid grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] items-end gap-[clamp(3rem,9vw,9rem)] pb-[clamp(3.5rem,8vw,7rem)] max-[67.99rem]:grid-cols-1 max-[67.99rem]:gap-7">
          <h2 className={`${headingClass} max-w-[12ch]`} id="leadership-title">
            The people building UniSouk.
          </h2>
          <p className={`${headerCopyClass} max-w-[45ch]`}>
            Company direction and technology leadership stay close to the daily realities of building for Indian commerce.
          </p>
        </header>
        <div className="mx-auto grid w-full max-w-[58rem] grid-cols-2 items-start gap-x-[clamp(0.75rem,1.4vw,1.25rem)] max-[47.99rem]:max-w-[32rem] max-[47.99rem]:grid-cols-1 max-[47.99rem]:gap-8">
          {leaders.map((leader, index) => (
            <figure
              className={`group relative m-0 min-w-0 max-[47.99rem]:w-[94%] ${
                index === 0
                  ? "z-2 max-[47.99rem]:justify-self-start"
                  : "z-1 mt-[clamp(2.5rem,5vw,4.5rem)] max-[47.99rem]:mt-0 max-[47.99rem]:justify-self-end"
              }`}
              key={leader.name}
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--mist)] [clip-path:url(#leadership-slant-rounded)] max-[47.99rem]:[clip-path:url(#leadership-slant-rounded-mobile)]">
                <Image
                  className={`${imageFilterClass} object-center contrast-[1.04]`}
                  src={leader.image}
                  alt={leader.alt}
                  width={1280}
                  height={1280}
                />
              </div>
              <figcaption className="mx-[8%] flex items-start justify-between gap-8 border-b border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] py-[1.35rem] max-[47.99rem]:mx-[7%]">
                <div>
                  <h3 className="m-0 !text-[clamp(1.6rem,2.6vw,2.45rem)] !leading-none !tracking-[var(--tracking-heading)]">
                    {leader.name}
                  </h3>
                  <p className="mt-[0.45rem] mb-0 text-[var(--text-muted)]">{leader.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamImages = [
  {
    src: "/images/team-office-web.jpg",
    alt: "The UniSouk team together at the Surat office",
    width: 2048,
    height: 1535,
    position: "object-center",
  },
  {
    src: "/images/unisouk-team-event.jpeg",
    alt: "The UniSouk team at the company exhibition booth",
    width: 800,
    height: 1200,
    position: "object-[50%_48%]",
  },
];

export function TeamGallerySection() {
  return (
    <section className="bg-[var(--mist)]" aria-labelledby="team-gallery-title">
      <div className={`${siteContainerClass} py-[var(--page-section-space)]`}>
        <header className="grid grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.75fr)] items-end gap-[clamp(3rem,9vw,9rem)] pb-[clamp(3rem,6vw,5rem)] max-[67.99rem]:grid-cols-1 max-[67.99rem]:gap-7">
          <h2 className={`${headingClass} max-w-[10ch]`} id="team-gallery-title">
            Meet the wider team.
          </h2>
          <p className={`${headerCopyClass} max-w-[44ch]`}>
            Product, technology, operations and growth working side by side to build a better commerce experience.
          </p>
        </header>
        <div className="mx-auto grid w-full max-w-[68rem] grid-cols-2 items-stretch gap-[clamp(1.5rem,3vw,3rem)] max-[47.99rem]:grid-cols-1 max-[47.99rem]:justify-items-center max-[47.99rem]:gap-6">
          {teamImages.map((image) => (
            <figure
              className="group m-0 aspect-[4/3] w-full overflow-hidden bg-[var(--grey)] [clip-path:url(#team-slant-rounded-wide)]"
              key={image.src}
            >
              <Image
                className={`${imageFilterClass} ${image.position} contrast-[1.03]`}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
