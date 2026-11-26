import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';

const learningCycle = [
  ['01', 'Understand', 'Frame the problem'],
  ['02', 'Prepare', 'Work with the data'],
  ['03', 'Evaluate', 'Test and interpret'],
  ['04', 'Integrate', 'Build into a product'],
];

const AiJourney = () => (
  <section className="section ai-section" id="ai">
    <div className="learning-loop" aria-label="Machine-learning product cycle">
      <div className="loop-heading"><span>How I’m learning to work</span><strong>Problem to product</strong></div>
      <ol>
        {learningCycle.map(([number, title, description]) => (
          <li key={number}><span>{number}</span><div><strong>{title}</strong><small>{description}</small></div></li>
        ))}
      </ol>
      <p>Learning is iterative. Each result should sharpen the next question.</p>
    </div>

    <div className="ai-copy">
      <p className="eyebrow">AI/ML journey</p>
      <h2>From software systems to <em>learning systems.</em></h2>
      <p className="large-copy">My full-stack background taught me how to ship complete products. My master’s studies are helping me understand how those products can learn from data, support decisions and adapt to real needs.</p>

      <div className="ai-pillars">
        <article><span>01</span><h3>Academic foundation</h3><p>Pursuing a master’s in Artificial Intelligence and Machine Learning at the University of Ghana.</p></article>
        <article><span>02</span><h3>Practical experimentation</h3><p>Developing experience with data preparation, model development, evaluation and interpreting results.</p></article>
        <article><span>03</span><h3>Product integration</h3><p>Exploring how intelligent systems can become useful, accessible web-product experiences.</p></article>
      </div>

      <div className="ai-lab-card">
        <span className="lab-status"><i /> In progress</span>
        <div><p>AI/ML Lab</p><small>A growing collection of coursework, experiments, notebooks and product prototypes. The first case study is being prepared.</small></div>
        <div className="lab-actions"><a href="https://github.com/atok624" target="_blank" rel="noreferrer"><BsGithub /> Follow progress</a><a href="#contact">Discuss a project <FiArrowRight /></a></div>
      </div>
    </div>
  </section>
);

export default AiJourney;
