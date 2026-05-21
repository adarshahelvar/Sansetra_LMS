import Enrollment from "../models/Enrollment.js";

const enrollmentMiddleware = async (req, res, next) => {
  const courseId = req.params.courseId;
  const enrolled = await Enrollment.findOne({
    studentId: req.user._id,
    courseId,
  });

  if (!enrolled) {
    return res.status(403).json({
      message: "Please purchase course",
    });
  }

  next();
};

export default enrollmentMiddleware;
