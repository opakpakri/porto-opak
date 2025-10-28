import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeLanguageProvider } from "./context/ThemeLanguageContext";

function App() {
  // Pastikan Anda telah mengaktifkan dark mode: 'class' di tailwind.config.cjs
  return (
    <ThemeLanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navbar />
        {/* Konten Home yang berisi semua section */}
        <Home />
        <Footer />
      </div>
    </ThemeLanguageProvider>
  );
}

export default App;
