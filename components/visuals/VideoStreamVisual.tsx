export default function VideoStreamVisual() {
  return (
    <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="vs-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="260" fill="url(#vs-grid)" />
      {/* Layered service cards */}
      <g transform="translate(30, 40)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 14}, ${i * 14})`}>
            <rect width="200" height="160" rx="10" fill="var(--bg-card)" stroke="var(--border)" opacity={0.4 + i * 0.2} />
          </g>
        ))}
        <g transform="translate(28, 28)">
          <rect width="200" height="160" rx="10" fill="var(--bg-card)" stroke="var(--accent)" strokeOpacity="0.5" />
          <text x="14" y="28" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-faint)">video-platform</text>
          <text x="14" y="46" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text)">FFmpeg HLS</text>
          <line x1="14" y1="58" x2="186" y2="58" stroke="var(--border)" />
          <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">
            <text x="14" y="76">→ S3 presigned HLS</text>
            <text x="14" y="94">→ Clerk JWT / RBAC</text>
            <text x="14" y="112">→ Groq Whisper AI</text>
            <text x="14" y="130">→ tsvector search</text>
          </g>
          <circle cx="186" cy="18" r="3" fill="var(--accent)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
      {/* Metrics panel */}
      <g transform="translate(290, 40)">
        <rect width="270" height="180" rx="10" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="14" y="24" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-faint)">live metrics · 4 dashboards</text>
        {[
          ["Uploads / hr", "142"],
          ["Avg encode", "2.3s"],
          ["Active streams", "37"],
          ["AI queries", "891"],
        ].map(([label, val], i) => (
          <g key={label} transform={`translate(14, ${42 + i * 34})`}>
            <text fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)" y="0">{label}</text>
            <text fontFamily="var(--font-mono)" fontSize="16" fontWeight="600" fill="var(--accent)" y="18">{val}</text>
            <rect x="0" y="24" width={180 + i * 10} height="2" rx="1" fill="var(--accent)" fillOpacity={0.3 + i * 0.15} />
          </g>
        ))}
      </g>
    </svg>
  );
}
