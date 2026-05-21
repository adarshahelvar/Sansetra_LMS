import razorpay from "../config/razorpay.js";
import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createOrder = asyncHandler(async (req, res) => {
  const { courseId } = req.body;

  const course = await Course.findById(courseId);

  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  const options = {
    amount: course.price * 100,
    currency: "INR",
    receipt: `course_${course._id}`,
  };

  const order = await razorpay.orders.create(options);

  res.json({
    success: true,
    order,
    course,
  });
});
