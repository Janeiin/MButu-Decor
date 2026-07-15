import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

/** Editorial section heading: small label above a large serif title. */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  tone = 'dark',
  className = '',
}: Props) {
  const titleColor = tone === 'dark' ? 'text-charcoal' : 'text-ivorytext';
  return (
    <div
      className={`${align === 'center' ? 'items-center text-center' : 'items-start'} flex flex-col ${className}`}
    >
      <Reveal>
        <span className={tone === 'dark' ? 'eyebrow' : 'eyebrow-light'}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-6 max-w-3xl font-display text-4xl font-normal leading-[1.06] sm:text-5xl lg:text-[3.4rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
