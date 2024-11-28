import { useState, useCallback } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dashboard.scss"; // Import the SCSS file

// Sidebar Component
const Sidebar = ({ isSidebarOpen, toggleSidebar, handleLogout }) => (
  <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
    <div className="sidebar-header">
      <h2 className={`sidebar-title ${isSidebarOpen ? "" : "hidden"}`}>
        Dashboard
      </h2>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? "Collapse" : "Expand"}
      </button>
    </div>
    <nav className="sidebar-nav">
      <ul>
        <li>
          <Link to="/profile" className="sidebar-link">
            <FaUser />
            <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>
              Profile
            </span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            <FaCog />
            <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>
              Settings
            </span>
          </Link>
        </li>
        <li>
          <Link to="/notifications" className="sidebar-link">
            <FaBell />
            <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>
              Notifications
            </span>
          </Link>
        </li>
        <li>
          <button className="sidebar-link" onClick={handleLogout}>
            <FaSignOutAlt />
            <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>
              Log out
            </span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
);

// TopBar Component
const TopBar = () => (
  <div className="top-bar">
    <h1 className="welcome-message">Welcome, User!</h1>
    <div className="actions">
      <button className="btn notification-btn">Notifications</button>
      <button className="btn profile-btn">Profile</button>
    </div>
  </div>
);

// Card Component
const Card = ({ title, children }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <ul className="card-list">{children}</ul>
  </div>
);

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logging out");
    // Add your logout logic here
  }, []);

  return (
    <div className="dashboard">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleLogout={handleLogout}
      />

      <div className="main-content">
        <TopBar />
        <div className="dashboard-content">
          <Card title="User Info">
            <li>
              <strong>Name:</strong> John Doe
            </li>
            <li>
              <strong>Email:</strong> john.doe@example.com
            </li>
            <li>
              <strong>Joined:</strong> January 2023
            </li>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
