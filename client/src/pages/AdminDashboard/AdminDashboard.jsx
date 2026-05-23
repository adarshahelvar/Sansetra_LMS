import "./AdminDashboard.css";

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);

  const [loadingUsers, setLoadingUsers] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteStep, setDeleteStep] = useState(1);

  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    loadDashboard();
    loadUsers();
    loadPayments();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get("/user/admin-dashboard");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadUsers = async () => {
    try {
      setLoadingUsers(true);

      const res = await api.get("/user/all-users");

      setUsers(res.data.users);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const loadPayments = async () => {
    try {
      const res = await api.get("/user/payment-history");

      setPayments(res.data.payments);
    } catch (err) {
      console.log(err);
    }
  };

  const openRoleModal = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setShowRoleModal(true);
  };

  const changeRole = async () => {
    try {
      await api.put(`/user/change-role/${selectedUser._id}`, {
        role: newRole,
      });

      setShowRoleModal(false);

      loadUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) {
      return;
    }

    try {
      await api.delete(`/user/delete-user/${id}`);

      loadUsers();
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1>Admin Dashboard</h1>

        {/* Cards */}

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

        {/* Monthly Revenue */}

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

        {/* Course Analytics */}

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

        {/* Users */}

        <div className="users-table">
          <h3>Users Management</h3>

          {loadingUsers ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Courses</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.purchasedCourses}</td>

                    <td>
                      <button
                        className="role-btn"
                        onClick={() => {
                          openRoleModal(user);
                        }}
                      >
                        Change Role
                      </button>

                      <button
                        className="user-delete-btn"
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Payments */}

        <div className="payment-table">
          <h3>Payment History</h3>

          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Amount</th>
                <th>Transaction</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.studentId?.name}</td>

                  <td>{payment.courseId?.title}</td>

                  <td>₹{payment.amount}</td>

                  <td>{payment.paymentId}</td>

                  <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
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
