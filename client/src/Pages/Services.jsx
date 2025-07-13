import React, { useState } from "react";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with advanced whitening, porcelain veneers, and aesthetic dental corrections for a radiant, confident appearance.",
    image: "https://images.unsplash.com/photo-1684607631747-045ecfeeb4c7?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeover"],
    duration: "1-3 visits",
    category: "Aesthetic"
  },
  {
    title: "Dental Implants",
    description: "Restore missing teeth with titanium implants that provide permanent, natural-looking replacements with superior functionality.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Single Implants", "Full Mouth Restoration", "Implant Crowns"],
    duration: "3-6 months",
    category: "Restorative"
  },
  {
    title: "Orthodontics",
    description: "Achieve perfectly aligned teeth using traditional braces, clear aligners, or Invisalign for a straighter, healthier smile.",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Metal Braces", "Clear Aligners", "Invisalign"],
    duration: "12-24 months",
    category: "Corrective"
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized, gentle dental care for children with a focus on prevention, education, and creating positive dental experiences.",
    image: "https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Preventive Care", "Fluoride Treatments", "Sealants"],
    duration: "30-45 mins",
    category: "Preventive"
  },
  {
    title: "Root Canal Treatment",
    description: "Save infected or damaged teeth using advanced endodontic techniques with minimal discomfort and maximum success rates.",
    image: "https://plus.unsplash.com/premium_photo-1674575270991-653fb6bfc1bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Pain Relief", "Tooth Preservation", "Advanced Techniques"],
    duration: "1-2 visits",
    category: "Therapeutic"
  },
  {
    title: "Laser Dentistry",
    description: "Experience modern, minimally invasive laser treatments for soft tissue procedures, cavity preparation, and periodontal therapy.",
    image: "https://plus.unsplash.com/premium_photo-1677174625109-96a5d95f39c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Soft Tissue Treatment", "Cavity Preparation", "Gum Therapy"],
    duration: "30-60 mins",
    category: "Advanced"
  },
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Aesthetic", "Restorative", "Corrective", "Preventive", "Therapeutic", "Advanced"];
  const filteredServices = activeFilter === "All" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-white py-24 px-4 md:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/60 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            Comprehensive Dental Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            Our <span className="font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">Dental Services</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience world-class dental care with our comprehensive range of services, combining cutting-edge technology with personalized treatment plans for optimal oral health.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.duration}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">Key Features</div>
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
