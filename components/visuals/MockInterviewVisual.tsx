export default function MockInterviewVisual() {
  return (
    <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="mi-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="260" fill="url(#mi-grid)" />
      <g transform="translate(40, 40)">
        <rect width="220" height="42" rx="8" fill="var(--bg-card)" stroke="var(--border)" />
        <circle cx="18" cy="21" r="7" fill="var(--bg-elev)" stroke="var(--border-strong)" />
        <text x="18" y="24" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-mute)" textAnchor="middle">AI</text>
        <text x="34" y="20" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">explain a load balancer</text>
        <text x="34" y="33" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-faint)">tradeoffs of L4 vs L7?</text>
      </g>
      <g transform="translate(280, 110)">
        <rect width="280" height="42" rx="8" fill="var(--accent-faint)" stroke="var(--accent)" strokeOpacity="0.4" />
        <text x="14" y="20" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">candidate · 0:42</text>
        <text x="14" y="33" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text)">a load balancer distributes traffic...</text>
      </g>
      <g transform="translate(40, 180)">
        <rect width="320" height="46" rx="8" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="14" y="18" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">FEEDBACK · gemini-2.5-flash</text>
        <rect x="14" y="26" width="260" height="4" rx="2" fill="var(--bg-elev)" />
        <rect x="14" y="26" width="190" height="4" rx="2" fill="var(--accent)" />
        <text x="280" y="32" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)" textAnchor="end">8.2/10</text>
        <text x="14" y="42" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">strong on tradeoffs · expand on health checks</text>
      </g>
      <g>
        <rect x="392" y="158" width="2" height="14" fill="var(--accent)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}
