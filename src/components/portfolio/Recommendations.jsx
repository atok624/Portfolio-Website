import React from 'react';
import { recommendations } from './data';

const Recommendations = () => {
  return (
    <section className="section testimonial-section">
      <div className="section-heading split-heading"><div><p className="eyebrow">Working together</p><h2>What collaborators say.</h2></div><p>Recommendations from developers I have studied, built and pair-programmed with.</p></div>
      <div className="testimonial-grid">{recommendations.map((testimonial) => <figure key={testimonial.id}><blockquote>“{testimonial.quote}”</blockquote><figcaption><img src={testimonial.image} alt="" /><span><strong>{testimonial.name}</strong>{testimonial.title}</span></figcaption></figure>)}</div>
    </section>
  );
};

export default Recommendations;
