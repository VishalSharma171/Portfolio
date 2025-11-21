import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    title: "Prepwise — AI Voice Interview Platform",
    desc: "Realtime mock-interviews with AI agents, transcripts and analytics.",
    img: "/project-prepwise.png",
    screenshots: ["/project-prepwise-1.png","/project-prepwise-2.png"],
    demo: "https://interview-prep-with-ai-chi.vercel.app/",
    repo: "https://github.com/VishalSharma171/Interview_PrepWithAI",
    tech: ["Next.js","Firebase","Tailwind"]
  },
  {
    title: "Twitlink (frontend demo)",
    desc: "A frontend rebuild of our social feed with JWT-like auth UI and optimistic updates.",
    img: "/project-twitlink.png",
    screenshots: ["/project-twitlink-1.png","/project-twitlink-2.png"],
    repo: "https://github.com/VishalSharma171/twitlink",
    tech: ["React","Redux","Node.js"]
  }
];

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [index, setIndex] = useState(0);

  function openProject(p) {
    setOpen(p);
    setIndex(0);
  }
  function closeProject() {
    setOpen(null);
  }
  function next() {
    setIndex(i => (i + 1) % (open?.screenshots?.length || 1));
  }
  function prev() {
    setIndex(i => (i - 1 + (open?.screenshots?.length || 1)) % (open?.screenshots?.length || 1));
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map(p => <ProjectCard key={p.title} project={p} onOpen={openProject} />)}
      </div>

      {/* Modal */}
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
        >
          <motion.div
            className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative w-full h-72 md:h-[420px] bg-slate-100 dark:bg-slate-800">
                <Image src={open.screenshots[index] || open.img} alt={open.title} fill style={{ objectFit: "cover" }} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{open.title}</h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300">{open.desc}</p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {open.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{t}</span>)}
                </div>

                <div className="mt-6 flex gap-3">
                  {open.demo && <a href={open.demo} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Live</a>}
                  {open.repo && <a href={open.repo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-accent text-white rounded">Repo</a>}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button onClick={prev} className="px-3 py-2 border rounded">Prev</button>
                  <div className="text-sm text-slate-500">Screenshot {index + 1} / {open.screenshots.length || 1}</div>
                  <button onClick={next} className="px-3 py-2 border rounded">Next</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
