"use client";
import Link from "next/link";
import "./globals.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-10 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-900 text-white p-4 shadow-lg fixed w-full top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-yellow-400 font-display">
          Alex Mustapha
        </h1>
        <ul className="flex space-x-4 text-lg font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contacts", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-md transition duration-300 group flex items-center"
              >
                <span className="text-sm md:text-base font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-gray-300 text-center py-4 px-6 shadow-inner fixed bottom-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm font-semibold">&copy; 2025 Alex Mustapha. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-6">
        {[
          { href: "https://github.com", icon: <FaGithub /> },
          { href: "https://linkedin.com", icon: <FaLinkedin /> },
          { href: "https://twitter.com", icon: <FaTwitter /> },
          { href: "https://www.tiktok.com", icon: <FaTiktok /> },
          { href: "https://wa.me/", icon: <FaWhatsapp /> },
        ].map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </motion.footer>
  );
}