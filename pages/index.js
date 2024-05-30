import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import profile from "../public/ProfileDORBANI.png";
import Image from "next/image";
import { Experience } from "../components/Experience.js";
import { Technologies } from "../components/Technologies.js";
import { Projects } from "../components/Projets.js";
import Typed from "typed.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    var typed = new Typed(".typingtext", {
      strings: ["Développeur web", "Front-end", "Back-end"],
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
        <title>Malk Portfolio</title>
        <meta name="description" content="Portfolio de Malk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Développé par Malk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  target="_blank"
                  href="https://drive.google.com/file/d/1vZRrdxtIPB2IdF4v8aaz0RPH0CMzn9VA/view?usp=sharing"
                  rel="noopener noreferrer"
                >
                  Curriculum vitae
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <div className="messagecontainer">
              <h1 className="message text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Bonjour, c&apos;est Malk
              </h1>
              <div className="typingtext">
                <h2></h2>
              </div>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Étudiant en informatique et passionné par le développement web. Bienvenue dans mon espace.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Malk2375" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-abdelmalek-dorbani/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profile} alt="Profile picture" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <Experience />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}
