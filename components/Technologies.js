import React from "react";
// Importez les icônes pour les technologies
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPhp, FaSymfony, FaDocker, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiMysql } from "react-icons/si";

export const Technologies = () => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold py-5 dark:text-white text-center">
        Technologies maîtrisées
      </h2>
      <div className="grid grid-cols-3 gap-10 p-8">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold dark:text-white">Frontend</h3>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <FaHtml5 className="text-4xl text-orange-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">HTML</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCss3Alt className="text-4xl text-blue-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">CSS</span>
            </div>
            <div className="flex items-center space-x-4">
              <SiTailwindcss className="text-4xl text-teal-500" />
              <span className="text-lg text-gray-800 dark:text-gray-200">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaBootstrap className="text-4xl text-purple-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">Bootstrap</span>
            </div>
            <div className="flex items-center space-x-4">
              <SiJavascript className="text-4xl text-yellow-500" />
              <span className="text-lg text-gray-800 dark:text-gray-200">JavaScript</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaReact className="text-4xl text-cyan-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">React.js</span>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold dark:text-white">Backend</h3>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <FaPhp className="text-4xl text-indigo-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">PHP</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaSymfony className="text-4xl text-black" />
              <span className="text-lg text-gray-800 dark:text-gray-200">Symfony</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaDocker className="text-4xl text-blue-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">Docker</span>
            </div>
          </div>
        </div>
        {/* Base de données */}
        <div>
          <h3 className="text-2xl font-semibold dark:text-white">Base de données</h3>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <SiFirebase className="text-4xl text-yellow-500" />
              <span className="text-lg text-gray-800 dark:text-gray-200">Firebase</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaDatabase className="text-4xl text-green-600" />
              <span className="text-lg text-gray-800 dark:text-gray-200">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Technologies;