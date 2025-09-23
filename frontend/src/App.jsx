import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // fits your design
      />
    </>
  );
};

export default App;
