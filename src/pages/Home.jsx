import React from 'react';
import About from '../components/portfolio/About';
import AiJourney from '../components/portfolio/AiJourney';
import Hero from '../components/portfolio/Hero';
import OpportunityContact from '../components/portfolio/OpportunityContact';
import PortfolioFooter from '../components/portfolio/PortfolioFooter';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import Recommendations from '../components/portfolio/Recommendations';
import SelectedWork from '../components/portfolio/SelectedWork';
import './Home.css';

const Home = () => (
  <div className="portfolio-shell">
    <PortfolioHeader />
    <main id="main-content" tabIndex="-1">
      <Hero /><SelectedWork /><AiJourney /><About /><Recommendations /><OpportunityContact />
    </main>
    <PortfolioFooter />
  </div>
);
export { Home };
