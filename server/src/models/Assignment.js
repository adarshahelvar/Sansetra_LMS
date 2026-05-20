import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    title: String,

    question: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Assignment", assignmentSchema);
