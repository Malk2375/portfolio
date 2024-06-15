import React from "react";
import { FaSymfony, FaNodeJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      name: "Spinalcom batiment - Analyse occupation batiment",
      description: "Cette application est faite pour SpinalCOM, ça affiche l'occupation des pièces d'un bâtiment, classée par étage. Le statut d'occupation peut être TRUE (occupée), FALSE (non occupée) ou UNDEFINED (inconnu). L'application est développée avec Vue.js version 2.7.14 et interagit avec l'API SpinalCom pour récupérer les données des pièces.",
      imageUrl: "/SpinalCom.png",
      link: "https://spinalcom-batiment-analyse-occupation.vercel.app/",
      technologies: [
        { icon: FaVuejs, name: "VueJs" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: TbApi, name: "Api" },
      ]
    },
    {
      name: "Bitchest",
      description: "BitChest est une application web pour gérer les portefeuilles de cryptomonnaies, accessible sur divers appareils. Elle permet aux administrateurs de gérer les utilisateurs et aux clients de consulter et gérer leurs cryptomonnaies.",
      imageUrl: "/BITCHEST.png",
      link: "https://dorbani.alwaysdata.net",
      technologies: [
        { icon: FaSymfony, name: "Symfony" },
        { icon: SiMysql, name: "MySQL" },
        { icon: FaBootstrap, name: "Bootstrap" },
      ]
    },
    {
      name: "La legion",
      description: "La legion est une application web commandée par la Mairie de Paris pour présenter les combats des judokas français aux Jeux Olympiques. Ce projet offre une plateforme interactive pour suivre et revivre les performances des athlètes français en judo.",
      imageUrl: "/LALGION.png",
      link: "https://lalegion.vercel.app/",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiFirebase, name: "Firebase" },
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
            <Image src={project.imageUrl} alt={project.name} width={650} height={240} className="w-full h-56 object-cover object-center" />
            <div className="p-5">
              <h3 className="text-2xl dark:text-white">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {project.description}
              </p>
              <div className="flex justify-between items-center flex-col sm:flex-row">
                <div className="flex space-x-4 my-4 text-gray-800 dark:text-gray-200">
                  {project.technologies && Array.isArray(project.technologies) && project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <tech.icon className="text-2xl text-teal-500 mr-2" />
                      <span className={`text-white ${techIndex >= 0 ? 'hidden md:inline' : ''}`}>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
                  Voir le projet
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;