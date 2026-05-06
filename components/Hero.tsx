import { IconResume, IconDownload, IconGithub, IconLinkedin, IconMail } from "./Icons";

const META = [
  { k: "Based in", v: "Fullerton, CA" },
  { k: "Roles", v: "SWE / AI / Backend" },
];

const FOCUS = [
  "AI / LLM application engineering",
  "Backend & distributed API design",
  "Distributed systems & container orchestration",
  "Cloud-native infrastructure (AWS, K8s, Docker)",
  "Full-stack product development",
];

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>
      <div className="container hero-inner">
        <h1 className="reveal in d1">
          Tanmay<br />
          Chaudhari <span className="accent">/</span>
        </h1>
        <p className="hero-tagline reveal in d2">
          Software Engineer focused on AI, Backend Systems, and Full-Stack Products.
        </p>
        <p className="hero-intro reveal in d3">
          I build production-grade AI applications and distributed backend infrastructure from LLM-powered products to container-orchestrated platforms. Currently a Master&apos;s CS student at CSUF, graduating May 2026.
        </p>
        <div className="hero-ctas reveal in d4">
          <a
            className="btn btn-primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume online"
          >
            <IconResume /> View Resume
          </a>
          <a
            className="btn"
            href="/resume.pdf"
            download="Tanmay-Chaudhari-Resume.pdf"
            aria-label="Download resume PDF"
          >
            <IconDownload /> Download
          </a>
          <a
            className="btn"
            href="https://github.com/tanmay-devhub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <IconGithub /> GitHub
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/tchaudhari2106/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <IconLinkedin /> LinkedIn
          </a>
          <button className="btn btn-ghost" onClick={onContactClick} aria-label="Jump to contact section">
            <IconMail /> Contact
          </button>
        </div>
        <div className="hero-meta reveal in d5">
          {META.map((m) => (
            <div className="hero-meta-item" key={m.k}>
              <div className="k">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
        <div className="hero-focus reveal in d5">
          <div className="k">Focus</div>
          <ul>
            {FOCUS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
