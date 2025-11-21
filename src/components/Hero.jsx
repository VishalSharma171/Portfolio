import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Parallax background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800" />
        <motion.div
          initial={{ scale: 1.05, opacity: 0.12 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="absolute -left-20 top-0 w-[780px] h-[520px] rounded-[80px] blur-[60px] bg-gradient-to-tr from-accent to-primary/80 opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Vishal Sharma — Frontend Engineer
          </motion.h1>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-lg"
          >
            Building elegant, fast and accessible UI with React and Next.js — I focus on performance, developer experience and delightful micro-interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex gap-3"
          >
            <a href="mailto:sharmavishal142003@gmail.com" className="px-4 py-2 border rounded-lg hover:-translate-y-1 transition">
              Email
            </a>
            <a href="/resume.pdf" download className="px-4 py-2 bg-accent text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
              Download Resume
            </a>
          </motion.div>

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
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden floaty border border-white/30"
        >
          <Image src="/avatar.jpg" alt="Vishal Sharma" width={560} height={560} priority className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
