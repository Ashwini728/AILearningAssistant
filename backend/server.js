// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/generate-quiz", async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Missing topic" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-pro-latest",
    });

    const prompt = `
Generate a JSON array of 10 multiple choice questions on the topic "${topic}". Each question must include:
- a "question"
- an array of 4 "options"
- a string "answer" (correct one)

Format strictly as JSON array only. Example:
[
  {
    "question": "What is ...?",
    "options": ["A", "B", "C", "D"],
    "answer": "B"
  },
  ...
]
`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    const quiz = JSON.parse(response);
    res.json({ quiz });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Failed to generate quiz." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
