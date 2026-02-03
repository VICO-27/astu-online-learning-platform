import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/navbar.css";

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
        <img src="/images/astu-logo.png" alt="ASTU Logo" className="astu-logo" />
        <h2 className="logo">ASTU</h2>
      </div>

      {/* Free Courses */}
      <div className="nav-item">Free Courses</div>

      {/* Materials */}
      <div className="nav-item">Materials</div>

      {/* Study Plan */}
      <div className="nav-item">Study Plan</div>

      {/* Projects */}
      <div className="nav-item projects-link">Projects</div>

      {/* Search */}
      <div className="nav-item navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Jump On */}
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

      {/* Profile */}
      <div className="nav-item profile">👤</div>
    </motion.nav>
  );
};

export default Navbar;
