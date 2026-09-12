import type { ReactNode } from "react";

import {
  UNI_AGENTS_MANIFESTO,
  UNI_AGENTS_WORKFLOW,
} from "@/constants/uni-agents";
import { UniAgentsReveal } from "./uni-agents-landing-reveal";
import { UniAgentsWordReveal } from "./uni-agents-landing-word-reveal";
import { UniAgentsWorkflowStage } from "./uni-agents-landing-workflow-stage";

export function UniAgentsLandingManifesto() {
  return (
    <section className="ual-manifesto ual-section" id="product">
      <div className="ual-container ual-manifesto-grid">
        <UniAgentsReveal className="ual-manifesto-statement">
          <h2>
            {UNI_AGENTS_MANIFESTO.statement}
            <em>{UNI_AGENTS_MANIFESTO.statementAccent}</em>
            {UNI_AGENTS_MANIFESTO.statementTrailing}
          </h2>
        </UniAgentsReveal>
        <UniAgentsReveal className="ual-manifesto-detail">
          <p>{UNI_AGENTS_MANIFESTO.copy}</p>
          <ul>
            {UNI_AGENTS_MANIFESTO.points.map((point) => (
              <li key={point.index}>
                <span>{point.index}</span>
                <div>
                  <strong>{point.title}</strong>
                  <small>{point.copy}</small>
                </div>
              </li>
            ))}
          </ul>
        </UniAgentsReveal>
      </div>
    </section>
  );
}

const WORKFLOW_VISUALS: Record<string, () => ReactNode> = {
  intake: () => (
    <div className="ual-step-visual ual-intake-visual">
      <label>Marketplace product URL</label>
      <div className="ual-url-field">
        <span>https://flipkart.com/...</span>
        <button type="button" tabIndex={-1}>
          Collect product
        </button>
      </div>
      <p>
        <i /> Product found · ready to add
      </p>
    </div>
  ),
  collection: () => (
    <div className="ual-step-visual ual-collection-visual">
      <div className="ual-collection-top">
        <div className="ual-mini-product" />
        <div>
          <strong>Preparing product data</strong>
          <small>Updated a few seconds ago</small>
        </div>
      </div>
      <div className="ual-indeterminate">
        <i />
      </div>
      <div className="ual-collection-items">
        <span>Listing content</span>
        <span>Images</span>
        <span>Offer</span>
        <span>Trust signals</span>
      </div>
      <p>Safe to leave. Work continues in the background.</p>
    </div>
  ),
  report: () => (
    <div className="ual-step-visual ual-report-visual">
      <div className="ual-report-score">
        <strong>82</strong>
        <span>/100</span>
      </div>
      <div className="ual-report-summary">
        <small>Listing health</small>
        <strong>Strong foundation</strong>
        <p>Two improvements can make the product easier to understand.</p>
      </div>
    </div>
  ),
  action: () => (
    <div className="ual-step-visual ual-action-visual">
      <button type="button" tabIndex={-1}>
        <span className="ual-action-icon">↗</span>
        <div>
          <strong>Improve listing copy</strong>
          <small>3 suggestions ready</small>
        </div>
        <b>→</b>
      </button>
      <button type="button" tabIndex={-1}>
        <span className="ual-action-icon">▧</span>
        <div>
          <strong>Create product images</strong>
          <small>Start from collected media</small>
        </div>
        <b>→</b>
      </button>
      <button type="button" tabIndex={-1}>
        <span className="ual-action-icon">⌁</span>
        <div>
          <strong>Compare the category</strong>
          <small>Same-marketplace cohort</small>
        </div>
        <b>→</b>
      </button>
    </div>
  ),
};

export function UniAgentsLandingWorkflow() {
  return (
    <section className="ual-workflow ual-section" id="workflow">
      <div className="ual-container">
        <UniAgentsReveal className="ual-section-heading" as="div">
          <div>
            <UniAgentsWordReveal text={UNI_AGENTS_WORKFLOW.title} />
          </div>
          <p>{UNI_AGENTS_WORKFLOW.copy}</p>
        </UniAgentsReveal>

        <UniAgentsWorkflowStage className="ual-workflow-stage">
          <div className="ual-workflow-line" aria-hidden="true">
            <i />
          </div>
          {UNI_AGENTS_WORKFLOW.steps.map((step) => (
            <UniAgentsReveal
              as="article"
              className="ual-workflow-step"
              key={step.number}
            >
              <div className="ual-step-number">{step.number}</div>
              <div className="ual-step-copy">
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              {WORKFLOW_VISUALS[step.visual]()}
            </UniAgentsReveal>
          ))}
        </UniAgentsWorkflowStage>
      </div>
    </section>
  );
}
