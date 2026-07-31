import type { Metadata } from "next";

import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { PodcastReference } from "@/components/marketing/podcast-reference";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { getInstagramMedia } from "@/lib/instagram";

export const revalidate = 900;

export const metadata: Metadata = {
  title: { absolute: "Inside UniSouk | Connected Beyond the Platform" },
  description:
    "Conversations, seller insights and a closer look at the people and ideas shaping UniSouk.",
  alternates: { canonical: "/podcast/" },
};

export default async function PodcastPage() {
  const media = await getInstagramMedia(6);

  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "PodcastEpisode",
          name: "Indian ecommerce Boom | Surat to SaaS",
          episodeNumber: 1,
          url: "https://youtu.be/6JJzG-XJG_Q?si=e7gLYjPzm64VWzZP",
        }}
      />
      <main id="main-content">
        <PodcastReference media={media} />
      </main>
    </NativeSiteShell>
  );
}
