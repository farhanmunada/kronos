import { useState } from 'react';
import { pods } from '../../data/pods';
import { cn } from '../../lib/cn';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { PodVisual } from '../visuals/PodVisual';

export function PodExplorer() {
  const [activeId, setActiveId] = useState(pods[0].id);
  const active = pods.find((pod) => pod.id === activeId) ?? pods[0];

  return (
    <section id="systems" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <SectionHeading
            index="01 — Arch-Systems"
            title="Two pods. One engineering language."
            intro="Each dwelling is a system of modules, configured to the terrain rather than imposed upon it."
          />
        </Reveal>

        {/* Tab switcher ------------------------------------------------- */}
        <Reveal delay={120} className="mt-14">
          <div role="tablist" aria-label="Modular pods" className="flex flex-wrap gap-px border border-border bg-border">
            {pods.map((pod) => {
              const isActive = pod.id === active.id;
              return (
                <button
                  key={pod.id}
                  role="tab"
                  type="button"
                  id={`tab-${pod.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${pod.id}`}
                  onClick={() => setActiveId(pod.id)}
                  className={cn(
                    'flex flex-1 items-baseline justify-between gap-6 px-6 py-5 text-left transition-colors duration-300',
                    isActive ? 'bg-foreground text-background' : 'bg-background text-foreground hover:bg-muted',
                  )}
                >
                  <span className="text-[0.68rem] uppercase tracking-[0.24em] opacity-70">
                    {pod.index}
                  </span>
                  <span className="font-serif text-xl font-semibold tracking-wide">{pod.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active panel ------------------------------------------------- */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          key={active.id}
          className="mt-px grid grid-cols-1 border border-t-0 border-border bg-background lg:grid-cols-[1.3fr_1fr]"
        >
          <div className="media-zoom overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
            <PodVisual id={active.id} name={active.name} />
          </div>

          <div className="flex flex-col justify-between p-8 lg:p-12">
            <div>
              <p className="eyebrow">{active.typology}</p>
              <h3 className="mt-4 text-3xl lg:text-4xl">{active.name}</h3>
              <p className="mt-2 font-serif text-lg text-accent">{active.area}</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-2 inline-block h-1 w-4 shrink-0 bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
              {active.specs.map((spec) => (
                <div key={spec.label} className="bg-background px-4 py-4">
                  <dt className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {spec.label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-sm text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
