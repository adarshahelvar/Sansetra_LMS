import Video from "../models/Video.js";

import Topic from "../models/Topic.js";

import asyncHandler from "../utils/asyncHandler.js";

export const createVideo = asyncHandler(async (req, res) => {
  const { topicId, title, description, videoUrl, duration } = req.body;

  const video = await Video.create({
    topicId,

    title,

    description,

    videoUrl,

    duration,
  });

  await Topic.findByIdAndUpdate(
    topicId,

    {
      $push: {
        videos: video._id,
      },
    },
  );

  res.status(201).json({
    success: true,

    video,
  });
});
