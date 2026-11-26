import React from 'react';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { opportunityTypes } from './data';

const OpportunityContact = () => (
  <section className="section contact-section" id="contact">
    <div className="contact-intro">
      <p className="eyebrow">Start a conversation</p><h2>Have a role, project or ambitious idea?</h2>
      <p>I’m open to full-time engineering opportunities, selected freelance engagements, AI/ML collaborations and conversations with early-stage teams. Choose the type of opportunity and tell me what you’re working on.</p>
      <div className="contact-details">
        <a href="mailto:atok948@gmail.com"><span><BsEnvelope /></span><div><small>Email</small><strong>atok948@gmail.com</strong></div></a>
        <div className="contact-location"><span><FiMapPin /></span><div><small>Location</small><strong>Accra, Ghana · GMT</strong></div></div>
      </div>
      <div className="social-links"><a href="https://github.com/atok624" target="_blank" rel="noreferrer"><BsGithub /> GitHub</a><a href="https://www.linkedin.com/in/nicholas-amissah/" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a></div>
    </div>
    <form className="contact-form" action="https://formsubmit.co/atok948@gmail.com" method="POST">
      <div className="form-heading"><span>Contact form</span><small><i>*</i> Required fields</small></div>
      <label>Name <i>*</i><input type="text" name="name" autoComplete="name" placeholder="Your full name" required /></label>
      <label>Email <i>*</i><input type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@example.com" required /></label>
      <label>Organization <small>Optional</small><input type="text" name="organization" autoComplete="organization" placeholder="Company, university or team" /></label>
      <label>What would you like to discuss? <i>*</i><select name="opportunity" defaultValue="" required><option value="" disabled>Select an opportunity</option>{opportunityTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
      <label>Message <i>*</i><textarea name="message" rows="5" minLength="20" placeholder="Tell me about the role, project or idea..." required /></label>
      <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="New portfolio opportunity" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://nicholas-amissah.vercel.app/thanks" />
      <button className="button button-primary" type="submit">Send message <FiArrowRight /></button>
      <p className="form-privacy">Your message is sent directly to my email. I’ll use your details only to respond to this inquiry.</p>
    </form>
  </section>
);

export default OpportunityContact;
