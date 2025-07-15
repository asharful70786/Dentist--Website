import React from 'react';
import { motion } from 'framer-motion';

const Cosmetic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Radiant Smiles with <span className="text-blue-600">Cosmetic Dentistry</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our aesthetic dental treatments can transform your appearance and boost your confidence. We craft beautiful smiles that look natural and feel amazing.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/CosmeticDentistry.jpeg"
              alt="Cosmetic Dentistry"
              className="rounded-3xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Teeth Whitening:</strong> Brighten your smile with safe, effective professional treatments.</li>
              <li><strong>Porcelain Veneers:</strong> Instantly correct chips, discoloration, or spacing for a picture-perfect smile.</li>
              <li><strong>Smile Makeover:</strong> Customized combinations of procedures to design your dream smile.</li>
              <li><strong>Cosmetic Bonding:</strong> Repair small flaws using tooth-colored resin.</li>
              <li><strong>Gum Contouring:</strong> Reshape your gum line for improved symmetry and aesthetics.</li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Benefits of Cosmetic Dentistry</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '😄', title: 'Enhanced Appearance', desc: 'Achieve a more attractive, youthful smile.' },
              { icon: '💬', title: 'Improved Confidence', desc: 'Feel great in photos and social settings.' },
              { icon: '🪥', title: 'Better Oral Health', desc: 'Correct alignment and hygiene habits improve overall care.' },
              { icon: '🧠', title: 'Positive Mental Impact', desc: 'Boosts self-esteem and mood with every smile.' },
              { icon: '🎯', title: 'Tailored Treatments', desc: 'Customized plans that fit your needs and goals.' },
              { icon: '⏱️', title: 'Quick Results', desc: 'Most procedures offer immediate or fast improvements.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Let Your Smile Shine</h4>
          <p className="text-gray-600 mb-6">Schedule a cosmetic consultation and explore what’s possible with today’s dentistry.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Book a Smile Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
