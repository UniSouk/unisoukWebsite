import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icon";

type Step = {
  index: string;
  label: string;
  title: string;
};

const steps: Step[] = [
  { index: "01", label: "Connect", title: "Connect your channels" },
  { index: "02", label: "Choose", title: "Choose who runs it" },
  { index: "03", label: "Launch", title: "Start with one owner" },
];

const managedTasks = ["Listings ready", "Orders handled", "Reports shared"];

export function ChooseHowItWorks({
  startTrialUrl,
  buildPlanUrl,
  consultationUrl,
  pricingUrl,
}: {
  startTrialUrl: string;
  buildPlanUrl: string;
  consultationUrl: string;
  pricingUrl: string;
}) {
  return (
    <section
      className="work-chooser"
      id="how-it-works"
      aria-labelledby="work-chooser-title"
    >
      <div className="container work-chooser__inner">
        <header className="work-chooser__header">
          <div className="work-chooser__heading">
            <p className="work-chooser__label">How UniSouk works</p>
            <h2 id="work-chooser-title">Pick how you want to work.</h2>
          </div>
          <p className="work-chooser__intro">
            Use the platform yourself, let our team run operations, or combine
            both.
          </p>
        </header>

        <ol className="work-chooser__path" aria-label="How to get started">
          {steps.map((step, i) => (
            <li key={step.index} className="work-chooser__step">
              <span className="work-chooser__step-marker" aria-hidden="true">
                {step.index}
              </span>
              <span className="work-chooser__step-copy">
                <span className="work-chooser__step-label">{step.label}</span>
                <span className="work-chooser__step-title">{step.title}</span>
              </span>
              {i < steps.length - 1 ? (
                <span className="work-chooser__step-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="work-chooser__ownership">
          <p className="work-chooser__ownership-question">
            Who runs the day-to-day?
          </p>
          <div
            className="work-chooser__spectrum"
            aria-hidden="true"
          >
            <span className="work-chooser__spectrum-dot work-chooser__spectrum-dot--team" />
            <span className="work-chooser__spectrum-text">Your team</span>
            <span className="work-chooser__spectrum-rail" />
            <span className="work-chooser__spectrum-dot work-chooser__spectrum-dot--unisouk" />
            <span className="work-chooser__spectrum-text">UniSouk team</span>
          </div>
        </div>

        <div className="work-chooser__options">
          <article className="work-chooser__option work-chooser__option--saas">
            <div className="work-chooser__option-summary">
              <span className="work-chooser__badge work-chooser__badge--outline">
                Your team
              </span>
              <div className="work-chooser__visual work-chooser__visual--dashboard">
                <div className="work-chooser__mini-dashboard" aria-hidden="true">
                  <span className="work-chooser__window-controls">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="work-chooser__dash-row">
                    <i style={{ width: "34%" }} className="is-accent" />
                    <i style={{ width: "49%" }} />
                  </span>
                  <span className="work-chooser__dash-row">
                    <i style={{ width: "58%" }} className="is-accent" />
                    <i style={{ width: "30%" }} />
                  </span>
                  <span className="work-chooser__dash-row">
                    <i style={{ width: "44%" }} className="is-accent" />
                    <i style={{ width: "44%" }} />
                  </span>
                </div>
              </div>
              <p className="work-chooser__option-eyebrow">SaaS platform</p>
              <h3 className="work-chooser__option-title">Run it yourself.</h3>
              <p className="work-chooser__option-copy">
                Your team uses the platform and AI agents directly.
              </p>
            </div>
            <a
              className="work-chooser__cta work-chooser__cta--outline"
              href={startTrialUrl}
            >
              Start free trial
              <ArrowRightIcon />
            </a>
          </article>

          <article className="work-chooser__option work-chooser__option--combined">
            <div className="work-chooser__option-summary">
              <span className="work-chooser__badge work-chooser__badge--solid">
                Together
              </span>
              <div className="work-chooser__visual work-chooser__visual--shared">
                <span className="work-chooser__owner work-chooser__owner--you">
                  You
                </span>
                <span className="work-chooser__owner-plus" aria-hidden="true">
                  +
                </span>
                <span className="work-chooser__owner work-chooser__owner--unisouk">
                  UniSouk
                </span>
              </div>
              <p className="work-chooser__option-eyebrow">
                Platform + Account Management
              </p>
              <h3 className="work-chooser__option-title work-chooser__option-title--lg">
                Run it together.
              </h3>
              <p className="work-chooser__option-copy">
                You steer the business. UniSouk handles the operational
                workload.
              </p>
            </div>
            <a
              className="work-chooser__cta work-chooser__cta--dark"
              href={buildPlanUrl}
            >
              Build your plan
              <ArrowRightIcon />
            </a>
          </article>

          <article className="work-chooser__option work-chooser__option--managed">
            <div className="work-chooser__option-summary">
              <span className="work-chooser__badge work-chooser__badge--outline">
                UniSouk team
              </span>
              <div className="work-chooser__visual work-chooser__visual--tasks">
                {managedTasks.map((task) => (
                  <span key={task} className="work-chooser__task">
                    <span className="work-chooser__task-check" aria-hidden="true">
                      ✓
                    </span>
                    {task}
                  </span>
                ))}
              </div>
              <p className="work-chooser__option-eyebrow work-chooser__option-eyebrow--muted">
                Account Management
              </p>
              <h3 className="work-chooser__option-title">Let us run it.</h3>
              <p className="work-chooser__option-copy work-chooser__option-copy--muted">
                A dedicated team handles marketplace and quick-commerce
                operations.
              </p>
            </div>
            <a
              className="work-chooser__cta work-chooser__cta--dark"
              href={consultationUrl}
            >
              Book a consultation
              <ArrowRightIcon />
            </a>
          </article>
        </div>

        <div className="work-chooser__note">
          <p className="work-chooser__note-copy">
            <span className="work-chooser__note-marker" aria-hidden="true">
              ?
            </span>
            Start with software. Add Account Management when you need it.
          </p>
          <a className="work-chooser__note-link" href={pricingUrl}>
            See pricing
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
