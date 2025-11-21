// src/components/Hero.jsx
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";
import { useEffect, useState, useRef } from "react";

/**
 * Smooth infinite typewriter loop
 * type → pause → delete → next → repeat
 */
function useTypewriterLoop(words = [], opts = {}) {
  const {
    typingSpeed = 70,
    deletingSpeed = 40,
    pauseAfterType = 1000,
    pauseAfterDelete = 300
  } = opts;

  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting
  const indexRef = useRef(0);

  useEffect(() => {
    const currentWord = words[indexRef.current % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("pausing"), pauseAfterType);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, text.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        indexRef.current = (indexRef.current + 1) % words.length;
        const timeout = setTimeout(() => setPhase("typing"), pauseAfterDelete);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), pauseAfterType);
      return () => clearTimeout(timeout);
    }
  }, [text, phase, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}

export default function Hero() {
  const roles = ["Frontend Engineer", "React & Next.js", "UI Performance Enthusiast"];
  const typed = useTypewriterLoop(roles, {
    typingSpeed: 65,
    deletingSpeed: 35,
    pauseAfterType: 1000,
    pauseAfterDelete: 300
  });

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -left-20 top-0 w-[560px] h-[420px] opacity-80 pointer-events-none">
        <AnimatedBlob />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 z-10">
          <motion.h1
            initial={{ y: 36, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Vishal Sharma
            <span className="block mt-2 text-2xl md:text-3xl text-accent">
              {typed}
              <span className="inline-block ml-1 blink" aria-hidden>
                ▮
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-xl"
          >
I engineer high-quality, production-ready UIs with React, Next.js, and TypeScript. I focus on performance, maintainability, and crafting seamless experiences for modern web and AI applications.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg px-5 py-3 bg-accent text-white shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-1 transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-3 border rounded-lg hover:bg-black/5 transition"
            >
              Download Resume
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="glass-card">
              <div className="text-xs text-slate-500">Experience</div>
              <div className="font-semibold">React, Next.js</div>
            </div>
            <div className="glass-card">
              <div className="text-xs text-slate-500">Projects</div>
              <div className="font-semibold">Prepwise, Twitlink</div>
            </div>
            <div className="glass-card">
              <div className="text-xs text-slate-500">Location</div>
              <div className="font-semibold">Ahmedabad, India</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          <Image
            src="/avatar.jpg"
            alt="Vishal"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
