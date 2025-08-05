import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Headers.css";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Industry", path: "/industry" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
  ];

  // ✅ Updated with page paths instead of anchors
  const serviceItems = [
    { name: "Cloud Based BI Services", path: "/services/cloudbi" },
    { name: "Data Integration and Warehousing", path: "/services/dataintegration" },
    { name: "Data Analysis and Visualization", path: "/services/Dataanalysis" },
    { name: "Data Management and Governance", path: "/services/Datamangement" },
    { name: "Corporate Training and Development", path: "/services/corporatetraining" },
    { name: "Application Development", path: "/services/Application" },
      { name: "Timepass", path: "/services/Timepass" },
  ];

  // ✅ Updated to navigate to full page paths
  const handleServiceClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src="/images/image.png" alt="Dataventics" className="logo-img" />
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

      <div className={`nav-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </NavLink>

        {/* ✅ Services Dropdown */}
        <div className="nav-button services-dropdown">
          <span>Services</span>
          <div className="dropdown-content">
            {serviceItems.map((item) => (
              <div
                key={item.path}
                className="dropdown-item"
                onClick={() => handleServiceClick(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Other nav links */}
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
