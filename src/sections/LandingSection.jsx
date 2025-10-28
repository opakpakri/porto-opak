// src/sections/LandingSection.jsx

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaArrowRight,
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import profileImage from "../assets/images/pict1.webp";

const LandingSection = ({ id }) => {
  const { getText } = useThemeLanguage();
  const profileImageUrl = profileImage;
  const [text] = useTypewriter({
    words: [
      getText("UI/UX Designer", "UI/UX Designer"),
      getText("Web Developer", "Web Developer"),
      getText("Freelancer", "Freelancer"),
      getText("JOKI Games", "JOKI Game"),
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <section
      id={id}
      className="min-h-screen flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8 py-20"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="flex flex-col justify-center order-2 md:order-1 md:col-span-3">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 max-w-fit shadow-sm">
            {getText(
              "Available for freelance work",
              "Tersedia untuk proyek lepas"
            )}
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
            {getText("Hi, I'm Opak", "Hai, Saya Opak")}
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-8">
            {text}
            <Cursor cursorStyle="|" cursorColor="#111827" />
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            {getText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 mb-10 text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-lg text-gray-500" />
              <span className="text-base">
                {getText("Jakarta, Indonesia", "Jakarta, Indonesia")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegEnvelope className="text-lg text-gray-500" />
              <span className="text-base">
                {getText("Available Now", "Tersedia Sekarang")}
              </span>
            </div>
          </div>

          <div className="flex space-x-4 mb-10 max-w-lg">
            <a
              href="#contact"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 border border-gray-900 dark:border-white font-semibold py-3 px-7 rounded-lg flex items-center justify-center space-x-3 transition-colors duration-300 shadow-md"
            >
              <FaArrowRight className="text-lg" />
              <span>{getText("Hire Me", "Rekrut Saya")}</span>
            </a>

            <a
              href="/dummycv.pdf"
              download
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 font-semibold py-3 px-7 rounded-lg flex items-center justify-center space-x-3 transition-colors duration-300 shadow-md"
            >
              <FaDownload className="text-lg" />
              <span>{getText("Download CV", "Unduh CV")}</span>
            </a>
          </div>

          <hr className="border-t border-gray-200 dark:border-gray-700 w-full mb-8" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {getText("Follow me:", "Ikuti saya:")}
            </span>
            <div className="flex space-x-5 text-xl">
              <a
                href="https://github.com/opakpakri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.com/users/216768861008166925"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.linkedin.com/in/aufafakhri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/opakpakri_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@opakpakri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2 md:col-span-2 p-0 md:p-0">
          <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-xl">
            <img
              src={profileImageUrl}
              alt="Profile Picture"
              className="object-cover w-full h-auto transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
