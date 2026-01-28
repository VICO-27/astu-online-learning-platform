// src/components/CourseGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/course.css";

const courses = [
  "HTML Basics",
  "CSS Fundamentals",
  "JavaScript Essentials",
  "React Intro",
  "Python Basics",
  "DSA Level 1",
  "LeetCode Practice",
  "Codeforces Challenges",
  "C++ Advanced",
];

const CourseGrid = () => {
  return (
    <div className="course-grid">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          className="course-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {course}
        </motion.div>
      ))}
    </div>
  );
};

export default CourseGrid;
