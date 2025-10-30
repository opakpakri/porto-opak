import React, { useState } from "react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaCode,
  FaEnvelope,
  FaGlobe,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const iconMap = {
  Home: FaHome,
  About: FaUser,
  Projects: FaFolder,
  Services: FaCode,
  Contact: FaEnvelope,
};

const ThemeToggle = ({ isDark, onToggle }) => (
  <div
    onClick={onToggle}
    className={`w-16 h-8 flex items-center p-1 rounded-full cursor-pointer transition-colors duration-500 shadow-inner ${
      isDark ? "bg-gray-700" : "bg-gray-200"
    }`}
  >
    <div
      className={`w-6 h-6 rounded-full transform transition-transform duration-500 shadow-md ${
        isDark
          ? "translate-x-full bg-yellow-300"
          : "translate-x-0 bg-yellow-500"
      } flex items-center justify-center`}
    >
      {isDark ? (
        <FaMoon className="text-xs text-gray-800" />
      ) : (
        <FaSun className="text-xs text-white" />
      )}
    </div>
  </div>
);

function Navbar() {
  const {
    isDarkMode,
    toggleTheme,
    language,
    toggleLanguage,
    activeSection,
    navItems,
  } = useThemeLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full flex justify-center top-8 z-100 px-4">
      <div className="bg-white dark:bg-gray-800 z-100 backdrop-filter backdrop-blur-lg bg-opacity-100 dark:bg-opacity-70 rounded-full p-3 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-screen-md w-full flex justify-between items-center space-x-2 transition-colors duration-500">
        <button
          className={`
            text-gray-600 dark:text-gray-300 text-xl p-2 rounded-full sm:hidden 
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "rotate-180" : "rotate-0"}
          `}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden sm:flex space-x-2">
          {navItems.map((item) => {
            const IconComponent = iconMap[item.name];
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === item.name
                    ? "bg-black text-white dark:bg-white dark:text-gray-900 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <IconComponent className="text-lg" />
                <span className="hidden sm:inline">{item.text_en}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center space-x-3">
          <div
            onClick={toggleLanguage}
            className="flex items-center space-x-1 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <FaGlobe className="text-xl" />
            <span className="font-bold">{language}</span>
          </div>

          <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
        </div>
      </div>

      <div
        className={`
          fixed top-16 left-4 p-2 pt-10 transition-all duration-300 ease-in-out transform
          bg-white dark:bg-gray-800 rounded-b-xl shadow-2xl border border-gray-200 dark:border-gray-700
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }
          sm:hidden w-16 
      `}
      >
        <div className="flex flex-col space-y-3 items-center">
          {navItems.map((item) => {
            const IconComponent = iconMap[item.name];
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className={`flex justify-center w-full py-3 rounded-lg ${
                  activeSection === item.name
                    ? "bg-black text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <IconComponent className="text-xl" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
