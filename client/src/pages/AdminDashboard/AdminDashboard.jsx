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

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/course/delete/${id}`);

      loadDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
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

        <div className="monthly-section">
          <h3>Monthly Revenue</h3>

          <div className="monthly-grid">
            {Object.entries(data.monthlyRevenue).map(([month, value]) => (
              <div key={month} className="month-card">
                <h5>{month}</h5>

                <h2>₹{value}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="course-table">
          <h3>Course Analytics</h3>

          <table>
            <thead>
              <tr>
                <th>Course</th>

                <th>Students</th>

                <th>Status</th>

                <th>Price</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.courseAnalytics.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>

                  <td>{course.students}</td>

                  <td>{course.status}</td>

                  <td>₹{course.price}</td>

                  <td>
                    <button
                      onClick={() => {
                        navigate(`/course/${course._id}`);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => {
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
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
