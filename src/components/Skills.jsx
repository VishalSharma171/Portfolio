const skills = [
  "JavaScript (ES6+)",
  "TypeScript (basic)",
  "React.js",
  "Next.js",
  "Redux (basic)",
  "Tailwind CSS",
  "Node.js & Express",
  "MongoDB",
  "Git",
  "Figma"
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="card">
        <h3 className="text-xl font-semibold">Technical Skills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
