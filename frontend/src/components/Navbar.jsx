import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/navbar.css";

// 1. Assign the import to a variable
import astuLogo from "../images/astu-logo.png"; 

const Navbar = () => {
  const [jumpOpen, setJumpOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ASTU logo + name */}
      <div className="nav-item logo-container">
        {/* 2. Use the variable here */}
        <img src={astuLogo} alt="ASTU Logo" className="astu-logo" />
        <h2 className="logo">ASTU</h2>
      </div>

      <div className="nav-item">Free Courses</div>
      <div className="nav-item">Materials</div>
      <div className="nav-item">Study Plan</div>
      <div className="nav-item projects-link">Projects</div>

      <div className="nav-item navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div
        className="nav-item jump-btn-container"
        onMouseEnter={() => setJumpOpen(true)}
        onMouseLeave={() => setJumpOpen(false)}
      >
        <button className="jump-btn">Jump On</button>
        {jumpOpen && (
          <div className="jump-dropdown">
            <ul>
              <li>Programs</li>
              <li>Colleges</li>
              <li>Departments</li>
              <li>About</li>
              <li>Help</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-item profile">👤</div>
    </motion.nav>
  );
};

export default Navbar;