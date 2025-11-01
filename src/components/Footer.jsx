import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  const id = href.substring(1);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Footer() {
  const { navItems, getText } = useThemeLanguage();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/opakpakri" },
    { icon: FaDiscord, href: "https://discord.com/users/216768861008166925" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/aufafakhri" },
    { icon: FaInstagram, href: "https://www.instagram.com/opakpakri_" },
    { icon: FaYoutube, href: "https://youtube.com/@opakpakri" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10 md:py-12 px-4 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-extrabold tracking-wider">Opak</h3>
        </div>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-10 text-sm md:text-lg font-medium">
            {navItems.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {getText(link.text_en, link.text_id)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-gray-400 transition-colors duration-200"
            >
              <link.icon />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400">© 2025 Opak All Rights Reserved</p>
        <p className="text-xs text-gray-500 mt-1">
          Inspired by{" "}
          <a
            href="https://www.instagram.com/amine__codes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            @amine__codes
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
