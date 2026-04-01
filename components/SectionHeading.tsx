type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
