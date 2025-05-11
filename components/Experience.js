import React from "react";
import Image from "next/image";
import { experiences } from "../data/experienceData";

export const Experience = () => {
  return (
      <section className="py-10">
        <h2 className="text-4xl font-bold py-5 dark:text-white text-center">
          Expériences Professionnelles
        </h2>

        {experiences.map((exp) => (
            <div key={exp.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                      src={exp.logo}
                      alt={`Logo ${exp.company}`}
                      width={70}
                      height={70}
                      className="w-20 h-20 mr-6"
                  />
                </div>
                <div>
                  <h3 className="text-3xl py-1 dark:text-white">
                    {exp.year} - {exp.title}
                  </h3>
                  <span className="text-lg text-gray-700 dark:text-gray-300">{exp.description}</span>
                </div>
              </div>

              <ul className="list-disc list-inside mt-4 text-md leading-8 text-gray-800 dark:text-gray-200">
                {exp.missions.map((mission, idx) => (
                    <li key={idx}>{mission}</li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="text-xl font-semibold dark:text-white">Stack</h4>
                <div className="flex space-x-4 mt-2 text-gray-800 dark:text-gray-200">
                  {exp.technologies.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                        <div key={idx} className="flex items-center">
                          <Icon className="text-2xl text-teal-500 mr-2" />
                          <span>{tech.name}</span>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
        ))}
      </section>
  );
};

export default Experience;
