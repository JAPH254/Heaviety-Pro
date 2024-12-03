import { Link } from "react-router-dom";
import { FaUser, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./dashboard.scss";

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
          <SidebarLink to="/profile" icon={<FaUser />} label="Profile" isSidebarOpen={isSidebarOpen} />
          <SidebarLink to="/settings" icon={<FaCog />} label="Settings" isSidebarOpen={isSidebarOpen} />
          <SidebarLink to="/notifications" icon={<FaBell />} label="Notifications" isSidebarOpen={isSidebarOpen} />
          <LogoutButton handleLogout={handleLogout} isSidebarOpen={isSidebarOpen} />
        </ul>
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, isSidebarOpen }) => {
  return (
    <li>
      <Link to={to} className="sidebar-link">
        {icon}
        <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>{label}</span>
      </Link>
    </li>
  );
};

const LogoutButton = ({ handleLogout, isSidebarOpen }) => {
  return (
    <li>
      <button className="sidebar-link" onClick={handleLogout}>
        <FaSignOutAlt />
        <span className={`link-text ${isSidebarOpen ? "" : "hidden"}`}>Log out</span>
      </button>
    </li>
  );
};

export default Sidebar;