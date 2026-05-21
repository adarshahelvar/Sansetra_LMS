import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createCourse = asyncHandler(async (req, res) => {
  const { title, subtitle, description, price, thumbnail, level, category } =
    req.body;

  const course = await Course.create({
    title,
    subtitle,
    description,
    price,
    thumbnail,
    level,
    category,

    instructor: req.user._id,
  });

  res.status(201).json({
    message: "Course created",
    course,
  });
});
