// src/components/RightSidebar.jsx
import React, { useState } from "react";
import "../styles/sidebar.css";

const RightSidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menu = {
    Home: [],
    "Study Plan": [],
    Programs: ["Applied Science", "Pre Engineering"],
    Colleges: ["Electrical Engineering and Computing", "Mechanic Engineering", "Civil Engineering"],
    Help: [],
  };

  return (
    <div className="right-sidebar">
      {Object.keys(menu).map((item) => (
        <div key={item} className="sidebar-item">
          <div
            className="sidebar-title"
            onClick={() => setActiveMenu(activeMenu === item ? null : item)}
          >
            {item}
          </div>
          {activeMenu === item && menu[item].length > 0 && (
            <div className="sidebar-submenu">
              {menu[item].map((subItem) => (
                <div key={subItem} className="sidebar-subitem">
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
