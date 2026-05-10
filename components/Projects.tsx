"use client";
import { IconArrowUpRight } from "./Icons";
import BrowserIsolationVisual from "./visuals/BrowserIsolationVisual";
import MockInterviewVisual from "./visuals/MockInterviewVisual";
import VideoStreamVisual from "./visuals/VideoStreamVisual";
import TrustIDVisual from "./visuals/TrustIDVisual";

const PROJECTS = [
  {
    id: "browser-isolation",
    num: "01",
    status: "Systems",
    statusClass: "",
    title: "Mini Browser Isolation System",
    desc: "Distributed remote-browser platform — Docker-isolated Chromium sessions, Go orchestrator with CDP input forwarding, WebRTC streaming with WebSocket fallback, Kubernetes HPA autoscaling, coturn STUN/TURN relay, Prometheus + Grafana telemetry, and Playwright E2E coverage.",
    tags: ["Go", "Docker", "Chromium", "WebRTC", "Kubernetes", "Prometheus", "Grafana", "Playwright"],
    featured: true,
    github: "https://github.com/tanmay-devhub/Mini-Browser-Isolation",
    Visual: BrowserIsolationVisual,
  },
  {
    id: "mock-interview",
    num: "02",
    status: "AI / Full-Stack",
    statusClass: "",
    title: "AI Mock Interview App",
    desc: "Full-stack GenAI interview coach with role-based questions, real-time feedback, and ratings via Gemini 2.5 Flash. Features live transcription, waveform visualization, word count, and timer using the Web Speech API. Protected user history and score analytics on Neon Postgres.",
    tags: ["Next.js", "TypeScript", "Gemini 2.5 Flash", "Clerk", "Drizzle ORM", "PostgreSQL", "Vercel"],
    featured: false,
    github: "https://github.com/tanmay-devhub/AI-Mock-Intervire-App",
    Visual: MockInterviewVisual,
  },
  {
    id: "video-streaming",
    num: "03",
    status: "Full-Stack",
    statusClass: "wip",
    title: "StreamVault — Video Streaming Platform",
    desc: "Cloud-native video platform with FFmpeg HLS pipeline, S3 adaptive streaming (360p / 720p / 1080p), and a pg-boss PostgreSQL job queue. Secured 8+ routes with Clerk JWT and RBAC. Powers AI-driven transcript search via Groq Whisper with tsvector full-text indexing and React heatmap analytics.",
    tags: ["React", "Node.js", "FFmpeg", "HLS", "AWS S3", "PostgreSQL", "Groq Whisper", "Clerk"],
    featured: false,
    github: "https://github.com/tanmay-devhub/streamvault",
    Visual: VideoStreamVisual,
  },
  {
    id: "trust-id",
    num: "04",
    status: "Web3 / Full-Stack",
    statusClass: "research",
    title: "TrustID — Decentralized Identity Verification",
    desc: "Blockchain-based identity and resume verification platform on Ethereum — Solidity smart contracts handle multi-role workflows between Applicants, Employers, and Institutions. Resumes stored on IPFS via Pinata with MetaMask wallet auth and dual-ledger sync across the blockchain and MongoDB.",
    tags: ["Solidity", "Ethereum", "React", "Node.js", "MongoDB", "IPFS", "Pinata", "Web3.js", "MetaMask"],
    featured: false,
    github: "https://github.com/tanmay-devhub/Trust-ID",
    Visual: TrustIDVisual,
  },
];

const TOTAL = PROJECTS.length;

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-marker">// 03 — featured work</div>
        <h2 id="projects-heading" className="section-title">Selected projects.</h2>
        <p className="section-sub">
          A mix of distributed systems, AI-powered products, Web3, and research tooling. Each shipped end-to-end.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className={`project-card${p.featured ? " featured" : ""}`}>
              <div className="project-visual">
                <p.Visual />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-num">PROJECT {p.num} / {String(TOTAL).padStart(2, "0")}</span>
                  <span className={`project-status${p.statusClass ? ` ${p.statusClass}` : ""}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="project-title">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                    style={{ flex: 1 }}
                  >
                    {p.title}
                  </a>
                  <span className="project-arrow" aria-hidden="true">
                    <IconArrowUpRight />
                  </span>
                </h3>
                <p className="project-desc">{p.desc}</p>
                <div className="tag-row" role="list" aria-label="Technologies used">
                  {p.tags.map((t) => (
                    <span className="tag" key={t} role="listitem">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
