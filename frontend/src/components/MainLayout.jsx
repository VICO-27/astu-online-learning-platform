import React, { useState } from "react";
import Navbar from "./Navbar";
import CoursesBar from "./CoursesBar";
import LeftProfileCard from "./LeftProfileCard";
import RightDashboard from "./RightDashboard";
import CenterContent from "./CenterContent";

const MainLayout = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <>
      <Navbar />
      <CoursesBar dashboardOpen={dashboardOpen} />

      <LeftProfileCard />
      <RightDashboard onToggle={setDashboardOpen} />

      <div className="layout-container">
        <div className="middle-column">
          <CenterContent />
        </div>
      </div>
      
    </>
  );
};

export default MainLayout;
