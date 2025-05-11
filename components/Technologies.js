import React from "react";
// Importez les icônes pour les technologies
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPhp, FaSymfony, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiMysql, SiPostman } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiAlwaysdata } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const Technologies = ({darkMode}) => {
  return (
      <section className="py-10 flex flex-col">
        <h2 className="text-4xl font-bold py-5 dark:text-white text-center">
          Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-10 p-8">

          {/* Frontend */}
          <div className="flex-1 my-7">
            <h3 className="text-2xl font-semibold dark:text-white">Frontend</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <SiJavascript className="text-5xl text-yellow-500"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">JavaScript</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaReact className="text-5xl text-cyan-600"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">React.js</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaVuejs className="text-5xl text-green-600"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">VueJs</span>
              </div>
              <div className="flex items-center space-x-4">
                <SiTailwindcss className="text-5xl text-teal-500"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaBootstrap className="text-5xl text-purple-600"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="flex-1 my-7">
            <h3 className="text-2xl font-semibold dark:text-white">Backend</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <FaPhp className="text-5xl text-indigo-600"/>
                <span className="text-lg text-gray-800 dark:text-gray-200">PHP</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaSymfony className={`text-5xl ${darkMode ? "text-white" : "text-black"}`} />
                <span className="text-lg text-gray-800 dark:text-gray-200">Symfony</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaNodeJs className={`text-5xl ${darkMode ? "text-white" : "text-black"}`} />
                <span className="text-lg text-gray-800 dark:text-gray-200">NodeJs</span>
              </div>
              <div className="flex items-center space-x-4">
                <SiPostman className="text-5xl text-orange-500" />
                <span className="text-lg text-gray-800 dark:text-gray-200">Postman</span>
              </div>
            </div>
          </div>

          {/* Base de données & Hébergement */}
          <div className="flex-1 my-7">
            <h3 className="text-2xl font-semibold dark:text-white">Base de données</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <FaDatabase className="text-5xl text-green-600" />
                <span className="text-lg text-gray-800 dark:text-gray-200">MariaDB / PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-4">
                <SiMysql className="text-5xl text-blue-500" />
                <span className="text-lg text-gray-800 dark:text-gray-200">MySQL</span>
              </div>
            </div>
          </div>

          {/* Outils & Environnement */}
          <div className="flex-1 my-7">
            <h3 className="text-2xl font-semibold dark:text-white">Outils & Environnement</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <FaGitAlt className="text-5xl text-orange-500" />
                <span className="text-lg text-gray-800 dark:text-gray-200">Git</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaDocker className="text-5xl text-blue-600" />
                <span className="text-lg text-gray-800 dark:text-gray-200">Docker</span>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
};

export default Technologies;
