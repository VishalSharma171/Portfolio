export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="card">
        <h2 className="text-2xl font-bold">About me</h2>
        <p className="mt-4 text-slate-700">
          I'm Vishal — B.Tech CSE from Ahmedabad University (GPA: 7.32). Experience building web apps with React, Next.js, Node.js and MongoDB. Currently working on AI-driven frontend experiences and voice-based projects (Prepwise).
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Education</strong>
            <div>Ahmedabad University — B.Tech, Computer Science</div>
            <div>Sept 2021 – May 2025</div>
          </div>
          <div>
            <strong>Work</strong>
            <div>4Good.AI — Full Stack Developer Intern</div>
            <div>Injala — Software Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
