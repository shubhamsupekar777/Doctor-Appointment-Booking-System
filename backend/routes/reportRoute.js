import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import authUser from "../middleware/authUser.js";
import { uploadReport } from "../controllers/reportController.js";

const reportRouter = express.Router();

const uploadPath = "uploads/reports";

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        const fileName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            path.extname(file.originalname);

        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only PDF, JPG and PNG files are allowed"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

reportRouter.post(
    "/upload",
    authUser,
    upload.single("report"),
    uploadReport
);

export default reportRouter;