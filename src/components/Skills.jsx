import { motion } from "framer-motion";

const skillsGroups = [
  { name: "Frontend", items: [{ name: "React", level: 90 }, { name: "Next.js", level: 85 }, { name: "Tailwind", level: 85 }] },
  { name: "Languages & Tools", items: [{ name: "JS (ES6+)", level: 90 }, { name: "TypeScript", level: 55 }, { name: "Git", level: 80 }] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <motion.div className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
        <h3 className="text-xl font-semibold">Technical Skills</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {skillsGroups.map((g) => (
            <div key={g.name}>
              <h4 className="font-semibold mb-3">{g.name}</h4>
              <div className="space-y-3">
                {g.items.map(s => (
                  <motion.div key={s.name} variants={item} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
