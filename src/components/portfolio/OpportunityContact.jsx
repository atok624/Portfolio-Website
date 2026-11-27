import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { opportunityTypes } from './data';
import { usePwaState } from '../../pwa';

const OpportunityContact = () => {
  const { offline } = usePwaState();
  const [status, setStatus] = useState('idle');
  const requestRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => () => {
    const request = requestRef.current;
    requestRef.current = null;
    request?.abort();
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    if (offline || !navigator.onLine) return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    setStatus('sending');
    try {
      const response = await fetch('https://formsubmit.co/ajax/atok948@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Submission not confirmed');
      navigate('/thanks', { state: { messageSent: true } });
    } catch {
      if (requestRef.current === controller) setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      if (requestRef.current === controller) requestRef.current = null;
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Let’s talk</p><h2 id="contact-title">What are you<br />working on?</h2>
          <p>I’m available for a full-time role, a freelance project or a startup collaboration. If you have an idea in AI/ML, I’d be glad to explore it with you too.</p>
          <a className="contact-email" href="mailto:atok948@gmail.com">atok948@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
          <p className="contact-location">Accra, Ghana · GMT / UTC+0</p>
          <div className="social-links"><a href="https://github.com/atok624" target="_blank" rel="noreferrer"><BsGithub aria-hidden="true" /> GitHub<span className="sr-only"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer"><BsLinkedin aria-hidden="true" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/atok948@gmail.com" method="POST" onSubmit={sendMessage} aria-busy={status === 'sending'}>
          <div className="form-heading"><h3>Send me a note</h3><span>All fields required unless marked optional</span></div>
          <fieldset disabled={status === 'sending'}>
            <label htmlFor="contact-name">Name<input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Your name" maxLength="120" required /></label>
            <label htmlFor="contact-email">Email<input id="contact-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@example.com" maxLength="254" required /></label>
            <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows="4" placeholder="A little about the role, project or idea…" maxLength="10000" required /></label>
            <details className="form-extra"><summary>Add project details <span>(optional)</span></summary>
              <label htmlFor="contact-organization">Organization <span>(optional)</span><input id="contact-organization" type="text" name="organization" autoComplete="organization" maxLength="160" /></label>
              <label htmlFor="contact-opportunity">Opportunity <span>(optional)</span><select id="contact-opportunity" name="opportunity" defaultValue=""><option value="">Choose if relevant</option>{opportunityTypes.map(type => <option key={type}>{type}</option>)}</select></label>
            </details>
            <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="New portfolio inquiry" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value={new URL('/thanks', window.location.origin).href} />
            <button className="button button-primary" type="submit" disabled={offline}>{offline ? 'Reconnect to send' : status === 'sending' ? 'Sending…' : 'Send message'}<FiArrowRight aria-hidden="true" /></button>
          </fieldset>
          <p className="sr-only" role="status">{status === 'sending' ? 'Sending your message. Please wait.' : ''}</p>
          {offline && <p className="form-offline" role="status">You’re offline. You can write your message here and reconnect to send it. Keep this page open to retain your text.</p>}
          {status === 'error' && <p className="form-error" role="alert">Delivery couldn’t be confirmed. Your message is still here. Try again, or <a href="mailto:atok948@gmail.com">email me directly</a>.</p>}
          <p className="form-privacy">Delivered via FormSubmit. I use your details to reply to your inquiry.</p>
        </form>
      </div>
    </section>
  );
};
export default OpportunityContact;
