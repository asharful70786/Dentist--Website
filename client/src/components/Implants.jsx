import React from 'react';
import { motion } from 'framer-motion';

function Implants() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Restore Your Smile with <span className="text-sky-600">Dental Implants</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Durable, natural-looking replacements for missing teeth. Experience renewed confidence and bite strength with our advanced implant solutions.
          </p>
        </motion.div>

        {/* Description and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/5355917/pexels-photo-5355917.jpeg"
              alt="Dental Implant Procedure"
              className="rounded-3xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Dental Implants?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Permanent and secure replacement for lost teeth</li>
              <li>Preserves jawbone and prevents bone loss</li>
              <li>Looks, feels, and functions like a natural tooth</li>
              <li>Improves speech, chewing, and confidence</li>
              <li>No need to alter adjacent teeth (unlike bridges)</li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Benefits of Our Implant Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🔩', title: 'Strong Titanium Roots', desc: 'Fused securely with your jawbone for lasting support.' },
              { icon: '🦷', title: 'Natural Aesthetics', desc: 'Custom-designed crowns to match your real teeth.' },
              { icon: '⏳', title: 'Long-Term Durability', desc: 'Built to last a lifetime with proper care.' },
              { icon: '😌', title: 'Comfortable Fit', desc: 'No slipping or irritation like dentures.' },
              { icon: '📈', title: 'Bone Health', desc: 'Helps preserve bone structure and facial shape.' },
              { icon: '💬', title: 'Improved Function', desc: 'Eat, speak, and smile with total confidence.' }
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

        {/* CTA */}
        <div className="text-center mt-20">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Rebuild Your Smile?</h4>
          <p className="text-gray-600 mb-6">Schedule your dental implant consultation today with our expert team.</p>
          <button className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Implants;
