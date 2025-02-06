"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-700 text-white text-center min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 animate-pulse">
        Let's Connect
      </h2>
      <p className="text-lg sm:text-xl mb-6 max-w-2xl">
        I'd love to hear from you! Whether it's a project, collaboration, or just a chat.
      </p>

      {/* Contact Buttons */}
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Email Button */}
        <a
          href="mailto:alexagangamoustapha430@gmail.com"
          className="bg-white text-blue-700 px-6 py-3 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-100"
        >
          Email Me 📩
        </a>

        {/* Phone Contact */}
        <p className="text-xl font-semibold">
          Or call me:{" "}
          <span className="text-yellow-300 underline tracking-wide">
            +254 7411 388 844
          </span>
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl hover:text-gray-300 transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl hover:text-gray-300 transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-4xl hover:text-gray-300 transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-4xl hover:text-gray-300 transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://wa.me/+254741138844" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-4xl hover:text-gray-300 transition-all duration-300 hover:scale-110" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
