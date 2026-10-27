import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { resumeUrl } from '../data/resume';
import { useActiveSection, useScrolled } from '../hooks/useScrollEffects';
import type { Theme } from '../hooks/useTheme';

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const sectionIds = navLinks.map((l) => l.id);

type Props = { theme: Theme; onToggleTheme: () => void };

export function Nav({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="monogram" aria-label="Katrina Najaru Lekalkuli, back to top">
          <span className="monogram-mark">kn</span>
          <span className="monogram-name">Katrina Najaru</span>
        </a>

        <nav aria-label="Primary" className="nav-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a href={resumeUrl} download className="btn btn-primary btn-sm nav-cv">
            <Icon name="download" size={16} />
            Résumé
          </a>
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile" className="container">
          {navLinks.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              <span className="mobile-index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a href={resumeUrl} download className="btn btn-primary mobile-cv" onClick={() => setOpen(false)}>
            <Icon name="download" size={16} />
            Download résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
