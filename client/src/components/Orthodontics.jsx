import React from 'react';
import { FaTooth, FaSmile, FaClinicMedical } from 'react-icons/fa';
import { GiTooth, GiToothbrush } from 'react-icons/gi';
import QuickCall from './Quickcall';
import FAQSection from './FAQSection';

function Orthodontics() {
  return (
    <div className="orthodontics-page w-full bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-2">Our Orthodontic Services</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">Comprehensive solutions tailored to your unique needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: <FaTooth />, title: "Traditional Braces", text: "Metal or ceramic brackets with wires to gradually move teeth into proper alignment."
            }, {
              icon: <GiTooth />, title: "Clear Aligners", text: "Nearly invisible, removable trays that gently shift your teeth."
            }, {
              icon: <FaSmile />, title: "Lingual Braces", text: "Custom braces placed on the back side of teeth for complete invisibility."
            }, {
              icon: <GiToothbrush />, title: "Retainers", text: "Essential post-treatment care to maintain your new smile."
            }, {
              icon: <FaClinicMedical />, title: "Early Intervention", text: "Pediatric evaluations to address developing issues early."
            }, {
              icon: <FaSmile />, title: "Adult Orthodontics", text: "Customized treatment plans designed for adult patients."
            }].map(({ icon, title, text }, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">
                <div className="text-blue-500 text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/OrthodonticTreatment.jpg"
              alt="Benefits of Orthodontic Treatment"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Benefits of Orthodontic Treatment</h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Improved dental health and easier cleaning</li>
              <li>Better chewing function and speech</li>
              <li>Reduced risk of tooth decay and gum disease</li>
              <li>Prevention of excessive tooth wear</li>
              <li>Enhanced facial symmetry and appearance</li>
              <li>Boost in self-confidence and self-esteem</li>
              <li>Proper jaw alignment and bite function</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800">Our Orthodontic Process</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto my-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Initial Consultation", "Custom Treatment Plan", "Treatment Begins", "Regular Adjustments", "Beautiful Results"].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step}</h3>
                <p className="text-sm text-gray-600">
                  {index === 0 && "Comprehensive examination, digital imaging, and discussion of your smile goals."}
                  {index === 1 && "Personalized approach with options explained in detail by our orthodontist."}
                  {index === 2 && "Placement of braces or aligners with detailed care instructions."}
                  {index === 3 && "Periodic visits to monitor progress and make necessary adjustments."}
                  {index === 4 && "Completion of treatment with retainers to maintain your new smile."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickCall />
      <FAQSection />
    </div>
  );
}

export default Orthodontics;
