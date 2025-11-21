import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Prepwise — AI Voice Interview Platform",
    desc: "Real-time AI interview practice with feedback and transcripts.",
    img: "/project-prepwise.png",
    demo: "https://interview-prep-with-ai-chi.vercel.app/",
    repo: "https://github.com/VishalSharma171/Interview_PrepWithAI",
    tech: ["Next.js", "Firebase", "Tailwind"]
  },
  {
    title: "Twitlink",
    desc: "Social app with real-time posts, JWT auth and responsive UI.",
    img: "/project-twitlink.png",
    demo: "",
    repo: "https://github.com/VishalSharma171/twitlink",
    tech: ["React", "Redux", "Node.js"]
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const card = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <motion.article key={p.title} variants={card} whileHover={{ scale: 1.03 }} className="card transform-gpu">
            <div className="md:flex gap-4 items-center">
              <div className="w-full md:w-40 h-32 relative overflow-hidden rounded-lg">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>

              <div className="flex-1 mt-3 md:mt-0">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2" aria-hidden>
                  {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{t}</span>)}
                </div>

                <div className="mt-4 flex gap-3">
                  {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">Live</a> : null}
                  {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-accent text-white rounded">Repo</a> : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
