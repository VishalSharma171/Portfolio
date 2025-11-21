import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Vishal Sharma — Frontend Engineer
        </motion.h1>
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg text-slate-700 max-w-xl"
        >
          Frontend-focused developer with React, Next.js and modern JavaScript — building responsive, accessible and high-performance UI for education and AI products.
        </motion.p>

        <div className="mt-6 flex gap-3">
          <a href="mailto:sharmavishal142003@gmail.com" className="px-4 py-2 border rounded-lg">Email</a>
          <a href="/resume.pdf" download className="px-4 py-2 bg-accent text-white rounded-lg">Download Resume</a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="card">
            <div className="text-sm text-slate-500">Experience</div>
            <div className="text-xl font-semibold">React, Next.js</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-500">Projects</div>
            <div className="text-xl font-semibold">Prepwise, Twitlink</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-500">Location</div>
            <div className="text-xl font-semibold">Ahmedabad, India</div>
          </div>
        </div>
      </div>

      <motion.div
        className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden floaty"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image src="/avatar.jpg" alt="Vishal Sharma" width={560} height={560} />
      </motion.div>
    </section>
  );
}
