import { useState, useCallback, createContext} from "react";
import Sidebar from "./Sidebar.jsx";

const SidebarContext = createContext();

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    // Implement actual logout logic here
    console.log("Logging out...");
  }, []);

  const sidebarContextValue = {
    isSidebarOpen,
    toggleSidebar,
    handleLogout,
  };

  return (
    <SidebarContext.Provider value={sidebarContextValue}>
      <div className="dashboard">
        <Sidebar />
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
    </SidebarContext.Provider>
  );
};

export default Dashboard;