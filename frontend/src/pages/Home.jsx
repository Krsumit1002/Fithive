import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Orb from "../components/Background";
import TrueFocus from "../components/Logo";
import LoginButton from "../components/LoginButton";
import BlurText from "../components/Motivation";
import ScrollFloat from "../components/ScrollFloat";
import ContactButton from "../components/ContactButton";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";

const Home = () => {

  const[loggedInUser,setLoggedInUser]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])
  const [isOpen, setIsOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="bg-black relative overflow-hidden h-full w-full">
      {/* Background */}
      <div
        style={{ width: "100%", height: "600px", position: "absolute" }}
        className="z-0"
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* NavBar */}
      <div className="relative pt-2 flex items-center justify-center">
        <div className="flex justify-between md:px-3 lg:px-8 rounded-4xl items-center pt-3 md:w-[80vw] lg:w-[60vw] py-3">
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
          {loggedInUser ? (
  <button
    onClick={() => {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      setLoggedInUser("");
      navigate("/login");
    }}
    className="hidden md:flex text-lg px-3 py-1 rounded-2xl text-red-400 duration-300 hover:scale-110 hover:shadow-2xl transition-all overflow-hidden"
  >
    Logout
  </button>
) : (
  <Link
    className="hidden md:flex text-lg px-3 py-1 rounded-2xl text-blue-200 duration-300 hover:scale-110 hover:shadow-2xl transition-all overflow-hidden"
    to="/login"
  >
    <LoginButton />
  </Link>
)}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl pl-35 transition-all glow-hover  duration-300"
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
    
    {loggedInUser ? (
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("loggedInUser");
          setLoggedInUser("");
          setIsOpen(false);
          navigate("/login");
        }}
        className="text-lg rounded-lg text-red-400 transition-all glow-hover hover:scale-110 duration-300"
      >
        Logout
      </button>
    ) : (
      <Link
        className="text-lg rounded-lg text-blue-500 transition-all glow-hover hover:scale-110 duration-300"
        to="/login"
        onClick={() => setIsOpen(false)}
      >
        Login
      </Link>
    )}
  </motion.div>
)}

        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-12">
        {/* Hero Quote */}
        <div className="text-white max-w-[400px] md:max-w-[850px] lg:max-w-[1200px] text-center">
          <BlurText
            text="Push yourself, because no one else is going to do it for you.!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-6xl lg:text-8xl mb-8 font-bold mt-10"
          />
        </div>

        {/* About Section */}
        <div className="text-white text-center relative">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            <div className="text-white px-6 sm:px-8 lg:px-12 max-w-[350px] sm:max-w-[500px] md:max-w-[850px] lg:max-w-[1200px] mx-auto text-center">
              <motion.p
                className="text-gray-300 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                FitHive is more than just a fitness platform — it’s a community
                built to help you achieve your health goals. Whether you’re a
                beginner starting your fitness journey or an athlete pushing
                limits, we provide the right tools, motivation, and support to
                help you stay consistent.
              </motion.p>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                From workout tracking and nutrition tips to expert blogs and
                community challenges, FitHive makes fitness accessible, engaging,
                and fun. Our mission is simple:{" "}
                <span className="text-red-500 font-semibold">
                  to empower you to become the best version of yourself
                </span>
                .
              </motion.p>
            </div>
          </ScrollFloat>
        </div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 sm:max-w-[300px] md:max-w-[850px] lg:max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <SpotlightCard
          className="custom-spotlight-card hover:scale-110 duration 300 transition-all p-6 w-full h-[250px] flex flex-col justify-center"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-blue-400 text-2xl pb-2 font-bold">
            Personalized Plans
          </h1>
          <p className="text-white/70 font-semibold">
            Get workout & diet plans tailored to your body goals.
          </p>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard
          className="custom-spotlight-card hover:scale-110 duration 300 transition-all p-6 w-full h-[250px] flex flex-col justify-center"
          spotlightColor="rgba(255, 99, 71, 0.2)"
        >
          <h1 className="text-blue-400 text-2xl pb-2 font-bold">
            AI Fitness Assistant
          </h1>
          <p className="text-white/70 font-semibold">
            Ask questions & track your progress with AI-powered tools.
          </p>
        </SpotlightCard>

        {/* Card 3 */}
        <SpotlightCard
          className="custom-spotlight-card hover:scale-110 duration 300 transition-all p-6 w-full h-[250px] flex flex-col justify-center"
          spotlightColor="rgba(144, 238, 144, 0.2)"
        >
          <h1 className="text-blue-400 text-2xl pb-2 font-bold">24/7 Support</h1>
          <p className="text-white/70 font-semibold">
            Connect with trainers & community anytime for guidance.
          </p>
        </SpotlightCard>
      </motion.div>

      {/* Footer */}
      <div className=" mt-10 flex items-center justify-around mb-5">
        <div>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <button className="px-6 py-3 border border-red-600 text-red-400 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactButton />
        </motion.div>
      </div>

      <div><Footer/></div>
      
    </div>
  );
};

export default Home;
