import "./AdminDashboard.css";

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get("/user/admin-dashboard");

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card-box">
            <h5>Courses</h5>

            <h2>{data.totalCourses}</h2>
          </div>

          <div className="card-box">
            <h5>Students</h5>

            <h2>{data.totalStudents}</h2>
          </div>

          <div className="card-box">
            <h5>Published</h5>

            <h2>{data.publishedCourses}</h2>
          </div>

          <div className="card-box">
            <h5>Revenue</h5>

            <h2>₹{data.totalRevenue}</h2>
          </div>
        </div>

        <div className="course-table">
          <h3>My Courses</h3>

          <table>
            <thead>
              <tr>
                <th>Course</th>

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>

                  <td>{course.isPublished ? "Published" : "Draft"}</td>

                  <td>
                    <button
                      onClick={() => {
                        navigate(`/course/${course._id}`);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
