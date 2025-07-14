import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "clinic.demo@gmail.com",
      subtext: "We'll respond within 24 hours",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: FaPhoneAlt,
      label: "Call Us",
      value: "+91 880989980",
      subtext: "Mon-Fri 9AM-6PM",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Visit Us",
      value: "CoderCamp HQ\nNew Goria, Kolkata",
      subtext: "Free parking available",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch("https://doctor-website-server.vercel.app/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitStatus({ success: true, message: data.message || "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else throw new Error(data.message || "Failed to send message");
    } catch (err) {
      setSubmitStatus({ success: false, message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-6 w-full overflow-hidden">
      {/* Background Gradient & Pulses */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your smile? We're here to help you every step of the way.
          </p>
        </motion.div>

        {/* Grid Layout: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a routine checkup, emergency care, or a complete smile makeover,
                our team is ready to provide exceptional dental care tailored to your needs.
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${item.bgColor} backdrop-blur-sm border border-white/20 shadow-xl p-6 rounded-2xl flex gap-5 items-start group hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${item.textColor} uppercase tracking-wide mb-1`}>
                    {item.label}
                  </p>
                  <p className="font-bold text-gray-900 text-lg whitespace-pre-line mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              </motion.div>
            ))}

           
          </div>

          {/* Right - Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                  submitStatus.success 
                    ? "bg-green-50 border border-green-200 text-green-800" 
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {submitStatus.success ? <FaCheckCircle className="text-green-600" /> : <FaExclamationTriangle className="text-red-600" />}
                <span className="font-medium">{submitStatus.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email","phone" ,  "message"].map((field) => (
                <div key={field} className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">
                    {field} {field !== "phone" && "*"}
                  </label>
                  {field !== "message" ? (
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={`Enter your ${field}`}
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors[field]
                          ? "border-red-400 focus:border-red-500"
                          : focusedField === field
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  ) : (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your message"
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors[field]
                          ? "border-red-400 focus:border-red-500"
                          : focusedField === field
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  )}
                  {errors[field] && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center"
                    >
                      <FaExclamationTriangle className="mr-1" size={12} /> {errors[field]}
                    </motion.p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
