import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Texte copyright */}
                    <div>
                        <p className="text-sm md:text-base">
                            &copy; {new Date().getFullYear()} Malek. All rights reserved.
                        </p>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="flex space-x-6">
                        <a href="https://github.com/Malk2375" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-abdelmalek-dorbani/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <AiFillLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
