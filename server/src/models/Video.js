import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    videoId: {
      type: String,
    },

    duration: {
      type: Number,
    },

    isFreePreview: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Video", videoSchema);
