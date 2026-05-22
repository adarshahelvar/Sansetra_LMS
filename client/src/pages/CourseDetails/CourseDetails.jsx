import "./CourseDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../api/axios";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const navigate = useNavigate();

  const checkEnrollment = async () => {
    try {
      const res = await api.get(`/user/check-enrollment/${id}`);

      setIsEnrolled(res.data.enrolled);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchCourse();
    checkEnrollment();
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

  const handlePurchase = async () => {
    try {
      const res = await api.post(
        "/payment/create-order",

        {
          courseId: id,
        },
      );

      const { order } = res.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: "INR",

        name: "Sansetra LMS",

        description: course.title,

        order_id: order.id,

        handler: async (response) => {
          try {
            await api.post(
              "/payment/verify-payment",

              {
                razorpay_order_id: response.razorpay_order_id,

                razorpay_payment_id: response.razorpay_payment_id,

                razorpay_signature: response.razorpay_signature,

                courseId: id,
              },
            );

            alert("Course purchased successfully");

            navigate("/dashboard");
          } catch (error) {
            console.log(error);
          }
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log(error);
    }
  };

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

              {isEnrolled ? (
                <button
                  className="start-btn"
                  onClick={() => {
                    navigate(`/watch/${id}`);
                  }}
                >
                  Start Course
                </button>
              ) : (
                <button onClick={handlePurchase}>Buy Course</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
