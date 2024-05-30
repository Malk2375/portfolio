import React from "react";
import { FaSymfony, FaNodeJs, FaBootstrap } from "react-icons/fa";
import Image from "next/image";

export const Experience = () => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold py-5 dark:text-white text-center">
        Expériences Professionnelles
      </h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Image src="/avatar-01.jpg" alt="Logo TRI AUTO" width={70} height={70}  className="w-20 h-20 mr-4 triauto"  />
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              2024 - Stage - TRI AUTO
            </h3>
            <span className="text-lg text-gray-700 dark:text-gray-300">
              Entreprise de vente de pièces détachées
            </span>
          </div>
        </div>
        <ul className="list-disc list-inside mt-4 text-md leading-8 text-gray-800 dark:text-gray-200">
          <li>Création d’un site en Bootstrap, Symfony, MySQL permettant aux utilisateurs de rechercher, filtrer et commander des pièces détachées en ligne.</li>
          <li>Mise en place d’un système d’administration pour la gestion des articles.</li>
          <li>Collaboration avec CIRTA IT pour lier la base de données existante de TRI AUTO avec le site.</li>
        </ul>
        <div className="mt-6">
          <h4 className="text-xl font-semibold dark:text-white">Technologies utilisées :</h4>
          <div className="flex space-x-4 mt-2 text-gray-800 dark:text-gray-200">
            <div className="flex items-center">
              <FaSymfony className="text-2xl text-teal-500 mr-2" />
              <span>Symfony</span>
            </div>
            <div className="flex items-center">
              <FaNodeJs className="text-2xl text-teal-500 mr-2" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center">
              <FaBootstrap className="text-2xl text-teal-500 mr-2" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
