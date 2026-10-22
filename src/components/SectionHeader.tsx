import type { ReactNode } from 'react';

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: string;
};

export function SectionHeader({ index, kicker, title, intro }: Props) {
  return (
    <header className="section-header reveal">
      <p className="kicker">
        <span className="kicker-index">{index}</span>
        <span className="kicker-rule" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
