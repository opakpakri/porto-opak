import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeLanguageContext = createContext();

export const useThemeLanguage = () => useContext(ThemeLanguageContext);

export const ThemeLanguageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [activeSection, setActiveSection] = useState("Home");

  // 1. KONTROL TEMA: Mengubah class 'dark' di <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // 2. FUNGSI TOGGLE
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "ID" : "EN"));

  // 3. FUNGSI PENERJEMAH (Helper)
  const getText = (text_en, text_id) => (language === "EN" ? text_en : text_id);

  // 4. DATA NAVIGASI (Dengan teks multibahasa)
  const navItems = [
    { name: "Home", href: "#home", text_en: "Home", text_id: "Beranda" },
    { name: "About", href: "#about", text_en: "About", text_id: "Tentang" },
    {
      name: "Projects",
      href: "#projects",
      text_en: "Projects",
      text_id: "Proyek",
    },
    {
      name: "Services",
      href: "#services",
      text_en: "Services",
      text_id: "Layanan",
    },
    {
      name: "Contact",
      href: "#contact",
      text_en: "Contact",
      text_id: "Kontak",
    },
  ];

  const value = {
    isDarkMode,
    toggleTheme,
    language,
    toggleLanguage,
    getText,
    activeSection,
    setActiveSection,
    navItems,
  };

  return (
    <ThemeLanguageContext.Provider value={value}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};
