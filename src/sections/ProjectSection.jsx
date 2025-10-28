import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

import project1 from "../assets/images/project1.webp";
import project6 from "../assets/images/project6.webp";
import project2 from "../assets/images/project2.webp";
import project4 from "../assets/images/project4.webp";
import project3 from "../assets/images/project3.webp";
import project5 from "../assets/images/project5.webp";

const projectsData = [
  {
    title: "WarungLaptop Website",
    image: project1,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["HTML", "PHP", "CSS", "JavaScript"],
    github: "https://github.com/opakpakri/WarungLaptop",
    liveDemo: "https://livedemo.com/1",
  },
  {
    title: "WarungLaptop Mobile",
    image: project2,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["Kotlin", "XML"],
    github: "https://github.com/opakpakri/WarungLaptop_Mobile",
    liveDemo: "https://livedemo.com/2",
  },
  {
    title: "BCash Mobile",
    image: project3,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["Kotlin", "XML"],
    github: "https://github.com/Diassdp/B-Cash",
    liveDemo: "https://livedemo.com/3",
  },
  {
    title: "SacalunaCoffee",
    image: project4,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["React", "Tailwind CSS", "Express", "JavaScript"],
    github: "https://github.com/opakpakri/sacalunacoffee",
    liveDemo: "https://livedemo.com/4",
  },
  {
    title: "Portofolio Website",
    image: project5,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/opakpakri/sacalunacoffee",
    liveDemo: "https://livedemo.com/5",
  },
  {
    title: "Github User Application",
    image: project6,
    description:
      "Modern online store with product filtering, cart, and payment system.",
    tech: ["Kotlin", "XML"],
    github: "https://github.com/opakpakri/Github-User-Application",
    liveDemo: "https://livedemo.com/6",
  },
];

const ProjectCard = ({ project }) => {
  const { getText } = useThemeLanguage();

  const getTechClass = () => {
    return "text-xs font-normal px-2 py-0.5 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800";
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
      <div className="h-56 p-4 bg-gray-100 dark:bg-gray-700 overflow-hidden rounded-t-xl flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex space-x-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className={getTechClass(t)}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {/* Tombol GitHub: Biru Solid */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-semibold bg-blue-600 text-white border border-blue-600 py-2 px-4 rounded transition-colors duration-300"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* Tombol Live Demo: Biru Solid */}
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-semibold bg-blue-600 text-white border border-blue-600 py-2 px-4 rounded transition-colors duration-300"
          >
            <FaArrowRight className="text-xs" />
            <span>{getText("Live Demo", "Demo Langsung")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

function ProjectSection({ id }) {
  const { getText } = useThemeLanguage();

  return (
    <section
      id={id}
      className="py-20 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2">
            {getText("PROJECTS", "PROYEK")}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {getText("Featured Work", "Karya Unggulan")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {getText(
              "A showcase of my recent projects demonstrating expertise in full-stack development modern frameworks and creative problem-solving",
              "Sebuah pameran proyek terbaru saya yang menunjukkan keahlian dalam pengembangan full-stack, framework modern, dan pemecahan masalah kreatif"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
