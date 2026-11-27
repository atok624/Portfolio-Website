import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { PwaInstall } from './PwaControls';

const PortfolioFooter = () => (
  <footer className="portfolio-footer">
    <div className="section footer-main">
      <a className="brand" href="/#top"><span className="brand-mark" aria-hidden="true">NA</span><span>Nicholas Amissah</span></a>
      <nav aria-label="Footer navigation"><a href="/#work">Work</a><a href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Résumé<span className="sr-only"> (PDF, opens in a new tab)</span></a><a href="mailto:atok948@gmail.com">Email</a><a href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a><a href="https://github.com/atok624" target="_blank" rel="noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a></nav>
    </div>
    <PwaInstall />
    <div className="section footer-bottom"><p>© {new Date().getFullYear()} Nicholas Amissah</p><span>Accra, Ghana · GMT</span><a href="#top">Back to top <FiArrowUp aria-hidden="true" /></a></div>
  </footer>
);
export default PortfolioFooter;
