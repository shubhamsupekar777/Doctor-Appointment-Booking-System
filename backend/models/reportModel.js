import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },

        originalName: {
            type: String,
            required: true
        },

        fileName: {
            type: String,
            required: true
        },

        filePath: {
            type: String,
            required: true
        },

        fileType: {
            type: String,
            required: true
        },

        fileSize: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const reportModel =
    mongoose.models.report ||
    mongoose.model("report", reportSchema);

export default reportModel;