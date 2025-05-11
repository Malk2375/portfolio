import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import profile from "../public/ProfileDORBANI.png";
import Image from "next/image";
import { Experience } from "../components/Experience";
import { Technologies } from "../components/Technologies";
import { Projects } from "../components/Projets";
import Typed from "typed.js";
import Footer from "../components/Footer";  // Assure-toi d'avoir importé le Footer

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    var typed = new Typed(".typingtext", {
      strings: ["Développeur Full-Stack"],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Malek Portfolio</title>
        <meta name="description" content="Portfolio de Malk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Développé par Malk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <div className="messagecontainer">
              <h1 className="message text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Bonjour, c&apos;est Malek
              </h1>
              <div className="typingtext">
                <h2 className="typing-text text-sm md:text-base"></h2>
              </div>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Étudiant en informatique passionné
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                  className="bg-gradient-to-r w-24 from-cyan-500 to-teal-500 text-white border-none rounded-md text-lg p-2"
                  target="_blank"
                  href="https://drive.google.com/file/d/1vZRrdxtIPB2IdF4v8aaz0RPH0CMzn9VA/view?usp=sharing"
                  rel="noopener noreferrer"
              >
                CV
              </a>
              <a href="https://github.com/Malk2375" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-abdelmalek-dorbani/" target="_blank"
                 rel="noopener noreferrer">
                <AiFillLinkedin/>
              </a>
            </div>
            <div
                className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profile} alt="Profile picture" layout="fill" objectFit="cover"/>
            </div>
          </div>
        </section>
        <Experience/>
        <Technologies darkMode={darkMode} />
        <Projects/>
      </main>
      <Footer/> {/* Ajout du Footer ici */}
    </div>
  );
}
