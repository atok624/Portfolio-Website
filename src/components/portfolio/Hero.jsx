import React from 'react';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

const Hero = () => (
  <section className="hero section" id="top">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Full-stack developer · AI/ML master’s student</p>
      <h1>I build practical software with <em>intelligence</em> at its core.</h1>
      <p className="hero-intro">I’m Nicholas Amissah, a Ghana-based developer building dependable web products while pursuing a master’s in Artificial Intelligence and Machine Learning at the University of Ghana.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">View selected work <FiArrowRight /></a><a className="button button-secondary" href="#contact">Start a conversation</a></div>
      <div className="availability"><span className="status-dot" />Available for full-time roles, freelance projects and startup collaborations.</div>
      <div className="credibility-row" aria-label="Professional highlights">
        <div><span>Build</span><strong>React & Rails</strong></div>
        <div><span>Study</span><strong>AI/ML at UG</strong></div>
        <div><span>Status</span><strong>Open to opportunities</strong></div>
      </div>
    </div>
    <div className="hero-visual" aria-label="Portrait of Nicholas Amissah">
      <div className="hero-grid" aria-hidden="true" />
      <span className="hero-code code-one" aria-hidden="true">01</span>
      <span className="hero-code code-two" aria-hidden="true">ML</span>
      <div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/84607674?v=4" alt="Nicholas Amissah" /></div>
      <div className="portrait-note note-top">Based in Ghana <FiMapPin /></div>
    </div>
  </section>
);

export default Hero;
