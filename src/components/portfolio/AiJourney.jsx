import React from 'react';

const AiJourney = () => (
  <section className="section ai-section" id="ai">
    <div className="ai-orbit" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-center">AI</span></div>
    <div className="ai-copy"><p className="eyebrow">Current direction</p><h2>Exploring intelligent systems.</h2><p className="large-copy">My master’s studies at the University of Ghana are extending my software background into machine learning, data analysis and the thoughtful application of AI.</p><p>I’m interested in opportunities where I can learn, experiment and contribute to practical AI/ML projects—especially work that connects models to useful product experiences.</p>
      <div className="interest-grid"><div><span>01</span><p>Predictive modelling</p></div><div><span>02</span><p>Data-driven products</p></div><div><span>03</span><p>Applied machine learning</p></div><div><span>04</span><p>AI-powered web apps</p></div></div>
      <div className="ai-lab-card">
        <span className="lab-status"><i /> Learning in public</span>
        <div><p>AI/ML Lab</p><small>A growing collection of coursework, experiments and practical model explorations will live here.</small></div>
        <strong>In progress</strong>
      </div>
    </div>
  </section>
);

export default AiJourney;
