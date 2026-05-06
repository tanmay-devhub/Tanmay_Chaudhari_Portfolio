const COURSEWORK = [
  "Advanced Algorithms",
  "Web Back-End Engineering",
  "Neural Networks",
  "Database Systems",
  "Operating Systems",
  "Cloud Computing",
  "Distributed Systems",
  "Software Architecture",
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-heading">
      <div className="container">
        <div className="section-marker">// 02 — education</div>
        <h2 id="edu-heading" className="section-title">Education.</h2>
        <p className="section-sub">Graduate work focused on systems, AI, and software engineering.</p>

        <div className="edu-card">
          <div>
            <h3>M.S. in Computer Science</h3>
            <p className="school">
              California State University, Fullerton
              <span className="sep">·</span>
              Fullerton, CA
            </p>
            <p className="school" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Concentration: Intelligent Application Systems Engineering
            </p>
            <div className="coursework-label">// relevant coursework</div>
            <div className="course-row">
              {COURSEWORK.map((c) => (
                <span className="tag" key={c}>{c}</span>
              ))}
            </div>
          </div>
          <div className="edu-date">Aug 2024 – May 2026</div>
        </div>

        <div className="edu-card" style={{ marginBottom: 0 }}>
          <div>
            <h3>B.Tech in Computer Science &amp; Engineering</h3>
            <p className="school">
              Nirma University
              <span className="sep">·</span>
              Ahmedabad, India
            </p>
          </div>
          <div className="edu-date">Sep 2020 – May 2024</div>
        </div>
      </div>
    </section>
  );
}
