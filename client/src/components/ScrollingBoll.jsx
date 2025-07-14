import React, { useState, useEffect } from 'react';

const ScrollingBoll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative  h-[50%] bg-gradient-to-br from-white via-blue-50 to-teal-50 text-gray-900 py-24 px-6 md:px-12 overflow-hidden">
      {/* Light Background Glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SECTION */}
        <div className={`flex-1 text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 15,000+ Patients
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Perfect Smile</span> Starts Here
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            Experience world-class dental care with{" "}
            <span className="text-blue-600 font-medium">cutting-edge technology</span> and compassionate professionals dedicated to your oral health.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {['Pain-Free Procedures', 'Same-Day Appointments', 'Insurance Accepted', 'Advanced Technology'].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-gray-800">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-10">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full font-semibold text-white shadow-md hover:scale-105 transition">
              Book Appointment
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <span className="text-green-600 font-medium">Emergency Care Available</span> • Call <span className="text-blue-600 font-semibold">(555) 123-NOVA</span>
          </div>
        </div>

        {/* RIGHT SECTION - Video */}
        <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-cyan-500">
              <div className="relative w-full h-full flex items-center justify-center">
             <video   autoPlay      loop    muted  className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-90 rounded-full"
                      >
                  <source src="https://static.vecteezy.com/system/resources/previews/045/814/602/mp4/ceramic-dental-implantation-process-3d-render-animation-of-stomatology-dentist-treatment-crown-implant-teeth-treatment-orthodontic-surgery-denture-health-and-medicine-oral-hygiene-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Achievements */}
            <div className="absolute top-10 -right-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-center">
                <div className="text-xs font-bold text-blue-600">4.9★</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
            <div className="absolute bottom-10 -left-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-center">
                <div className="text-xs font-bold text-green-600">15K+</div>
                <div className="text-xs text-gray-600">Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingBoll;
