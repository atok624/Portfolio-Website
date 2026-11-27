import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const AiJourney = () => (
  <section className="ai-section" id="ai" aria-labelledby="ai-title">
    <div className="section ai-layout">
      <div>
        <p className="eyebrow">AI & machine learning</p>
        <h2 id="ai-title">A new layer to<br />how I build.</h2>
        <p className="study-note">MSc Artificial Intelligence & Machine Learning<br /><strong>University of Ghana · In progress</strong></p>
      </div>
      <div className="ai-copy">
        <p className="large-copy">I’m extending my software background through postgraduate study in AI/ML, with an interest in connecting models to useful applications.</p>
        <p>My undergraduate group project explored machine learning for skin-disease detection. My current focus is building a stronger foundation in data preparation, model development and evaluation.</p>
        <div className="ai-focus"><span>Current direction</span><p>Understand the data. Train a baseline. Evaluate the results. Explore integration.</p></div>
        <a className="text-link" href="#contact">Have an ML project to work on together? <FiArrowRight aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
export default AiJourney;
