import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 34,
    treatment: "Dental Implants",
    location: "New York, NY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    review: "After losing a tooth in an accident, I was devastated. Dr. Martinez and the Smile Dental team made the implant process so smooth and comfortable. The results look completely natural - even my family can't tell which tooth is the implant!",
    beforeAfter: true,
    verified: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 28,
    treatment: "Invisalign Treatment",
    location: "Los Angeles, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review: "I was always self-conscious about my crooked teeth. The Invisalign treatment at Smile Dental was life-changing. The aligners were comfortable, and the staff tracked my progress perfectly. My confidence has skyrocketed!",
    beforeAfter: true,
    verified: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 42,
    treatment: "Cosmetic Dentistry",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review: "The teeth whitening and veneers I received have completely transformed my smile. The team was professional, gentle, and explained every step. I finally feel confident smiling in photos again!",
    beforeAfter: true,
    verified: true,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    age: 55,
    treatment: "Root Canal Treatment",
    location: "Houston, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review: "I was terrified of getting a root canal, but Dr. Kim made the experience completely painless. The advanced technology they use is incredible. I felt no discomfort during or after the procedure.",
    beforeAfter: false,
    verified: true,
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Lisa Park",
    age: 31,
    treatment: "Pediatric Dentistry",
    location: "Miami, FL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    review: "Bringing my 6-year-old here was the best decision. The pediatric team made her feel so comfortable and turned what could have been a scary experience into something fun. She actually asks when her next visit is!",
    beforeAfter: false,
    verified: true,
    date: "2 days ago"
  },
  {
    id: 6,
    name: "Robert Williams",
    age: 48,
    treatment: "Laser Dentistry",
    location: "Seattle, WA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    review: "The laser gum treatment was revolutionary. No pain, faster healing, and amazing results. The technology at Smile Dental is truly cutting-edge. I'm impressed by their commitment to innovation.",
    beforeAfter: false,
    verified: true,
    date: "5 days ago"
  }
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/60 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            Patient Success Stories
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
            Real{" "}
            <span className="relative">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Patient Reviews
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of patients trust Smile Dental for their oral health journey. 
            Read authentic reviews from real patients who've experienced our exceptional care.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 min-h-[500px]">
              {/* Left Side - Patient Info & Image */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative text-center">
                  {/* Patient Image */}
                  <div className="relative mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                    />
                    {testimonials[currentIndex].verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Patient Details */}
                  <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
                  <p className="text-blue-100 mb-1">Age {testimonials[currentIndex].age}</p>
                  <p className="text-blue-200 text-sm mb-4">{testimonials[currentIndex].location}</p>
                  
                  {/* Treatment Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {testimonials[currentIndex].treatment}
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Date */}
                  <p className="text-blue-100 text-sm">{testimonials[currentIndex].date}</p>
                </div>
              </div>

              {/* Right Side - Review Content */}
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <svg className="w-12 h-12 text-blue-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                    "{testimonials[currentIndex].review}"
                  </blockquote>
                </div>

                {/* Additional Features */}
                <div className="space-y-4">
                  {testimonials[currentIndex].verified && (
                    <div className="flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">Verified Patient Review</span>
                    </div>
                  )}
                  
                  {testimonials[currentIndex].beforeAfter && (
                    <div className="flex items-center text-blue-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2
                        2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0
                        00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">Before and After Photos</span>          
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial