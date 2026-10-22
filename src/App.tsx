import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { profile } from './data/resume';
import { useReveal } from './hooks/useScrollEffects';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.middleName} {profile.lastName}
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
