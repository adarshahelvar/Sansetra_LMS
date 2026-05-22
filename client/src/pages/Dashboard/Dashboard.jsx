import "./Dashboard.css";

import { useEffect, useState } from "react";

import api from "../../api/axios";

import { FaPlayCircle, FaBook } from "react-icons/fa";

function Dashboard() {
  const [myCourses, setMyCourses] = useState([]);

  const [continueWatching, setContinueWatching] = useState([]);

  const [recommended, setRecommended] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const myCourseRes = await api.get("/user/my-courses");

      const continueRes = await api.get("/user/continue-watching");

      const courseRes = await api.get("/courses");

      setMyCourses(myCourseRes.data.courses || []);

      setContinueWatching(continueRes.data.courses || []);

      setRecommended(courseRes.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="container">
        <h2>Welcome Back 👋</h2>

        <p>Continue your SAP learning journey</p>

        {/* Continue Watching */}

        <section>
          <h3>Continue Watching</h3>

          <div className="row">
            {continueWatching.length > 0 ? (
              continueWatching.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="course-progress-card">
                    <div className="course-top">
                      <FaBook />

                      <span>{item.courseId?.title}</span>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      ></div>
                    </div>

                    <div className="course-bottom">
                      <span>{item.percentage}% Completed</span>

                      <button>
                        <FaPlayCircle />
                        Resume
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses in progress</p>
            )}
          </div>
        </section>

        {/* My Courses */}

        <section className="recommended">
          <h3>My Courses</h3>

          <div className="row">
            {myCourses.map((course, index) => (
              <div className="col-lg-4" key={index}>
                <div className="recommended-card">
                  <h4>{course.courseId?.title}</h4>

                  <p>
                    Instructor:
                    {course.courseId?.instructor?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}

        <section className="recommended">
          <h3>Recommended Courses</h3>

          <div className="row">
            {recommended.map((course, index) => (
              <div className="col-lg-4" key={index}>
                <div className="recommended-card">
                  <h4>{course.title}</h4>

                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
