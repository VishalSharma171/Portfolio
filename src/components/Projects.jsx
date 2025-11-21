import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Prepwise — AI Voice Interview Platform",
    desc: "Next.js, Vapi AI, Firebase, Tailwind. Real-time AI-driven interview practice.",
    img: "/project-prepwise.png",
    demo: "https://prepwise.vercel.app",
    repo: "https://github.com/VishalSharma171/prepwise"
  },
  {
    title: "Twitlink",
    desc: "React, Redux, Node.js, MongoDB — social media app with JWT auth and responsive UI.",
    img: "/project-twitlink.png",
    demo: "",
    repo: "https://github.com/VishalSharma171/twitlink"
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.title} className="card flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-40 h-32 relative overflow-hidden rounded-lg">
              <Image src={p.img} alt={p.title} fill style={{objectFit:'cover'}} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">Live</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-accent text-white rounded">Repo</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
