import { useRef, useState, type KeyboardEvent } from 'react';
import { SectionHeader } from './SectionHeader';
import { experience } from '../data/resume';

export function Experience() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const job = experience[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = experience.length - 1;
    const moves: Record<string, number> = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowRight: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = moves[e.key];
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="experience" className="section section--tinted">
      <div className="container">
        <SectionHeader
          index="02"
          kicker="Experience"
          title={<>Where I&rsquo;ve <em>worked</em></>}
          intro="From IT support to data engineering: each role has added a layer to how I think about systems, data and the people who use them."
        />

        <div className="exp reveal">
          <div className="exp-tabs" role="tablist" aria-label="Employers" aria-orientation="vertical">
            {experience.map((j, i) => (
              <button
                key={`${j.company}-${j.role}`}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`exp-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="exp-panel"
                tabIndex={i === active ? 0 : -1}
                className="exp-tab"
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                <span className="exp-tab-company">{j.company}</span>
                <span className="exp-tab-role">{j.role}</span>
              </button>
            ))}
          </div>

          <div
            key={active}
            id="exp-panel"
            role="tabpanel"
            aria-labelledby={`exp-tab-${active}`}
            className="exp-panel card"
            tabIndex={0}
          >
            <p className="exp-period">
              {job.period}
              {job.location && <> · {job.location}</>}
            </p>
            <h3 className="exp-title">
              {job.role}
              <span> at {job.company}</span>
            </h3>
            <ul className="exp-points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="tags" aria-label="Tools and skills">
              {job.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
