export const PLATFORM_LOGOS = {
  amazon: "/platform-logos/amazon.svg",
  meesho: "/platform-logos/meeshoLogo.svg",
  ondc: "/platform-logos/ondc.svg",
  shopify: "/platform-logos/shopify.svg",
  wix: "/platform-logos/wix.svg",
  woocommerce: "/platform-logos/woo-commerce.svg",
  // Ads channels. Both supplied assets are wide, white-background rasters
  // (amazon-ads 738x210, meta-ads 718x385), so they declare their own
  // aspect-ratio dimensions and size caps where they are rendered.
  metaAds: "/meta-ads.png",
  // Despite the filename this is the Amazon Ads wordmark (500x129, transparent
  // background), not the retail Amazon mark used by `amazon` above.
  amazonAds: "/amazon.png",
} as const;
