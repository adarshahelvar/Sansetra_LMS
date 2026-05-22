import "./CourseDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../api/axios";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await api.get(`/course/${id}`);

      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!course) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={
                course.thumbnail ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
              }
              className="details-image"
              alt="course"
            />
          </div>

          <div className="col-lg-5">
            <div className="details-card">
              <h1>{course.title}</h1>

              <h5>{course.subtitle}</h5>

              <p>{course.description}</p>

              <hr />

              <p>
                Instructor:
                <b>{course.instructor?.name}</b>
              </p>

              <p>
                Level:
                <b>{course.level}</b>
              </p>

              <p>
                Topics:
                <b>{course.topics?.length}</b>
              </p>

              <h2>₹{course.price}</h2>

              <button>Buy Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
