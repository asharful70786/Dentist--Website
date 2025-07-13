import React from 'react';

function QuickCall() {
  return (
    <section className="relative bg-gradient-to-r from-white via-blue-50 to-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Need a Quick Consultation?
        </h2>
        <p className="text-gray-600 mb-8">
          Book a free 10-minute call with our dental experts
        </p>

        {/* Calendly Button */}
        <a
          href="https://calendly.com/contact-codercamp/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition"
        >
          Schedule Consultation
        </a>

        {/* Optional Contact */}
        <p className="mt-6 text-sm text-gray-500">
          Prefer to call?{' '}
          <a href="tel:+15551234567" className="text-blue-600 font-medium underline">
            (555) 123-NOVA
          </a>
        </p>
      </div>
    </section>
  );
}

export default QuickCall;
