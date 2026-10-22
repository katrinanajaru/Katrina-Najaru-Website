import { Icon } from './Icon';
import { SectionHeader } from './SectionHeader';
import { profile, projects, type Project } from '../data/resume';

const groups: { key: Project['category']; title: string }[] = [
  { key: 'data', title: 'Data analytics & engineering' },
  { key: 'software', title: 'Software & systems' },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li className="project card reveal" style={{ transitionDelay: `${(index % 3) * 60}ms` }}>
      <div className="project-top">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        {project.context && <span className="project-context">{project.context}</span>}
      </div>
      <h4 className="project-title">{project.title}</h4>
      <p className="project-desc">{project.description}</p>
      <ul className="tags" aria-label="Technologies">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {project.url && (
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          View on GitHub
          <Icon name="arrowUpRight" size={15} />
          <span className="sr-only"> ({project.title})</span>
        </a>
      )}
    </li>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          kicker="Projects"
          title={<>Selected <em>work</em></>}
          intro="Data pipelines, dashboards and analyses, alongside the systems I've built. Most of the code is on GitHub."
        />

        {groups.map((g) => {
          const items = projects.filter((p) => p.category === g.key);
          return (
            <div key={g.key} className={`project-group project-group--${g.key}`}>
              <h3 className="sub-title reveal">
                {g.title}
                <span className="project-count">{String(items.length).padStart(2, '0')}</span>
              </h3>
              <ol className="projects">
                {items.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </ol>
            </div>
          );
        })}

        <p className="projects-more reveal">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Icon name="github" size={17} />
            More on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
