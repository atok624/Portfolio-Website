import React from 'react';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

const Hero = () => (
  <section className="hero section" id="top">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Full-stack developer · AI/ML master’s student</p>
      <h1>Building useful software for an <em>intelligent</em> future.</h1>
      <p className="hero-intro">I’m Nicholas Amissah, a full-stack developer and master’s student in Artificial Intelligence and Machine Learning at the University of Ghana. I turn ideas into dependable web products and explore how intelligent systems can solve practical problems.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <FiArrowRight /></a><a className="button button-secondary" href="#contact">Let’s work together</a></div>
      <div className="availability"><span className="status-dot" />Open to full-time roles, freelance projects, AI/ML collaborations and startup opportunities.</div>
    </div>
    <div className="hero-visual" aria-label="Portrait of Nicholas Amissah">
      <div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/84607674?v=4" alt="Nicholas Amissah" /></div>
      <div className="portrait-note note-top">Based in Ghana <FiMapPin /></div><div className="portrait-note note-bottom">Code <span>+</span> intelligence</div>
    </div>
  </section>
);

export default Hero;
