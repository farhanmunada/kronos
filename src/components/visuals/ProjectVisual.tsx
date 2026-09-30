interface ProjectVisualProps {
  id: string;
  title: string;
}

/** Monochromatic editorial visual for each commission. */
export function ProjectVisual({ id, title }: ProjectVisualProps) {
  const isVolcanic = id === 'volcanic-atrium';

  return (
    <svg
      viewBox="0 0 800 560"
      className="h-full w-full"
      role="img"
      aria-label={`Architectural visual of ${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`mono-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eae7e1" />
          <stop offset="60%" stopColor="#cbc6bd" />
          <stop offset="100%" stopColor="#a7a199" />
        </linearGradient>
        <linearGradient id={`slab-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c8c3b9" />
        </linearGradient>
      </defs>

      <rect width="800" height="560" fill={`url(#mono-${id})`} />

      {isVolcanic ? (
        <g>
          {/* volcanic ridge */}
          <path d="M0 300l180-120 150 90 180-140 290 150v280H0z" fill="#9a9287" />
          <path d="M0 380l200-90 140 70 180-100 280 120v180H0z" fill="#7c7469" />
          {/* atrium volume */}
          <path d="M230 250h340v210H230z" fill={`url(#slab-${id})`} />
          <path d="M230 250l50-60h340l-50 60z" fill="#e6e2da" />
          <path d="M570 250l50-60v210l-50 60z" fill="#b8b2a7" />
          {/* atrium void */}
          <path d="M330 300h140v160H330z" fill="#3a3630" />
          <path d="M330 300l70-40h140l-70 40z" fill="#26231f" />
          {/* warm glow inside */}
          <circle cx="400" cy="390" r="46" fill="#c99a4e" opacity="0.4" />
          {/* interior mullions */}
          <g stroke="#4b463d" strokeWidth="2" opacity="0.6">
            <path d="M400 300v160M365 300v160M435 300v160" />
          </g>
        </g>
      ) : (
        <g>
          {/* tundra horizon */}
          <path d="M0 330h800v230H0z" fill="#d3cfc8" />
          <path d="M0 380h800v180H0z" fill="#bdb8b0" />
          {/* low profile sanctuary */}
          <path d="M160 340l300-70v70H160z" fill={`url(#slab-${id})`} />
          <path d="M160 340l300-70 120 40-300 70z" fill="#e6e2da" />
          <path d="M160 340h300v40H160z" fill="#2b2b2b" opacity="0.85" />
          {/* pv skin on roof */}
          <g stroke="#b9b3a8" strokeWidth="1" opacity="0.7">
            <path d="M200 330l300-70M240 335l300-70M280 340l300-70" />
          </g>
          {/* snow lines */}
          <path d="M0 430h800M0 470h800M0 510h800" stroke="#e6e2da" strokeWidth="1" opacity="0.6" />
          {/* posts */}
          <path d="M200 380v40M340 380v40M460 380v40" stroke="#4b463d" strokeWidth="4" />
        </g>
      )}
    </svg>
  );
}
