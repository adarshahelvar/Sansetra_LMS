import "./AdminDashboard.css";

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [verificationCode, setVerificationCode] = useState("");

  const [userCode, setUserCode] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [deleteStep, setDeleteStep] = useState(1);

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

  const openDeleteModal = (id) => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();

    setVerificationCode(randomCode);

    setSelectedCourse(id);

    setUserCode("");

    setErrorMessage("");

    setDeleteStep(1);

    setShowDeleteModal(true);
  };

  const deleteCourse = async () => {
    if (userCode !== verificationCode) {
      setErrorMessage("Verification code incorrect");

      return;
    }

    try {
      await api.delete(`/course/delete/${selectedCourse}`);

      setShowDeleteModal(false);

      loadDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <div className="loading-screen">Loading...</div>;
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
            {Object.entries(data.monthlyRevenue)

              .map(([month, value]) => (
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
                        openDeleteModal(course._id);
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

        {showDeleteModal && (
          <div className="delete-overlay">
            <div className="delete-modal">
              <h2>Delete Course ⚠️</h2>

              {/* STEP 1 */}

              {deleteStep === 1 && (
                <>
                  <p>Are you sure you want to delete this course?</p>

                  <div className="modal-buttons">
                    <button
                      className="cancel-btn"
                      onClick={() => {
                        setShowDeleteModal(false);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="confirm-delete-btn"
                      onClick={() => {
                        setDeleteStep(2);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

              {/* STEP 2 */}

              {deleteStep === 2 && (
                <>
                  <p>Deleted courses cannot be recovered.</p>

                  <p>Do you still want to continue?</p>

                  <div className="modal-buttons">
                    <button
                      className="cancel-btn"
                      onClick={() => {
                        setShowDeleteModal(false);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="confirm-delete-btn"
                      onClick={() => {
                        setDeleteStep(3);
                      }}
                    >
                      Yes Continue
                    </button>
                  </div>
                </>
              )}

              {/* STEP 3 */}

              {deleteStep === 3 && (
                <>
                  <p>Enter this verification code:</p>

                  <div className="verification-box">{verificationCode}</div>

                  <input
                    placeholder="Enter verification code"
                    value={userCode}
                    onChange={(e) => {
                      setUserCode(e.target.value);
                    }}
                  />

                  {errorMessage && <p className="error-text">{errorMessage}</p>}

                  <div className="modal-buttons">
                    <button
                      className="cancel-btn"
                      onClick={() => {
                        setShowDeleteModal(false);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="confirm-delete-btn"
                      onClick={deleteCourse}
                    >
                      Delete Course
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
