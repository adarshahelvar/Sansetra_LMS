import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    orderId: {
      type: String,
    },

    paymentId: {
      type: String,
    },

    signature: {
      type: String,
    },

    amount: {
      type: Number,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Payment", paymentSchema);
