/**
 * The single product-category taxonomy shared by the contact form and the
 * personalized demo flow.
 *
 * Each entry carries two strings with different contracts, so they must be
 * edited independently:
 *
 * - `value` is the `businessIndustry` enum sent to `POST /contact`. The backend
 *   validates it, so a value may only change alongside a backend release.
 * - `label` is the visible option text. It is also slugified by
 *   `toDemoCategory` into the `demo_category` parameter handed to the demo app,
 *   so existing labels are left untouched to keep those slugs stable.
 *
 * Keeping `value` explicit rather than deriving it from `label` means fixing a
 * label typo can never silently change the enum on the wire.
 *
 * Entries cover the D2C and small-manufacturer catalogues the original list
 * missed. Order is by rough seller affinity, with `Other` last.
 */
export const BUSINESS_CATEGORIES = [
  { value: "BEAUTY_AND_PERSONAL_CARE", label: "Beauty and personal care" },
  { value: "FASHION_AND_APPAREL", label: "Fashion and apparel" },
  { value: "JEWELRY_AND_ACCESSORIES", label: "Jewelry and accessories" },
  { value: "FOOD_AND_BEVERAGES", label: "Food and beverages" },
  { value: "HOME_AND_LIVING", label: "Home and living" },
  { value: "FURNITURE_AND_FURNISHINGS", label: "Furniture and furnishings" },
  { value: "ELECTRONICS", label: "Electronics" },
  { value: "HEALTH_AND_WELLNESS", label: "Health and wellness" },
  { value: "SPORTS_AND_FITNESS", label: "Sports and fitness" },
  { value: "TOYS_KIDS_AND_BABY_PRODUCTS", label: "Toys, kids and baby products" },
  { value: "BOOKS_AND_STATIONERY", label: "Books and stationery" },
  { value: "PET_SUPPLIES", label: "Pet supplies" },
  { value: "AUTOMOTIVE", label: "Automotive" },
  {
    value: "HANDMADE_HANDICRAFTS_AND_GIFTS",
    label: "Handmade, handicrafts and gifts",
  },
  { value: "OTHER", label: "Other" },
] as const;
