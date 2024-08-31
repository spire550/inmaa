import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const isUser = await userModel.findOne({ email: email.toLowerCase() });
  if (isUser) {
    return next(new Error("Email already exist"));
  }

  const hashedpassword = bcrypt.hashSync(password, 6);

  const user = await userModel.create({
    email,
    password: hashedpassword,
  });

  return res.json({
    success: true,
    message: "user created successfully",
    user,
  });
};
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const isUser = await userModel.findOne({ email });
  if (!isUser) {
    return next(new Error("invalid email or password"));
  }
  const comparePassword = bcrypt.compareSync(password, isUser.password);
  if (!comparePassword) {
    return next(new Error("invalid email or password"));
  }

  return res.json({
    success: true,
    message: "you logged in successfully",
    email,
  });
};
