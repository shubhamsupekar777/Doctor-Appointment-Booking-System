import fs from "fs";
import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";

const extractReportText = async (file) => {
    if (file.mimetype === "application/pdf") {
        const parser = new PDFParse({
            data: fs.readFileSync(file.path)
        });

        const result = await parser.getText();
        await parser.destroy();

        return result.text.trim();
    }

    if (file.mimetype.startsWith("image/")) {
        const worker = await createWorker("eng");
        const { data: { text } } = await worker.recognize(file.path);
        await worker.terminate();

        return text.trim();
    }

    throw new Error("Unsupported report format");
};

export default extractReportText;