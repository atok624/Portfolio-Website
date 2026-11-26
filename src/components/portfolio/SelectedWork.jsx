import React, { useEffect, useRef, useState } from 'react';
import { BsArrowUpRight, BsGithub, BsXLg } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from './data';

const SelectedWork = () => {
  const [activeProject, setActiveProject] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return undefined;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeProject]);

  return (
    <section className="section work-section" id="work">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Selected work</p><h2>Products built around real needs.</h2></div>
        <p>A focused selection of applications that show how I approach interfaces, product thinking and full-stack delivery.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-card${index === 0 ? ' project-featured' : ''}`} key={project.title}>
            <div className="project-image-wrap">
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{project.title.toLowerCase().replaceAll(' ', '-')}.app</small></div>
              <span className="project-index">0{index + 1}</span>
              <img src={project.image} alt={`${project.title} application screenshot`} />
            </div>
            <div className="project-card-body">
              <div className="project-meta"><p className="project-type">{project.type}</p><span className={`project-status ${project.statusTone}`}><i />{project.status}</span></div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                {project.stack.length > 3 && <li>+{project.stack.length - 3}</li>}
              </ul>
              <div className="project-card-actions">
                <button type="button" className="project-detail-button" onClick={() => setActiveProject(project)}>Project details <FiArrowRight /></button>
                <div className="project-icon-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live product`}><BsArrowUpRight /></a>}
                  <a href={project.source} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}><BsGithub /></a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {activeProject && (
        <div className="project-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button ref={closeButtonRef} className="dialog-close" type="button" aria-label="Close project details" onClick={() => setActiveProject(null)}><BsXLg /></button>
            <p className="project-type">{activeProject.type}</p>
            <h3 id="project-dialog-title">{activeProject.title}</h3>
            <p className="dialog-summary">{activeProject.description}</p>
            <dl className="project-details">
              <div><dt>The challenge</dt><dd>{activeProject.challenge}</dd></div>
              <div><dt>What I built</dt><dd>{activeProject.built}</dd></div>
              <div><dt>Technical highlight</dt><dd>{activeProject.highlight}</dd></div>
            </dl>
            <ul className="tag-list">{activeProject.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="project-links">
              {activeProject.demo && <a href={activeProject.demo} target="_blank" rel="noreferrer">{activeProject.demoLabel} <BsArrowUpRight /></a>}
              <a href={activeProject.source} target="_blank" rel="noreferrer">View repository <BsGithub /></a>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default SelectedWork;
