
import { Link } from "react-router-dom";
import { FaUser, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.scss"; // Import the specific styles for Sidebar

const Sidebar = ({ isSidebarOpen, toggleSidebar, handleLogout }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        <h2 className={`sidebar-title ${isSidebarOpen ? "" : "hidden"}`}>Dashboard</h2>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "Collapse" : "Expand"}
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <SidebarItem to="/profile" icon={<FaUser />} label="Profile" isSidebarOpen={isSidebarOpen} />
          <SidebarItem to="/settings" icon={<FaCog />} label="Settings" isSidebarOpen={isSidebarOpen} />
          <SidebarItem to="/notifications" icon={<FaBell />} label="Notifications" isSidebarOpen={isSidebarOpen} />
          <li>
            <button className="sidebar-link" onClick={handleLogout}>
              <FaSignOutAlt />
              <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>Log out</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ to, icon, label, isSidebarOpen }) => (
  <li>
    <Link to={to} className="sidebar-link">
      {icon}
      <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>{label}</span>
    </Link>
  </li>
);

export default Sidebar;
