import Topic from "../models/Topic.js";

import Course from "../models/Course.js";

import asyncHandler from "../utils/asyncHandler.js";

export const createTopic = asyncHandler(async (req, res) => {
  const { courseId, title } = req.body;

  const topic = await Topic.create({
    courseId,

    title,
  });

  await Course.findByIdAndUpdate(
    courseId,

    {
      $push: {
        topics: topic._id,
      },
    },
  );

  res.status(201).json({
    success: true,

    topic,
  });
});
