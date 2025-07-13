import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-24 min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/60 rounded-full text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Excellence in Dental Care
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-4">
            Crafting{" "}
            <span className="relative">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Perfect Smiles
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where cutting-edge technology meets compassionate care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-25 items-center">
          {/* Left: Enhanced Content */}
          <div className="space-y-7">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-800 leading-relaxed font-light">
                At{" "}
                <span className="font-bold text-blue-700 relative">
                  Smile Dental
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-200"></span>
                </span>
                , we revolutionize oral healthcare by seamlessly blending{" "}
                <span className="font-semibold text-gray-900">advanced dental technology</span>{" "}
                with personalized patient care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment extends beyond treatment—we create{" "}
                <span className="italic font-medium text-teal-700">transformative smile experiences</span>{" "}
                that boost confidence and enhance quality of life, all while maintaining 
                exceptional affordability without compromising on excellence.
              </p>
            </div>

            {/* Professional Stats Bar */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">15K+</div>
                  <div className="text-sm text-gray-600 font-medium">Successful Treatments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">20+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Innovative Technology
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    State-of-the-art digital imaging, 3D modeling, and precision instruments for optimal results
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    Transparent Pricing
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Premium dental care with honest, upfront pricing and flexible payment options
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Expert Specialists
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Board-certified professionals with decades of combined experience and ongoing education
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Personalized Journey
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Customized treatment plans designed around your unique needs, lifestyle, and goals
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-full font-semibold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="flex items-center justify-center">
                  Discover Our Story
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Explore Products
                </span>
              </button>
            </div>
          </div>

          {/* Right: Enhanced Image Section */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 rounded-3xl transform -rotate-2"></div>
            
            {/* Main image container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://smileset.com/cdn/shop/files/iStock-1464444576_2560px.jpg?v=1735331519&width=1920"
                  alt="Professional dental aligner treatment showcasing Smile Dental's advanced technology and patient care"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-xl border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-bold text-gray-800">Certified Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">15,000+</div>
                <div className="text-sm text-gray-600 font-medium">Transformed Smiles</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection