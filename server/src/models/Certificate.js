import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    certificateUrl: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Certificate", certificateSchema);
