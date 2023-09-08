import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';             

function App() {
    return (
        <Router>
            <div className = "w-full overflow-x-hidden">
                <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App