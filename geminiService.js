const { GoogleGenAI } = require("@google/genai");

const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is not configured");
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
    });

    const response = await 
    ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error.message);
    throw error;
  }
};

module.exports = {
  callGemini,
};