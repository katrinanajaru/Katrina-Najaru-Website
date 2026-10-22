import { SectionHeader } from './SectionHeader';
import { certifications, experience, profile, projects } from '../data/resume';

const certCount = certifications.reduce((n, g) => n + g.items.length, 0);

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Education', value: 'BSc & Diploma in IT, JKUAT' },
  { label: 'Focus', value: 'Data engineering, analytics & systems' },
  { label: 'Languages', value: profile.languages.join(' & ') },
];

const stats = [
  { value: experience.length, label: 'Roles held' },
  { value: projects.length, label: 'Featured projects' },
  { value: certCount, label: 'Certifications' },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" kicker="About" title={<>Quietly precise, <em>data-minded</em> and people-first.</>} />

        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-summary">{profile.summary}</p>
            <p>
              Today I work as a Data Engineer, building the pipelines, models and dashboards that teams rely on to make
              decisions. Before that I designed a role-based project management system at the ICT Authority, ran SEO
              and digital analytics at Avané Clinic, and researched inclusive learning experiences with OWLI Africa.
            </p>

            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{String(s.value).padStart(2, '0')}</dd>
                </div>
              ))}
            </dl>
          </div>

          <dl className="facts card reveal">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
