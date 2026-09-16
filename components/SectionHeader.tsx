"use client";

type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ kicker, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="text-xs uppercase tracking-[0.3em] text-chrome-500 mb-3">
        <span className="inline-block w-8 h-px bg-chrome-500 align-middle mr-3" />
        {kicker}
      </div>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-chrome-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-chrome-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
