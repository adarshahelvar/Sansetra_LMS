import Progress from "../models/Progress.js";
import asyncHandler from "../utils/asyncHandler.js";
import Enrollment from "../models/Enrollment.js";

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
