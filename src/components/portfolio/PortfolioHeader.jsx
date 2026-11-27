import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import { FiArrowUpRight, FiMoon, FiSun } from 'react-icons/fi';
import { currentTheme, setTheme } from '../../theme';

const links = [['work', 'Work'], ['ai', 'AI/ML'], ['about', 'About'], ['recommendations', 'Kind words'], ['contact', 'Contact']];

const PortfolioHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, updateTheme] = useState(() => document.documentElement.dataset.theme || currentTheme());
  const dialogRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const sync = () => updateTheme(document.documentElement.dataset.theme);
    window.addEventListener('portfolio-theme-change', sync);
    return () => window.removeEventListener('portfolio-theme-change', sync);
  }, []);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 16);
      if (pathname !== '/') { setActiveSection(''); return; }
      const position = window.scrollY + 150;
      const section = links.reduce((last, [id]) => {
        const element = document.getElementById(id);
        return element && element.offsetTop <= position ? id : last;
      }, '');
      setActiveSection(section);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 961px)');
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', onResize);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener('change', onResize);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const followLink = (id) => {
    setMenuOpen(false);
    if (pathname === '/') requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    });
  };
  const keepMenuFocus = (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled])')]
      .filter(element => element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  };
  const navLinks = () => links.map(([id, label]) => (
    <a key={id} href={pathname === '/' ? '#' + id : '/#' + id} onClick={() => followLink(id)} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>
  ));
  const resume = <a className="nav-resume" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Résumé <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (PDF, opens in a new tab)</span></a>;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
        <div className="section header-inner">
          <a className="brand" href="/#top" aria-label="Nicholas Amissah, home"><span className="brand-mark" aria-hidden="true">NA</span><span className="brand-name">Nicholas Amissah</span></a>
          <nav className="site-nav" aria-label="Main navigation">{navLinks()}{resume}</nav>
          <div className="header-actions">
            <button className="theme-toggle" type="button" aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'} title={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}</button>
            <button ref={menuButtonRef} className="menu-button" type="button" aria-label="Open navigation" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><BsList aria-hidden="true" /></button>
          </div>
        </div>
      </header>
      <dialog ref={dialogRef} id="mobile-navigation" className="mobile-menu" aria-labelledby="mobile-menu-title" onKeyDown={keepMenuFocus} onCancel={() => setMenuOpen(false)} onClick={event => { if (event.target === event.currentTarget) setMenuOpen(false); }}>
        <div className="mobile-menu-header"><span id="mobile-menu-title">Navigation</span><button className="menu-close" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><BsXLg aria-hidden="true" /></button></div>
        <nav aria-label="Mobile navigation">{navLinks()}{resume}</nav>
        <p className="mobile-menu-note">Nicholas Amissah<br />Full-stack developer · Accra, Ghana</p>
      </dialog>
    </>
  );
};
export default PortfolioHeader;
