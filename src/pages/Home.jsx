import React from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import Testimonials from '../components/Testimonials';

export const Home = () => {
  return (
    <>
      <Header />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
