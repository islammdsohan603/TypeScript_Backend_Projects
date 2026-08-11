import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// =========================
// Middleware
// =========================

app.use(cors());
app.use(express.json());

// =========================
// Environment
// =========================

const PORT = process.env.PORT || 8000;

// =========================
// Routes
// =========================

// Home route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully 🚀",
  });
});

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy ❤️",
  });
});

// =========================
// Start Server
// =========================

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
