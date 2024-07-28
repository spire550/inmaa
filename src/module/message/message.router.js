import { asyncHandler } from "../utils/errorHandler.js";
import * as messageController from "./message.controller.js";
import { Router } from "express";

const router = Router();
router.post("/addMessage", asyncHandler(messageController.addMessage));
router.get("/", asyncHandler(messageController.getAllMessages));
export default router;
