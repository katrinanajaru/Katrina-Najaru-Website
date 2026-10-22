import { Icon } from './Icon';
import { SectionHeader } from './SectionHeader';
import { certifications, education, profile, references } from '../data/resume';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader index="05" kicker="Education" title={<>Learning, <em>certified</em></>} />

        <div className="edu-grid">
          <div className="reveal">
            <h3 className="sub-title">
              <Icon name="cap" /> Education
            </h3>
            <ol className="timeline">
              {education.map((e) => (
                <li key={e.award}>
                  <p className="timeline-period">{e.period}</p>
                  <h4 className="timeline-title">{e.award}</h4>
                  <p className="timeline-sub">{e.school}</p>
                </li>
              ))}
            </ol>

            <h3 className="sub-title">
              <Icon name="globe" /> Languages
            </h3>
            <ul className="tags tags--lg">
              {profile.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <h3 className="sub-title">
              <Icon name="check" /> Training &amp; Certificates
            </h3>
            <div className="certs">
              {certifications.map((g) => (
                <div key={g.issuer} className="cert-group">
                  <p className="cert-issuer">{g.issuer}</p>
                  <ul>
                    {g.items.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="refs reveal">
          <h3 className="sub-title">
            <Icon name="briefcase" /> References
          </h3>
          <ul className="ref-list">
            {references.map((r) => (
              <li key={r.name} className="card">
                <p className="ref-name">{r.name}</p>
                <p className="ref-role">{r.position}</p>
                <p className="ref-org">{r.org}</p>
              </li>
            ))}
          </ul>
          <p className="refs-note">Referee contact details are included in the downloadable résumé.</p>
        </div>
      </div>
    </section>
  );
}
