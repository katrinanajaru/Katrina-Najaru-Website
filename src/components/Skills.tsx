import { SectionHeader } from './SectionHeader';
import { skills } from '../data/resume';

export function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <SectionHeader index="04" kicker="Skills" title={<>The <em>toolkit</em></>} />

        <div className="skills">
          {skills.map((g, i) => (
            <div key={g.title} className="skill-group reveal" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <h3 className="skill-title">{g.title}</h3>
              <ul className="skill-list">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
