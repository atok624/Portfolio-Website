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
  <main className="portfolio-shell">
    <PortfolioHeader />
    <Hero />
    <SelectedWork />
    <AiJourney />
    <About />
    <Recommendations />
    <OpportunityContact />
    <PortfolioFooter />
  </main>
);

export { Home };
