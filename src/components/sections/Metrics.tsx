import { metrics } from '../../data/metrics';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Metrics() {
  return (
    <section id="specs" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <SectionHeading
          index="02 — Architectural Specs"
          title="Measured in millimetres, not promises."
          intro="Every claim below is verified per fabrication cycle and audited against the built structure."
        />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal
            key={metric.id}
            delay={index * 90}
            className="group border-b border-r border-border p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
              {String(index + 1).padStart(2, '0')} / {metric.label}
            </p>
            <p className="mt-8 flex items-baseline gap-2">
              <span className="font-serif text-5xl font-semibold leading-none lg:text-6xl">
                {metric.value}
              </span>
              <span className="font-serif text-xl font-medium text-accent">{metric.unit}</span>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {metric.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
