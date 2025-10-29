// src/App.jsx (FINAL)

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // 🎯 IMPORT BARU
import { ThemeLanguageProvider } from "./context/ThemeLanguageContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeLanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500 ">
        <Navbar />
        <Home />
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeLanguageProvider>
  );
}

export default App;
