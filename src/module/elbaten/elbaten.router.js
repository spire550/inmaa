import { Router } from "express";
import * as elbatenController from "./elbaten.controller.js";
import { asyncHandler } from "../utils/errorHandler.js";
import { validationMiddleware } from "../../middleware/validation.middleware.js";
import uploadFileCloud from "../utils/multerCloud.js";
import allowedExtensions from "../utils/allowedExtentions.js";
const router = Router();
router.post(
  "/add",
  uploadFileCloud({ extensions: allowedExtensions.image }).fields([
    { name: "owner", maxCount: 1 },
    { name: "client", maxCount: 1 },
    { name: "agent", maxCount: 1 },
  ]),
  asyncHandler(elbatenController.add)
);
router.get("/", asyncHandler(elbatenController.getAllData));
export default router;
