// src/components/ScrollToTopButton.jsx

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Tampilkan tombol jika halaman discroll lebih dari 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
                fixed bottom-8 right-8 z-50 p-3 rounded-full 
                bg-blue-600 text-white shadow-xl transition-opacity duration-300
                hover:bg-blue-700
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
      aria-label="Scroll to top"
    >
      {/* 🎯 UKURAN IKON DIKECILKAN KE text-lg */}
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopButton;
