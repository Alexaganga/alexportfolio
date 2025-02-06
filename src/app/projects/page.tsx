"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo Editor",
    description: "A web-based editor for managing todo lists.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js.",
    link: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A powerful dashboard for managing e-commerce analytics.",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot for seamless customer support.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
        My Projects 🚀
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-yellow-300">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block bg-blue-600 px-4 py-2 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110 hover:bg-blue-700"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
