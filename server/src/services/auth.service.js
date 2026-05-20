import User from "../models/User.js";

export const userExists = async (email, phone) => {
  return await User.findOne({
    $or: [{ email }, { phone }],
  });
};
