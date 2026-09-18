/**
 * Categories a seller picks when the website scan cannot identify one. Each
 * label is slugified by `toDemoCategory` into the `demo_category` parameter
 * handed to the demo app, so existing labels are left untouched to keep those
 * slugs stable. New entries cover the D2C and small-manufacturer catalogues
 * the original list missed.
 */
export const BUSINESS_CATEGORIES = [
  "Beauty and personal care",
  "Fashion and apparel",
  "Jewelry and accessories",
  "Food and beverages",
  "Home and living",
  "Furniture and furnishings",
  "Electronics",
  "Health and wellness",
  "Sports and fitness",
  "Toys, kids and baby products",
  "Books and stationery",
  "Pet supplies",
  "Automotive",
  "Handmade, handicrafts and gifts",
  "Manufacturing and B2B",
  "Other",
] as const;

export const DEFAULT_DEMO_CATEGORY = "fashion";
export const DEFAULT_DEMO_APP_URL = "http://localhost:5173";
export const DEFAULT_DEMO_API_URL = "http://localhost:3001";
export const DEMO_PROFILE_STORAGE_KEY = "unisouk-demo-profile";
