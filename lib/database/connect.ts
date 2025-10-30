import mongoose from "mongoose";

let isConnected = false;

async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DB_URL as string);
    isConnected = true;
  } catch (err: any) {
    console.log(err);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;
