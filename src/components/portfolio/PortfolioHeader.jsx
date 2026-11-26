import React, { useEffect, useState } from 'react';
import { BsList, BsXLg } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['work', 'ai', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.35] },
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navLink = (id, label) => (
    <a href={`#${id}`} onClick={closeMenu} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}>
      <span>{label}</span>
    </a>
  );

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <a className="brand" href="#top" aria-label="Nicholas Amissah, home" onClick={closeMenu}><span className="brand-mark"><i>N</i><i>A</i></span><span className="brand-name">Nicholas Amissah <i className="availability-dot" aria-label="Available for opportunities" /></span></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <BsXLg /> : <BsList />}</button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        {navLink('work', 'Work')}{navLink('ai', 'AI/ML')}{navLink('about', 'About')}{navLink('contact', 'Contact')}
        <a className="nav-resume" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Résumé <FiDownload /></a>
        <p className="mobile-availability"><i /> Available for full-time, freelance and collaborative work.</p>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
