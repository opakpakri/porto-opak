import React from "react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

import pict3 from "../assets/images/pict3.webp";
import pict4 from "../assets/images/pict4.webp";
import pict5 from "../assets/images/pict5.webp";
import pict6 from "../assets/images/pict6.webp";

// Data layanan menggunakan fungsi getText
const servicesDataEN = [
  {
    title: "Web Development",
    image: pict3,
    description: "Modern online store development using React and Tailwind.",
  },
  {
    title: "App Development",
    image: pict4,
    description:
      "Developing mobile applications using cross-platform frameworks.",
  },
  {
    title: "Data Analyst",
    image: pict5,
    description:
      "Analyzing data to provide actionable insights for business growth.",
  },
  {
    title: "JOKI Games",
    image: pict6,
    description:
      "Providing professional game boosting and achievement services.",
  },
];
const servicesDataID = [
  {
    title: "Pengembangan Web",
    image: pict3,
    description:
      "Pengembangan toko online modern menggunakan React dan Tailwind.",
  },
  {
    title: "Pengembangan Aplikasi",
    image: pict4,
    description:
      "Mengembangkan aplikasi mobile menggunakan framework lintas platform.",
  },
  {
    title: "Analis Data",
    image: pict5,
    description:
      "Menganalisis data untuk memberikan wawasan yang dapat ditindaklanjuti untuk pertumbuhan bisnis.",
  },
  {
    title: "JOKI Game",
    image: pict6,
    description:
      "Menyediakan layanan pendorong permainan profesional dan pencapaian.",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition duration-300 hover:shadow-xl">
    <div className="h-48 overflow-hidden p-6 bg-white dark:bg-gray-800 flex justify-center items-center">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
    <div className="pr-6 pl-6 pb-6 text-center">
      <h3 className="text-xl font-extrabold text-blue-700 dark:text-blue-400 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  </div>
);

function ServiceSection({ id }) {
  const { getText, language } = useThemeLanguage();
  const currentData = language === "EN" ? servicesDataEN : servicesDataID;

  return (
    <section
      id={id}
      className="py-20 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2">
            {getText("SERVICES", "LAYANAN")}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {getText("Our Features & Services", "Fitur & Layanan Kami")}
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
