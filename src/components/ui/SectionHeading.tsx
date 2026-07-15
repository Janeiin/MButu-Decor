import Reveal from './Reveal';

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  align = 'left',
  className = '',
}: Props) {
  return (
    <div
      className={`${align === 'center' ? 'items-center text-center' : 'items-start'} flex flex-col ${className}`}
    >
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-body text-[11px] tracking-widest text-gold-dim">
            {index}
          </span>
          <span className="h-px w-8 bg-gold-dim/50" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
