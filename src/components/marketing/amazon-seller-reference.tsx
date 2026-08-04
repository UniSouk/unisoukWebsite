import { CheckIcon, PlusIcon } from "@/components/ui/icon";

const amazonCapabilities = [
  {
    title: "Product Listing Management",
    items: [
      "Create and update product listings directly through UniSouk",
      "Manage A+ content for enhanced descriptions",
      "Synchronize product information across sales channels",
      "Manage product images and media",
    ],
  },
  {
    title: "Pricing and Inventory Management",
    items: [
      "Set and adjust prices through an intuitive interface",
      "Track inventory across platforms in real time",
      "Automate stock level updates",
    ],
  },
  {
    title: "Amazon Fulfillment / FBA",
    items: [
      "View FBA inventory availability",
      "Plan and monitor inbound shipments",
      "Track shipment and fulfillment status",
    ],
  },
  {
    title: "Order Management",
    items: [
      "View all Amazon orders in one place",
      "Run an efficient order processing workflow",
      "Automate order status updates",
      "Keep order information synchronized",
    ],
  },
  {
    title: "Performance Analytics",
    items: [
      "Review a comprehensive KPI dashboard",
      "Explore sales analytics with customizable ranges",
      "Track product category performance",
      "Turn data into useful growth insights",
    ],
  },
  {
    title: "Finance and Accounting",
    items: [
      "View settlements, payments, fees, refunds and reimbursements",
      "Reconcile Amazon financial activity with seller records",
      "Prepare accounting ready revenue and fee summaries",
    ],
  },
];

const amazonOperations = [
  {
    title: "Direct to Consumer Shipping",
    items: [
      "Generate shipping labels and coordinate deliveries",
      "Track shipments across marketplaces",
      "Ensure seamless fulfillment for all orders",
    ],
  },
  {
    title: "Tax Invoicing",
    items: [
      "Create GST and tax invoices for eligible Amazon orders",
      "Track invoice status and documentation",
      "Maintain legally required tax invoice records",
    ],
  },
  {
    title: "Tax Remittance",
    items: [
      "Calculate order level tax amounts using Amazon tax data",
      "Reconcile collected and remitted tax information",
      "Maintain GST and accounting tax records",
    ],
  },
];

const amazonRoles = [
  "Tax Invoicing",
  "Pricing and Inventory",
  "Order Management",
  "Brand Analytics",
  "Product Listing",
  "Tax Remittance",
  "Direct to Consumer Shipping",
  "Amazon Fulfillment",
  "Finance and Accounting",
];

export function AmazonSellerReference() {
  return (
    <section
      className="amazon-seller"
      aria-labelledby="amazon-seller-title"
    >
      <div className="container amazon-seller__inner">
        <header className="amazon-seller__heading">
          <h1 id="amazon-seller-title">Amazon Seller Central</h1>
          <p>
            We provide a unified solution for managing your Amazon presence
            effectively.
          </p>
        </header>
        <div className="amazon-capabilities">
          {amazonCapabilities.map((capability) => (
            <article key={capability.title}>
              <span className="amazon-feature-mark" aria-hidden="true"><PlusIcon /></span>
              <h2>{capability.title}</h2>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="amazon-operations">
          {amazonOperations.map((operation) => (
            <article key={operation.title}>
              <header>
                <span className="amazon-operation-mark" aria-hidden="true"><CheckIcon /></span>
                <h2>{operation.title}</h2>
              </header>
              <ul>
                {operation.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="amazon-seller__meta">
          <div>
            <h2>Supported Marketplaces</h2>
            <span className="amazon-marketplace !bg-[color:color-mix(in_oklch,var(--orange)_10%,transparent)]">IN India</span>
          </div>
          <div>
            <h2>Key Roles</h2>
            <ul className="[&_li]:!bg-[color:color-mix(in_oklch,var(--orange)_10%,transparent)]">
              {amazonRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="amazon-seller__closing">
          Whether you&apos;re selling on Amazon, Shopify, WooCommerce or another
          platform, migrating to UniSouk is hassle free. Get ready to simplify
          operations and amplify growth.
        </p>
      </div>
    </section>
  );
}
