import { useState } from 'react';
import { Icon } from './Icon';
import { SectionHeader } from './SectionHeader';
import { profile, resumeUrl } from '../data/resume';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section section--tinted">
      <div className="container">
        <SectionHeader
          index="06"
          kicker="Contact"
          title={<>Let&rsquo;s build something <em>thoughtful</em>.</>}
          intro="Open to data engineering, analytics and systems roles, collaborations, and conversations. I usually reply within a day or two."
        />

        <ul className="contact-list reveal">
          <li className="contact-item card">
            <span className="contact-icon"><Icon name="mail" /></span>
            <div>
              <p className="contact-label">Email</p>
              <a href={`mailto:${profile.email}`}>
                {profile.email.split('@')[0]}
                <wbr />@{profile.email.split('@')[1]}
              </a>
            </div>
            <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
              <Icon name={copied ? 'check' : 'copy'} size={16} />
            </button>
            <span className="sr-only" role="status">{copied ? 'Email copied' : ''}</span>
          </li>
          <li className="contact-item card">
            <span className="contact-icon"><Icon name="phone" /></span>
            <div>
              <p className="contact-label">Phone</p>
              <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
            </div>
          </li>
          <li className="contact-item card">
            <span className="contact-icon"><Icon name="github" /></span>
            <div>
              <p className="contact-label">GitHub</p>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                github.com/{profile.github}
              </a>
            </div>
            <Icon name="arrowUpRight" size={16} />
          </li>
          <li className="contact-item card">
            <span className="contact-icon"><Icon name="pin" /></span>
            <div>
              <p className="contact-label">Location</p>
              <span>{profile.location}</span>
            </div>
          </li>
          <li className="contact-cv">
            <a href={resumeUrl} download className="btn btn-primary btn-block">
              <Icon name="download" size={17} />
              Download full résumé (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
