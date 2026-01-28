// src/components/LeftProfileCard.jsx
import React from "react";
import "../styles/profilecard.css";

const LeftProfileCard = () => {
  return (
    <div className="left-profile-card">
      <img src="/profile.jpg" alt="Profile" className="profile-img" />
      <h3>Ashenafi Deresa</h3>
      <p>Computer Science Student at ASTU</p>
    </div>
  );
};

export default LeftProfileCard;
