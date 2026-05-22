import "./Dashboard.css";

import { FaPlayCircle, FaBook, FaClock } from "react-icons/fa";

function Dashboard() {
  const myCourses = [
    {
      title: "SAP FICO",
      progress: 75,
    },

    {
      title: "SAP HCM",
      progress: 40,
    },

    {
      title: "SAP MM",
      progress: 20,
    },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <h2>Welcome Back 👋</h2>

        <p>Continue your SAP learning journey</p>

        <section>
          <div className="dashboard-title">
            <h3>Continue Watching</h3>
          </div>

          <div className="row">
            {myCourses.map((course, index) => (
              <div className="col-lg-4" key={index}>
                <div className="course-progress-card">
                  <div className="course-top">
                    <FaBook />

                    <span>{course.title}</span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>

                  <div className="course-bottom">
                    <span>{course.progress}% Completed</span>

                    <button>
                      <FaPlayCircle />
                      Resume
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="recommended">
          <h3>Recommended Courses</h3>

          <div className="row">
            <div className="col-lg-4">
              <div className="recommended-card">
                <h4>SAP SD</h4>

                <p>Sales and Distribution</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="recommended-card">
                <h4>SAP HANA</h4>

                <p>Database Platform</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="recommended-card">
                <h4>SAP PP</h4>

                <p>Production Planning</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
