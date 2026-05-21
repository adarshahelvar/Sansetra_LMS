import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import VerifyOTP from "../pages/VerifyOTP/VerifyOTP";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
