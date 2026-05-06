const FOCUS = [
  "AI / LLM application engineering",
  "Backend & distributed API design",
  "Distributed systems & container orchestration",
  "Cloud-native infrastructure (AWS, K8s, Docker)",
  "Full-stack product development",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-marker">// 01 — about</div>
        <h2 id="about-heading" className="section-title">
          Building at the intersection of<br />
          AI, infra, and product.
        </h2>
        <p className="section-sub">A short story about what I work on and what I care about.</p>
        <div className="about-grid">
          <div className="about-prose">
            <p>
              I&apos;m a builder at heart. I gravitate toward problems that sit at the intersection of{" "}
              <strong>AI systems</strong>, <strong>backend infrastructure</strong>, and{" "}
              <strong>product engineering</strong>. The deeper the stack, the more interested I am.
            </p>
            <p>
              My recent work spans <strong>LLM-powered products</strong> built on Gemini and modern TypeScript stacks,{" "}
              <strong>distributed browser isolation platforms</strong> with Go and Kubernetes, and{" "}
              <strong>medical imaging pipelines</strong> for neuroscience research achieving 92% accuracy. I care about
              reliability, observability, and code that holds up in production.
            </p>
            <p>
              Outside of coursework at CSUF where I study Distributed Systems, Neural Networks, and Software Architecture.
              I ship side projects, dig into systems design, and stay current with the fast-moving AI tooling landscape.
            </p>
          </div>
          <div className="about-card">
            <h4>// focus areas</h4>
            <ul className="focus-list" aria-label="Focus areas">
              {FOCUS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
