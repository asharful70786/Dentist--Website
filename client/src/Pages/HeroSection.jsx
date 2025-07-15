import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const heroImages = [
  "/Home1.jpg",
  "/heroImg2.jpg",
  "heroImg3.jpg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        heroImages.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
            })
        )
      );
      setImageLoaded(true);
    };
    preload();
  }, []);

  // Change image every 5 seconds
  useEffect(() => {
    if (!imageLoaded) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5s

    return () => clearInterval(interval);
  }, [currentImage, imageLoaded]);

  const scrollToSection = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background image with zoom effect */}
      {imageLoaded && (
        <motion.div
          key={currentImage}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImages[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Gradient overlay */}
    <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />


      {/* Text content */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-16 max-w-4xl text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            Your Smile
          </span>
          <motion.span
            className="block bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent font-light italic mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Our Commitment to Excellence
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg max-w-md leading-relaxed text-gray-100 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          Professional dental care that ensures your comfort and well-being.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 rounded-full font-semibold hover:from-blue-400 hover:to-blue-500 hover:text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            scale: 1.05,
          }}
          whileTap={{ scale: 0.98 }}
        >
          Book an Appointment
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 group cursor-pointer"
        onClick={scrollToSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.span
          className="text-white/70 text-sm group-hover:text-blue-300 transition-colors font-medium mb-2 block text-center tracking-wider uppercase"
          whileHover={{ scale: 1.1 }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          className="w-8 h-14 border-2 border-white/40 group-hover:border-blue-400 rounded-full flex justify-center items-start transition-all duration-500 mx-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            borderColor: "rgb(96, 165, 250)",
            boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
          }}
        >
          <motion.div
            className="w-2 h-2 bg-white/80 group-hover:bg-blue-400 rounded-full mt-2 transition-colors duration-500"
            animate={{ y: [0, 18, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
