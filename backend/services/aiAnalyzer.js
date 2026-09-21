import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const models = [
    "gemini-3.6-flash",
    "gemini-3.7-flash",
    "gemini-3.5-flash",
    "gemini-3.1-flash-lite"
];

const analyzeReport = async (text) => {
    if (!text || text.trim().length < 10) {
        throw new Error("Could not extract enough text from the report");
    }

    const prompt = `
You are a medical report explanation assistant.

Analyze the following medical report and explain the results in simple language.

Rules:
- Do not diagnose diseases.
- Do not prescribe medicines.
- Do not claim certainty about a medical condition.
- Clearly identify abnormal and normal reported values.
- Mention important points the patient should discuss with a qualified doctor.
- If a reference range is provided, use it when interpreting the value.
- Do not invent values that are not present in the report.

Return ONLY valid JSON in this format:

{
  "summary": "",
  "abnormalValues": [],
  "normalValues": [],
  "explanation": "",
  "attentionPoints": [],
  "doctorQuestions": []
}

Medical Report:
${text}
`;

    let lastError;

    for (const model of models) {
        try {
            console.log(`Trying Gemini model: ${model}`);

            const response = await ai.models.generateContent({
                model,
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    temperature: 0.2
                }
            });

            console.log(`Successful model: ${model}`);

            return JSON.parse(response.text);

        } catch (error) {
            lastError = error;

            console.log(
                `Model ${model} failed:`,
                error.status || error.message
            );

            if (error.status !== 503) {
                throw error;
            }
        }
    }

    throw new Error(
        "All Gemini models are temporarily unavailable. Please try again later."
    );
};

export default analyzeReport;