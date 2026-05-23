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

  const enrollments = await Enrollment.find({
    courseId: {
      $in: courseIds,
    },
  });

  const payments = await Payment.find({
    courseId: {
      $in: courseIds,
    },
  });

  const monthlyRevenue = {};

  payments.forEach((payment) => {
    const month = new Date(payment.createdAt).toLocaleString(
      "default",

      {
        month: "short",
      },
    );

    monthlyRevenue[month] =
      (monthlyRevenue[month] || 0) + (payment.amount || 0);
  });

  const courseAnalytics = courses.map((course) => {
    const students = enrollments.filter(
      (e) => e.courseId.toString() === course._id.toString(),
    );

    return {
      _id: course._id,

      title: course.title,

      students: students.length,

      price: course.price,

      status: course.isPublished ? "Published" : "Draft",
    };
  });

  res.json({
    totalCourses: courses.length,

    publishedCourses: courses.filter((c) => c.isPublished).length,

    draftCourses: courses.filter((c) => !c.isPublished).length,

    totalStudents: enrollments.length,

    totalRevenue: payments.reduce(
      (sum, p) => sum + (p.amount || 0),

      0,
    ),

    monthlyRevenue,

    courseAnalytics,
  });
});
