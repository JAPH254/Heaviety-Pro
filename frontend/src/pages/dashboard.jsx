import { useState, useCallback } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logging out");
    // Add your logout logic here
  }, []);

  // Helper to render the sidebar
  const renderSidebar = () => (
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
          {[
            { to: "/profile", icon: <FaUser />, label: "Profile" },
            { to: "/settings", icon: <FaCog />, label: "Settings" },
            { to: "/notifications", icon: <FaBell />, label: "Notifications" },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <Link to={to} className="sidebar-link">
                {icon}
                <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
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

  // Helper to render a single card
  const renderCard = (title, items) => (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="dashboard">
      {renderSidebar()}
      <div className="main-content">
        <div className="top-bar">
          <h1 className="welcome-message">Welcome, User!</h1>
          <div className="actions">
            <button className="btn notification-btn">Notifications</button>
            <button className="btn profile-btn">Profile</button>
          </div>
        </div>
        <div className="dashboard-content">
          {renderCard("User Info", [
            <strong key="name">Name:</strong>,
            <span key="userName">John Doe</span>,
            <strong key="email">Email:</strong>,
            <span key="userEmail">john.doe@example.com</span>,
            <strong key="joined">Joined:</strong>,
            <span key="joinedDate">January 2023</span>,
          ])}
          {renderCard("Recent Activity", [
            "Posted a new comment on \"Article 1\"",
            "Joined \"Community Group 3\"",
            "Updated profile picture",
          ])}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
