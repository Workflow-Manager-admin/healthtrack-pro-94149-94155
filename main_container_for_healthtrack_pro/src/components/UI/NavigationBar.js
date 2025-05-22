import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * NavigationBar component that provides links to navigate between different sections
 * of the HealthTrack Pro application.
 * 
 * PUBLIC_INTERFACE
 */
const NavigationBar = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <span className="logo-symbol">+</span> HealthTrack Pro
      </div>
      <nav className="nav-links">
        <NavLink 
          to="/tracking" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Tracking
        </NavLink>
        <NavLink 
          to="/insights" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Insights
        </NavLink>
        <NavLink 
          to="/recommendations" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Recommendations
        </NavLink>
      </nav>
      <div className="user-section">
        <button className="btn btn-small">Profile</button>
      </div>
    </div>
  );
};

export default NavigationBar;
