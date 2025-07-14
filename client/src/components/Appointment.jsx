import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Appointment.css';

function Appointment() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const appointmentFeatures = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Easy Scheduling',
      description: 'Book appointments at your convenience with our online system',
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Timings',
      description: 'Available slots throughout the week including weekends',
    },
    {
      icon: 'fas fa-video',
      title: 'Telemedicine',
      description: 'Virtual consultations available for follow-ups and routine care',
    },
    {
      icon: 'fas fa-bell',
      title: 'Reminders',
      description: 'Automatic SMS and email reminders before your appointment',
    },
  ];

  const consultationTypes = [
    {
      type: 'Regular Checkup',
      duration: '30 minutes',
      price: '₹800',
      color: 'blue',
      features: ['General health assessment', 'Growth monitoring', 'Vaccination updates'],
    },
    {
      type: 'Urgent Consultation',
      duration: '20 minutes',
      price: '₹1200',
      color: 'red',
      features: ['Immediate medical attention', 'Symptom evaluation', 'Treatment plan'],
    },
    {
      type: 'Follow-up Visit',
      duration: '15 minutes',
      price: '₹500',
      color: 'green',
      features: ['Progress monitoring', 'Medication review', 'Recovery assessment'],
    },
    {
      type: 'Telemedicine',
      duration: '25 minutes',
      price: '₹600',
      color: 'purple',
      features: ['Video consultation', 'Digital prescription', 'Health guidance'],
    },
  ];

  return (
    <div className="appointment-section w-full ">
      <div className="appointment-container">
        <motion.div
          className="appointment-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <span className="appointment-badge">
              <i className="fas fa-calendar-alt"></i>
              Book Appointment
            </span>
            <h1 className="appointment-title">Schedule Your Child's Visit</h1>
            <p className="appointment-subtitle">
              Choose a convenient time slot and book your appointment with Dr.smile  .  We're here to provide the best pediatric care for your child.
            </p>
          </div>

          <div className="quick-contact">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <span className="contact-label">Emergency</span>
                <span className="contact-value">+91 888888888</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">clinic.demo@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="appointment-features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {appointmentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="consultation-types"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Consultation Options</h2>
          <div className="consultation-grid">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={index}
                className={`consultation-card ${consultation.color}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="consultation-header">
                  <h3>{consultation.type}</h3>
                  <div className="consultation-price">{consultation.price}</div>
                </div>
                <div className="consultation-duration">
                  <i className="fas fa-clock"></i>
                  {consultation.duration}
                </div>
                <ul className="consultation-features">
                  {consultation.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="booking-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="booking-content">
            <div className="booking-info">
              <h2>Book Your Appointment</h2>
              <p>Select your preferred date and time from the available slots below.</p>

              <div className="booking-benefits">
                <div className="benefit-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Safe & Hygienic Environment</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-user-md"></i>
                  <span>Experienced Pediatrician</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-heart"></i>
                  <span>Child-Friendly Approach</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-certificate"></i>
                  <span>Certified & Licensed</span>
                </div>
              </div>

              <div className="emergency-notice">
                <i className="fas fa-exclamation-triangle"></i>
                <div>
                  <strong>Emergency Cases:</strong>
                  <p>For urgent medical situations, please call directly at +91 888888888 or visit our clinic immediately.</p>
                </div>
              </div>
            </div>

            <div className="calendly-container">
              {!isCalendlyLoaded && (
                <div className="calendly-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading appointment scheduler...</p>
                </div>
              )}
              <div
                id="calendly-inline-widget"
                className="calendly-inline-widget"
                data-url="https://calendly.com/contact-codercamp/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Appointment;