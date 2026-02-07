import React, { useState, useEffect } from "react";
import "../styles/rightDashboard.css";

const RightDashboard = ({ onToggle }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    onToggle?.(!isHidden);
  }, [isHidden, onToggle]);

  return (
    <>
      {/* Dashboard Panel */}
      <div className={`right-dashboard ${isHidden ? "is-hidden" : ""}`}>
        <button
          className="dashboard-close"
          onClick={() => setIsHidden(true)}
          aria-label="Close dashboard"
        >
          ×
        </button>

        <h3 className="dashboard-title">Dashboard</h3>

        <p className="dashboard-placeholder">
          Dashboard content will be added here later.
        </p>
      </div>

      {/* Reopen Button */}
      {isHidden && (
        <button
          className="dashboard-reopen"
          onClick={() => setIsHidden(false)}
          aria-label="Open dashboard"
        >
          Dashboard
        </button>
      )}
    </>
  );
};

export default RightDashboard;
