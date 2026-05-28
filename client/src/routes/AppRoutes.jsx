import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import VerifyOTP from "../pages/VerifyOTP/VerifyOTP";
import Dashboard from "../pages/Dashboard/Dashboard";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import LearnCourse from "../pages/LearnCourse/LearnCourse";
import AddCourse from "../pages/AddCourse/AddCourse";
import ManageCourse from "../pages/ManageCourse/ManageCourse";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AdminRoute from "../components/ProtectedRoute/AdminRoute";
import NotFound from "../pages/NotFound/NotFound";
import UserProfile from "../pages/UserProfile/UserProfile";
import SAPJobs from "../pages/SAPJobs/SAPJobs";
import Projects from "../pages/Projects/Projects";
import Community from "../pages/Community/Community";
import AboutUs from "../pages/AboutUs/AboutUs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Public Routes */}

          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/verify-otp" element={<VerifyOTP />} />

          {/* Protected Routes */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/courses" element={<Courses />} />

          <Route path="/course/:id" element={<CourseDetails />} />

          <Route
            path="/learn/:courseId"
            element={
              <ProtectedRoute>
                <LearnCourse />
              </ProtectedRoute>
            }
          />

          {/* Admin / Instructor Routes */}

          <Route
            path="/add-course"
            element={
              <AdminRoute>
                <AddCourse />
              </AdminRoute>
            }
          />

          <Route
            path="/manage-course/:courseId"
            element={
              <AdminRoute>
                <ManageCourse />
              </AdminRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/jobs" element={<SAPJobs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
