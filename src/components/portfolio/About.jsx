import React, { useState } from 'react';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { capabilities, careerTimeline } from './data';

const Timeline = ({ entries }) => (
  <ol className="experience-timeline" id="experience-list">{entries.map(entry => (
    <li key={entry.title}>
      <span className="timeline-period">{entry.period}</span>
      <div><h3>{entry.title}</h3><p>{entry.organization}</p></div>
      <span className="timeline-kind">{entry.kind}</span>
    </li>
  ))}</ol>
);

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleEntries = showAll ? careerTimeline : careerTimeline.filter(entry => entry.featured);
  return (
  <section className="section about-section" id="about" aria-labelledby="about-title">
    <div className="about-grid">
      <div>
        <p className="eyebrow">About me</p>
        <h2 id="about-title">Interfaces, APIs.<br />And the work between.</h2>
      </div>
      <div className="about-story">
        <p>I work across React interfaces, Rails APIs and databases. Remote team projects and volunteer mentoring have also given me practice in code reviews, pair programming and explaining technical decisions.</p>
        <p>My background combines an IT degree from the University of Ghana, full-stack training at Microverse, web development at Generation Ghana and cloud foundations through AWS re/Start.</p>
        <a className="text-link" href="/assets/Nicholas_Amissah_CV.pdf" target="_blank" rel="noreferrer">Read my résumé <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
      </div>
    </div>
    <dl className="capability-list">{capabilities.map(([title, tools]) => <div key={title}><dt>{title}</dt><dd>{tools}</dd></div>)}</dl>
    <div className="experience-header"><h3>Experience, education & training</h3><span>{showAll ? 'Complete background' : 'Selected background'}</span></div>
    <Timeline entries={visibleEntries} />
    <button className="button button-secondary experience-toggle" type="button" aria-expanded={showAll} aria-controls="experience-list" onClick={() => setShowAll(value => !value)}><span>{showAll ? 'Show less' : 'View all experience & education'}</span><FiChevronDown aria-hidden="true" /></button>
  </section>
  );
};
export default About;
