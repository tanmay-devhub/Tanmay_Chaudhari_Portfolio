export default function MRIVisual() {
  return (
    <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="mri-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
        <radialGradient id="mri-brain" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="260" fill="url(#mri-grid)" />
      <g transform="translate(140, 130)">
        <ellipse cx="0" cy="0" rx="80" ry="68" fill="url(#mri-brain)" />
        <ellipse cx="0" cy="0" rx="80" ry="68" fill="none" stroke="var(--accent)" strokeOpacity="0.4" strokeDasharray="2 4" />
        <ellipse cx="0" cy="0" rx="58" ry="48" fill="none" stroke="var(--accent)" strokeOpacity="0.55" />
        <ellipse cx="0" cy="0" rx="36" ry="30" fill="none" stroke="var(--accent)" strokeOpacity="0.7" />
        <ellipse cx="0" cy="0" rx="14" ry="12" fill="var(--accent)" fillOpacity="0.7" />
        <line x1="-90" y1="0" x2="90" y2="0" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
        </line>
      </g>
      <g transform="translate(280, 50)" fontFamily="var(--font-mono)" fontSize="10">
        {[
          ["01", "3D MRI ingest (PPMI)"],
          ["02", "N4 bias correction"],
          ["03", "Skull stripping"],
          ["04", "3D CNN classification"],
          ["05", "92% accuracy — HPC trained"],
        ].map(([n, label], i) => (
          <g key={n} transform={`translate(0, ${i * 30})`}>
            <rect width="290" height="22" rx="4" fill="var(--bg-card)" stroke="var(--border)" />
            <text x="10" y="15" fill="var(--text-faint)">{n}</text>
            <text x="36" y="15" fill="var(--text-mute)">{label}</text>
            <circle cx="272" cy="11" r="3" fill={i < 4 ? "var(--accent)" : "var(--text-faint)"} />
          </g>
        ))}
      </g>
    </svg>
  );
}
