import { Icon } from './Icon';
import { photoUrl, profile } from '../data/resume';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            My portfolio
          </p>

          <h1 className="hero-name">
            {profile.firstName} <em>{profile.middleName}</em>
            <br />
            {profile.lastName}
          </h1>

          <p className="hero-role">{profile.title}</p>

          <p className="hero-lede">{profile.lede}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-ghost">
              Get in touch
              <Icon name="arrowRight" size={17} />
            </a>
          </div>
        </div>

        <figure className="portrait reveal">
          <div className="portrait-frame">
            <img
              src={photoUrl}
              alt="Portrait of Katrina Najaru Lekalkuli"
              width={1012}
              height={936}
              fetchPriority="high"
            />
          </div>
          <figcaption className="portrait-tag">
            <Icon name="cap" size={16} />
            BSc Information Technology, JKUAT
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
