import React, { useEffect, useState } from "react";
import "../styles/profilecard.css";

const profiles = [
  {
    name: "Ashenafi Deresa",
    description:
      "I am Ashenafi Deresa, the author of this website. I am a CSE student at ASTU who loves building real-world web applications, exploring backend systems, and learning how software works deeply from the ground up.",
    img: "../images/profile-pic1.jpg",
  },
  {
    name: "Selam Tadesse",
    description:
      "Selam is a web designer and front-end developer passionate about creating clean, user-friendly interfaces and exploring new design trends.",
    img: "/profile2.jpg",
  },
  {
    name: "Yared Alemu",
    description:
      "Yared is a backend engineer focused on database optimization, server management, and building scalable web systems.",
    img: "/profile3.jpg",
  },
  {
    name: "Mimi Bekele",
    description:
      "Mimi is a full-stack developer with a love for JavaScript and React. She enjoys building apps that solve real-life problems.",
    img: "/profile4.jpg",
  },
  {
    name: "Daniel Hailu",
    description:
      "Daniel is a cybersecurity enthusiast and software engineer who explores vulnerabilities and security best practices for modern applications.",
    img: "/profile5.jpg",
  },
];

const LeftProfileCard = () => {
  const [allHidden, setAllHidden] = useState(false);

  // Auto-hide all cards on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setAllHidden(true);
      else setAllHidden(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hide/Show All Button */}
      <button
        className="profile-toggle-all"
        onClick={() => setAllHidden(!allHidden)}
        aria-label={allHidden ? "Show all profiles" : "Hide all profiles"}
      >
        {allHidden ? "◀" : "×"}
      </button>

      <div className={`left-profile-container ${allHidden ? "hidden" : ""}`}>
        {profiles.map((profile, idx) => (
          <div key={idx} className="left-profile-card">
            <img src={profile.img} alt={profile.name} className="profile-img" />
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-description">{profile.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftProfileCard;
