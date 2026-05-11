"use client";
import { IconArrowUpRight } from "./Icons";
import BrowserIsolationVisual from "./visuals/BrowserIsolationVisual";
import MockInterviewVisual from "./visuals/MockInterviewVisual";
import VideoStreamVisual from "./visuals/VideoStreamVisual";
import TrustIDVisual from "./visuals/TrustIDVisual";
import RAGVisual from "./visuals/RAGVisual";

const PROJECTS = [
  {
    id: "rag-pipeline",
    num: "01",
    status: "AI / Backend",
    statusClass: "",
    title: "RAG Pipeline",
    desc: "Graph-based Retrieval-Augmented Generation pipeline using a knowledge graph store instead of vector databases. Models entities and relationships as graph nodes and edges, enabling multi-hop traversal and structured context retrieval for grounded, relationship-aware LLM responses.",
    tags: ["Python", "LLMs", "Knowledge Graph", "Graph Store", "RAG", "LangChain", "Neo4j"],
    featured: true,
    github: "https://github.com/tanmay-devhub/RAG",
    Visual: RAGVisual,
  },
  {
    id: "browser-isolation",
    num: "02",
    status: "Systems",
    statusClass: "",
    title: "Mini Browser Isolation System",
    desc: "Distributed remote-browser platform — Docker-isolated Chromium sessions, Go orchestrator with CDP input forwarding, WebRTC streaming with WebSocket fallback, Kubernetes HPA autoscaling, coturn STUN/TURN relay, Prometheus + Grafana telemetry, and Playwright E2E coverage.",
    tags: ["Go", "Docker", "Chromium", "WebRTC", "Kubernetes", "Prometheus", "Grafana", "Playwright"],
    featured: false,
    github: "https://github.com/tanmay-devhub/Mini-Browser-Isolation",
    Visual: BrowserIsolationVisual,
  },
  {
    id: "mock-interview",
    num: "03",
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
    num: "04",
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
    num: "05",
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
            <a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} on GitHub`}
              className={`project-card${p.featured ? " featured" : ""}`}
            >
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
                  {p.title}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
