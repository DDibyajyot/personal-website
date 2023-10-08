import React, { useState } from "react";
import "styles/experience.css";
import { Tab } from "@headlessui/react";
import experiences from "app/sections/experiences/experiences.json";

export default function ExperiencePanel() {
  // Find the length of the longest description point
  const longestDescriptionPointLength = Math.max(
    ...experiences.map((experience) =>
      Math.max(...experience.DescriptionPoints.map((point) => point.length))
    )
  );

  // Calculate the minimum width based on the length of the longest description point
  const minWidth = longestDescriptionPointLength * 9; // Adjust the multiplier as needed

  return (
    <div
      className="experience-panel transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        minWidth: `${minWidth}px`, // Set the minimum width based on the calculation
      }}
    >
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {experiences.map((experience) => (
            <Tab
              key={experience._id}
              className={({ selected }) =>
                `flex-1 px-4 py-2 text-sm font-medium rounded-lg ${
                  selected
                    ? "text-black bg-[#29cce9] transition-all duration-300 ease-in-out"
                    : "text-blue-100 hover:bg-blue-500 hover:text-black transition-all duration-300 ease-in-out"
                }`
              }
            >
              {experience.Company}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {experiences.map((experience) => (
            <Tab.Panel
              key={experience.JobTitle}
              className="bg-[rgba(0,0,0,0)] rounded-xl p-3 transition-transform duration-300 ease-in-out transform translate-x-0"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-2xl">{experience.JobTitle}</h2>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white">{experience.Company}</h3>
                    <div className="flex items-end text-right text-white text-lg">
                      {experience.DateTime}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 mt-2 space-y-2 text-sm">
                      <ul className="text-white text-lg">
                        {/* the description is in points */}
                        {experience.DescriptionPoints.map((point) => (
                          <li key={point} className="mb-2">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
