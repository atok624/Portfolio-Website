import React from "react";
import {
  FaReact,
  FaJs,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faCode, faTools } from "@fortawesome/free-solid-svg-icons"; // Add the icons for Rails, Redux, and Ruby


const Footer = () => {
  return (
    <footer className="relative bg-gray-900">
      <div className="footer absolute top-0 w-full justify-center p-4 md:px-14 bg-[#11001d] content">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-orange-500 tracking-wider mb-8">
          Stacks Under My Belt
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white place-items-center">
        <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaReact className="text-2xl" />
              React
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaJs className="text-2xl" />
              JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaCss3 className="text-2xl" />
              Tailwind
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaBootstrap className="text-2xl" />
              Bootstrap
            </a>
          </li>
          <li>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaGit className="text-2xl" />
              Git
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaGithub className="text-2xl" />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaDatabase className="text-2xl" />
              Postgresql
            </a>
          </li>
          <li>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FaPython className="text-2xl" />
              Python
            </a>
          </li>
          <li>
            <a
              href="https://rubyonrails.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FontAwesomeIcon icon={faGem} className="text-2xl" />
              Rails
            </a>
          </li>
          <li>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FontAwesomeIcon icon={faCode} className="text-2xl" />
              Redux
            </a>
          </li>
          <li>
            <a
              href="https://www.ruby-lang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FontAwesomeIcon icon={faGem} className="text-2xl" />
              Ruby
            </a>
          </li>
          <li>
            <a
              href="https://jestjs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-2 border-[#141414] rounded p-3 shadow-md w-28 bg-black hover:bg-green-800 transition duration-300 transform hover:scale-105 animate-pulse"
            >
              <FontAwesomeIcon icon={faTools} className="text-2xl" />
              Jest
            </a>
          </li>
        </ul>
        <div className="footer-actions mt-8 flex flex-col items-center gap-4">
          <a
            href="../../../public/assets/N.K. Amissah Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-3 rounded animate__animated animate__pulse animate__infinite animate__fast text-white hover:bg-green-700 transition"
          >
            Get My Resume
          </a>
          <div className="flex flex-col items-center mt-4">
            <p>
              Nicholas Kwamena Amissah
            </p>
            <p>&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
