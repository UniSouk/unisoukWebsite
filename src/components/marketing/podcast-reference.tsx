/* eslint-disable @next/next/no-img-element -- Instagram Graph API media uses dynamic remote URLs. */
import type { CSSProperties } from "react";

import type { InstagramMediaItem } from "@/lib/instagram";

const youtubeUrl = "https://youtu.be/6JJzG-XJG_Q?si=e7gLYjPzm64VWzZP";
const embedUrl = "https://www.youtube.com/embed/6JJzG-XJG_Q";
const profileUrl = "https://www.instagram.com/unisouk.in/";

const themes = [
  ["The Indian ecommerce boom", "A founder’s perspective on the opportunity opening up for sellers, brands and commerce technology across India."],
  ["From Surat to SaaS", "What it means to build an ambitious commerce company from Surat and turn local operating problems into a wider product vision."],
  ["What happens beyond the cart", "The listings, inventory, orders, fulfilment and growth work that shapes the seller experience after a customer decides to buy."],
];

function postAlt(caption: string) {
  const normalized = caption.replace(/\s+/g, " ").trim();
  if (!normalized) return "UniSouk Instagram post";
  return normalized.length > 120 ? `${normalized.slice(0, 117).trim()}...` : normalized;
}

function InstagramReference({ media }: { media: InstagramMediaItem[] }) {
  return (
    <section className="instagram-feed" aria-labelledby="instagram-feed-title">
      <div className="container instagram-feed__inner">
        <div className="instagram-feed__heading">
          <div className="instagram-feed__copy">
            <p className="instagram-feed__eyebrow">Instagram</p>
            <h2 id="instagram-feed-title"><span>Connected Beyond</span><span>the Platform</span></h2>
          </div>
          <div className="instagram-feed__intro">
            <p>Product updates, seller insights and a closer look at what UniSouk is building.</p>
            <a className="instagram-feed__follow" href={profileUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow UniSouk on Instagram">
              Follow @unisouk.in <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        {media.length > 0 ? (
          <div className="instagram-feed__grid" aria-label="Latest UniSouk Instagram posts">
            {media.map((post) => (
              <a className="instagram-feed__post" href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={`${postAlt(post.caption)}. View on Instagram`} key={post.id}>
                <img src={post.imageUrl} alt={postAlt(post.caption)} loading="lazy" referrerPolicy="no-referrer" />
                <span className="instagram-feed__post-action" aria-hidden="true">View <span>↗</span></span>
              </a>
            ))}
          </div>
        ) : (
          <div className="instagram-feed__fallback">
            <div className="instagram-feed__fallback-copy">
              <span className="instagram-feed__mark" aria-hidden="true">◎</span>
              <p>See the latest from UniSouk on Instagram.</p>
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">Open @unisouk.in <span aria-hidden="true">↗</span></a>
            </div>
            <blockquote className="instagram-media">
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">View @unisouk.in on Instagram</a>
            </blockquote>
          </div>
        )}
      </div>
    </section>
  );
}

export function PodcastReference({ media }: { media: InstagramMediaItem[] }) {
  return (
    <>
      <InstagramReference media={media} />

      <section className="watch-episode" id="watch-episode" aria-labelledby="podcast-feature-title">
        <div className="container watch-episode__inner">
          <header>
            <div className="watch-episode__meta"><span>Beyond the Cart</span><em>Episode 01</em></div>
            <h2 id="podcast-feature-title">Indian ecommerce boom. <span>From Surat to SaaS.</span></h2>
            <p>UniSouk founder Nihil Parmar joins Beyond the Cart for a conversation about building for Indian commerce and the work that happens beyond the transaction.</p>
            <div><span>Beyond the Cart · Episode 01</span><p>Indian ecommerce Boom | Surat to SaaS | with Nihil Parmar</p></div>
          </header>
          <div className="video-frame">
            <iframe
              src={embedUrl}
              title="Indian ecommerce Boom | Surat to SaaS | Beyond the Cart Podcast with Nihil Parmar Episode 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="episode-themes" aria-labelledby="themes-title">
        <div className="container episode-themes__inner">
          <header><h2 id="themes-title">Inside the conversation.</h2><p>Three ideas frame this first Beyond the Cart episode.</p></header>
          <div className="theme-list">
            {themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p><span aria-hidden="true">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="series-statement" aria-labelledby="series-title">
        <div className="container series-statement__inner">
          <div className="series-statement__wave" aria-hidden="true">
            {Array.from({ length: 52 }).map((_, index) => (
              <i
                style={{
                  "--bar": index,
                  "--bar-height": `${10 + (index % 9) * 7}%`,
                  "--bar-mix": `${42 + (index % 5) * 10}%`,
                } as CSSProperties}
                key={index}
              />
            ))}
          </div>
          <div>
            <span>Beyond the Cart</span>
            <h2 id="series-title">Conversations about the work customers never see.</h2>
            <p>Commerce is more than a storefront or a transaction. This series looks at the systems, choices and people behind building businesses that can keep moving.</p>
            <a href={youtubeUrl} target="_blank" rel="noreferrer">Watch Episode 01 on YouTube <i aria-hidden="true">→</i></a>
          </div>
        </div>
      </section>

      <section className="podcast-cta" aria-labelledby="podcast-cta-title">
        <div className="container podcast-cta__inner">
          <h2 id="podcast-cta-title">Ready to take your commerce journey forward<span>?</span></h2>
          <div className="podcast-cta__copy"><p>See how UniSouk connects the everyday work behind listing, selling and growth.</p></div>
        </div>
      </section>
    </>
  );
}
