import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FitPeak Studio</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/Workout_Sessions">Workout Sessions</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/BMI_Calculator">BMI Calculator</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
