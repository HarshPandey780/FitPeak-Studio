import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workout_Sessions from "./components/Workout_Sessions";
import Contact from "./components/Contact";
import BMI_Calculator from "./components/BMI_Calculator";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Workout_Sessions" element={<Workout_Sessions />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BMI_Calculator" element={<BMI_Calculator />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  );
};

export default App;
