import React from "react";
import "styles/experience.css";
import { Tab } from "@headlessui/react";
import experiences from "app/sections/experiences/experiences.json";

export default function ExperiencePanel() {
  return (
    <div
      className="experience-panel"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: "100%", // Set the width to 100% for all screen sizes
      }}
    >
      <Tab.Group>
        <Tab.List className="flex flex-col sm:flex-row p-1 space-y-1 sm:space-y-0 sm:space-x-1 bg-blue-900/20 rounded-xl">
          {experiences.map((experience) => (
            <Tab
              key={experience._id}
              className={({ selected }) =>
                `flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg text-center whitespace-nowrap overflow-hidden text-ellipsis ${
                  selected
                    ? "text-black bg-[#29cce9] transition-all duration-300 ease-in-out"
                    : "text-blue-100 hover:bg-blue-500 hover:text-black transition-all duration-300 ease-in-out"
                }`
              }
            >
              <span className="block sm:hidden">
                {experience.Company.split(' ')[0]}
              </span>
              <span className="hidden sm:block">
                {experience.Company}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 space-y-4">
          {experiences.map((experience) => (
            <Tab.Panel
              key={experience.JobTitle}
              className="bg-[rgba(0,0,0,0)] rounded-xl p-3 transition-transform duration-300 ease-in-out transform translate-x-0"
              style={{
                width: "100%",
                "@media (maxWidth: 640px)": {
                  width: "auto",
                },
              }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-2xl">{experience.JobTitle}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-white">{experience.Company}</h3>
                    <div className="text-white text-sm sm:text-lg">
                      {experience.DateTime}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 mt-2 space-y-2 text-sm">
                      <ul className="text-white text-lg list-disc">
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
