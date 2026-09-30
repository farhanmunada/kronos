interface SectionHeadingProps {
  index: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ index, title, intro, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{index}</p>
      <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">{title}</h2>
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
