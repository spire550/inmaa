import multer, { diskStorage } from "multer";
import allowedExtensions from "./allowedExtentions.js";

/* export function uploadFileCloud() {
  const storage = diskStorage({});
  const multerUpload = multe    r({ storage });

  return multerUpload;
}
 */
export const uploadFileCloud = ({ extensions = allowedExtensions.image }) => {
  const storage = multer.diskStorage({});

  function fileFilter(req, file, cb) {
    if (extensions.includes(file.mimetype.split("/")[1])) {
      cb(null, true);
    } else {
      cb(new Error("Not Allowed File Type !"), false);
    }
  }

  const file = multer({ fileFilter, storage, limits: { fileSize: 1024 * 1024 * 10 } });

  return file;
};

export default uploadFileCloud;
