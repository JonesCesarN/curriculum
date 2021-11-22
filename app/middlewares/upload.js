const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Image Upload
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./app/public/uploadCurriculum");
  }, // Destination to store image
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    // file.fieldname is name of the field (image), path.extname get the uploaded file extension
  },
});

const upload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

module.exports = { upload };
