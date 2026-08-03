import { OperationIcon, type OperationName } from "./operation-icon";
import { UnifiedCommerceBoard } from "./unified-commerce-board";
import { UnifiedCommerceTriptych } from "./unified-commerce-triptych";
import { SIGN_UP_URL } from "@/constants/site";
import { ArrowRightIcon } from "@/components/ui/icon";

const operations: Array<{
  id: OperationName;
  title: string;
  short: string;
  description: string;
  points: string[];
}> = [
  {
    id: "listings",
    title: "Listings",
    short: "Create once. Publish with consistency.",
    description:
      "Build accurate, channel ready product information without rewriting the same catalogue for every destination.",
    points: [
      "Keep titles, attributes and media organized",
      "Prepare channel ready catalogue data",
      "Make updates from one reliable source",
    ],
  },
  {
    id: "inventory",
    title: "Inventory",
    short: "Know what is available before you promise it.",
    description:
      "Maintain one view of stock across connected channels so every team works from the same availability picture.",
    points: [
      "Track stock across connected channels",
      "Reduce overselling caused by stale counts",
      "See which products need attention",
    ],
  },
  {
    id: "orders",
    title: "Orders",
    short: "Bring every sale into one operating queue.",
    description:
      "Review and move orders forward without jumping between separate marketplace and storefront consoles.",
    points: [
      "Collect orders from connected channels",
      "Keep statuses clear and consistent",
      "Find exceptions before they become delays",
    ],
  },
  {
    id: "fulfilment",
    title: "Fulfilment",
    short: "Move from order received to shipment ready.",
    description:
      "Coordinate the work after checkout with the order and inventory context already attached.",
    points: [
      "Prepare fulfilment with fewer handoffs",
      "Keep shipment progress connected to the order",
      "Give teams one place to spot delays",
    ],
  },
  {
    id: "payments",
    title: "Payments",
    short: "Keep payment activity visible beside the sale.",
    description:
      "See payout and order context together without switching between disconnected reports.",
    points: [
      "View payout activity alongside orders",
      "Centralized payment tracking",
      "Payment history and exports",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    short: "See the whole business. Act on what matters.",
    description:
      "Read sales, stock, fulfilment and payout signals together instead of drawing conclusions from isolated reports.",
    points: [
      "Spot movement across the commerce lifecycle",
      "Find operational issues earlier",
      "Decide where to focus next",
    ],
  },
];

export function UnifiedCommerceReference() {
  return (
    <>
      <section className="operations-hero" aria-labelledby="operations-hero-title">
        <div className="container operations-hero__inner">
          <div className="operations-hero__copy">
            <h1 id="operations-hero-title">
              Your Business,
              <br />
              Unified in One Dashboard.
            </h1>
            <p>
              UniSouk connects the daily work behind every sale, from the first
              listing to the final payout.
            </p>
            <div className="operations-hero__actions">
              <a className="button button--primary" href={SIGN_UP_URL}>
                Start selling
                <ArrowRightIcon />
              </a>
              <a
                className="text-link text-link--arrow text-link--black"
                href="#orchestration"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="operations-hero__visual">
            <UnifiedCommerceBoard />
          </div>
        </div>
      </section>

      <section
        className="orchestration"
        id="orchestration"
        aria-labelledby="commerce-demo-title"
      >
        <div className="container orchestration__inner">
          <UnifiedCommerceTriptych />
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div className="container capabilities__inner">
          <div className="capabilities__intro">
            <h2 id="capabilities-title">
              Six connected jobs. One operating rhythm.
            </h2>
            <p>
              Each capability solves a clear part of the seller&apos;s day.
              Together, they keep the business moving from catalogue to growth.
            </p>
            <a
              className="text-link text-link--arrow text-link--black"
              href={SIGN_UP_URL}
            >
              Start with UniSouk
            </a>
          </div>
          <div className="capability-list">
            {operations.map((operation) => (
              <article
                className="capability"
                id={operation.id}
                key={operation.id}
              >
                <header>
                  <span className="capability__icon" aria-hidden="true">
                    <OperationIcon name={operation.id} />
                  </span>
                  <div>
                    <h3>{operation.title}</h3>
                    <p>{operation.short}</p>
                  </div>
                </header>
                <div className="capability__body">
                  <p>{operation.description}</p>
                  <ul>
                    {operation.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operations-cta" aria-labelledby="operations-cta-title">
        <div className="container operations-cta__inner">
          <div>
            <h2 id="operations-cta-title">Ready to run commerce as one?</h2>
            <p>
              Connect your channels and keep the work behind every sale moving
              together.
            </p>
          </div>
          <div className="operations-cta__actions">
            <a
              className="text-link text-link--arrow text-link--black"
              href="/contact/"
            >
              Need hands on help?
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
