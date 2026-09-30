import { Button } from '../ui/Button';
import { HeroVisual } from '../visuals/HeroVisual';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Status bar --------------------------------------------------- */}
        <div className="flex flex-col gap-3 border-b border-border pb-6 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Lat 07°19'S / Long 110°24'E</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            System online — fabrication active
          </p>
        </div>

        {/* Headline ----------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16 lg:py-20">
          <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.98]">
            Permanent Luxury.
            <br />
            <span className="text-accent">Zero Earthwork.</span>
          </h1>
          <div className="lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Modular dwellings fabricated from aerograde alloy and carbon-capture composite —
              fully installed within 72 hours on any extreme terrain.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="#systems" variant="solid">
                Explore Systems
              </Button>
              <Button href="#specs" variant="ghost">
                Tech Dossier — PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Split visual ------------------------------------------------- */}
        <HeroVisual />
      </div>
    </section>
  );
}
