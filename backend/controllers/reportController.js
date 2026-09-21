// import reportModel from "../models/reportModel.js";
// import extractReportText from "../services/reportExtractor.js";

// const uploadReport = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.json({ success: false, message: "No report file uploaded" });
//         }

//         const extractedText = await extractReportText(req.file);

//         const report = await reportModel.create({
//             userId: req.body.userId,
//             originalName: req.file.originalname,
//             fileName: req.file.filename,
//             filePath: req.file.path,
//             fileType: req.file.mimetype,
//             fileSize: req.file.size,
//             extractedText,
//             status: "text_extracted"
//         });

//         res.json({
//             success: true,
//             message: "Report uploaded and text extracted",
//             report
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { uploadReport };



import reportModel from "../models/reportModel.js";
import extractReportText from "../services/reportExtractor.js";
import analyzeReport from "../services/aiAnalyzer.js";

const uploadReport = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ success: false, message: "No report file uploaded" });
        }

        const extractedText = await extractReportText(req.file);

        if (!extractedText) {
            return res.json({ success: false, message: "Could not extract text from report" });
        }

        const analysis = await analyzeReport(extractedText);

        const report = await reportModel.create({
            userId: req.userId,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            extractedText,
            analysis,
            status: "analyzed"
        });

        res.json({
            success: true,
            message: "Report analyzed successfully",
            report
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { uploadReport };