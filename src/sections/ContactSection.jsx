import React, { useState } from "react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaEnvelope,
    text: "aufakhrhitw@gmail.com",
    link: "mailto:aufakhrhitw@gmail.com",
  },
  { icon: FaPhone, text: "+62 812 8388 2607", link: "tel:+6281283882607" },
  { icon: FaMapMarkerAlt, text: "Jakarta, Indonesia", link: "#" },
];

function ContactSection({ id }) {
  const { getText } = useThemeLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  const successMessage = "Message Sent Successfully, Thank You!";

  return (
    <section
      id={id}
      className="py-20 md:py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            data-aos="fade-up"
            className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2"
          >
            {getText("CONTACT", "KONTAK")}
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            {getText("Get in Touch with Us", "Hubungi Kami")}
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto mt-4"
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div
            data-aos="fade-up"
            className="md:col-span-3 flex flex-col space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              {getText(
                "I'm always open to discuss exciting projects and new opportunities. Let's collaborate!",
                "Saya selalu terbuka untuk mendiskusikan proyek menarik dan peluang baru. Mari berkolaborasi!"
              )}
            </p>
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-lg text-gray-800 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {<item.icon className="text-xl text-gray-500" />}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex space-x-4 pt-4"
            >
              <a
                href="https://github.com/opakpakri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.com/users/216768861008166925"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.linkedin.com/in/aufafakhri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/opakpakri_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@opakpakri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:col-span-2 w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSubmitted && (
                <div className="p-3 mb-4 text-sm font-medium text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-700 rounded-lg text-center">
                  {successMessage}
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder={getText("Your Name", "Nama Anda")}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={getText("Your Email", "Email Anda")}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
                required
              />
              <textarea
                name="message"
                placeholder={getText("Your Message", "Pesan Anda")}
                rows="6"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                {getText("Send Message", "Kirim Pesan")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
