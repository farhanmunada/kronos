/**
 * HeroVisual — editorial split composition.
 * Left: blueprint wireframe. Right: architectural render.
 * Both are pure vector so they stay crisp and asset-free.
 */
export function HeroVisual() {
  return (
    <div className="grid grid-cols-1 border border-border md:grid-cols-2">
      {/* Blueprint panel ------------------------------------------------ */}
      <figure className="relative border-b border-border bg-surface md:border-b-0 md:border-r">
        <figcaption className="absolute left-5 top-5 z-10 eyebrow">
          Fig. 01 — Module Assembly
        </figcaption>
        <svg
          viewBox="0 0 600 620"
          className="h-full w-full"
          role="img"
          aria-label="Technical blueprint wireframe of a modular dwelling assembly"
        >
          <defs>
            <pattern id="bp-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0H0V30" fill="none" stroke="#e5e5e5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="620" fill="url(#bp-grid)" />
          <g stroke="#171717" fill="none" strokeWidth="1.4" strokeLinejoin="round">
            {/* main volume */}
            <path d="M150 250h300v210H150z" />
            {/* upper cantilever volume */}
            <path d="M210 170h300v80H210z" />
            {/* roof planes */}
            <path d="M150 250l60-80" />
            <path d="M450 250l60-80" />
            <path d="M510 170v80" />
            {/* deck */}
            <path d="M120 460h360" />
            <path d="M150 460v-40M450 460v-40" />
            {/* glazing mullions */}
            <path d="M190 250v210M230 250v210M270 250v210M310 250v210M350 250v210M390 250v210M430 250v210" strokeWidth="0.8" stroke="#6b7280" />
            <path d="M210 170v80M250 170v80M290 170v80M330 170v80M370 170v80M410 170v80M450 170v80M490 170v80" strokeWidth="0.8" stroke="#6b7280" />
          </g>
          {/* dimension annotations */}
          <g fill="#6b7280" fontFamily="Josefin Sans, sans-serif" fontSize="11" letterSpacing="2">
            <text x="150" y="500">11 400</text>
            <text x="490" y="245" transform="rotate(90 490 245)">8 200</text>
            <text x="150" y="150">MODULE GRID / 3.0m</text>
          </g>
          <g stroke="#a16207" fill="none" strokeWidth="1.4">
            <path d="M150 520h300M150 512v16M450 512v16" />
          </g>
          {/* node markers */}
          <g fill="#a16207">
            <circle cx="150" cy="250" r="3.2" />
            <circle cx="450" cy="250" r="3.2" />
            <circle cx="510" cy="170" r="3.2" />
            <circle cx="210" cy="170" r="3.2" />
          </g>
        </svg>
      </figure>

      {/* Render panel --------------------------------------------------- */}
      <figure className="relative bg-ink">
        <figcaption className="absolute left-5 top-5 z-10 eyebrow text-white/60">
          Fig. 02 — Vapour-Line / Cliffside
        </figcaption>
        <svg
          viewBox="0 0 600 620"
          className="h-full w-full"
          role="img"
          aria-label="Architectural rendering of a cantilevered modular dwelling on a cliff"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f2efe9" />
              <stop offset="55%" stopColor="#d9d4cb" />
              <stop offset="100%" stopColor="#b8b2a7" />
            </linearGradient>
            <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2b2b2b" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>
            <linearGradient id="face" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbfbfb" />
              <stop offset="100%" stopColor="#cfcabf" />
            </linearGradient>
          </defs>

          <rect width="600" height="620" fill="url(#sky)" />
          {/* distant ridge */}
          <path d="M0 300l140-70 120 60 130-84 210 96v-90H0z" fill="#c9c3b8" opacity="0.6" />
          {/* cliff */}
          <path d="M0 620V430l150-40 120 40 90-30 240 60v160z" fill="#8f8779" />
          <path d="M0 620V470l160-30 110 40 100-24 230 50v114z" fill="#6f685c" />

          {/* dwelling: lower volume */}
          <path d="M120 400l180-38v96l-180 40z" fill="url(#face)" />
          {/* dwelling: upper cantilevered volume */}
          <path d="M250 330l210-46v86l-210 46z" fill="url(#face)" />
          <path d="M250 330l-70 20 40 22 210-46z" fill="#e6e2da" />
          {/* glazing */}
          <path d="M300 372l150-32v60l-150 34z" fill="url(#glass)" />
          <path d="M300 372l150-32" stroke="#3a3a3a" strokeWidth="1" />
          {/* deck underside shadow */}
          <path d="M250 330l210-46 40 22-210 46z" fill="#b8b2a7" opacity="0.5" />
          {/* stilts */}
          <path d="M300 430v90M360 420v96M420 408v100" stroke="#4b463d" strokeWidth="4" />
          {/* water hint */}
          <path d="M0 560h600" stroke="#d9d4cb" strokeWidth="1" opacity="0.5" />
          <path d="M0 585h600" stroke="#d9d4cb" strokeWidth="1" opacity="0.35" />
          {/* sun glow */}
          <circle cx="470" cy="120" r="70" fill="#fff" opacity="0.35" />
        </svg>
      </figure>
    </div>
  );
}
