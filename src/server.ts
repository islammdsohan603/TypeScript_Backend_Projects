import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import router from "./route";

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

const PORT = Number(process.env.PORT) || 8000;

// =========================
// Routes
// =========================

app.use("/api", router);

// =========================
// Home Route
// =========================

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully 🚀",
  });
});

// =========================
// Health Check
// =========================

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy ❤️",
  });
});

// =========================
// Start Server
// =========================

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
