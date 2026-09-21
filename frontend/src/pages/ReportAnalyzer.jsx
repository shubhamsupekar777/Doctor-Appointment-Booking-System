import React, { useRef, useState } from "react";

const ReportAnalyzer = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/jpg"
        ];

        if (!allowedTypes.includes(selectedFile.type)) {
            alert("Please upload a PDF, JPG or PNG file.");
            return;
        }

        setFile(selectedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        handleFile(e.dataTransfer.files[0]);
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="max-w-5xl mx-auto">

            <div className="mb-7">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Report Analyzer
                </h2>

                <p className="text-gray-500 mt-1">
                    Upload your medical report and get a simple explanation of the results.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Upload Medical Report
                </h3>

                <p className="text-sm text-gray-500 mb-5">
                    Supported formats: PDF, JPG, JPEG and PNG
                </p>

                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition ${
                        dragActive
                            ? "border-[#635BFF] bg-[#F5F6FF]"
                            : "border-gray-300 hover:border-[#635BFF] hover:bg-[#FAFAFF]"
                    }`}
                >
                    <div className="text-5xl mb-4">
                        📄
                    </div>

                    <h4 className="text-lg font-medium text-gray-700">
                        {file ? file.name : "Upload your medical report"}
                    </h4>

                    <p className="text-sm text-gray-500 mt-2">
                        Drag & drop your file here or click to browse
                    </p>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files[0])}
                    />
                </div>

                {file && (
                    <div className="mt-5 flex items-center justify-between p-4 rounded-xl bg-[#F5F6FF] border border-[#E6E9FF]">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#E6E9FF] flex items-center justify-center">
                                📄
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    {file.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={removeFile}
                            className="text-sm text-red-500 hover:text-red-600"
                        >
                            Remove
                        </button>
                    </div>
                )}

                <div className="flex justify-end mt-6">

                    <button
                        disabled={!file}
                        className={`px-6 py-3 rounded-xl font-medium transition ${
                            file
                                ? "bg-[#635BFF] text-white hover:bg-[#5548e8]"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Analyze Report
                    </button>

                </div>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="text-2xl mb-3">🔍</div>
                    <h4 className="font-semibold text-gray-800">
                        Extract Results
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Important information will be extracted from your report.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="text-2xl mb-3">🧠</div>
                    <h4 className="font-semibold text-gray-800">
                        AI Explanation
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Medical terms and results will be explained in simple language.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="text-2xl mb-3">📋</div>
                    <h4 className="font-semibold text-gray-800">
                        Report Summary
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Get a clear summary of the important findings.
                    </p>
                </div>

            </div>

            <p className="text-xs text-gray-400 text-center mt-6">
                This tool is for informational purposes and does not replace professional medical advice.
            </p>

        </div>
    );
};

export default ReportAnalyzer;