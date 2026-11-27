import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioFooter from '../components/portfolio/PortfolioFooter';
import './ThankYou.css';

const ThankYou = () => {
  const { state } = useLocation();
  useEffect(() => {
    document.title = 'Thank you — Nicholas Amissah';
    return () => { document.title = 'Nicholas Amissah — Full-stack Developer & AI/ML Student'; };
  }, []);
  return (
    <div className="portfolio-shell">
      <PortfolioHeader />
      <main className="section thanks-page" id="main-content" tabIndex="-1">
        <div className="thanks-card" id="top">
          <span className="thanks-icon" aria-hidden="true"><FiCheck /></span>
          <p className="eyebrow">Thank you</p>
          <h1>{state?.messageSent ? 'Your message is on its way.' : 'Let’s stay in touch.'}</h1>
          <p>{state?.messageSent ? 'Thanks for reaching out. I’ll reply to the email address you provided.' : 'Have a role, project or idea to discuss? You can reach me through the contact form or by email.'}</p>
          <Link className="button button-primary" to={state?.messageSent ? '/' : '/#contact'}><FiArrowLeft aria-hidden="true" />{state?.messageSent ? 'Back to the portfolio' : 'Get in touch'}</Link>
        </div>
      </main>
      <PortfolioFooter />
    </div>
  );
};
export default ThankYou;
