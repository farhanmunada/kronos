interface PodVisualProps {
  id: string;
  name: string;
}

/** Vector architectural visual for each pod — no external assets. */
export function PodVisual({ id, name }: PodVisualProps) {
  const isVapour = id === 'vapour-line';

  return (
    <svg
      viewBox="0 0 640 440"
      className="h-full w-full"
      role="img"
      aria-label={`Architectural diagram of the ${name} pod`}
    >
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f1ec" />
          <stop offset="100%" stopColor="#ded9d0" />
        </linearGradient>
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdfdfd" />
          <stop offset="100%" stopColor="#d2ccc1" />
        </linearGradient>
        <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
      </defs>

      <rect width="640" height="440" fill={`url(#sky-${id})`} />

      {isVapour ? (
        <g>
          {/* cliff edge */}
          <path d="M0 440V300l210-46 90 30 340 40v116z" fill="#8f8779" />
          <path d="M0 440V340l230-30 80 24 330 40v66z" fill="#6f685c" />
          {/* cantilevered body */}
          <path d="M150 250l300-58v104l-300 60z" fill={`url(#body-${id})`} />
          <path d="M150 250l-64 18 40 22 300-58z" fill="#e6e2da" />
          <path d="M300 296l210-42v74l-210 44z" fill={`url(#glass-${id})`} />
          <path d="M150 250l300-58" stroke="#c9c3b8" strokeWidth="1" />
          {/* deck overhang */}
          <path d="M120 358h340" stroke="#4b463d" strokeWidth="3" />
          <path d="M120 358v-8M460 358v-8" stroke="#4b463d" strokeWidth="3" />
          {/* supports */}
          <path d="M250 356v84M340 340v96M420 326v104" stroke="#4b463d" strokeWidth="4" />
        </g>
      ) : (
        <g>
          {/* altitude ground line */}
          <path d="M0 440V350l180-40 140 30 320 50v50z" fill="#8f8779" />
          {/* monolith body */}
          <path d="M190 130h260v210H190z" fill={`url(#body-${id})`} />
          <path d="M190 130l60-40h260l-60 40z" fill="#e6e2da" />
          <path d="M450 130l60-40v210l-60 40z" fill="#c2bcb1" />
          {/* pv skin grid */}
          <g stroke="#b9b3a8" strokeWidth="1">
            <path d="M190 174h260M190 218h260M190 262h260M190 306h260" />
            <path d="M242 130v210M294 130v210M346 130v210M398 130v210" />
          </g>
          {/* glazing band */}
          <path d="M190 340h260v34H190z" fill={`url(#glass-${id})`} />
          {/* decoupling base */}
          <path d="M170 374h300v18H170z" fill="#4b463d" />
          <path d="M190 392v30M450 392v30M250 392v30M330 392v30M410 392v30" stroke="#4b463d" strokeWidth="5" />
        </g>
      )}

      {/* shared annotation */}
      <g stroke="#a16207" fill="none" strokeWidth="1.2">
        <path d="M40 400h40" />
      </g>
      <text x="88" y="404" fill="#6b7280" fontFamily="Josefin Sans, sans-serif" fontSize="11" letterSpacing="2">
        {name.toUpperCase()}
      </text>
    </svg>
  );
}
