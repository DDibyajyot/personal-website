"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { ExperienceSection } from "app/sections/experiences";


export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
}
