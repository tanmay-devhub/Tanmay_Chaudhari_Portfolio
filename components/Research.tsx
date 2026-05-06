import { IconExternalLink } from "./Icons";

const RESEARCH = [
  {
    title: "Early Detection of Parkinson's Disease using 3D MRI Images",
    period: "Jan 2022 – May 2023",
    description:
      "Built a 3D CNN model for early Parkinson's Disease detection trained on PPMI clinical MRI scans with HPC multi-GPU infrastructure. Engineered a full preprocessing pipeline covering N4 bias correction, skull stripping, image registration, and normalization.",
    paper:
      "Enhancing Parkinson's Disease Diagnosis through Deep Learning-Based Classification of 3D MRI Images",
    tags: ["PyTorch", "3D CNN", "SimpleITK", "HPC Multi-GPU", "PPMI Dataset", "Deep Learning"],
    highlight: "92%",
    highlightLabel: "classification accuracy",
  },
  {
    title: "A Comprehensive Survey on Parkinson's Disease Detection",
    period: "Aug 2023 – Dec 2023",
    description:
      "Reviewed 2D/3D MRI deep learning approaches for early PD detection across 50+ papers, covering preprocessing pipelines, model architecture trends, performance benchmarks, and open research gaps in the field.",
    paper:
      "A Comprehensive Survey on Parkinson's Disease Detection: Deep Learning, Medical Imaging, and Pre-Processing",
    tags: ["Medical Imaging", "Deep Learning Survey", "2D/3D MRI", "Preprocessing", "Research"],
    highlight: "2",
    highlightLabel: "peer-reviewed papers",
  },
];

export default function Research() {
  return (
    <section id="research" aria-labelledby="research-heading">
      <div className="container">
        <div className="section-marker">// 05 — research</div>
        <h2 id="research-heading" className="section-title">Research.</h2>
        <p className="section-sub">
          Peer-reviewed ML research on medical imaging and deep learning for early disease detection.
        </p>

        <div className="research-grid">
          {RESEARCH.map((r) => (
            <article key={r.title} className="research-card">
              <div>
                <div className="research-badge">Published</div>
                <h3 className="research-title">{r.title}</h3>
                <p className="research-desc">{r.description}</p>
                <div className="research-paper">
                  <IconExternalLink />
                  &nbsp;&nbsp;{r.paper}
                </div>
                <div className="tag-row" role="list" aria-label="Research tags">
                  {r.tags.map((t) => (
                    <span className="tag" key={t} role="listitem">{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span className="research-highlight">{r.highlight}</span>
                <span className="research-highlight-label">{r.highlightLabel}</span>
                <div className="edu-date" style={{ marginTop: 12, display: "inline-block" }}>
                  {r.period}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
