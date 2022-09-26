import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Beneficiary from "./pages/Beneficiary";
import Donor from "./pages/Donor";
import LandingPage from "./pages/LandingPage";
import Signout from "./pages/auth/Signout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />}>
        </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signout" element={<Signout />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donation" element={<Beneficiary />} />
        <Route path="/donors" element={<Donor />} />
      </Routes>
    </BrowserRouter>
  );
}
