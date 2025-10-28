import React, { useEffect, useRef } from "react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import LandingSection from "../sections/LandingSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import ServiceSection from "../sections/ServiceSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  const { setActiveSection, navItems } = useThemeLanguage();

  // Intersection Observer untuk Scroll Tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Deteksi ketika section mencapai 50% dari viewport
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          const normalizedName = navItems.find(
            (item) => item.href === `#${sectionId}`
          )?.name;
          if (normalizedName) {
            setActiveSection(normalizedName);
          }
        }
      });
    }, observerOptions);

    // Amati semua section
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems, setActiveSection]);

  // ID pada setiap Section SANGAT PENTING untuk Observer
  return (
    <div className="">
      {" "}
      {/* Tambah padding atas agar tidak tertutup navbar */}
      <main>
        <LandingSection id="home" />
        <AboutSection id="about" />
        <ProjectSection id="projects" />
        <ServiceSection id="services" />
        <ContactSection id="contact" />
      </main>
    </div>
  );
};

export default Home;
