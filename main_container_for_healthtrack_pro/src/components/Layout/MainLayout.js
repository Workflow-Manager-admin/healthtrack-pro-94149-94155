import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../UI/NavigationBar';

/**
 * MainLayout component that serves as the main container for the HealthTrack Pro application.
 * It includes the navigation bar and content area where page components are rendered.
 * 
 * PUBLIC_INTERFACE
 */
const MainLayout = () => {
  return (
    <div className="app">
      <header className="header">
        <NavigationBar />
      </header>
      
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} HealthTrack Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
