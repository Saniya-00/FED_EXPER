import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  // Simple state to track authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Router>
      <Routes>
        {/* If not registered, always redirect to signup */}
        <Route
          path="/"
          element={!isRegistered ? <Navigate to="/signup" /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={
            isRegistered
              ? <Navigate to="/login" />
              : <SignupPage onSignup={() => setIsRegistered(true)} />
          }
        />
        <Route
          path="/login"
          element={
            !isRegistered
              ? <Navigate to="/signup" />
              : isAuthenticated
                ? <Navigate to="/user" />
                : <LoginPage onLogin={() => setIsAuthenticated(true)} />
          }
        />
        {/* If not logged in, redirect to login page */}
        <Route
          path="/user"
          element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;