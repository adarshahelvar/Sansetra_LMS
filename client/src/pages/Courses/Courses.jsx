import "./Courses.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api/axios";

function Courses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/course");

      setCourses(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading Courses...</div>;
  }

  return (
    <div className="courses-page">
      <div className="container">
        <h1>Explore SAP Courses</h1>

        <p>Upgrade your skills with industry-focused SAP programs</p>

        <div className="row">
          {courses.map((course) => (
            <div className="col-lg-4" key={course._id}>
              <div className="course-box">
                <img src={course.thumbnail} alt="" className="course-image" />

                <div className="course-content">
                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <h4>₹{course.price}</h4>

                  <button
                    onClick={() => {
                      navigate(`/course/${course._id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
