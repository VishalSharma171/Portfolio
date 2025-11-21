import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-semibold">
        <Link href="/">Vishal<span className="text-accent">.</span></Link>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <a href="/resume.pdf" download className="px-4 py-2 bg-accent text-white rounded-full">Resume</a>
      </div>

      <button
        className="md:hidden p-2 border rounded-lg"
        onClick={() => setOpen(!open)}
        aria-label="toggle menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-6 top-16 bg-white shadow rounded-lg p-4 md:hidden flex flex-col gap-3">
          <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="/projects" onClick={()=>setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <a href="/resume.pdf" download className="px-3 py-2 bg-accent text-white rounded-full text-center">Resume</a>
        </div>
      )}
    </nav>
  );
}
