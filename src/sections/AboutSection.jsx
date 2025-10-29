import React from "react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";
import aboutImage from "../assets/images/pict2.webp";

const AttributeCard = ({ Icon, title, content }) => (
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 transition duration-300 hover:shadow-md h-full flex flex-col justify-start"
  >
    <div className="flex flex-col items-center text-center space-y-2 mb-2 sm:flex-row sm:items-start sm:text-left sm:space-x-2 sm:space-y-0">
      <Icon className="text-3xl text-gray-900 dark:text-white sm:text-xl" />
      <h4 className="text-base font-bold text-gray-900 dark:text-white">
        {title}
      </h4>
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center sm:text-left">
      {content}
    </p>
  </div>
);

function AboutSection({ id }) {
  const { getText } = useThemeLanguage();
  const aboutImageUrl = aboutImage;

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
      className="py-20 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="flex flex-col space-y-4 md:col-span-3">
            <p
              data-aos="fade-up"
              className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1"
            >
              {getText("ABOUT ME", "TENTANG SAYA")}
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug mb-2"
            >
              {getText("Building Meaningful", "Membangun Pengalaman")}
              <br />
              {getText("Digital Expriences", "Digital yang Bermakna")}
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="w-20 h-0.5 bg-gray-400 dark:bg-gray-700 mb-6"
            ></div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-400 text-base leading-relaxed"
            >
              {getText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat. Suspendisse vestibulum vulputate ante eget ornare. Nam venenatis, tellus id maximus porta, neque massa congue lacus, nec feugiat dolor mauris ut erat.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ex id pulvinar sodales. Fusce suscipit tempor odio, vel porttitor tellus commodo eu. Mauris vehicula nisl in est aliquet ultricies. Fusce ornare lobortis metus, eu malesuada leo volutpat. Suspendisse vestibulum vulputate ante eget ornare. Nam venenatis, tellus id maximus porta, neque massa congue lacus, nec feugiat dolor mauris ut erat."
              )}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6"
            >
              {getText(
                "Cras scelerisque elementum tincidunt. Phasellus tempus ac dolor ac volutpat. Etiam dui felis, viverra eu pulvinar at, imperdiet eget dolor. Aliquam scelerisque elementum vestibulum. In aliquet dolor ac iaculis varius.h",
                "Cras scelerisque elementum tincidunt. Phasellus tempus ac dolor ac volutpat. Etiam dui felis, viverra eu pulvinar at, imperdiet eget dolor. Aliquam scelerisque elementum vestibulum. In aliquet dolor ac iaculis varius.h"
              )}
            </p>
            <h3
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-xl font-bold text-gray-900 dark:text-white pt-4"
            >
              {getText("What Drives Me", "Apa yang Mendorong Saya")}
            </h3>
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
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center md:justify-end md:col-span-2 w-full mt-8 md:mt-[165px]"
          >
            <div className="relative w-full h-auto overflow-hidden rounded-lg">
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
