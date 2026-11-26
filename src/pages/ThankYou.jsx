import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <section className="thanks-page">
      <div className="thanks-card">
        <div className="thanks-image">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678875697/undraw_appreciation_5ugl_hncd8o.svg"
            alt="Appreciation"
          />
        </div>
        <div className="thanks-body">
          <h1>Thank you!</h1>
          <p>
            Your message has been received. I will get in touch with you
            shortly.
          </p>
        </div>
        <div className="thanks-action">
          <a href="/">
            <FaLongArrowAltLeft />
            <span>Back to home</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
