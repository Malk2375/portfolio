import React from "react";
import { FaSymfony, FaNodeJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      name: "WebDOC JUDO JO 2024",
      description: "Mon portfolio personnel conçu pour démontrer mes compétences en React et Tailwind CSS, avec une interface utilisateur réactive et moderne.",
      imageUrl: "/lalegion.png", // Mettez ici le chemin vers l'image du projet
      link: "https://lalegion.vercel.app/", // Lien vers le projet,
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiFirebase, name: "Firebase" },
      ]
    },
    {
      name: "Bitchest",
      description: "Mon portfolio personnel conçu pour démontrer mes compétences en React et Tailwind CSS, avec une interface utilisateur réactive et moderne.",
      imageUrl: "/bitchest.png", // Mettez ici le chemin vers l'image du projet
      link: "https://dorbani.alwaysdata.net", // Lien vers le projet,
      technologies: [
        { icon: FaSymfony, name: "Symfony" },
        { icon: SiMysql, name: "MySQL" },
        { icon: FaBootstrap, name: "Bootstrap" },
      ]
    }
  ];

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold text-center dark:text-white mb-10">
        Projets Réalisés
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <Image src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover object-center" />
            <div className="p-5">
              <h3 className="text-2xl dark:text-white">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
                  Voir le projet
                </a>
                <div className="flex space-x-4 mt-2 text-gray-800 dark:text-gray-200">
                  {project.technologies && Array.isArray(project.technologies) && project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <tech.icon className="text-2xl text-teal-500 mr-2" />
                      <span className="text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
