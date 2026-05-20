import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    order: {
      type: Number,
    },

    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Topic", topicSchema);
