import React, { useState } from 'react';

const locations = [
  {
    id: 1,
    name: "Nova Dental - Main Clinic",
    address: "123 Healthcare Boulevard, Suite 200",
    city: "New York, NY 10001",
    phone: "(555) 123-NOVA",
    email: "info@novadental.com",
    hours: {
      "Monday - Friday": "8:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 4:00 PM",
      "Sunday": "Emergency Only"
    },
    services: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    features: ["Parking Available", "Wheelchair Accessible", "Digital X-Rays", "Sedation Dentistry"],
    isMain: true
  },
  {
    id: 2,
    name: "Nova Dental - Downtown",
    address: "456 Medical Center Drive",
    city: "New York, NY 10002",
    phone: "(555) 456-NOVA",
    email: "downtown@novadental.com",
    hours: {
      "Monday - Friday": "7:00 AM - 7:00 PM",
      "Saturday": "8:00 AM - 3:00 PM",
      "Sunday": "Closed"
    },
    services: ["Pediatric Dentistry", "Preventive Care", "Dental Implants", "Root Canal"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    features: ["Extended Hours", "Family Friendly", "Insurance Accepted", "Emergency Care"],
    isMain: false
  }
];

function Location() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [activeTab, setActiveTab] = useState('info');

  const currentLocation = locations[activeLocation];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-white py-24 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/60 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            Find Us Near You
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-6">
            Our{" "}
            <span className="relative font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
              Locations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conveniently located across the city to serve you better. Find the Nova Dental clinic nearest to you and experience world-class dental care in a comfortable, modern environment.
          </p>
        </div>

        {/* Location Switch Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {location.name.split(' - ')[1]}
                {location.isMain && (
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Main
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Image Box */}
          <div className="flex-1 max-w-xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={currentLocation.image}
                alt={`${currentLocation.name} exterior`}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentLocation.name}</h3>
                <p className="text-blue-100">{currentLocation.city}</p>
              </div>
              {currentLocation.isMain && (
                <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Main Clinic
                </div>
              )}
            </div>
          </div>

          {/* Info Tabs */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                {[
                  { id: 'info', label: 'Contact Info', icon: '📍' },
                  { id: 'hours', label: 'Hours', icon: '🕒' },
                  { id: 'services', label: 'Services', icon: '🦷' },
                  { id: 'features', label: 'Features', icon: '✨' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'info' && (
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p>{currentLocation.address}</p>
                      <p>{currentLocation.city}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href={`tel:${currentLocation.phone}`} className="text-blue-600 hover:underline">{currentLocation.phone}</a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href={`mailto:${currentLocation.email}`} className="text-blue-600 hover:underline">{currentLocation.email}</a>
                    </div>
                  </div>
                )}
                {activeTab === 'hours' && (
                  <div className="space-y-2 text-gray-700">
                    {Object.entries(currentLocation.hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span>{day}</span>
                        <span className={`font-medium ${time.includes('Emergency') ? 'text-red-600' : 'text-green-600'}`}>{time}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'services' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentLocation.services.map((service, i) => (
                      <div key={i} className="bg-blue-50 p-2 rounded text-blue-700 font-medium">{service}</div>
                    ))}
                  </div>
                )}
                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentLocation.features.map((feature, i) => (
                      <div key={i} className="bg-green-50 p-2 rounded text-green-700 font-medium">{feature}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
