"use client";

import {
  WelcomeSection,
  AboutSection,
  TechnologiesSection,
  ProjectsSection,
} from "./sections";
import { ExperienceSection } from "./sections/experiences";

export default function Page() {
  return (
    <div className="container-md">
      <WelcomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}
