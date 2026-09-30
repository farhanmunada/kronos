import { projects } from '../../data/projects';
import { cn } from '../../lib/cn';
import { Reveal } from '../ui/Reveal';
import { ProjectVisual } from '../visuals/ProjectVisual';

export function Portfolio() {
  return (
    <section id="projects" className="border-t border-border bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-white/50">04 — Selected Commissions</p>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
              Built where the map runs out.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
              A selection of completed residences, each engineered for a terrain no standard
              construction method could reach.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-px">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 120}
              className={cn(
                'group grid grid-cols-1 border-t border-white/12 lg:grid-cols-[1.5fr_1fr]',
                index % 2 === 1 && 'lg:[&>figure]:order-2',
              )}
            >
              <figure className="media-zoom relative overflow-hidden">
                <ProjectVisual id={project.id} title={project.title} />
              </figure>

              <div className="flex flex-col justify-between p-8 lg:p-14">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">
                      {project.index}
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl lg:text-4xl">{project.title}</h3>
                  <p className="mt-2 font-serif text-lg text-accent">{project.location}</p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                </div>

                <dl className="mt-10 grid grid-cols-3 gap-px border border-white/12 bg-white/12">
                  {project.metadata.map((item) => (
                    <div key={item.label} className="bg-ink px-4 py-4">
                      <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
                        {item.label}
                      </dt>
                      <dd className="mt-1.5 font-serif text-sm text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
