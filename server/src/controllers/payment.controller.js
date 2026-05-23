import razorpay from "../config/razorpay.js";
import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";
import crypto from "crypto";
import Payment from "../models/Payment.js";
import Enrollment from "../models/Enrollment.js";

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

export const verifyPayment = asyncHandler(async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
  } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generatedSignature !== razorpay_signature) {
    return res.status(400).json({
      message: "Payment verification failed",
    });
  }

  const studentId = req.user.id;

  console.log("Student:", studentId);

  // await Payment.create({
  //   studentId,
  //   courseId,
  //   orderId: razorpay_order_id,
  //   paymentId: razorpay_payment_id,
  //   signature: razorpay_signature,
  //   status: "success",
  // });
  const course = await Course.findById(courseId);

  await Payment.create({
    studentId: req.user._id,

    courseId,

    amount: course.price,

    orderId: razorpay_order_id,

    paymentId: razorpay_payment_id,

    signature: razorpay_signature,

    status: "success",
  });

  const alreadyEnrolled = await Enrollment.findOne({
    studentId,

    courseId,
  });

  if (!alreadyEnrolled) {
    await Enrollment.create({
      studentId,

      courseId,

      paymentId: razorpay_payment_id,

      status: "active",
    });

    await Course.findByIdAndUpdate(
      courseId,

      {
        $inc: {
          studentsEnrolled: 1,
        },
      },
    );
  }

  res.status(200).json({
    success: true,
    message: "Payment successful and course unlocked",
  });
});
