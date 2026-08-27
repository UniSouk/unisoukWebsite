import type { CSSProperties } from "react";
import Image from "next/image";

import { UNI_AGENTS_DURABLE } from "@/constants/uni-agents";
import styles from "@/components/marketing/uni-agents-orbit.module.css";

const { nodes } = UNI_AGENTS_DURABLE;
const CYCLE_DURATION_MS = 8500;
const NODE_STAGGER_MS = CYCLE_DURATION_MS / nodes.length;

export function UniAgentsOrbit() {
  return (
    <div
      className={styles.orbit}
      role="img"
      aria-label={`Durable work loop connecting ${nodes.join(", ")} around one saved product context`}
    >
      <span className={`${styles.ring} ${styles.ringOuter}`} aria-hidden="true" />
      <span
        className={`${styles.ring} ${styles.ringInner}`}
        style={{ "--ring-delay": "80ms" } as CSSProperties}
        aria-hidden="true"
      />
      <span className={styles.center} aria-hidden="true">
        <Image src="/unisouk-mark-on-dark.svg" width={40} height={20} alt="" />
      </span>
      {nodes.map((node, index) => {
        const angle = (360 / nodes.length) * index - 90;
        const delay = `${index * NODE_STAGGER_MS}ms`;
        return (
          <span
            className={styles.node}
            style={
              {
                "--node-angle": `${angle}deg`,
                "--node-radius": "clamp(7rem, 13vw, 10.5rem)",
                "--node-delay": delay,
              } as CSSProperties
            }
            aria-hidden="true"
            key={node}
          >
            {node}
          </span>
        );
      })}
    </div>
  );
}
