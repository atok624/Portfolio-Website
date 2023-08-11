import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto my-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl lg:text-center font-bold text-slate-700 mb-4">
          What People Are Saying
        </h2>
        <p className="text-base md:text-lg lg:text-center font-bold text-green-600 mb-2">
          Here are some Recommendations from clients and colleagues.
        </p>
        <iframe
          src="https://widgets.sociablekit.com/linkedin-recommendations/iframe/177532"
          frameBorder="0"
          width="100%"
          height="590"
        ></iframe>
      </div>
    </div>
  )
};

export default Testimonials;
