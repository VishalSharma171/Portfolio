import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs"; // react-icons used generically

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed w-full z-50 backdrop-blur-sm transition-all ${scrolled ? "shadow-md bg-white/70 dark:bg-slate-900/60" : "bg-transparent"} `}
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <div className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-accent to-primary text-white font-bold">VS</div>
            <span className="hidden sm:inline">Vishal<span className="text-accent">.</span></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded">About</Link>
          <Link href="/projects" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded">Projects</Link>
          <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded">Contact</Link>

          <a href="/resume.pdf" download className="px-4 py-2 bg-accent text-white rounded-full shadow-sm hover:translate-y-[-2px] transition-transform">
            Resume
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur p-4 border-t">
          <div className="flex flex-col gap-3">
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <a href="/resume.pdf" download className="px-3 py-2 bg-accent text-white rounded-lg text-center">Resume</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
