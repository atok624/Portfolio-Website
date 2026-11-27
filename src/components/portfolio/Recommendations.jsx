import React, { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';
import { recommendations } from './data';

const Recommendations = () => {
  const trackRef = useRef(null);
  const currentIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = recommendations.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const observer = new ResizeObserver(() => {
      const index = Math.min(currentIndexRef.current, count - 1);
      track.scrollTo({ left: Math.max(index, 0) * track.clientWidth, behavior: 'auto' });
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [count]);

  const moveTo = index => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(index, count - 1));
    track.scrollTo({
      left: target * track.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };
  const updatePosition = () => {
    const track = trackRef.current;
    if (!track?.clientWidth) return;
    const index = Math.max(0, Math.min(Math.round(track.scrollLeft / track.clientWidth), count - 1));
    currentIndexRef.current = index;
    setActiveIndex(index);
  };
  const handleKeys = event => {
    if (event.target !== trackRef.current) return;
    const destinations = { ArrowRight: activeIndex + 1, ArrowLeft: activeIndex - 1, Home: 0, End: count - 1 };
    if (event.key in destinations) { event.preventDefault(); moveTo(destinations[event.key]); }
  };

  if (!count) return null;

  return (
    <section className="section testimonial-section" id="recommendations" aria-labelledby="recommendations-title">
      <div className="section-heading testimonial-heading"><p className="eyebrow">Working together</p><h2 id="recommendations-title">What collaborators say.</h2><p>From developers I’ve built and pair-programmed with.</p></div>
      <div className="testimonial-carousel">
        <div ref={trackRef} className="testimonial-track" tabIndex={count > 1 ? 0 : undefined} onKeyDown={handleKeys} onScroll={updatePosition} role="region" aria-roledescription="carousel" aria-label="Collaborator feedback. Use left and right arrow keys to browse.">
          {recommendations.map((item, index) => (
            <figure className="testimonial-slide" key={item.id} role="group" aria-roledescription="slide" aria-label={(index + 1) + ' of ' + count} aria-hidden={index !== activeIndex}>
              <FiMessageSquare className="testimonial-mark" aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <figcaption><img src={item.image} alt="" width="52" height="52" loading="lazy" /><span><strong>{item.name}</strong>{item.relationship}</span></figcaption>
            </figure>
          ))}
        </div>
        {count > 1 && <div className="testimonial-controls">
          <button className="testimonial-arrow" type="button" onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous recommendation"><FiArrowLeft aria-hidden="true" /></button>
          <div className="testimonial-dots" role="group" aria-label="Choose a recommendation">{recommendations.map((item, index) => <button key={item.id} type="button" className={index === activeIndex ? 'is-active' : ''} aria-label={'Show recommendation ' + (index + 1) + ' from ' + item.name} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => moveTo(index)} />)}</div>
          <button className="testimonial-arrow" type="button" onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === count - 1} aria-label="Next recommendation"><FiArrowRight aria-hidden="true" /></button>
        </div>}
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">Recommendation {activeIndex + 1} of {count}, from {recommendations[activeIndex].name}.</p>
      </div>
      <a className="recommendation-link" href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer">Connect on LinkedIn <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
    </section>
  );
};
export default Recommendations;
