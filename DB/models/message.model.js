import mongoose, { Schema, Types } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);
const messageModel = mongoose.model("Message", messageSchema);
export default messageModel;
