import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioFooter from '../components/portfolio/PortfolioFooter';
import { projects } from '../components/portfolio/data';

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  const nextProject = project && projects[(projects.indexOf(project) + 1) % projects.length];
  useEffect(() => {
    document.title = project ? project.title + ' — Nicholas Amissah' : 'Project not found — Nicholas Amissah';
    return () => { document.title = 'Nicholas Amissah — Full-stack Developer & AI/ML Student'; };
  }, [project]);
  return (
    <div className="portfolio-shell">
      <PortfolioHeader />
      <main id="main-content" className="section case-study" tabIndex="-1">
        <div id="top" />
        <Link className="back-link" to="/#work"><FiArrowLeft aria-hidden="true" /> Back to selected work</Link>
        {!project ? <div className="case-heading"><h1>Project not found.</h1><p>Choose a project from my selected work.</p></div> : <>
          <header className="case-heading"><p className="eyebrow">{project.type}</p><h1>{project.title}</h1><p>{project.description}</p></header>
          <div className="case-facts"><div><span>My role</span><strong>{project.role}</strong></div><div><span>Stack</span><strong>{project.stack.join(' · ')}</strong></div></div>
          <figure className="case-image"><img src={project.image} alt={project.imageAlt} width="1365" height="768" /><figcaption>{project.title} · Application interface</figcaption></figure>
          <div className="case-body">
            <aside className="case-actions" aria-label="Project links">
              {project.demo && <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Open live demo <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
              <a className="button button-secondary" href={project.source} target="_blank" rel="noreferrer">View source code <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            </aside>
            <div className="case-sections">
              <section><h2>The problem</h2><p>{project.challenge}</p></section>
              <section><h2>My contribution</h2><p>{project.contribution}</p><div className="evidence-links">{project.evidence.map(item => <a href={item.url} key={item.url} target="_blank" rel="noreferrer">{item.label} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>)}</div></section>
              <section><h2>How it fits together</h2><p>{project.implementation}</p></section>
              <section><h2>What the project delivers</h2><p>{project.result}</p></section>
              <section><h2>What I’d improve next</h2><p>{project.nextStep}</p></section>
            </div>
          </div>
          <Link className="next-project" to={'/work/' + nextProject.slug}><span>Next project<strong>{nextProject.title}</strong></span><FiArrowRight aria-hidden="true" /></Link>
        </>}
      </main>
      <PortfolioFooter />
    </div>
  );
};
export default ProjectCaseStudy;
