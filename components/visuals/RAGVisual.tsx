export default function RAGVisual() {
  return (
    <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="rag-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
        <marker id="rag-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>
      <rect width="600" height="260" fill="url(#rag-grid)" />

      {/* Query box */}
      <g transform="translate(20, 108)">
        <rect width="130" height="38" rx="7" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="10" y="14" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">QUERY</text>
        <text x="10" y="29" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text)">Who knows Alice?</text>
      </g>

      {/* Arrow query → graph */}
      <line x1="150" y1="127" x2="188" y2="127" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#rag-arrow)" />

      {/* Graph store — nodes and edges */}
      <g transform="translate(192, 50)">
        <rect width="210" height="160" rx="8" fill="var(--bg-card)" stroke="var(--accent)" strokeOpacity="0.5" />
        <text x="10" y="16" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)">GRAPH STORE</text>

        {/* Nodes */}
        <circle cx="105" cy="55" r="16" fill="var(--accent-faint)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="105" y="59" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)" textAnchor="middle">Alice</text>

        <circle cx="48" cy="105" r="14" fill="var(--bg-elev)" stroke="var(--border-strong)" strokeWidth="1.5" />
        <text x="48" y="109" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-mute)" textAnchor="middle">Bob</text>

        <circle cx="162" cy="105" r="14" fill="var(--bg-elev)" stroke="var(--border-strong)" strokeWidth="1.5" />
        <text x="162" y="109" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-mute)" textAnchor="middle">Carol</text>

        <circle cx="105" cy="140" r="12" fill="var(--bg-elev)" stroke="var(--border)" strokeWidth="1" />
        <text x="105" y="144" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)" textAnchor="middle">Dave</text>

        {/* Edges */}
        <line x1="91" y1="68" x2="60" y2="93" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="119" y1="68" x2="150" y2="93" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="62" y1="116" x2="93" y2="132" stroke="var(--border-strong)" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="148" y1="116" x2="117" y2="132" stroke="var(--border-strong)" strokeWidth="1" strokeOpacity="0.6" />

        {/* Edge labels */}
        <text x="64" y="84" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)">knows</text>
        <text x="128" y="84" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)">works_with</text>
      </g>

      {/* Arrow graph → context */}
      <line x1="402" y1="127" x2="432" y2="127" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#rag-arrow)" />

      {/* Context + LLM response */}
      <g transform="translate(436, 88)">
        <rect width="148" height="80" rx="7" fill="var(--bg-elev)" stroke="var(--border)" />
        <text x="10" y="15" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">CONTEXT</text>
        <text x="10" y="28" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-mute)">Alice → knows → Bob</text>
        <text x="10" y="40" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-mute)">Alice → works_with</text>
        <text x="10" y="52" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-mute)">  → Carol</text>
        <text x="10" y="67" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)">2 paths retrieved</text>
      </g>

      {/* LLM response */}
      <g transform="translate(310, 200)">
        <rect width="274" height="36" rx="7" fill="var(--accent-faint)" stroke="var(--accent)" strokeOpacity="0.4" />
        <text x="12" y="14" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)">LLM RESPONSE</text>
        <text x="12" y="27" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text)">Alice knows Bob and works with Carol.</text>
      </g>

      {/* Blinking cursor */}
      <rect x="574" y="211" width="2" height="11" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
