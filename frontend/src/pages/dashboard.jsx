import React, { useState, useCallback } from "react";
import Sidebar from "../pages/Sidebar.jsx";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logging out");
  }, []);

  return (
    <div className="dashboard">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleLogout={handleLogout}
      />
      <div className="main-content">
        <div className="top-bar">
          <h1 className="welcome-message">Welcome to the Dashboard!</h1>
          <div className="actions">
            <button className="btn">Action 1</button>
            <button className="btn">Action 2</button>
          </div>
        </div>
        <div className="dashboard-content">
          {/* Dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
