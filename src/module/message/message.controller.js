import messageModel from "../../../DB/models/message.model.js";

export const addMessage = async (req, res, next) => {
  const { name, phone, email, subject, message } = req.body;

  const task = await messageModel.create({
    name,
    phone,
    email,
    subject,
    message,
  });

  return res.json({
    success: true,
    message: "Message Sent successfully",
    task,
  });
};

export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await messageModel.find();

    return messages.length
      ? res.json({ success: true, messages })
      : res.json({ success: false, message: "no Messages" });
  } catch (error) {
    return res.json({ success: false, err: error.message });
  }
};
