import React from 'react';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';

const PortfolioFooter = () => (
  <footer className="portfolio-footer">
    <div className="site-footer footer-main">
      <div className="footer-identity">
        <a className="brand" href="#top" aria-label="Nicholas Amissah, back to top"><span className="brand-mark"><i>N</i><i>A</i></span><span>Nicholas Amissah</span></a>
        <p>Full-stack developer building practical software and intelligent systems.</p>
        <span className="footer-availability"><i /> Available for full-time, freelance and collaborative work.</span>
      </div>
      <nav className="footer-column" aria-label="Footer navigation">
        <p>Explore</p>
        <a href="#work">Selected work</a><a href="#ai">AI/ML journey</a><a href="#about">About</a><a href="#recommendations">Recommendations</a><a href="#contact">Contact</a>
        <a href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Résumé <FiDownload /></a>
      </nav>
      <div className="footer-column footer-connect">
        <p>Connect</p>
        <a href="mailto:atok948@gmail.com"><BsEnvelope /> Email <FiArrowUpRight /></a>
        <a href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn <FiArrowUpRight /></a>
        <a href="https://github.com/atok624" target="_blank" rel="noreferrer"><BsGithub /> GitHub <FiArrowUpRight /></a>
        <span>Accra, Ghana · GMT</span>
      </div>
    </div>
    <div className="site-footer footer-bottom">
      <p>© {new Date().getFullYear()} Nicholas Amissah</p><p>Designed and built with React.</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </div>
  </footer>
);

export default PortfolioFooter;
