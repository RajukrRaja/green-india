import React, { useState } from 'react';
import './Navbar.css';
import { FaLeaf, FaBars, FaTimes, FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [click, setClick] = useState(false); // For toggling the sidebar
  const [darkMode, setDarkMode] = useState(false); // For dark mode toggle
  const [showSearch, setShowSearch] = useState(false); // For toggling search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  const toggleSidebar = () => setClick(!click);
  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleSearchToggle = () => setShowSearch(!showSearch);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <FaLeaf className="logo-icon" />
          Green-India
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleSidebar}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links (Visible on Desktop) */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-links">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact Us</a>
          </li>
          <li className="nav-item">
            <FaSearch className="search-icon" onClick={handleSearchToggle} aria-label="Toggle Search" />
          </li>
          <li className="nav-item">
            <button className="cta-button">Donate Now</button>
          </li>
          <li className="nav-item">
            <button className="dark-mode-icon" onClick={handleDarkModeToggle} aria-label="Toggle Dark Mode">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Search Bar */}
        <div className={`search-bar ${showSearch ? 'visible' : ''}`}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Sidebar */}
      {click && (
        <Sidebar
          isOpen={click}
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
          toggleDarkMode={handleDarkModeToggle}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      )}
    </nav>
  );
};

export default Navbar;
