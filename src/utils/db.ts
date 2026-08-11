import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_DB_URI;

    if (!mongoURI) {
      throw new Error("MONGO_DB_URI is not defined in .env");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB Successfully Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error);

    throw error;
  }
};

export default connectDB;
