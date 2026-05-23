import "./MyCourses.css";

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function MyCourses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await api.get("/user/my-courses");

      setCourses(res.data.courses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>My Courses</h3>

      <div className="course-grid">
        {courses.map((course) => (
          <div key={course._id} className="my-course-card">
            <img
              src={
                course.thumbnail ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
              }
              alt="course"
            />

            <h3>{course.title}</h3>

            <p>
              Instructor:
              {course.instructor?.name}
            </p>

            <h4>₹{course.price}</h4>

            <button
              onClick={() => {
                navigate(`/learn/${course._id}`);
              }}
            >
              Start Course
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCourses;
