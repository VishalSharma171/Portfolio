import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ project, onOpen }) {
  const controls = useAnimation();
  const ref = useRef();

  return (
    <motion.article
      ref={ref}
      className="relative card overflow-hidden cursor-pointer transform-gpu"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      onClick={() => onOpen(project)}
    >
      <div className="relative md:flex gap-4 items-center">
        <div className="w-full md:w-44 h-36 relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
          {/* On hover we will show a subtle preview using motion opacity */}
          <Image src={project.img} alt={project.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        <div className="flex-1 mt-3 md:mt-0">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 line-clamp-3">{project.desc}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{t}</span>)}
          </div>

          <div className="mt-4 flex gap-2">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()} className="px-3 py-2 border rounded">Live</a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()} className="px-3 py-2 bg-accent text-white rounded">Repo</a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
