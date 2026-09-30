const columns = [
  {
    title: 'Systems',
    links: [
      { label: 'Vapour-Line', href: '#systems' },
      { label: 'Monolith-X', href: '#systems' },
      { label: 'Engineering Workflow', href: '#workflow' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Selected Commissions', href: '#projects' },
      { label: 'Architectural Specs', href: '#specs' },
      { label: 'Inquire', href: '#inquire' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.12em]">KRONOS KD</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineered permanence for fluid terrains. Modular high-end living and kinetic
              architecture, fabricated off-site and assembled in place.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/75 transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kronos Kinetic Dwellings</p>
          <p>Fabrication node — Lat 07°19'S / Long 110°24'E</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            System online
          </p>
        </div>
      </div>
    </footer>
  );
}
