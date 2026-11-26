import React from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { projects } from './data';

const SelectedWork = () => (
  <section className="section work-section" id="work">
    <div className="section-heading split-heading"><div><p className="eyebrow">Selected work</p><h2>Products built around real needs.</h2></div><p>A focused selection of applications that show how I approach interfaces, product thinking and full-stack delivery.</p></div>
    <div className="project-list">{projects.map((project, index) => (
      <article className="project" key={project.title}>
        <div className="project-image-wrap"><span className="project-index">0{index + 1}</span><img src={project.image} alt={`${project.title} application screenshot`} /></div>
        <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><p className="contribution"><strong>My contribution</strong>{project.contribution}</p>
          <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">View project <BsArrowUpRight /></a><a href={project.source} target="_blank" rel="noreferrer">Source code <BsGithub /></a></div>
        </div>
      </article>
    ))}</div>
  </section>
);

export default SelectedWork;
