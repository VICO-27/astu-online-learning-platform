import { motion } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-left">
        <h2 className="logo">ASTU</h2>
      </div>

      <ul className="navbar-links">
        <li>Free Courses</li>
        <li>Materials</li>
        <li>News</li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar-right">
        <button className="jump-btn">Jump On</button>
        <div className="profile">👤</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
