import "server-only";

export type InstagramMediaItem = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  imageUrl: string;
  permalink: string;
  timestamp: string;
};

type InstagramApiItem = {
  id?: string;
  caption?: string;
  media_type?: InstagramMediaItem["mediaType"];
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

export async function getInstagramMedia(limit = 6) {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const apiVersion = process.env.INSTAGRAM_API_VERSION || "v25.0";

  if (!userId || !accessToken) return [];

  const endpoint = new URL(
    `https://graph.instagram.com/${apiVersion}/${encodeURIComponent(userId)}/media`,
  );
  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
  );
  endpoint.searchParams.set("limit", String(limit));
  endpoint.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];

    const payload = (await response.json()) as { data?: InstagramApiItem[] };
    return (payload.data || [])
      .map((item): InstagramMediaItem | null => {
        const imageUrl =
          item.media_type === "VIDEO"
            ? item.thumbnail_url || item.media_url
            : item.media_url;
        if (
          !item.id ||
          !item.media_type ||
          !imageUrl ||
          !item.permalink ||
          !item.timestamp
        ) {
          return null;
        }
        return {
          id: item.id,
          caption: item.caption?.trim() || "",
          mediaType: item.media_type,
          imageUrl,
          permalink: item.permalink,
          timestamp: item.timestamp,
        };
      })
      .filter((item): item is InstagramMediaItem => item !== null)
      .slice(0, limit);
  } catch {
    return [];
  }
}
