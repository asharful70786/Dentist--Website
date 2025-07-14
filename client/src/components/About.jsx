import React, { useState, useEffect } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('story')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: '🎓', title: 'Harvard Dental School', desc: 'DDS, Magna Cum Laude' },
    { icon: '🏆', title: 'Best Dentist Award', desc: '2023 City Excellence Award' },
    { icon: '📜', title: 'Board Certified', desc: 'American Board of Dentistry' },
    { icon: '⭐', title: '15+ Years Experience', desc: 'Serving the community since 2009' }
  ]

  const specialties = [
    'Cosmetic Dentistry',
    'Implant Surgery',
    'Orthodontics',
    'Pediatric Care',
    'Emergency Dentistry',
    'Oral Surgery'
  ]

  return (
    <section id="about-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden w-full">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Dr. <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Sarah Johnson</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful smiles and providing exceptional dental care with a gentle, personalized approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white rounded-xl p-2 shadow-lg">
              {[
                { id: 'story', label: 'My Story', icon: '👨‍⚕️' },
                { id: 'education', label: 'Education', icon: '🎓' },
                { id: 'philosophy', label: 'Philosophy', icon: '💭' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why I Became a Dentist</h3>
                  <p className="text-gray-700 leading-relaxed">
                    My journey into dentistry began when I was just 12 years old. After a traumatic dental experience as a child, 
                    I promised myself that I would become a dentist who would make the experience comfortable and stress-free for others.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Today, with over 15 years of experience, I've helped thousands of patients overcome their dental fears and 
                    achieve the healthy, beautiful smiles they deserve. My passion lies in combining advanced dental technology 
                    with a gentle, caring approach.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium italic">
                      "Every smile tells a story, and I'm honored to be part of making those stories beautiful."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Harvard School of Dental Medicine</h4>
                        <p className="text-gray-600">Doctor of Dental Surgery (DDS) - Magna Cum Laude</p>
                        <p className="text-sm text-gray-500">2005-2009</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Advanced Implant Surgery Certification</h4>
                        <p className="text-gray-600">American Academy of Implant Dentistry</p>
                        <p className="text-sm text-gray-500">2015</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cosmetic Dentistry Fellowship</h4>
                        <p className="text-gray-600">American Academy of Cosmetic Dentistry</p>
                        <p className="text-sm text-gray-500">2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Treatment Philosophy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 w-2 h-2 rounded-full mt-2"></div>
                      <p className="text-gray-700"><strong>Patient-Centered Care:</strong> Every treatment plan is tailored to your unique needs, lifestyle, and goals.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                      <p className="text-gray-700"><strong>Preventive Approach:</strong> I believe in educating patients and preventing problems before they occur.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2"></div>
                      <p className="text-gray-700"><strong>Comfort First:</strong> Using the latest techniques to ensure pain-free, comfortable treatments.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-500 w-2 h-2 rounded-full mt-2"></div>
                      <p className="text-gray-700"><strong>Continuous Learning:</strong> Staying updated with the latest advancements in dental technology and techniques.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Specialties */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Video & Achievements */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Video Section */}
            <div className="relative mb-8 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
              
                  
                  {/* Actual video would go here */}
                  <video className="w-full h-full object-cover" controls>
                    <source src="/myviodeo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <p className="text-gray-600">Patients Served</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <p className="text-gray-600">Specialties</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
            </div>            
          </div>          
        </div>
      </div>
    </section>
  );
} 


export default About
