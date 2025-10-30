import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeLanguageProvider } from "./context/ThemeLanguageContext";

import ClickSpark from "./components/ClickSpark";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeLanguageProvider>
      <ClickSpark sparkColor="#ffdf20" duration={500} extraScale={1.5}>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500 scroll-smooth">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </ClickSpark>
    </ThemeLanguageProvider>
  );
}

export default App;
