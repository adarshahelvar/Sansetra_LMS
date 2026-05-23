import "./AddCourse.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api/axios";

function AddCourse() {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    subtitle: "",
    description: "",
    price: "",
    thumbnail: "",
    level: "beginner",
    category: "",
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/course/create",

        courseData,
      );

      import { toast } from "react-toastify";
      navigate(`/manage-course/${res.data.course._id}`);
    } catch (error) {
      console.log(error);

      toast.error("Failed to create course");
    }
  };

  return (
    <div className="add-course-page">
      <div className="container">
        <div className="course-form-card">
          <h1>Create New Course</h1>

          <p>Create your SAP training course</p>

          <form onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Course Title"
              onChange={handleChange}
            />

            <input
              name="subtitle"
              placeholder="Subtitle"
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              onChange={handleChange}
            />

            <input
              name="thumbnail"
              placeholder="Thumbnail URL"
              onChange={handleChange}
            />

            <input
              name="price"
              placeholder="Price"
              type="number"
              onChange={handleChange}
            />

            <select name="level" onChange={handleChange}>
              <option value="beginner">Beginner</option>

              <option value="intermediate">Intermediate</option>

              <option value="advanced">Advanced</option>
            </select>

            <input
              name="category"
              placeholder="Category"
              onChange={handleChange}
            />

            <button>Create Course</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
