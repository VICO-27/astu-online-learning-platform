// src/components/Hero.jsx
import { motion } from "framer-motion";
import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span>ASTU Online Learning Platform</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Learn. Practice. Grow. Build your future.
      </motion.p>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓ Scroll Me
      </motion.div>
    </section>
  );
};

export default Hero;
