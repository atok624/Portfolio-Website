import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { capabilities, careerTimeline } from './data';

const About = () => (
  <section className="section about-section" id="about">
    <div className="section-heading"><p className="eyebrow">About & experience</p><h2>A product builder who keeps learning.</h2></div>

    <div className="about-grid">
      <div className="about-story">
        <p className="large-copy">I started in full-stack development because I enjoy turning ideas into products people can actually use.</p>
        <p>Working across interfaces, APIs and databases taught me to think about complete systems rather than isolated features. Remote collaboration and mentoring strengthened the way I communicate, review work and solve problems with a team.</p>
        <p>I’m now extending that foundation through postgraduate study in AI and machine learning, with an interest in products that combine dependable engineering with useful, responsible intelligence.</p>
        <a className="text-link" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">View my full résumé <FiArrowRight /></a>
      </div>
      <aside className="education-card">
        <p className="card-label">Currently</p>
        <h3>Master’s in Artificial Intelligence & Machine Learning</h3>
        <p>University of Ghana</p>
        <span>Building on a BSc in Information Technology and practical experience across web development, cloud foundations and collaborative software delivery.</span>
      </aside>
    </div>

    <div className="experience-heading"><p className="eyebrow">Selected journey</p><h3>Experience and education</h3><p>A concise view of the experiences shaping how I build, learn and collaborate.</p></div>
    <ol className="experience-timeline">
      {careerTimeline.map((entry) => (
        <li key={`${entry.period}-${entry.title}`}>
          <div className="timeline-period"><span>{entry.period}</span><small>{entry.kind}</small></div>
          <div className="timeline-content"><h4>{entry.title}</h4><strong>{entry.organization}</strong><p>{entry.description}</p></div>
        </li>
      ))}
    </ol>

    <div className="capability-heading"><p className="eyebrow">What I bring</p><h3>Capabilities grounded in delivery.</h3></div>
    <div className="capability-list">{capabilities.map(([number, title, text, tools]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><small>{tools}</small></article>)}</div>
  </section>
);

export default About;
