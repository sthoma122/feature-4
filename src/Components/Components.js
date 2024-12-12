import Rating from "./Rating/Rating.js"

import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import AuthModule from "../Services/Auth/Auth.js";
import AuthRegister from "../Services/Auth/AuthRegister";
import AuthLogin from "../Services/Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
        element={<ProtectedRoute path="/rating" element={Rating} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
