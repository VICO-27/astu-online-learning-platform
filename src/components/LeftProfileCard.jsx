import React, { useEffect, useState, useRef } from "react";
import "../styles/profilecard.css";

import profileImg1 from "../images/profile1.png";
import profileImg2 from "../images/profile2.png"; // Make sure files exist in src/images
import profileImg3 from "../images/profile3.png";
import profileImg4 from "../images/profile4.png";
import profileImg5 from "../images/profile5.png";

const profiles = [
  {
    name: "Ashenafi Deresa",
    description:
      "I am Ashenafi Deresa, the author of this website. I am a CSE student at ASTU who loves building real-world web applications, exploring backend systems, and learning how software works deeply from the ground up.",
    // 2. Use the variable name, NOT the string path
    img: profileImg1, 
  },
  {
    name: "Selam Tadesse",
    description:
      "Selam is a web designer and front-end developer passionate about creating clean, user-friendly interfaces and exploring new design trends.",
    img: profileImg2,
  },
  {
    name: "Yared Alemu",
    description:
      "Yared is a backend engineer focused on database optimization, server management, and building scalable web systems.",
    img: profileImg3,
  },
  {
    name: "Mimi Bekele",
    description:
      "Mimi is a full-stack developer with a love for JavaScript and React. She enjoys building apps that solve real-life problems.",
    img: profileImg4,
  },
  {
    name: "Daniel Hailu",
    description:
      "Daniel is a cybersecurity enthusiast and software engineer who explores vulnerabilities and security best practices for modern applications.",
    img: profileImg5,
  },
];


const LeftProfileCard = () => {
  const [allHidden, setAllHidden] = useState(false);
  const [isPaused, setIsPaused] = useState(false); 
  const scrollContainerRef = useRef(null);
  const scrollDirectionRef = useRef(1); // 1 = down, -1 = up
  const scrollPosRef = useRef(0); // High precision scroll tracker

  // Auto-hide on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setAllHidden(true);
      else setAllHidden(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation Logic
  useEffect(() => {
    let animationFrameId;
    
    // CHANGED: Reduced speed significantly (0.2 is very slow)
    const speed = 0.2; 

    const scroll = () => {
      const container = scrollContainerRef.current;

      if (container && !isPaused && !allHidden) {
        const { scrollHeight, clientHeight } = container;
        const maxScroll = scrollHeight - clientHeight;

        if (maxScroll <= 0) return;

        // Update exact position
        scrollPosRef.current += speed * scrollDirectionRef.current;

        // Apply to DOM
        container.scrollTop = scrollPosRef.current;

        // Check bounds to reverse direction
        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current = maxScroll;
          scrollDirectionRef.current = -1; // Go Up
        } else if (scrollPosRef.current <= 0) {
          scrollPosRef.current = 0;
          scrollDirectionRef.current = 1; // Go Down
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, allHidden]);

  return (
    <>
      <button
        className="profile-toggle-all"
        onClick={() => setAllHidden(!allHidden)}
        aria-label={allHidden ? "Show all profiles" : "Hide all profiles"}
      >
        {allHidden ? "◀" : "×"}
      </button>

      <div 
        className={`left-profile-container ${allHidden ? "hidden" : ""}`}
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)} // Pauses immediately on hover
        onMouseLeave={() => {
            setIsPaused(false);
            // Sync ref with current DOM scroll to prevent jump when resuming
            if (scrollContainerRef.current) {
                scrollPosRef.current = scrollContainerRef.current.scrollTop;
            }
        }}
      >
        <div className="scroll-content">
          {profiles.map((profile, idx) => (
            <div key={idx} className="left-profile-card">
              <img src={profile.img} alt={profile.name} className="profile-img" />
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-description">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftProfileCard;