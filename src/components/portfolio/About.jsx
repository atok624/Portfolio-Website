import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { capabilities } from './data';

const About = () => (
  <section className="section about-section" id="about">
    <div className="section-heading"><p className="eyebrow">About & capabilities</p><h2>A product builder who keeps learning.</h2></div>
    <div className="about-grid">
      <div className="about-story"><p className="large-copy">I enjoy taking an idea from early exploration to a working product that people can understand and use.</p><p>My full-stack background helps me think across the complete experience—from the interface people see to the services and data behind it. My AI/ML studies are adding a new layer to that perspective: how software can learn, adapt and support better decisions.</p><a className="text-link" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">View my full résumé <FiArrowRight /></a></div>
      <div className="education-card"><p className="card-label">Currently</p><h3>Master’s in Artificial Intelligence & Machine Learning</h3><p>University of Ghana</p><span>Developing deeper knowledge in machine learning, data analysis and intelligent application development.</span></div>
    </div>
    <div className="capability-list">{capabilities.map(([number, title, text, tools]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><small>{tools}</small></article>)}</div>
  </section>
);

export default About;
