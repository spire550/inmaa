import { Router } from "express";
import { asyncHandler } from "../utils/errorHandler.js";
import * as userController from "./user.controller.js";
const router = Router();

router.post("/signUp", asyncHandler(userController.signUp));
router.post("/signIn", asyncHandler(userController.signIn));

export default router;
