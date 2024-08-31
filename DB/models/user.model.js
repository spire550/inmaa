import mongoose, { Schema, Types } from "mongoose";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

var userModel = mongoose.model("User", userSchema);

export default userModel;
