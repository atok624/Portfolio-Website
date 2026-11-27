import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => (
  <section className="hero section" id="top" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Nicholas Amissah · Full-stack developer</p>
      <h1 id="hero-title">Useful software.<br /><em>Thoughtfully built.</em></h1>
      <p className="hero-intro">I build web applications with React and Rails. Now studying AI/ML at the University of Ghana, I’m exploring how machine learning can make those products more useful.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#work">Explore my work <FiArrowRight aria-hidden="true" /></a>
        <a className="button button-secondary" href="#contact">Let’s talk</a>
      </div>
      <p className="availability"><span className="status-dot" aria-hidden="true" />Open to full-time roles, freelance projects and startup collaborations.</p>
    </div>
    <figure className="hero-visual">
      <div className="portrait-frame"><img src="/assets/nicholas.jpg" alt="Nicholas Amissah" width="640" height="800" fetchpriority="high" /></div>
      <figcaption>Based in Accra, Ghana <span>GMT / UTC+0</span></figcaption>
    </figure>
  </section>
);
export default Hero;
