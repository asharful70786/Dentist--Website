import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const logo = "/Final LogoRemoved.png";

// /HomepageImg.jpeg
const heroImages = [ "https://images.unsplash.com/photo-1548425064-1e2b83613a29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //  , "https://smileset.com/cdn/shop/files/iStock-1363756807_2560px_CROP.png?v=1735435477&width=1920"
  ];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const loadImages = async () => {
      const promises = heroImages.map(
        src =>
          new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img.src);
          })
      );
      const result = await Promise.all(promises);
      setLoadedImages(result);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!loadedImages.length) return;

    controls.start({ scale: 1.05, transition: { duration: 5, ease: "easeInOut" } });

    const id = setInterval(() => {
      controls.set({ scale: 1 });
      setCurrentImageIndex(prev => (prev + 1) % loadedImages.length);
      controls.start({ scale: 1.05, transition: { duration: 5, ease: "easeInOut" } });
    }, 5000);

    return () => clearInterval(id);
  }, [loadedImages, controls]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Ken Burns Background */}
      {loadedImages.length > 0 && (
        <motion.div
          className="absolute inset-0 z-0"
          animate={controls}
          style={{
            backgroundImage: `url(${loadedImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Hidden image preloading */}
      <div className="hidden">
        {heroImages.map(src => (
          <img key={src} src={src} alt="preload" />
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

    

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-16 max-w-4xl text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Smile,<br />
          <span className="font-light italic">Our Commitment to Excellence</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Professional dental care that ensures your comfort and well-being. Schedule an appointment with us today!
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Book an Appointment
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div> */}


      <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/60 text-xs group-hover:text-white transition-colors font-medium">
            scroll
          </span>
          <motion.div
            className="w-7  h-13     border-2 border-white/30 group-hover:border-lime-400 rounded-full flex justify-center transition-
            colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
    </section>
  );
}
