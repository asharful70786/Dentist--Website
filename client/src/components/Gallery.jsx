import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryItems from '../Db/galleryItems';
import {useNavigate} from 'react-router-dom';


function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const navigate  = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        observer.unobserve(entry.target);
        document.querySelectorAll('.gallery-item').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.1}s`;
        });
      }
    },
    { threshold: 0.1 }
    );

    const element = document.getElementById('gallery-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Works', icon: '🖼️' },
    { id: 'cosmetic', name: 'Cosmetic', icon: '✨' },
    { id: 'implants', name: 'Implants', icon: '🦷' },
    { id: 'orthodontics', name: 'Orthodontics', icon: '🦴' },
    { id: 'office', name: 'Our Office', icon: '🏥' }
  ];



  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="gallery-section" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden w-full"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Our Work
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Transforming Smiles, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">One Patient at a Time</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our gallery to see real patient results and our state-of-the-art facility
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div> */}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="gallery-item group"
              onClick={() => openModal(item)}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden flex-grow">
                  {item.type === 'before-after' ? (
                    <div className="relative h-64">
                      <div className="absolute inset-0 grid grid-cols-2">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.beforeImage}
                            alt="Before"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative overflow-hidden">
                          <img
                            src={item.afterImage}
                            alt="After"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-0.5 shadow-xl">
            <div className="bg-white rounded-xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Transform Your Smile?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discuss your personalized treatment plan.
              </p>
              <button className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg overflow-hidden" onClick={() => navigate('/appointment')}>
                <span className="relative z-10">Book Your Appointment</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {categories.find(cat => cat.id === selectedImage.category)?.name}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {selectedImage.type === 'before-after' ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-center bg-red-50 text-red-600 py-2 px-4 rounded-lg">Before Treatment</h4>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src={selectedImage.beforeImage}
                          alt="Before"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-center bg-green-50 text-green-600 py-2 px-4 rounded-lg">After Treatment</h4>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src={selectedImage.afterImage}
                          alt="After"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">About This Case</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                      Learn More About This Treatment
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;