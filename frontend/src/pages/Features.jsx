import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrueFocus from "../components/Logo";
import LoginButton from "../components/LoginButton";
import VariableProximity from "../components/VariableProximity";
import MagicBento from "../components/MagicBento";
import Card from "../components/Card";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  return (
    <div>
      <div className="bg-black  relative overflow-hidden h-full w-full">
        {/* NavBar */}
        <div className="relative pt-2 flex items-center justify-center">
          <div className="flex justify-between md:px-3 lg:px-8 rounded-4xl items-center pt-3 md:w-[80vw] lg:w-[60vw] py-3">
            {/* Logo */}
            <div className="text-xl text-red-200">
              <TrueFocus
                sentence="FIT HIVE"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex justify-between gap-4">
              <Link
                className="text-lg font-semibold text-white transition-all glow-hover hover:scale-110 duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-lg font-semibold text-white transition-all glow-hover hover:scale-110 duration-300"
                to="/features"
              >
                Features
              </Link>
              <Link
                className="text-lg font-semibold text-white transition-all glow-hover hover:scale-110 duration-300"
                to="/blogs"
              >
                Blogs
              </Link>
            </div>

            {/* Desktop login */}
            <Link
              className="hidden md:flex text-lg px-3 py-1 rounded-2xl text-blue-200 duration-300 hover:scale-110 hover:shadow-2xl transition-all overflow-hidden"
              to="/login"
            >
              <LoginButton />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-3xl pl-35 transition-all glow-hover duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
              <motion.div
                className="absolute top-16 right-4 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col gap-4 z-40"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Link
                  className="text-white text-lg transition-all glow-hover hover:scale-110 duration-300"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="text-white text-lg transition-all glow-hover hover:scale-110 duration-300"
                  to="/features"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  className="text-white text-lg transition-all glow-hover hover:scale-110 duration-300"
                  to="/blogs"
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
                <div className="h-px w-15 bg-gray-200"></div>
                <Link
                  className="text-lg rounded-lg glow-hover hover:scale-110 duration-300 text-blue-500"
                  to="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="text-white flex flex-col items-center justify-center mt-10 px-2 sm:max-w-[600px] md:max-w-[850px] m-auto lg:max-w-[1200px] relative">
          <div>
            <h2 className="text-6xl items-center font-bold py-5 sm:max-w-[300px] md:max-w-[850px] lg:max-w-[1200px] px-5">
              Why Choose <span className="text-red-900">Fit</span>Hive?
            </h2>
          </div>
          <div
            className="text-3xl mt-3 items-center sm:max-w-[300px] md:max-w-[850px] lg:max-w-[1200px] w-5/6"
            ref={containerRef}
            style={{ position: "relative" }}
          >
            <VariableProximity
              label={
                "All-in-one platform to track workouts, plan meals, and stay motivated."
              }
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-white text-4xl mt-10 mb-10 font-bold uppercase">Benefits</div>
          <div className="mb-20">
            <Card/>
          </div>
        </div>

        {/* Call To Action */}
        <div>
          <CTA/>
        </div>
      </div>
      <div className="relative bg-black"><Footer/></div>
    </div>
  );
};

export default Features;
