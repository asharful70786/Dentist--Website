import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Pediatric() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('pediatric-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '🦷' },
    { id: 'ages', label: 'Age Groups', icon: '👶' },
    { id: 'tips', label: 'Parent Tips', icon: '💡' }
  ]

  const pediatricServices = [
    {
      id: 1,
      title: 'First Dental Visit',
      description: 'Gentle introduction to dental care for your little ones',
      icon: '👶',
      ageRange: '6 months - 2 years',
      duration: '30 minutes',
      features: ['Comfort-focused approach', 'Parent education', 'Oral health assessment'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 2,
      title: 'Preventive Care',
      description: 'Regular cleanings and checkups to maintain healthy smiles',
      icon: '🦷',
      ageRange: '2 - 18 years',
      duration: '45 minutes',
      features: ['Professional cleaning', 'Fluoride treatment', 'Sealants application'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Cavity Treatment',
      description: 'Gentle, child-friendly cavity treatment and fillings',
      icon: '🔧',
      ageRange: '3 - 18 years',
      duration: '60 minutes',
      features: ['Painless procedures', 'Tooth-colored fillings', 'Nitrous oxide available'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Orthodontic Evaluation',
      description: 'Early assessment for proper teeth alignment',
      icon: '🔬',
      ageRange: '7 - 18 years',
      duration: '45 minutes',
      features: ['Growth monitoring', 'Early intervention', 'Treatment planning'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      title: 'Emergency Care',
      description: '24/7 emergency dental care for children',
      icon: '🚨',
      ageRange: '0 - 18 years',
      duration: 'As needed',
      features: ['Immediate pain relief', 'Trauma treatment', 'After-hours availability'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Dental Education',
      description: 'Fun learning sessions about oral hygiene',
      icon: '📚',
      ageRange: '3 - 12 years',
      duration: '20 minutes',
      features: ['Interactive learning', 'Brushing techniques', 'Healthy habits'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const ageGroups = [
    {
      age: '0-2 Years',
      title: 'Infants & Toddlers',
      focus: 'First visit, teething guidance, habit counseling',
      icon: '🍼',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      age: '3-6 Years',
      title: 'Preschoolers',
      focus: 'Preventive care, cavity prevention, dental education',
      icon: '🧸',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      age: '7-12 Years',
      title: 'School Age',
      focus: 'Sealants, orthodontic evaluation, sports guards',
      icon: '🎒',
      color: 'bg-green-100 text-green-600'
    },
    {
      age: '13-18 Years',
      title: 'Teenagers',
      focus: 'Orthodontics, wisdom teeth, cosmetic concerns',
      icon: '🎓',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const tips = [
    {
      title: 'Start Early',
      description: 'First dental visit by age 1 or within 6 months of first tooth',
      icon: '⏰'
    },
    {
      title: 'Make it Fun',
      description: 'Read dental books and play dentist games at home',
      icon: '🎉'
    },
    {
      title: 'Lead by Example',
      description: 'Show good oral hygiene habits yourself',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Stay Positive',
      description: 'Use positive language about dental visits',
      icon: '😊'
    }
  ]

  return (
    <section id="pediatric-section" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center bg-gradient-to-r from-pink-500/10 to-blue-500/10 backdrop-blur-sm border border-pink-200/30 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-2xl mr-2">👶</span>
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Pediatric Dentistry</span>
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Caring for <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Little Smiles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating positive dental experiences for children from infancy through adolescence. 
            Our gentle, fun approach helps build lifelong healthy habits.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-16">
          {activeTab === 'overview' && (
  <div className="text-center text-gray-700 text-lg space-y-4 max-w-3xl mx-auto">
    <p>
      Welcome to our pediatric dental care section! At SmileDental, we understand that a child’s first dental experiences shape their lifelong attitude towards oral health.
    </p>
    <p>
      Our dedicated pediatric team ensures every visit is positive, gentle, and educational. From routine checkups to emergency care and orthodontic evaluations, we provide age-appropriate services in a warm, playful environment.
    </p>
    <p>
      Let us help your child grow up with a healthy, confident smile!
    </p>
  </div>
)}

          {activeTab === 'services' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pediatricServices.map(service => (
                <div key={service.id} className={`bg-gradient-to-br ${service.color} text-white p-6 rounded-2xl shadow-lg`}>
                  <h4 className="text-xl font-bold mb-2">{service.icon} {service.title}</h4>
                  <p className="mb-2">{service.description}</p>
                  <ul className="list-disc list-inside text-sm opacity-90">
                    {service.features.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <p className="mt-2 text-xs italic">Ages: {service.ageRange} • Duration: {service.duration}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ages' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {ageGroups.map((group, i) => (
                <div key={i} className={`p-6 rounded-xl shadow-xl text-center ${group.color}`}>
                  <div className="text-3xl mb-2">{group.icon}</div>
                  <h4 className="text-lg font-bold">{group.title}</h4>
                  <p className="text-sm">{group.focus}</p>
                  <p className="text-xs mt-2 opacity-70">{group.age}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="grid md:grid-cols-2 gap-8">
              {tips.map((tip, i) => (
                <div key={i} className="bg-white border-l-4 border-pink-500 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2 text-pink-600 font-bold text-xl">{tip.icon}</div>
                  <h4 className="text-lg font-semibold mb-1">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Pediatric
