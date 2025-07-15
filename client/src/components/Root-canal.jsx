import React from 'react';
import { motion } from 'framer-motion';

function Root_canal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Painless & Precise <span className="text-blue-600">Root Canal Treatment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restore your tooth health and relieve pain with our advanced root canal procedures.
            Our skilled endodontists use the latest technology to ensure your comfort and care.
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/RootCanal.jpg"
              alt="Root Canal Treatment"
              className="rounded-3xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Root Canal Therapy?</h2>
            <p className="text-gray-700 mb-4">
              Root canal therapy is a procedure used to treat infection at the center of a tooth.
              It involves cleaning out the diseased pulp, disinfecting the inner chamber, and sealing it to prevent future issues.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Performed under local anesthesia — virtually pain-free</li>
              <li>Preserves your natural tooth structure</li>
              <li>Quick recovery time with minimal discomfort</li>
              <li>Recommended for severe decay or infection</li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us for Your Root Canal?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🦷', title: 'Experienced Endodontists', desc: 'Specialists with years of clinical experience' },
              { icon: '💻', title: 'Modern Technology', desc: 'Digital X-rays, apex locators & rotary instruments' },
              { icon: '😌', title: 'Comfort First', desc: 'Gentle techniques with sedation options' },
              { icon: '⏱️', title: 'Quick Appointments', desc: 'Same-day & weekend availability' },
              { icon: '🔒', title: 'Long-Term Protection', desc: 'Crown placement to protect treated teeth' },
              { icon: '🏆', title: 'High Success Rate', desc: 'Over 95% patient satisfaction' },
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to save your tooth?</h4>
          <p className="text-gray-600 mb-6">Book your root canal consultation today and get long-lasting relief.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Root_canal;
