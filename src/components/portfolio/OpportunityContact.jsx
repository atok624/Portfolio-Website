import React from 'react';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { opportunityTypes } from './data';

const OpportunityContact = () => (
  <section className="section contact-section" id="contact">
    <div className="contact-intro"><p className="eyebrow">Start a conversation</p><h2>Have a role, project or ambitious idea?</h2><p>I’m available for full-time engineering opportunities, selected freelance work, AI/ML collaborations and conversations with early-stage startup teams.</p><a className="email-link" href="mailto:atok948@gmail.com"><BsEnvelope /> atok948@gmail.com</a><div className="social-links"><a href="https://github.com/atok624" target="_blank" rel="noreferrer"><BsGithub /> GitHub</a><a href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a></div></div>
    <form className="contact-form" action="https://formsubmit.co/atok948@gmail.com" method="POST">
      <label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
      <label>What would you like to discuss?<select name="opportunity" defaultValue="" required><option value="" disabled>Select an opportunity</option>{opportunityTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
      <label>Message<textarea name="message" rows="5" placeholder="Tell me a little about the opportunity or idea..." required /></label>
      <input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="New portfolio opportunity" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://nicholas-amissah.vercel.app/thanks" />
      <button className="button button-primary" type="submit">Send message <FiArrowRight /></button>
    </form>
  </section>
);

export default OpportunityContact;
