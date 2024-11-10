import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


mongoose.set('strictQuery', true);


const connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI environment variable is not set!");
        process.exit(1);
    }

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error:", error);
        process.exit(1);
    }
};
export default connectDB;