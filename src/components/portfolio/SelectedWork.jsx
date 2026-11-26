import React from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { projects } from './data';

const SelectedWork = () => (
  <section className="section work-section" id="work">
    <div className="section-heading split-heading"><div><p className="eyebrow">Selected work</p><h2>Products built around real needs.</h2></div><p>A focused selection of applications that show how I approach interfaces, product thinking and full-stack delivery.</p></div>
    <div className="project-list">{projects.map((project, index) => (
      <article className={`project${index === 0 ? ' project-featured' : ''}`} key={project.title}>
        <div className="project-image-wrap">
          <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{project.title.toLowerCase().replaceAll(' ', '-')}.app</small></div>
          <span className="project-index">0{index + 1}</span><img src={project.image} alt={`${project.title} application screenshot`} />
        </div>
        <div className="project-copy">
          <div className="project-meta"><p className="project-type">{project.type}</p><span className={`project-status ${project.statusTone}`}><i />{project.status}</span></div>
          <h3>{project.title}</h3><p className="project-summary">{project.description}</p>
          <dl className="project-details"><div><dt>The challenge</dt><dd>{project.challenge}</dd></div><div><dt>What I built</dt><dd>{project.built}</dd></div><div><dt>Technical highlight</dt><dd>{project.highlight}</dd></div></dl>
          <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel} <BsArrowUpRight /></a>}<a href={project.source} target="_blank" rel="noreferrer">View repository <BsGithub /></a></div>
        </div>
      </article>
    ))}</div>
  </section>
);

export default SelectedWork;
