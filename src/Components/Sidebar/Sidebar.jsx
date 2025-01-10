import React, { useState } from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaLeaf, FaBell, FaProjectDiagram, FaBook, FaUserCircle, FaPlus, FaCog, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`}>
      {/* Branding Section */}
      <div className="branding">
        <FaLeaf className="logo" />
        {!isCollapsed && <span className="project-name">Green India</span>}
        <button className="collapse-toggle" onClick={toggleCollapse}>
          {isCollapsed ? '>' : '<'}
        </button>
      </div>

      {/* User Profile Section */}
      <div className="profile">
        <img src="https://rajukrraja.github.io/portofolio-updated/static/media/My%20photo.f213ac54fb21c75de64f.jpg" alt="Profile" className="avatar" />
        {!isCollapsed && (
          <div className="profile-details">
            <h4>John Doe</h4>
            <p>Admin</p>
            <button className="edit-profile">Edit Profile</button>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="menu">
        <ul>
          <li><FaTachometerAlt /> {!isCollapsed && <span>Dashboard</span>}</li>
          <li><FaLeaf /> {!isCollapsed && <span>My Contributions</span>}</li>
          <li><FaProjectDiagram /> {!isCollapsed && <span>Projects</span>}</li>
          <li><FaBook /> {!isCollapsed && <span>Resources</span>}</li>
          <li><FaBell className="notification-icon" /> {!isCollapsed && <span>Notifications</span>}</li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="actions">
        <button className="add-project"><FaPlus /> {!isCollapsed && <span>Add New Project</span>}</button>
        <button className="support"><FaLeaf /> {!isCollapsed && <span>Support Green India</span>}</button>
      </div>

      {/* Utility Features */}
      <div className="utilities">
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
        <div className="settings"><FaCog /> {!isCollapsed && <span>Settings</span>}</div>
        <div className="logout"><FaSignOutAlt /> {!isCollapsed && <span>Logout</span>}</div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        {!isCollapsed && (
          <>
            <p>Contact Us: support@greenindia.org</p>
            <p>Privacy Policy</p>
            <p>Version 1.0.0</p>
          </>
        )}
      </footer>
    </div>
  );
};

export default Sidebar;
