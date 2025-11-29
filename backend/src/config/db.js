import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL); // no options
    console.log("MongoDB connected successfully!!");
  } catch (error) {
    console.error("MongoDB connection failed 💀", error);
    process.exit(1); 
  }
};

export default connectDB;

