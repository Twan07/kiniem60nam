import { GoogleGenAI } from "@google/genai";

export const polishMemoryContent = async (originalText: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning original text.");
    return originalText;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Bạn là một biên tập viên văn học đầy cảm xúc. Hãy viết lại đoạn ký ức sau đây về trường học để nó trở nên cảm động hơn, chau chuốt hơn nhưng vẫn giữ nguyên ý nghĩa gốc. Giới hạn dưới 100 từ. Ngôn ngữ: Tiếng Việt.
      
      Ký ức gốc: "${originalText}"`,
    });

    return response.text?.trim() || originalText;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return originalText; // Fallback gracefully
  }
};