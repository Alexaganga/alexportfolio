"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title, subtitle, and welcome message
    tl.from(titleRef.current, { opacity: 0, y: -50, duration: 1.2, ease: "power2.out" })
      .from(subtitleRef.current, { opacity: 0, y: -30, duration: 1.2, ease: "power2.out" }, "-=0.7")
      .from(welcomeRef.current, { opacity: 0, scale: 0.8, duration: 1.5, ease: "elastic.out(1, 0.6)" }, "-=1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-teal-400 via-indigo-500 to-purple-700">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ background: "linear-gradient(45deg, #1e2a47, #ff7a00)" }}></div>

      {/* Content Container */}
      <div className="relative z-10 text-white max-w-5xl px-6 text-center">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold leading-tight tracking-wide mb-4 text-shadow-lg"
        >
          Welcome to a New Era
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8"
        >
          Empowering innovation, creativity, and excellence. Let’s build something extraordinary together.
        </p>

        {/* Welcome Message */}
        <p
          ref={welcomeRef}
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
        >
          I'm Alex Mustapha, and I believe in creating web experiences that are not just functional, but impactful. Working with me means you’re choosing someone who is passionate about bringing your ideas to life with precision and care. Let’s turn your vision into reality and exceed expectations together!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-gray-300 text-sm">
        
      </footer>
    </section>
  );
}
