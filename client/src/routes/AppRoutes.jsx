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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/learn/:courseId" element={<LearnCourse />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/manage-course/:courseId" element={<ManageCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
