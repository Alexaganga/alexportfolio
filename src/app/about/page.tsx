"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/alex1.jpg",
  // Add more images here if needed
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="mt-8 p-6 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white rounded-xl shadow-2xl max-w-4xl mx-auto transition-all duration-300 ease-in-out">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <div className="mt-6 flex flex-col items-center text-center space-y-6">
        <motion.div
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
          whileHover={{ scale: 1.2 }}
          onClick={nextImage}
        >
          <Image
            src={images[currentImage]}
            alt="Profile"
            layout="responsive"
            width={256}
            height={256}
            objectFit="cover"
            className="object-cover"
          />
        </motion.div>
        <motion.p
          className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I am a <span className="text-yellow-300 font-semibold">full-stack developer</span> with expertise in{" "}
          <span className="text-yellow-400">Node.js, React, and cloud computing</span>. I enjoy building scalable and
          user-friendly applications.
        </motion.p>
      </div>
      <motion.h3
        className="text-3xl font-bold mt-8 text-yellow-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h3>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-lg sm:text-xl max-w-2xl mx-auto">
        {[
          "JavaScript, Node.js, Express.js",
          "React.js, Vue.js",
          "MongoDB, Firebase",
          "Tailwind CSS, Bootstrap",
        ].map((skill, index) => (
          <motion.li
            key={index}
            className="hover:text-yellow-400 transition duration-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
