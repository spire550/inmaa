import { Router } from "express";
import * as realEstateController from "./realEstate.controller.js";
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
    { name: "sak", maxCount: 1 },
    { name: "family", maxCount: 20 },
    { name: "agency", maxCount: 1 },
    { name: "agent", maxCount: 1 },
  ]),
  asyncHandler(realEstateController.add)
);
router.get("/", asyncHandler(realEstateController.getAllDatawithoutpage));
router.get("/page", asyncHandler(realEstateController.getAllData));
export default router;
