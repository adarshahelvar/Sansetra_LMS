import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";
import Topic from "../models/Topic.js";
import Video from "../models/Video.js";

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

export const createTopic = asyncHandler(async (req, res) => {
  const { courseId, title, description, order } = req.body;

  const topic = await Topic.create({
    courseId,
    title,
    description,
    order,
  });

  await Course.findByIdAndUpdate(courseId, {
    $push: {
      topics: topic._id,
    },
  });

  res.status(201).json({
    message: "Topic created",
    topic,
  });
});

export const addVideo = asyncHandler(async (req, res) => {
  const {
    topicId,
    title,
    description,
    videoUrl,
    videoId,
    duration,
    order,
    isFreePreview,
  } = req.body;

  const video = await Video.create({
    topicId,
    title,
    description,
    videoUrl,
    videoId,
    duration,
    order,
    isFreePreview,
  });

  await Topic.findByIdAndUpdate(topicId, {
    $push: {
      videos: video._id,
    },
  });

  res.status(201).json({
    message: "Video added",
    video,
  });
});

export const getCourseDetails = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

    .populate({
      path: "topics",

      options: {
        sort: { order: 1 },
      },

      populate: {
        path: "videos",

        options: {
          sort: { order: 1 },
        },
      },
    })

    .populate("instructor", "name email");

  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  res.json(course);
});

export const publishCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,

    {
      isPublished: true,
    },

    {
      new: true,
    },
  );

  res.json({
    message: "Course published",

    course,
  });
});

export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find().populate("instructor", "name");
  console.log(courses);
  res.json(courses);
});
