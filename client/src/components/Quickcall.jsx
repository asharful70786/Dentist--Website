import { useNavigate } from 'react-router-dom';
import { CalendarHeart } from 'lucide-react';
import { motion } from 'framer-motion';

function QuickCall() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-8 max-w-3xl">
        
        {/* Animated Heartbeat Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <CalendarHeart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Need a Quick Consultation?
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 text-lg md:text-xl"
        >
          Our experienced dental team is here to assist you. Book a quick call and get the guidance you need to keep your smile healthy and bright.
        </motion.p>

        {/* CTA Button with Heartbeat Animation */}
        <motion.button
          onClick={() => navigate('/appointment')}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 10px 30px rgba(59, 130, 246, 0.3)",
              "0 15px 40px rgba(59, 130, 246, 0.4)",
              "0 10px 30px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="group inline-flex items-center gap-3 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CalendarHeart className="w-5 h-5" />
          </motion.div>
          BOOK APPOINTMENT
        </motion.button>

      </div>
    </section>
  );
}

export default QuickCall;
