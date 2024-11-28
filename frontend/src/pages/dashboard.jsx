import { useState, useCallback, createContext } from "react";
import Sidebar from "./Sidebar.jsx";

const SidebarContext = createContext();

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const sidebarContextValue = {
    isSidebarOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={sidebarContextValue}>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

const Dashboard = () => {
  const handleLogout = useCallback(() => {
    // Implement actual logout logic here
    console.log("Logging out...");
  }, []);

  return (
    <DashboardLayout>
      <div className="top-bar">
        <h1 className="welcome-message">Welcome to the Dashboard!</h1>
        <div className="actions">
          <button className="btn">Action 1</button>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        {/* Dashboard content goes here */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;