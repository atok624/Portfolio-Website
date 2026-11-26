import React, { useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsLinkedin } from 'react-icons/bs';
import { recommendations } from './data';

const Recommendations = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isCarousel = recommendations.length > 2;

  const moveTo = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = [...track.children];
    const index = Math.max(0, Math.min(nextIndex, cards.length - 1));
    cards[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isCarousel) return undefined;
    const track = trackRef.current;
    const updateActiveCard = () => {
      const cards = [...track.children];
      const nearest = cards.reduce((best, card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });
      setActiveIndex(nearest.index);
    };
    track.addEventListener('scroll', updateActiveCard, { passive: true });
    return () => track.removeEventListener('scroll', updateActiveCard);
  }, [isCarousel]);

  const handleKeys = (event) => {
    if (!isCarousel) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); moveTo(activeIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveTo(activeIndex - 1); }
  };

  return (
  <section className="section testimonial-section" id="recommendations">
      <div className="section-heading split-heading"><div><p className="eyebrow">Working together</p><h2>What collaborators say.</h2></div><p>Recommendations from developers I have studied, built and pair-programmed with.</p></div>

      <div className="recommendation-carousel">
        <div ref={trackRef} className={`testimonial-grid${isCarousel ? ' is-carousel' : ''}`} tabIndex={isCarousel ? 0 : undefined} onKeyDown={handleKeys} aria-label="Professional recommendations">
          {recommendations.map((testimonial) => <figure key={testimonial.id}>
            <div className="recommendation-top"><span>{testimonial.quality}</span><i aria-hidden="true">“</i></div>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption><img src={testimonial.image} alt="" /><span><strong>{testimonial.name}</strong>{testimonial.relationship}</span></figcaption>
          </figure>)}
        </div>

        {isCarousel && <div className="carousel-controls">
          <p aria-live="polite"><span>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(recommendations.length).padStart(2, '0')}</p>
          <div><button type="button" onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous recommendation"><BsArrowLeft /></button><button type="button" onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === recommendations.length - 1} aria-label="Next recommendation"><BsArrowRight /></button></div>
        </div>}
      </div>

      <a className="recommendation-link" href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer"><BsLinkedin /> View my professional profile <BsArrowUpRight /></a>
    </section>
  );
};

export default Recommendations;
