import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import bookRouter from "./route/bookRoute";

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

const PORT = process.env.PORT;

// =========================
// Routes

app.use("/api", bookRouter);

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
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
