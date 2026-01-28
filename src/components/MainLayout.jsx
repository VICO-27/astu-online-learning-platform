// src/components/MainLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import LeftProfileCard from "./LeftProfileCard";
import RightSidebar from "./RightSidebar";
import CenterContent from "./CenterContent";
import "../styles/layout.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="layout-container">
        <div className="left-column">
          <LeftProfileCard />
        </div>

        <div className="middle-column">
          <CenterContent />
        </div>

        <div className="right-column">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
