# Site Architecture

## Navigation

```text
Home
├── Solutions
│   ├── Unified Commerce
│   ├── Account Management
│   ├── Build Your Website
│   ├── Performance Marketing
│   ├── AI Agents for Commerce
│   └── Amazon Seller Central
├── Integrations
├── Pricing
├── Company
│   ├── About Us
│   ├── Contact Us
│   ├── Blog
│   └── Inside UniSouk
└── Footer
    ├── Privacy Policy
    ├── Terms and Conditions
    ├── Refund Policy
    └── IT Policy
```

## CTA contract

| Intent | Label | Destination type |
| --- | --- | --- |
| Seller ready to use the platform | Start selling | Self-serve dashboard/signup |
| Existing user | Sign in | Dashboard authentication |
| Seller seeking managed help | Book a free demo | Demo/calendar flow |
| Visitor researching | Explore solution | Relevant solution route |
| Missing technical connection | Request an integration | Enquiry flow |

Do not merge these intents or silently repoint them.

## Route contract

Public routes are implemented as explicit Next.js App Router routes. They must
retain trailing-slash compatibility because existing links, canonicals, and
external references use it.

The former `/platform/commerce-operations/` path is retained for compatibility,
but Unified Commerce lives at `/solutions/unified-commerce/` in the approved
information architecture.

Do not create thin placeholder pages merely to populate navigation. Capabilities
belong as sections inside their solution page unless the product architecture is
explicitly revised.
