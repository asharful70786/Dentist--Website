import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Laser() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedProcedure, setSelectedProcedure] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    const element = document.getElementById('laser-section')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const laserProcedures = [
    {
      id: 1,
      title: 'Gum Contouring',
      description: 'Reshape your gum line for a more balanced, beautiful smile',
      icon: '🦷',
      duration: '30-60 minutes',
      recovery: '1-2 days',
      benefits: ['Painless procedure', 'Immediate results', 'Minimal bleeding'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Teeth Whitening',
      description: 'Advanced laser whitening for dramatically whiter teeth',
      icon: '✨',
      duration: '45-90 minutes',
      recovery: 'Immediate',
      benefits: ['Up to 8 shades whiter', 'Long-lasting results', 'Safe & effective'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Cavity Treatment',
      description: 'Precise, comfortable cavity removal with laser technology',
      icon: '🔬',
      duration: '20-45 minutes',
      recovery: '24 hours',
      benefits: ['No drilling sounds', 'Reduced anxiety', 'Faster healing'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Periodontal Therapy',
      description: 'Advanced gum disease treatment using laser precision',
      icon: '🩺',
      duration: '60-90 minutes',
      recovery: '3-5 days',
      benefits: ['Bacteria elimination', 'Tissue regeneration', 'Minimal discomfort'],
      image: '/api/placeholder/400/300'
    }
  ]

  const laserAdvantages = [
    { icon: '⚡', title: 'Precision Treatment', description: 'Targeted therapy with minimal impact on surrounding tissue' },
    { icon: '🛡️', title: 'Reduced Pain', description: 'Comfortable procedures with less need for anesthesia' },
    { icon: '⏱️', title: 'Faster Healing', description: 'Accelerated recovery times compared to traditional methods' },
    { icon: '🔬', title: 'Sterilization', description: 'Laser light naturally sterilizes the treatment area' },
    { icon: '💧', title: 'Minimal Bleeding', description: 'Laser energy promotes blood clotting during treatment' },
    { icon: '🎯', title: 'Accuracy', description: 'Precise control for optimal treatment outcomes' }
  ]

  const beforeAfterGallery = [
    { id: 1, before: '/api/placeholder/300/200', after: '/api/placeholder/300/200', title: 'Gum Contouring' },
    { id: 2, before: '/api/placeholder/300/200', after: '/api/placeholder/300/200', title: 'Laser Whitening' },
    { id: 3, before: '/api/placeholder/300/200', after: '/api/placeholder/300/200', title: 'Periodontal Treatment' }
  ]

  const openProcedureModal = (procedure) => {
    setSelectedProcedure(procedure)
    document.body.style.overflow = 'hidden'
  }

  const closeProcedureModal = () => {
    setSelectedProcedure(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="laser-section" className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-2xl mr-2">🔬</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Advanced Technology</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Laser <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dentistry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of dental care with our state-of-the-art laser technology.
            Precise, comfortable, and effective treatments for optimal oral health.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 transition-all duration-1000 delay-300">
          <div className="flex flex-wrap justify-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl max-w-2xl mx-auto">
            {[
              { id: 'overview', label: 'Overview', icon: '📋' },
              { id: 'procedures', label: 'Procedures', icon: '🔬' },
              { id: 'benefits', label: 'Benefits', icon: '⭐' },
              { id: 'gallery', label: 'Results', icon: '📸' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="transition-all duration-1000 delay-500">
          {activeTab === 'overview' && (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        Revolutionary Laser Technology
      </h3>
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Our advanced laser dentistry system represents the pinnacle of modern dental technology. 
          Using focused light energy, we can perform precise treatments with unprecedented accuracy 
          and patient comfort.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <h4 className="font-semibold text-blue-900 mb-2">Why Choose Laser Dentistry?</h4>
          <p className="text-blue-800">
            Laser treatments offer superior precision, reduced discomfort, faster healing times, 
            and often eliminate the need for traditional drilling and cutting instruments.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-600">Patient Satisfaction</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600">50%</div>
            <div className="text-sm text-gray-600">Faster Healing</div>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl shadow-2xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <img
            src="/LaserTreatment.jpg"
            alt="Laser Dentistry Equipment"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-2">State-of-the-Art Equipment</h4>
          <p className="text-blue-100">
            Our clinic features the latest laser technology for safe, effective, and comfortable treatments.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
)}


          {activeTab === 'procedures' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {laserProcedures.map((procedure, index) => (
                <motion.div
                  key={procedure.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                  onClick={() => openProcedureModal(procedure)}
                >
                  {/* Procedure Card */}
                  <div className="relative">
  <img
    src={procedure.image}
    alt={procedure.title}
    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
    <span className="text-2xl">{procedure.icon}</span>
  </div>
</div>
<div className="p-6">
  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
    {procedure.title}
  </h4>
  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
    {procedure.description}
  </p>
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-500">Duration:</span>
      <span className="font-medium text-gray-900">{procedure.duration}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Recovery:</span>
      <span className="font-medium text-gray-900">{procedure.recovery}</span>
    </div>
  </div>
  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
    Learn More
  </button>
</div>

                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laserAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-blue-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterGallery.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">{item.title}</h4>
                  <div className="flex gap-4 justify-center">
                    <div>
                      <img src={item.before} alt="Before" className="rounded-lg w-full" />
                      <p className="text-center text-xs text-gray-500 mt-1">Before</p>
                    </div>
                    <div>
                      <img src={item.after} alt="After" className="rounded-lg w-full" />
                      <p className="text-center text-xs text-gray-500 mt-1">After</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Procedure Modal */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xl relative">
            <button
              onClick={closeProcedureModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img src={selectedProcedure.image} alt={selectedProcedure.title} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedProcedure.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProcedure.description}</p>
            <ul className="list-disc ml-5 text-gray-600">
              {selectedProcedure.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">Duration: {selectedProcedure.duration}</p>
            <p className="text-sm text-gray-500">Recovery: {selectedProcedure.recovery}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Laser
