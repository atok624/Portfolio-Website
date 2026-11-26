import React, { useState } from 'react';
import { BsList, BsXLg } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nicholas Amissah, home" onClick={closeMenu}><span className="brand-mark">NA</span><span>Nicholas Amissah</span></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <BsXLg /> : <BsList />}</button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a><a href="#ai" onClick={closeMenu}>AI/ML</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-resume" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Résumé <FiDownload /></a>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
