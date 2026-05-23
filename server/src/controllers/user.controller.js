import Progress from "../models/Progress.js";
import asyncHandler from "../utils/asyncHandler.js";
import Enrollment from "../models/Enrollment.js";
import Payment from "../models/Payment.js";
import Course from "../models/Course.js";

export const continueWatching = asyncHandler(async (req, res) => {
  const courses = await Progress.find({
    studentId: req.user._id,
  })

    .populate({
      path: "courseId",

      select: "title thumbnail",
    })

    .populate({
      path: "lastWatchedVideo",

      select: "title",
    });

  res.json({
    courses,
  });
});

export const getProfile = asyncHandler(async (req, res) => {
  res.json(req.user);
});

export const myCourses = asyncHandler(async (req, res) => {
  const courses = await Enrollment.find({
    studentId: req.user._id,
  }).populate({
    path: "courseId",
    populate: {
      path: "instructor",
      select: "name",
    },
  });

  res.json(courses);
});

export const checkEnrollment = asyncHandler(async (req, res) => {
  const enrollment = await Enrollment.findOne({
    studentId: req.user.id,

    courseId: req.params.courseId,
  });

  res.json({
    enrolled: !!enrollment,
  });
});

export const getAdminDashboard = asyncHandler(async (req, res) => {
  const courses = await Course.find({
    instructor: req.user.id,
  });

  const courseIds = courses.map((course) => course._id);

  const totalStudents = await Enrollment.countDocuments({
    courseId: {
      $in: courseIds,
    },
  });

  const payments = await Payment.find({
    courseId: {
      $in: courseIds,
    },
  });

  const totalRevenue = payments.reduce(
    (sum, payment) => sum + (payment.amount || 0),

    0,
  );

  res.json({
    totalCourses: courses.length,

    publishedCourses: courses.filter((c) => c.isPublished).length,

    draftCourses: courses.filter((c) => !c.isPublished).length,

    totalStudents,

    totalRevenue,

    courses,
  });
});
