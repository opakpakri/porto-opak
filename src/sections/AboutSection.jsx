// src/sections/AboutSection.jsx

import React from "react";
// Import Context Hook
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";
import aboutImage from "../assets/images/pict2.webp";

// Komponen Pembantu untuk Kotak Atribut
const AttributeCard = ({ Icon, title, content }) => (
  <div
    // Styling Dark Mode untuk Card
    className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 transition duration-300 hover:shadow-md h-full flex flex-col justify-start"
  >
    {/* Layout Responsif: Stacked dan Centered di Mobile, Side-by-Side di Desktop */}
    <div className="flex flex-col items-center text-center space-y-2 mb-2 sm:flex-row sm:items-start sm:text-left sm:space-x-2 sm:space-y-0">
      <Icon className="text-3xl text-gray-900 dark:text-white sm:text-xl" />
      <h4 className="text-base font-bold text-gray-900 dark:text-white">
        {title}
      </h4>
    </div>

    {/* Deskripsi */}
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center sm:text-left">
      {content}
    </p>
  </div>
);

function AboutSection({ id }) {
  // Menerima prop ID
  const { getText } = useThemeLanguage(); // 🎯 Gunakan hook
  const aboutImageUrl = aboutImage;

  // Data Atribut (Akan kita terjemahkan kontennya menggunakan getText)
  const attributes = [
    {
      Icon: FaCode,
      title: getText("Languages", "Bahasa Pemrograman"),
      content: "HTML, CSS, JavaScript, XML, C, React",
    },
    {
      Icon: FaGraduationCap,
      title: getText("Education", "Pendidikan"),
      content: getText("UPNVJ in Computer Science", "UPNVJ Ilmu Komputer"),
    },
    {
      Icon: FaFolderOpen,
      title: getText("Projects", "Proyek"),
      content: getText(
        "Built more than 5 project",
        "Telah membuat lebih dari 5 proyek"
      ),
    },
  ];

  return (
    <section
      id={id}
      // Styling Dark Mode untuk Section Background
      className="py-20 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* KOLOM KIRI (Teks & Atribut) */}
          <div className="flex flex-col space-y-4 md:col-span-3">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">
              {getText("ABOUT ME", "TENTANG SAYA")}
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug mb-2">
              {getText("Building Meaningful", "Membangun Pengalaman")}
              <br />
              {getText("Digital Expriences", "Digital yang Bermakna")}
            </h2>

            <div className="w-20 h-0.5 bg-gray-400 dark:bg-gray-700 mb-6"></div>

            {/* Paragraf Narasi (Tetap Lorem Ipsum, tetapi Anda bisa menggantinya dengan getText) */}
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {getText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat. Suspendisse vestibulum vulputate ante eget ornare. Nam venenatis, tellus id maximus porta, neque massa congue lacus, nec feugiat dolor mauris ut erat.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat. Suspendisse vestibulum vulputate ante eget ornare. Nam venenatis, tellus id maximus porta, neque massa congue lacus, nec feugiat dolor mauris ut erat."
              )}
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
              {getText(
                "Cras scelerisque elementum tincidunt. Phasellus tempus ac dolor ac volutpat. Etiam dui felis, viverra eu pulvinar at, imperdiet eget dolor. Aliquam scelerisque elementum vestibulum. In aliquet dolor ac iaculis varius.h",
                "Cras scelerisque elementum tincidunt. Phasellus tempus ac dolor ac volutpat. Etiam dui felis, viverra eu pulvinar at, imperdiet eget dolor. Aliquam scelerisque elementum vestibulum. In aliquet dolor ac iaculis varius.h"
              )}
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-4">
              {getText("What Drives Me", "Apa yang Mendorong Saya")}
            </h3>

            {/* Atribut: Selalu 3 kolom, responsif */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {attributes.map((item, index) => (
                <AttributeCard
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          {/* KOLOM KANAN (Gambar): 40% lebar (col-span-2) */}
          <div className="flex justify-center md:justify-end md:col-span-2 w-full mt-8 md:mt-[165px]">
            <div className="relative w-full h-auto overflow-hidden rounded-lg ">
              <img
                src={aboutImageUrl}
                alt="About Profile Picture"
                className="object-cover w-full h-auto transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
