import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layout/MainLayout';
import Tracking from './pages/Tracking';
import Insights from './pages/Insights';
import Recommendations from './pages/Recommendations';

/**
 * Main App component that sets up routing for the HealthTrack Pro application
 * and provides the main layout structure.
 * 
 * PUBLIC_INTERFACE
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Redirect from root to tracking */}
          <Route index element={<Navigate to="/tracking" replace />} />
          
          {/* Main application routes */}
          <Route path="tracking" element={<Tracking />} />
          <Route path="insights" element={<Insights />} />
          <Route path="recommendations" element={<Recommendations />} />
          
          {/* Fallback route for any undefined paths */}
          <Route path="*" element={<Navigate to="/tracking" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
