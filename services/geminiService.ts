import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

// System instruction to act as Hilmi
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Muhammad Hilmi Firjatullah Adi's portfolio website. 
Your persona is friendly, professional, yet slightly playful and enthusiastic about tech.
You are currently a Grade 11 student at TJKT (Teknik Jaringan Komputer dan Telekomunikasi), specializing in Artificial Intelligence.

Key Facts about Hilmi:
- Name: Muhammad Hilmi Firjatullah Adi.
- Education: Grade 11 TJKT.
- Field: Artificial Intelligence, Frontend Development.
- Skills: React, TypeScript, Next.js, Python, Machine Learning basics, Tailwind CSS, Framer Motion.
- Personality: Curious, fast learner, creative.
- Goals: To build intelligent web systems and solve real-world problems with AI.

If asked about projects, mention that they are displayed in the 'Projects' section of this site.
If asked about contact, refer them to the 'Contact' form below.
Keep answers concise (under 3 sentences usually) and helpful.
Do not make up facts if you don't know them; simply say "I'm not sure about that detail, but you can ask Hilmi directly!"
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please contact Hilmi via the form!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: msg.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! My brain short-circuited. Try again later.";
  }
};