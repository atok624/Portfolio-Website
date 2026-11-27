import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { projects } from './data';

const SelectedWork = () => (
  <section className="section work-section" id="work" aria-labelledby="work-title">
    <div className="section-heading split-heading">
      <div><p className="eyebrow">Selected work</p><h2 id="work-title">The work, and my part in it.</h2></div>
      <p>Independent builds and team projects, with a closer look at the implementation.</p>
    </div>
    <div className="project-list">
      {projects.map(project => (
        <article className="project-card" key={project.slug}>
          <Link className="project-image-wrap" to={'/work/' + project.slug} aria-label={'Read about ' + project.title}>
            <img src={project.image} alt={project.imageAlt} width="1365" height="768" loading="lazy" decoding="async" />
          </Link>
          <div className="project-card-body">
            <div className="project-meta"><p className="project-type">{project.type}</p><span className={'project-status ' + project.statusTone}><i aria-hidden="true" />{project.status}</span></div>
            <h3><Link to={'/work/' + project.slug}>{project.title}</Link></h3>
            <p className="project-summary">{project.description}</p>
            <p className="project-role">{project.role}</p>
            <ul className="tag-list" aria-label={project.title + ' technologies'}>{project.cardStack.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="project-card-actions">
              <Link className="project-detail-button" to={'/work/' + project.slug}>Case study <FiArrowRight aria-hidden="true" /></Link>
              <a href={project.demo || project.source} target="_blank" rel="noreferrer">{project.demo ? 'Live demo' : 'Source code'} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default SelectedWork;
