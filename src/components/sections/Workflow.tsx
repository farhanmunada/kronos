import { phases } from '../../data/workflow';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Workflow() {
  return (
    <section id="workflow" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <SectionHeading
          index="03 — Engineering Workflow"
          title="From scan to structure in three moves."
          intro="A closed process that begins in the air and ends with an installed envelope, without disturbing the ground it lands on."
        />
      </Reveal>

      <ol className="mt-16 grid grid-cols-1 border-t border-border lg:grid-cols-3">
        {phases.map((phase, index) => (
          <Reveal
            as="li"
            key={phase.id}
            delay={index * 120}
            className="relative border-b border-border px-0 py-10 lg:border-r lg:px-10 lg:py-12 lg:last:border-r-0"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-6xl font-semibold leading-none text-muted lg:text-7xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                {phase.index}
              </span>
            </div>

            <h3 className="mt-8 text-2xl lg:text-[1.7rem]">{phase.title}</h3>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              {phase.summary}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {phase.points.map((point) => (
                <li
                  key={point}
                  className="border border-border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-foreground/70"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
