import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrueFocus from "../components/Logo";
import LoginButton from "../components/LoginButton";
import Aurora from "../components/Aurora";
import FadeContent from "../components/FadeContent";
import { HeroParallaxDemo } from "../components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <div className="bg-black relative overflow-hidden h-full w-full">
      {/* Background */}
      <div className="absolute  w-full h-full">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={0.2}
          speed={0.5}
        />
      </div>

      {/* NavBar */}
      <div className="relative pt-2 flex items-center justify-center">
        <div className="flex justify-between md:px-3 lg:px-8 rounded-4xl items-center pt-3 md:w-[80vw] lg:w-[60vw] py-3 ">
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

      {/* Hero Section */}
      <div className="m-auto flex flex-col items-center justify-center ">
        {/* Hero Parallax Section */}
        <div className="w-full">
          <HeroParallaxDemo />
        </div>

        <div className="w-full h-full ">
          <div className="text-white mt-5 text-center text-6xl font-bold">Reviews</div>
        <InfiniteMovingCardsDemo/>
      </div>

      <div>
        <Stats/>
      </div>
      </div>

      <div className="relative"><Footer/></div>

    </div>
  );
};

export default Blogs;
