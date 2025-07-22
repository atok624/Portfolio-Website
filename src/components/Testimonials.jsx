import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from './testimonials/TestimonialsData';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaThLarge, FaPlay, FaPause } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [filter, setFilter] = useState('all');
  const [isHovered, setIsHovered] = useState(false);

  const categories = ['all', 'development', 'design', 'management'];
  
  const filteredTestimonials = testimonials.filter(testimonial => 
    filter === 'all' ? true : testimonial.category === filter
  );

  // Create a duplicated array for infinite loop effect
  const duplicatedTestimonials = [...filteredTestimonials, ...filteredTestimonials];

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      
      // When reaching the end, quickly reset to the duplicate section
      if (newIndex >= filteredTestimonials.length) {
        newIndex = 0;
      }
      // When reaching the start, quickly reset to the duplicate section
      if (newIndex < 0) {
        newIndex = filteredTestimonials.length - 1;
      }
      
      return newIndex;
    });
  }, [filteredTestimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && !isHovered && !isGridView) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isGridView, paginate]);

  const containerVariants = {
    enter: () => ({
      opacity: 0,
      scale: 0.98
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: () => ({
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    })
  };

  const TestimonialCard = ({ testimonial }) => (
    <div 
      className="bg-white rounded-2xl shadow-xl p-6 h-full hover:shadow-2xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 relative flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover rounded-full ring-2 ring-green-400"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-400 text-white p-1.5 rounded-full">
              <FaStar className="text-xs" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
            <p className="text-xs text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <div className="text-gray-700 text-sm flex-grow italic space-y-2 whitespace-pre-line">
          {testimonial.content}
        </div>
      </div>
    </div>
  );

  const getVisibleTestimonials = () => {
    const visibleIndexes = [
      currentIndex,
      (currentIndex + 1) % filteredTestimonials.length,
      (currentIndex + 2) % filteredTestimonials.length,
    ];
    return visibleIndexes.map(index => filteredTestimonials[index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            What people are saying about my work
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <FaThLarge className={isGridView ? 'text-green-500' : 'text-gray-500'} />
              <span>{isGridView ? 'Carousel View' : 'Grid View'}</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {isPlaying ? <FaPause className="text-gray-500" /> : <FaPlay className="text-gray-500" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full ${
                    filter === cat
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-6xl mx-auto px-16">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getVisibleTestimonials().map((testimonial) => (
                    <TestimonialCard 
                      key={testimonial.id} 
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
              onClick={() => paginate(-1)}
            >
              <FiChevronLeft className="text-2xl text-gray-600" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
              onClick={() => paginate(1)}
            >
              <FiChevronRight className="text-2xl text-gray-600" />
            </button>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 mt-4">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 $
                    index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
