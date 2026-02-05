import React, { useEffect, useState } from "react";
import "../styles/heroAnimation.css";
import spinnerIcon from "../images/profile-pic1.jpg"; // Ensure you have this image

const courses = [
  {
    title: "HTML",
    description: "Structure",
    color: "linear-gradient(135deg, #ef4444, #991b1b)",
  },
  {
    title: "CSS",
    description: "Style",
    color: "linear-gradient(135deg, #f97316, #c2410c)",
  },
  {
    title: "JS",
    description: "Logic",
    color: "linear-gradient(135deg, #eab308, #854d0e)",
  },
  {
    title: "React",
    description: "Components",
    color: "linear-gradient(135deg, #3b82f6, #1e40af)",
  },
  {
    title: "Node",
    description: "Server",
    color: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
  },
  {
    title: "DevOps",
    description: "Deploy",
    color: "linear-gradient(135deg, #10b981, #047857)",
  },
];

const HeroAnimationCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Speed of rotation
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStatus = (index) => {
    const len = courses.length;
    
    // Active Card (Front & Center)
    if (index === activeIndex) return "active";

    // The card that just left (Exiting Up)
    const prevIndex = (activeIndex - 1 + len) % len;
    if (index === prevIndex) return "exiting";

    // Next Card (Waiting in curve pos 1)
    const nextIndex = (activeIndex + 1) % len;
    if (index === nextIndex) return "next-1";

    // Next Next Card (Waiting in curve pos 2)
    const nextNextIndex = (activeIndex + 2) % len;
    if (index === nextNextIndex) return "next-2";

    // Next Next Next (Waiting in curve pos 3)
    const nextNextNextIndex = (activeIndex + 3) % len;
    if (index === nextNextNextIndex) return "next-3";

    return "hidden";
  };

  return (
    <>
      <div className="hero-card">
        {/* Spinner */}
        <div className="spinner">
          <img src={spinnerIcon} alt="Spinner" />
        </div>

        <div className="hero-content-grid">
          {/* LEFT: Static Text */}
          <div className="text-zone">
            <h1 className="welcome-title">
              WELCOME<br />
              <span className="highlight-home">HOME</span><br />
              <span className="highlight-student">STUDENT</span>
            </h1>
            <p className="welcome-subtitle">Your learning journey starts here.</p>
          </div>

          {/* RIGHT: Circular Card Animation */}
          <div className="cards-zone">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className={`course-card ${getCardStatus(index)}`}
                style={{ background: course.color }}
              >
                <div className="card-inner">
                  <h3>{course.title}</h3>
                  <div className="card-line"></div>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
    </>
  );
};

export default HeroAnimationCard;