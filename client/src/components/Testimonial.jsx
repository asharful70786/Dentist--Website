import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import  testimonials  from '../Db/TestmonialData';


function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  const renderStars = (rating) => (
  <div className="flex items-center justify-center space-x-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
        0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
        00-.364 1.118l1.07 3.292c.3.921-.755 
        1.688-1.54 1.118l-2.8-2.034a1 1 0 
        00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
        1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
        1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);


  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Real <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Patient Reviews</span>
          </h2>
          <p className="text-lg text-gray-600">Authentic stories from real patients treated at Smile Dental</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-2 overflow-hidden">
          {/* Left: Profile */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white p-10 flex flex-col justify-center items-center">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 object-cover" />
            <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-blue-100">{testimonials[currentIndex].age}, {testimonials[currentIndex].location}</p>
            <p className="text-white/80 text-sm mt-1">{testimonials[currentIndex].treatment}</p>

            {/* Stars */}
            <div className="mt-3">{renderStars(testimonials[currentIndex].rating)}</div>

            {/* Google Verified + Before After */}
            {testimonials[currentIndex].verified && (
              <div className="inline-flex items-center px-3 py-1 mt-4 bg-blue-100 text-blue-700 rounded-full text-xs font-medium shadow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-4 h-4 mr-2" />
                Verified by Google
              </div>
            )}
          </div>

          {/* Right: Review */}
          <div className="p-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  “{testimonials[currentIndex].review}”
                </blockquote>
                <div className="text-green-600 text-sm font-medium">
                   Verified Patient Review
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-center items-center gap-6">
          <button onClick={prev} className="text-blue-700 text-sm hover:underline">← Previous</button>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Play Auto'}
          </button>
          <button onClick={next} className="text-blue-700 text-sm hover:underline">Next →</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
