import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function IntroSplash({ onFinish }) {
  // onFinish will be called by parent after 2500ms, but we still show exit animation
  useEffect(() => {
    // nothing to do here (parent times out). Keep placeholder if you want internal timing.
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9998] grid place-items-center bg-white dark:bg-slate-900"
      aria-hidden
    >
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -8, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-[360px] md:w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-black/80">
          {/* Put a short GIF / mp4 in public/intro-coding.gif */}
          <Image
            src="/intro-coding.gif"
            alt="Intro: developer coding"
            width={1200}
            height={700}
            priority
            style={{ objectFit: "cover", display: "block" }}
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold">Vishal Sharma</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Frontend Engineer — crafting fast, delightful web experiences</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
