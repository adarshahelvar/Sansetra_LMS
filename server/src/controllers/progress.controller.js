import Progress from "../models/Progress.js";
import Video from "../models/Video.js";
import Topic from "../models/Topic.js";
import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";

export const markVideoCompleted = asyncHandler(async (req, res) => {
  const { courseId, videoId } = req.body;

  let progress = await Progress.findOne({
    studentId: req.user._id,
    courseId,
  });

  if (!progress) {
    progress = await Progress.create({
      studentId: req.user._id,
      courseId,
      completedVideos: [],
    });
  }

  if (!progress.completedVideos.includes(videoId)) {
    progress.completedVideos.push(videoId);
  }

  progress.lastWatchedVideo = videoId;

  const course = await Course.findById(courseId).populate({
    path: "topics",
    populate: {
      path: "videos",
    },
  });

  let totalVideos = 0;

  course.topics.forEach((topic) => {
    totalVideos += topic.videos.length;
  });

  progress.percentage = Math.floor(
    (progress.completedVideos.length / totalVideos) * 100,
  );

  await progress.save();

  res.json({
    message: "Progress updated",

    progress,
  });
});

export const getProgress = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const progress = await Progress.findOne({
    studentId: req.user._id,
    courseId,
  })

    .populate("lastWatchedVideo");

  if (!progress) {
    return res.json({
      percentage: 0,

      lastWatchedVideo: null,

      completedVideos: [],
    });
  }

  res.json(progress);
});
