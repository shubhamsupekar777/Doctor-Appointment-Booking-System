import reportModel from "../models/reportModel.js";

const uploadReport = async (req, res) => {
    try {

        if (!req.file) {
            return res.json({
                success: false,
                message: "No report file uploaded"
            });
        }

        const report = new reportModel({
            userId: req.body.userId,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: req.file.size
        });

        await report.save();

        return res.json({
            success: true,
            message: "Report uploaded successfully",
            report
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: error.message
        });
    }
};

export { uploadReport };