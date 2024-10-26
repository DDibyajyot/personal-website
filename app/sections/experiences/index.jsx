"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import ExperiencePanel from "./ExperiencePanel";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="experience" className="section">
        <HeadingDivider title="Experience" />
        <div className="pt-10 pb-16  flex flex-col gap-3">
          <div
            tabIndex="0"
            ref={ref}
            className="text-xl font-light leading-relaxed"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <ExperiencePanel />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
