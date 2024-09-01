import React from 'react';
import './Projects.css'
import Slider from 'react-slick';
import projectsArr from './ProjectArray';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Settings for the carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <button type="button" className="slick-prev"><FaArrowLeft /></button>,
  nextArrow: <button type="button" className="slick-next"><FaArrowRight /></button>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-4 md:py-12 md:px-14 lg:px-14 bg-white"
    >
      <h3 className="text-5xl lg:text-7xl md:text-center lg:text-center font-bold text-slate-900">
        My{' '}
        <span className="before:w-28 lg:before:w-48 before:right-32 lg:before:right-1 md:before:right-3 before:h-1 before:bg-orange-600 relative before:absolute before:-bottom-1">
          Projects
        </span>
      </h3>

      <Slider {...settings} className="mt-16">
        {projectsArr.map((project) => (
          <div className="px-2" key={project.id}> {/* Add padding to the slide */}
            <div
              className="card border rounded-md bg-slate-900 border-gray-500 p-2 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow hover:shadow-lg transition-shadow transform hover:scale-105"
            >
              <h3 className="mb-3 text-center font-bold uppercase tracking-wider text-xl relative before:absolute before:bottom-0 before:left-0 before:w-20 lg:before:w-48 before:h-0.5 before:bg-slate-300 text-green-500">
                {project.title}
              </h3>
              <div className="card-img overflow-hidden rounded-tr-md rounded-tl-md">
                <img
                  src={project.image}
                  alt="Project Screenshot"
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
              <div className="card-content mt-3 w-full">
                <div className="languages flex justify-center flex-wrap gap-2 my-4">
                  {project.languages?.map((language) => (
                    <div
                      className="badge bg-green-600 text-slate-900 px-2 py-1 rounded-full"
                      key={language}
                    >
                      {language}
                    </div>
                  ))}
                </div>

                <div className="my-6 card-actions flex justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-orange-500 px-3 py-2 rounded uppercase hover:bg-orange-500 ease-out duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-transparent bg-orange-500 px-3 py-2 rounded uppercase hover:border-orange-500 hover:bg-transparent ease-out duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
