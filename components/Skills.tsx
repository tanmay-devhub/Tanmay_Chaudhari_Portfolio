const SKILLS = [
  {
    num: "01",
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C++", "SQL", "Swift", "Kotlin"],
  },
  {
    num: "02",
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Streamlit", "HTML5", "CSS3"],
  },
  {
    num: "03",
    label: "Backend",
    items: ["Node.js", "Go Gin", "FastAPI", "Django", "Flask", "REST APIs", "WebSockets", "WebRTC"],
  },
  {
    num: "04",
    label: "AI / ML",
    items: ["Gemini 2.5 Flash", "Groq Whisper", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "MTCNN", "LLMs"],
  },
  {
    num: "05",
    label: "Cloud / Infra",
    items: ["Docker", "Kubernetes", "AWS EC2/S3/RDS", "Vercel", "GitHub Actions", "Linux", "STUN/TURN", "Grafana"],
  },
  {
    num: "06",
    label: "Data / Tools",
    items: ["PostgreSQL", "Neon", "MySQL", "Redis", "Drizzle ORM", "FFmpeg", "Playwright", "Prometheus"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-marker">// 06 — stack</div>
        <h2 id="skills-heading" className="section-title">My tech stack.</h2>
        <p className="section-sub">A working toolkit, organized by where it fits in the stack.</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.label}>
              <h4>
                <span className="num">{s.num}</span> {s.label}
              </h4>
              <div className="skill-list" role="list">
                {s.items.map((item) => (
                  <span className="skill-pill" key={item} role="listitem">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
