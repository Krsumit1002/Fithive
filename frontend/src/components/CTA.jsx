import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative bg-transparent py-10 text-white text-center overflow-hidden rounded-3xl mx-4 md:mx-20 my-20 shadow-2xl">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Take the First Step Towards <br /> Your Healthier Self 💪
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10 text-gray-100">
          Join thousands of fitness enthusiasts already using <span className="font-bold">FitHive</span> 
          to track workouts, plan meals, and stay motivated.  
          Your journey starts today!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Start Free Trial
          </button>
          
          <button  className="px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
